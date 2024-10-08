---
title: A Hyprland mega-release 0.40.0
date: 1714838440
author: Vaxry
authorLink: https://github.com/vaxerski/
---

Changing over 15,000 lines of code, the Hyprland 0.40.0 update has finally dropped. This
is the biggest release by commit and LOC diff in history of Hyprland.

As we're in the middle of slowly but surely moving off of depending on wlroots for our backend(s),
a lot of things are moving from wlroots' C implementations into more memory-safe and cleaner C++ implementations instead.

Although the work is surely not done yet (from just the protocol implementations, about 60% has been rewritten so far),
this mega-release will also help test how the implementations fare in real world usage.

A few bugs and quirks have been ironed out during the development phase, and many previously long-standing bugs
have been fixed with these rewrites.

0.40.0 also brings a few community-requested QoL features, like:

- Better monitor auto-positioning
- Initial workspace tracking
- More workspace selectors
- Two new protocols supported, ext-foreign-toplevel and alpha-modifier
- A boatload of bugfixes
- And much more!

Hopefully the new implementations prove stable and resilient. Although we do not expect it to all be smooth
sailing, it should prove more stable, as we've seen before with other memory-safe re-implementations.

Check out the entire release on Github [here](https://github.com/hyprwm/Hyprland/releases/tag/v0.40.0)
