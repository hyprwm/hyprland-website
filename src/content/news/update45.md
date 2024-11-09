---
title: Hyprland 0.45.0 has dropped!
date: 1731163477
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

After a while, we finally got 0.45.0! This release comes with a _lot_ of new stuff and improvements, while also, as always,
squashing a few dozen bugs.

## Breaking changes

Some stuff has changed. `no_gaps_when_only` is now gone in favor of workspace rules. See [here](https://wiki.hyprland.org/Configuring/Workspace-Rules/#smart-gaps).

This has some advantages on the code side (less clutter and bugs), but also for the user: the layout provider no longer needs to implement this, as it's layout-agnostic.

Additionally, `decoration:shadow_` stuff has moved, see [here](https://wiki.hyprland.org/Configuring/Variables/#shadow) for the new names.

## New stuff

 - improved the algorithm used to round edges. Rounded corners, borders, rectangles, should all now be considerably smoother.
 - improved default behavior for hardware cursors on nvidia. They will now be automatically disabled by default as they are buggy. (I am planning to try and fix them altogether in 0.46)
 - groups got a few new stuff like `group_on_movetoworkspace`, `merge_groups_on_groupbar`, `drag_into_group`, `merge_floated_into_tiled_on_groupbar`.
 - `hyprland-ctm-control` is now supported, meaning `hyprsunset` will work.
 - Hyprland will now warn you if you have incorrectly installed assets instead of quietly failing and rendering black.
 - Window snapping for floating windows has been added.
 - The default behavior of expanding undersized textures introduced in 0.44.0 is now configurable with `expand_undersized_textures`
 - shadow now has a `sharp` option for no blur.
 - hyprctl got a few new props for keyboard's locked mod state(s) and monitors' mirror status
 - the hyprland config error bar will now reserve space instead of obstructing vision

## Fixes

As always, tons and tons of fixes. See the github release to read up more.

## Additional releases

 - aquamarine v0.4.4 released: [Github](https://github.com/hyprwm/aquamarine/releases/tag/v0.4.4)
 - hyprutils v0.2.4 released: [Github](https://github.com/hyprwm/hyprutils/releases/tag/v0.2.4)
 - hyprsunset v0.1.0 released: [Github](https://github.com/hyprwm/hyprsunset/releases/tag/v0.1.0)

### Links

See the 0.45.0 release on Github: [https://github.com/hyprwm/Hyprland/releases/tag/v0.45.0](https://github.com/hyprwm/Hyprland/releases/tag/v0.45.0)
