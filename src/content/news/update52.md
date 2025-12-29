---
title: Hyprland 0.52 out now!
date: 1762538259
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

Hi fam, another Hyprland update time! There hasn’t been an update in a while, but we back.

Work is also focused a bit on improving our new [hyprtoolkit](https://github.com/hyprwm/hyprtoolkit) which will power all hyprland gui apps in the future.

Anyways, hyprland.

## Breaking changes

`misc:disable_hyprland_qtutils_check` has been moved to `misc:disable_hyprland_guiutils_check` to reflect qtutils being now archived in favor of guiutils.

## New stuff

Tons of new stuff dropped:

 - you can now mark submaps as automatically closing after a keybind has been executed
 - new dispatcher: forceidle
 - fullscreen now has set, unset and toggle for less IPC queries
 - new CM options: dcip3, dp3 and adobe
 - you can now set rotation for each input device that supports it
 - noscreenshare now also available as a layerrule
 - cursor:zoom_disable_aa for controlling whether you want a pixelated or blurry look when zooming into your cursor
 - new modal prop for windowrules
 - and much more!

## Fixes

Tons of fixes, some notable include:

 - various improvements to rendering: more smooth surface resizes, damage fixes and some pixel-level improvements
 - fixes to screencopy for 10b displays
 - various crashes fixed
 - function hook fixes for plugin crashes
 - gesture fixes for a few config options being badly parsed
 - various virtual keyboard (IME) fixes
 - fixed slide/slidefade not accepting forced dirs
 - fixed a rare dpms lockup state where monitors would not come back to life
 - fixed a case where plugins could crash due to ABI breaks in deps
 - fixed some wonky XWayland DnD edge cases
 - tons more, as always

## The raw release

If you are one of these people that enjoy reading, check the release on [Github](https://github.com/hyprwm/Hyprland/releases/tag/v0.52.0).

Cheers, vax