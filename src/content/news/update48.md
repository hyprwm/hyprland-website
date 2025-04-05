---
title: Hyprland 0.48.0 is now available!
date: 1742743623
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

Hyprland is now 3 years old since 16th March, happy birthday, Hyprland! 🎉

Now, let's get on to this juicy update.

## New stuff

A loot of new stuff has dropped.

### ANR

A new ANR dialog is now available. It requires `hyprland-qtutils`, but at this point I think all the packagers that matter
do package it.

![](https://hyprland.org/imgs/blog/update48/anr.png)

### Various groupbar improvements

Rounding, customizable gaps, height, font size, everything!

![](https://hyprland.org/imgs/blog/update48/groupbar.png)

### Color Management

Thanks to UjinT34's work, we now have full and proper color management. We support the new CM protocol and transform
colors (hopefully) as well as we can.

### Sync fixes

Many, many explicit sync and regular sync improvements. Tons of issues related to lag on nvidia / when high GPU utilisation
have been fixed, and a lot of flicker issues as well.

### Other

Other new features include:
 - new `gnomed` animation style for windows
 - new `pinned` window rule selector
 - new `cyclenext hist` option
 - IPC support for hyprsunset
 - `--hl-url` in hyprpm for a custom hyprland sources URL
 - `flip_x` and `flip_y` for touchpads
 - `follow_mouse_threshold` for waiting before following focus
 - `ext-idle-notify` version 2 support
 - many, many xwayland fixes. `INCR` support for large transfers, dnd improvements, etc.


## Fixes
Tons of fixes under the hood as usual, too many to list. :)

## The raw release

if you are the type that enjoys reading, check the release out on [Github](https://github.com/hyprwm/Hyprland/releases/tag/v0.48.0).

Cheers,
vax.