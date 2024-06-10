---
title: A huge Hyprland release 0.41.0
date: 1718030074
---

Just as we thought 0.40.0 was a mega-release, we now proudly present 0.41.0, which is almost twice as sizeable.

0.41.0 changes over 25000 lines of code over almost 200 commits from dozens of contributors.

## Ongoing work to detach from wlroots

As I've explained in [my blogpost on vaxry.net](https://blog.vaxry.net/articles/2024-wlrootsRewrite) there's currently
a large ongoing effort to move away from wlroots, which requires essentially re-implementing all wlroots' features in hyprland.

The work is going mostly smoothly, with some inevitable small bugs here and there, but overall not that many.

As we stand right now, 0.41.0 has completely gotten rid of wlroots for handling anything related to wayland, so the entire Wayland stack
is now wlroots-free. The only thing remaining now is the backend (kms / libinput / drm) which will be the target of most likely 0.42 (maybe 0.43)
quite soon. After that, Hyprland will become a new, fully independent Wayland implementation.

## New stuff

0.41.0 also brings a ton of new goodies and fixes. Many annoying issues from 0.40.0 (lockscreens, keybinds, hyprpm etc) have been fixed
and some new features include:

- New IPC events for groups
- A few QoL features for keybinds (sendshortcut, new monitor flags, keybind combos)
- New QoL stuff for hyprctl (--quiet, fixes for batch, config flag for systeminfo)
- New protocol impl: hyprland_focus_grab
- Ability to configure the position of the error bar
- Tons of bugfixes
- And much much more!

## Closer

The current roadmap mostly focuses on migrating from wlroots, and after that is done, I plan on focusing on any bugs that arose from it, and possibly polishing the
ecosystem a bit (hyprpaper, xdph, etc) to provide a bit smoother of an experience.

Cheers
~ vaxry
