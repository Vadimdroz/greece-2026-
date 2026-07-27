/** Cross-device sync for checklist "done" state via Firebase Realtime
 *  Database's public REST API — plain `fetch` for writes and the native
 *  browser `EventSource` for a live subscription (Firebase's documented SSE
 *  streaming format), so no Firebase SDK dependency is needed. Writes are
 *  optimistic: local state + localStorage update immediately, the network
 *  write happens in the background and is queued for retry if it fails
 *  (spotty trip wifi). See docs/HOW_TO_BUILD_A_VACATION_WEBSITE.md, "Lists"
 *  section, for the rationale and setup steps (this is the one deliberate
 *  exception to the app's "no backend" rule). */

const DB_URL = "https://wishlist-app-5ca53-default-rtdb.firebaseio.com";
const REMOTE_PATH = "checklists/greece-2026";
const STORAGE_KEY = "tuscany-checklist-v1";
const PENDING_KEY = "tuscany-checklist-pending-v1";

type Checked = Record<string, boolean>;

export function loadLocalChecked(): Checked {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveLocalChecked(checked: Checked) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  } catch {
    /* ignore */
  }
}

function loadPending(): Checked {
  try {
    return JSON.parse(localStorage.getItem(PENDING_KEY) || "{}");
  } catch {
    return {};
  }
}

function savePending(pending: Checked) {
  try {
    localStorage.setItem(PENDING_KEY, JSON.stringify(pending));
  } catch {
    /* ignore */
  }
}

function putRemote(id: string, value: boolean): Promise<boolean> {
  return fetch(`${DB_URL}/${REMOTE_PATH}/${encodeURIComponent(id)}.json`, {
    method: "PUT",
    body: JSON.stringify(value)
  })
    .then(res => res.ok)
    .catch(() => false);
}

async function flushPending() {
  const pending = loadPending();
  const ids = Object.keys(pending);
  if (ids.length === 0) return;
  const stillPending: Checked = {};
  for (const id of ids) {
    const ok = await putRemote(id, pending[id]);
    if (!ok) stillPending[id] = pending[id];
  }
  savePending(stillPending);
}

/** Subscribes to remote changes and calls `onRemoteUpdate` with the full
 *  checked-state map on every server push, including the initial snapshot
 *  on connect. Reconnects automatically (native EventSource behavior) and
 *  flushes any queued offline writes on each (re)connect. Returns an
 *  unsubscribe function. */
export function subscribeChecklist(onRemoteUpdate: (checked: Checked) => void): () => void {
  let snapshot: Checked = {};
  const es = new EventSource(`${DB_URL}/${REMOTE_PATH}.json`);

  es.addEventListener("put", (e: MessageEvent) => {
    const { path, data } = JSON.parse(e.data) as { path: string; data: unknown };
    if (path === "/") {
      snapshot = data && typeof data === "object" ? (data as Checked) : {};
    } else {
      const id = path.slice(1);
      snapshot = { ...snapshot };
      if (data === null) delete snapshot[id];
      else snapshot[id] = data as boolean;
    }
    saveLocalChecked(snapshot);
    onRemoteUpdate(snapshot);
  });

  es.addEventListener("patch", (e: MessageEvent) => {
    const { path, data } = JSON.parse(e.data) as { path: string; data: Checked };
    snapshot = path === "/" ? { ...snapshot, ...data } : snapshot;
    saveLocalChecked(snapshot);
    onRemoteUpdate(snapshot);
  });

  es.onopen = () => {
    void flushPending();
  };

  return () => es.close();
}

/** Optimistically records one item's done-state: local + localStorage
 *  update is immediate (caller handles local React state), then the write
 *  is pushed to the server in the background, queued for retry if offline. */
export function writeChecklistItem(id: string, value: boolean): void {
  const local = loadLocalChecked();
  local[id] = value;
  saveLocalChecked(local);

  putRemote(id, value).then(ok => {
    if (ok) return;
    const pending = loadPending();
    pending[id] = value;
    savePending(pending);
  });
}
