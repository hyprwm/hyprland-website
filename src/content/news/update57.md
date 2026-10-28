---
title: Hyprland 0.57 is finally here!
date: 1793184239
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

Hello hello! Hyprland 0.57 is finally released, bringing tons of new features and bug fixes. It's been a bit of a wait, but hopefully
it's all going to be worth it!

## Highlights

Some highlights of this release, in no particular order

### Blur variants

Just to show two:

![](https://hypr.land/imgs/blog/update57/jar.png)

![](https://hypr.land/imgs/blog/update57/drops.png)

many more available. Plugins can add even more, if someone needs more. Explore the new effects,
with some static, and some animated.

### Workspace sharing

Workspace sharing is now implemented in both Hyprland and XDPH, meaning every time you hit "share" in your
browser, or meeting app, you can also select a specific workspace as a source for the screensharing.

### Window wobble

If you are still yearning for the good old days of compiz, I have something for you.

<video src="https://hypr.land/imgs/blog/update57/wobbl.mp4" autoplay muted controls loop/>

### Lua API enhancements

As usual, new lua APIs for your scripting needs:
- `config.unload` event
- `hl.reload_config()` added
- `hl.get_devices()` added
- new window minimize and state update events

## New stuff

Other, less notable on their own, but still important new goodies include:
- new `cursor:warp_on_monitor_change` option
- new deprecation notices for old variables instead of errors
- new rules, `no_glow` and `no_wobble`
- `tablet` devices can now be globally disabled
- new input swallowing for the first, focus-changing window click
- new proportional blur option
- and much more...

## Fixes

Tons of issues fixed as always, I won't bore you with the particulars. "Stability and performance improvements",
just check them out for yourself!

## The raw release

As always, if you prefer reading more, check the release on [Github](https://github.com/hyprwm/Hyprland/releases/tag/v0.57.0).

Cheers,
vax
