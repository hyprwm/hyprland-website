---
title: Hyprland 0.49.0 dropped!
date: 1746735354
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

After about 2 or so months, we got 0.49.0!

A lot of changes in this update as usual, let's do a quick summary.

## Breaking changes

A few breaking changes this time:

- `cursor:warp_on_change_workspace` no longer controls warps for special workspaces. Use `warp_on_toggle_special` for more fine control.
- `master:center_master_slaves_on_right` has been changed to `master:center_master_fallback` providing more options than just right.
- you'll now need to input your sudo password for sensitive hyprpm operations. Due to that change your repositories and enabled plugins will be reset.

## New stuff

### Permission management

Previously, (and in every other wayland compositor to this day) any app on your system
would be able to record and screenshot your screen without any permissions. This would be doable by directly
using the wayland protocols instead of the portal.

No more.

With permission management, both that, and other sensitive actions are now guarded by permissions, where you
can specify which apps can do what, and if you don't, you'll get an android / iOS / MacOS style popup asking you
for confirmation.

**Permission management is disabled by default for now**, read up more about it on [the wiki](https://wiki.hypr.land/Configuring/Permissions/).

### New protocols

Some new protocols are now supported in Hyprland, including `xdg-system-bell` and `xdg-toplevel-tag`.

### Other new changes

Other new stuff include:

- keybinds can now be disabled per-device
- ANR's missed pings (delay) is now configurable
- you can now bind click and drag actions separately with your mouse
- groupbar got some new stuff: font weight, gaps, text offset, etc.
- a few new socket2 events: monitorremovedv2, minimized
- new windowrules: `nofollowmouse` and `noclosefor`
- and more

## Fixes

As usual, tons of fixes for crashes, bugs, etc.

## The raw release

if you are the type that enjoys reading, check the release out on [Github](https://github.com/hyprwm/Hyprland/releases/tag/v0.49.0).

Cheers,
vax.
