# Contributing to the Epitech theme

Thank you for helping. This is a visual theme for Smart Campus in the Epitech intranet style, imported from the console
(Themes, Import ZIP).

## Where to change what

- `epitech.css` is the file to edit: CSS for the Faculty screens (door units ignore it).
- `build-theme.mjs` holds the tokens and font names and rebuilds `theme.json` from the CSS.
- `epitech-theme.zip` is the file users import. Rebuild it after every change: `node build-theme.mjs` (needs `zip`).
  Commit the rebuilt `theme.json` and ZIP together with the CSS.

## Rules the theme must respect

The CSS is checked by the server: no `url()`, `@import`, `@font-face`, escapes or `<`. The selectors are the classes of the
Faculty screen page (`apps/display/src/styles.css` in [Smart-Campus-Faculty-Screens](https://github.com/Epitech-Hub-Marseille/Smart-Campus-Faculty-Screens)); if that page is restyled, adjust the CSS.
Fonts must be TrueType (door units cannot read WOFF) and one file per slot. Only add fonts whose licence allows redistribution, and say which in the PR.

## Check your work

Import the rebuilt ZIP into a dev console, assign it to a Faculty screen, and attach a screenshot at 1920x1080 to the PR.
Say what you could not check.

Commit scopes: `theme`, `fonts`, `docs`.

## Commits and pull requests

- Branch from `main`: `<type>/<short-kebab-description>`, for example `feat/live-announcement`. Never push to `main` directly.
- [Conventional Commits](https://www.conventionalcommits.org/) for every commit and PR title: `<type>(<scope>): <subject>`. Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`. Subject in the imperative, lowercase start, no trailing period, 72 characters at most.
- One logical change per commit. Do not mix a refactor with a behaviour change.
- Explain *why* in the body when it is not obvious. Link issues with `Closes #12` or `Refs #7`.
- A PR says what changed and why, how you verified it, and what you could not verify (sound, real hardware, a browser). Keep it small enough to review.
- `main` is protected: a PR needs one approving review.

## Security

Never commit secrets: `.env` files, private keys, certificates, tokens. Only `.env.example` is tracked. Never log or return passwords, hashes, session tokens or key material. To report a vulnerability, do not open a public issue: use the repository's **Security** tab (private vulnerability reporting) or contact a maintainer privately.

## Licence of your contribution

This project is released under the [PolyForm Noncommercial License 1.0.0](LICENSE). By opening a pull request you agree that your contribution is licensed under the same terms.

## Conduct

Everyone taking part follows the [Code of Conduct](CODE_OF_CONDUCT.md).

