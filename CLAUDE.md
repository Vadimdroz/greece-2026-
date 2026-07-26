# Claude Code — standing instructions for this repo

## Merging pull requests

Claude may open **and merge** pull requests against `main` without asking
first, provided *all* of the following hold:

- The `CI` workflow (`.github/workflows/ci.yml` — lint, typecheck, build)
  is passing on the PR.
- The PR does not touch `.github/workflows/`, dependency versions in
  `package.json`/`package-lock.json`, `.env*` files, or anything that
  looks like a secret or credential.
- Claude has already run the same checks locally (`npm run lint`,
  `npx tsc -b`, `npm run build`) before opening the PR — CI is a second
  confirmation, not a substitute for checking first.
- After merging, Claude reports what was merged (PR title/link, one-line
  summary) in the conversation.

Merging to `main` triggers an immediate live deploy to GitHub Pages
(`deploy.yml`) — the site the family actually uses on the trip. Prefer a
regular merge commit (matches this repo's existing history) over squash,
so the PR's own commits stay intact.

Anything outside the above scope — CI/workflow changes, dependency
bumps, anything touching secrets, or a PR where CI is failing or isn't
cleanly mergeable — still requires asking first, same as any other
change to shared/production state.

This authorization was given by Vadim on 2026-07-26, specifically so
routine map/data/content PRs (the pattern established building the map
redesign that session) don't need a manual merge step each time. It does
not extend to force-pushes, `git reset --hard`, deleting any branch
other than a PR's own head branch after merge, or any other destructive
operation — those still require asking each time regardless of this file.

## Playbook doc

`docs/HOW_TO_BUILD_A_VACATION_WEBSITE.md` is the maintained pattern doc
this trip app (and future trip apps forked from it) are built from. When
a change here alters a pattern that doc documents (map behavior, data
modeling, etc.), update the relevant section of the doc in the same PR —
see the doc's own note: "when the code disagrees with this guide, the
code wins — but then update this markdown in the same PR."
