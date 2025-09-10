---
title: Hyprland 0.51 dropped!
date: 1757508885
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

Hey hey people, vaxry here. It's time for a new Hyprland update, after 2 months or so.

## Breaking changes

- The gesture system has been reworked and is now way more flexible. Thus, the old `gestures:workspace_swipe`,
`gestures:workspace_swipe_fingers` and `gestures:workspace_swipe_min_fingers` are gone.

- `animations:first_launch_animation` is gone, use the new `monitorAdded` animation leaf.

## New stuff

A bunch of new stuff has landed. Some highlights include:

### Reworked trackpad gestures

You can now set new 1:1 gestures for fingers, modifiers and directions. For example, you can have a pinch gesture with 3 fingers close your
windows, while a horizontal swipe swipes your workspaces, while a vertical swipe pulls up a special workspace.
Possibilities are endless!

Check the new [gestures wiki page](https://wiki.hypr.land/Configuring/Gestures/) for more.

### Other

- New `dim_modal` config option for controlling the dimming of parent windows with a modal dialog
- New `hyprctl getprop` option
- `scroll_factor` can now be set in per-device configs
- master: new `ignoremaster` with `swapwithmaster`, new `previous` mode for `focusmaster`
- New `cursor:invisible` option to hide the cursor altogether
- New dpms animations
- Wayland-native popups now have fade in/out animations
- Screensharing now forces 8-bit by default (fixes chromium / firefox screensharing on wide color gamut displays)
- New `novrr` windowrule.


## Fixes

Tons of fixes as usual:

- Fixed xwayland games blacking out forever in some cases
- Fixed workspace persistence tracking
- Fixed bad json in `hyprctl descriptions`
- Fixed crashes for invalid monitor modes
- Fixed screensharing colors with wide color gamuts
- Improved UV calculations for smoother animations of slow surfaces
- Fixed invalid workspaces in `openwindow` on socket2
- Fixed windows' decorations disappearing if main surface was offscreen
- Tons more!

## The raw release

If you are one of these people that enjoy reading, check the release on [Github](https://github.com/hyprwm/Hyprland/releases/tag/v0.51.0).

Cheers,
vax