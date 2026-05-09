---
title: Hyprland 0.55 is here and you don't want to miss it!
date: 1778332262
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

After quite a long while, Hyprland 0.55 is upon us! This is an enormous update by each
measurable metric - commits, contributors, features and changes.

## Highlights

With 0.55, there are tons of changes, let's bring the highlights first.

### Lua configs

As we've [announced a while back](https://hypr.land/news/26_lua/), the Hyprland config is now done in
Lua. This does not mean your hyprlang config is now broken - it will still work, for a few releases.

The entire wiki has been updated to reflect new Lua configs and you are encouraged to migrate over
to Lua.

### User-defined layouts

With Lua, we've also added a Layout API for you to define your own layouts directly in the config. Those
layouts can be set globally, per-workspace, per-monitor, etc. and behave just like regular layouts,
except fully controlled by you.

<video src="https://hypr.land/imgs/blog/update55/spiralShowcase.mp4" autoplay muted controls loop/>

### Various scrolling improvements

Scrolling now supports fullscreen windows as part of the tape by default:

<video src="https://hypr.land/imgs/blog/update55/scrollShowcase.mp4" autoplay muted controls loop/>

As well as a native trackpad gesture via `scroll_move` in lua.

### ICC Profiles

You can now load an ICC profile per-output in your config via `icc = "..path.."` in your config for
color accuracy.

### Renderer and CM improvements

Hyprland will now use FP16 precision and improved CM pipelines by default for Color Managed displays.
This helps with color accuracy, screensharing, and various color-related things.

### Breaking changes

A few config option updates:

- `dwindle:pseudotile` has been removed as it wasn't doing anything
- `decoration:shadow:ignore_window` has been removed (defaults to enabled)
- `render:cm_fs_passthrough` has been removed, should be automatic with `render:cm_auto_hdr`
- `misc:vfr` moved to `debug:` as it's a debug variable that should not be changed in prod environments

## New stuff and fixes

As usual, tons of goodies:

- A bunch of scrolling goodies: `expel`, `consume`, `consume_or_expel`, wrapping options, and so on.
- A new `auto_consuming` flag for binds
- Device tags
- `confine_pointer` window rule
- `move_into_or_create_group` for the move dispatcher
- `rotatesplit` layoutmsg for dwindle
- A new live pinch cursor zoom trackpad gesture
- A new glow decoration for windows
- And much more...

And the usual fixes, way too many to list...

## The raw release

As always, if you prefer reading more, check the release on [Github](https://github.com/hyprwm/Hyprland/releases/tag/v0.55.0).

Cheers,
vax
