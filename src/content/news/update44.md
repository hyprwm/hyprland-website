---
title: Hyprland 0.44.0 is out!
date: 1728213146
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

0.44.0 is finally upon us!

This update mostly focuses on further bugfixes over actually implementing new stuff,
but we have quite a bunch of both!

When it comes to new stuff, we have, amongst others:

- A new argument `--version` for checking the Hyprland binary's version instead of `hyprctl version`
- Same spirit as above, `--systeminfo`.
- A new layerrule `order` for ordering layers on the same plane
- A new `HYPRLAND_CONFIG` envvar for another method of passing an explicit config instead of `--config`
- Dwindle has got some new stuff: `movetoroot` layout message and `split_bias` config option
- Layout-general, auto-grouping is now configurable
- hyprctl has some new stuff, a few more props to `monitors` and `workspacerules` requests, and a new `submap` request.
- A new user-check for the `XDG_CURRENT_DESKTOP` env has been added as Hyprland no longer overwrites it
- Implemented the single-pixel-buffer protocol

For fixes, notable ones include:

- Various fixes to surface UV and positioning calculations: chromium windows no longer go crazy when resizing, and resizing other apps should generally feel much smoother
- Various text-input fixes for IME users
- XWayland handling fixes for monitors being misplaced and input not translating correctly after monitors were unplugged / replugged.
- Some drag-n-drop edge cases have been fixed
- Initial cursor warping has been fixed
- Various crashes fixed
- Lots of cleanups of the underlying codebase :)

Generally, this update shouldn't impact you negatively, and only polish some rough edges.

See the full release notes on [Github](https://github.com/hyprwm/Hyprland/releases/tag/v0.44.0).

Cheers, vax.
