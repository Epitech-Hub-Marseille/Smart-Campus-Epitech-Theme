# Epitech theme

A theme for SmartCampus in the Epitech intranet style: Epitech blue as the only accent, square corners, a dotted
light-gray page, white cards with a coloured top bar, condensed uppercase titles ending in an underscore, outlined
monospace tags.

- `epitech.css`: the CSS for the Faculty screens (door units ignore it). This is the file to edit.
- `build-theme.mjs`: holds the tokens and the font names, and rebuilds `theme.json` from `epitech.css`.
  Run `node epitech-theme/build-theme.mjs`.
- `theme.json`: the theme alone. `epitech-theme.zip`: the theme with its fonts, the file to import.
- `fonts/`: the three font files the theme names (SIL Open Font License 1.1).

| Slot | Font | Used for |
| --- | --- | --- |
| body | IBM Plex Sans | all text |
| heading | Anton | titles on the Faculty screens, room name and status on the door unit |
| mono | IBM Plex Mono | tags, times, codes |

## Use it

Console, Themes, Import ZIP, choose `epitech-theme.zip`. The theme is created and the three fonts go into the font library
in one step (importing it again reuses the fonts and offers to replace the theme with a new version). Then assign it to a
device, a group, or as the default for a kind (door or display).

`epitech-theme.zip` holds `theme.json` and `fonts/`; rebuild it with `node epitech-theme/build-theme.mjs` (needs `zip`).
Importing `theme.json` alone also works if the three fonts are already in the library under the same names.

## Limits

- One file per slot, so there is a single weight of each family. Bold is not faked: `font-synthesis` is off in the CSS.
- The CSS is checked against the theme rules (no `url()`, `@import`, `@font-face`, escapes or `<`), so the
  `< LABEL />` brackets of the intranet are replaced by a trailing underscore.
- The fonts are TrueType files, because door units (Android) cannot read WOFF or WOFF2, which only the Faculty screens can.
  IBM Plex Sans is the variable font; a door unit draws its regular weight.
- The selectors are the classes of the Faculty screen page (`SmartCampus-FacultyScreens`, `apps/display/src/styles.css`). If that page
  is restyled, adjust `epitech.css`.

## License

Released under the [PolyForm Noncommercial License 1.0.0](LICENSE). You may use, modify and share the
software for any noncommercial purpose; commercial use, including selling it, is not permitted.
This is a source-available license, not an open-source one.
