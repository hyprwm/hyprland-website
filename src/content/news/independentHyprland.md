---
title: Hyprland is now fully independent!
date: 1721559307
---

With great pleasure may I announce that our move off of wlroots is now complete and [MR 6608](https://github.com/hyprwm/Hyprland/pull/6608) is
now merged.

After over 1000 comments on 6608 alone, and over 3 months of the entire process, the rewrite is done.

With it, Hyprland is no longer a wlroots-based Wayland compositor, and instead, a fully independent implementation of the protocol.

Don't worry though, all your wlroots apps will still work.

## Timeline

As I've outlined in my [blogpost on blog.vaxry.net](https://blog.vaxry.net/articles/2024-wlrootsRewrite) in May, the rewrite took
place in two parts.

The first part was rewriting all protocol implementations. This has been finished on June 8th, with [MR 6268](https://github.com/hyprwm/Hyprland/pull/6268) being merged.

The second part was rewriting the backend implementation, i.e. the low-level backend stuff (KMS/DRM/libinput et al) which is now done with 6608.

## Changes under the hood

All protocol implementations are now integrated into Hyprland itself, and written with C++. This should reduce the amount of memory issues and bugs compared to wlroots implementations
and has already been doing that.

The backend rendering stuff has been migrated into a library written from scratch called [aquamarine](https://github.com/hyprwm/aquamarine).

Aquamarine is _not_ a competitor to wlroots - wlroots is a library for building Wayland compositors, while aquamarine is a tiny library providing an abstraction on top of the very low-level
backend stuff, that also allows your program to run on either a Wayland compositor (in a window) or on a DRM session (tty).

Additionally, many new interfaces have been added to `hyprutils`, and `hyprwayland-scanner` has gotten the ability to generate client code, already used by aquamarine and hyprpaper.

## Changes for the user

See the [wiki MR](https://github.com/hyprwm/hyprland-wiki/pull/721) for the changes to config options, environment variables, etc.

Apart from a few minor changes to how things are called, nothing else should change for you, the user.

## When will I get it?

The changes are staged for 0.42.0. If you want to test them right away, check out the -git branch, as usual.

## Special thanks

Massive thanks to all the people who helped in the long process (what was it, like 3 months?) of rewriting the wlroots stack to a nicer language.

Special thanks to:
 - Agent00Ming (testing and patience)
 - Ikalco (tons of patches)
 - gulafaran (patches and testing)
 - phonetic112 (testing)
 - UjinT34 (testing and patches)
 - fufexan (nix and meson)
 - And everyone who helped test here and there! There's been 38 participants in the aquamarine MR alone!


Cheers and ad meliora,
vaxry.
