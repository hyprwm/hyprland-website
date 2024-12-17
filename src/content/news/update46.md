---
title: Hyprland 0.46.0 is upon us! 
date: 1734392927
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

Whoo! Just before Christmas, we've managed to get 0.46.0 ready for you!

## Breaking changes

Some stuff has changed:

### Nvidia Hardware cursors!

`cursor:dumb_copy` is now gone in favor of `cursor:use_cpu_buffer`. This should allow no-downsides Nvidia hardware cursors. Please note it's experimental.

### Window/layer rules

Window/layer rule regexes now require a full match (not any match) to trigger.

For example, in the case of `jeremy`:
 - `jeremy`: OK
 - `^(jeremy)$`: OK
 - `jer`: Used to match, now won't. You'll need to do `.*jer.*` to make it act like before. (Consider _not_ doing that though, make a better regex.)

## New stuff

Tons of new stuff, you can think of all of these as Christmas presents.
 - Color handling has been moved to OkLab from sRGB. This means gradients and color transitions will now look more natural.
 - XWayland Drag and Drop is back! You can now drag stuff from your Wayland clients to X11 clients.
 - New update screen! Whenever you update, you'll get a small popup reassuring everything went well and reminding you to check the release notes.
 - Window and layer rule handling has been improved and optimized, and regex handling is now done via RE2 from Google, which is faster and generally better.
 - `cursor:warp_on_change_workspace` now accepts `force` to bypass `cursor:no_warps`.
 - hyprctl: `clients` got `inhibitingIdle`, `monitors` got `directScanout`, `plugins list` got `-j` support.
 - `cursor:warp_back_after_non_mouse_input` added, allowing you to keep touch / tablet input from messing with your mouse input.
 - `lockdead_screen_delay` has been added if your lockscreen can't appear fast enough to avoid the "lockscreen dead" from flashing for a moment.
 - You can now blur IME popups with `decoration:blur:input_methods`
 - Version requests now also show linked versions of hypr* deps.
 - New windowrules for mouse and touchpad scroll factors.
 - Added some new festive splashes for xmas and new years :)
 - And more!

## Fixes

As always, tons and tons of fixes. See the github release to read up more.

### Links

See the 0.46.0 release on Github: [https://github.com/hyprwm/Hyprland/releases/tag/v0.46.0](https://github.com/hyprwm/Hyprland/releases/tag/v0.46.0)

<br/>

**Merry Christmas!!!!**
