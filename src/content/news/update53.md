---
title: Hyprland 0.53 dropped!
date: 1767023859
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

Hello there everyone! It's time for 0.53!

This is a large update with a lot of things, and a few breaking changes.

## Breaking changes

Just two, but one big:

- Windowrule syntax has been completely overhauled. Please check the wiki: [here](https://wiki.hypr.land/Configuring/Window-Rules/)
- `misc:on_focus_under_fullscreen` replaces `misc:new_window_takes_over_fullscreen` and `master:inherit_fullscreen`

All of your windowrules will need to be re-written for the new syntax.

## Major new stuff

### start-hyprland

Hyprland should no longer be launched via `Hyprland`, but rather `start-hyprland`. The new wrapper provides crash recovery and safe mode.

Important note for packagers: _safe mode will be quite a PITA without hyprland-guiutils installed, really consider it a hard dep_.

### Welcome

There is a new welcome app that introduces you to Hyprland if you're launching for the first time. This requires hyprland-guiutils to be installed, and thus (as usual) we highly recommend packagers add hyprland-guiutils to hard deps of Hyprland.

### hyprpaper

Hyprpaper has been moved to hyprtoolkit + hyprwire with 0.8.0, which changes its IPC protocol. If you update hyprland to 0.53, make _sure_ to update
hyprpaper to 0.8.0 as well. Please also note 0.8.0 breaks configs. Check the [wiki](https://wiki.hypr.land/Hypr-Ecosystem/hyprpaper/) for the new, simplified syntax.

### Other

- new universal submap bind flag
- new localization frameworks (translations) for GUI elements
- added an option to hide the cursor after tablet input
- groupbar can now be blurred
- hyprpm can now distinguish plugins with the same name but different author
- various CM/HDR fixes
- and a bunch more

## Fixes

Tons of fixes as always, in no particular order:
- pending keyboards are no longer enabled by default
- various focus and reserved area fixes
- fixed matching xdg tags
- improved uv scaling calculations for scales below 1
- improved ABI checks for plugins (less crashing)
- your classic "stability and performance improvements"

## The raw release

As always, if you prefer reading more, check the release on [Github](https://github.com/hyprwm/Hyprland/releases/tag/v0.53.0).

Cheers,
vax

### Additional releases

- hyprpaper [0.8.0](https://github.com/hyprwm/hyprpaper/releases/tag/v0.8.0)
- hyprland-guiutils [0.2.1](https://github.com/hyprwm/hyprland-guiutils/releases/tag/v0.2.1)
- hyprtoolkit [0.5.0](https://github.com/hyprwm/hyprtoolkit/releases/tag/v0.5.0)
