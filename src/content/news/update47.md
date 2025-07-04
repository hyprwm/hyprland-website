---
title: Hyprland 0.47.0 has arrived!
date: 1737978700
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

New year, new Hyprland release. This one is quite a large one, with tons of fixes and changes
accumulated over about a month and a half.

There have been quite a bunch of internal rewrites, mostly around memory safety, the renderer, and animation system. Although performance shouldn't change
much, it should improve stability in edge cases. Please do report any regressions you might find, if they aren't reported already.

## Breaking changes

Firstly, we got one breaking change:

- `master:always_center_master` has been replaced with a more flexible `master:slave_count_for_center_master`

That's it this time. :)

## Highlights

For the cooler stuff in the release, I've decided to give you a few "highlights":

### HDR

HDR and Color Management support has been merged and is now functional. You might want to look at the `experimental`
section of the config variables for more information.

Please do note it _is_ experimental!

### Squircles

Added support for squircles in your corners:

![](https://hypr.land/imgs/blog/update47/squircles.png)

it's a cosmetic change for sure, but an anticipated one.

### Protocols

A few new stuff has been implemented, namely `hyprland_surface` (used already in quickshell) and `hyprland_lock_notify` which
should allow hypridle to make your system wait for the lock to launch before putting your system into suspend, avoiding
your desktop appearing for a moment after unsuspending.

### Donation request

A bit following in KDE's footsteps, we've added a small "donation nag" that will appear _once_ in july and _once_ in december.
You can disable it with `ecosystem:no_donation_nag`, if you are a cruel person.

It looks like this:

![](https://hypr.land/imgs/blog/update47/nag.png)

and will of course go away if you click "No thanks".

### Config

New config stuff:

- `negative:` for negating any regex has been added
- `focusedmonv2` will now send more information than `focusedmon` on socket2
- new `tag:` window selector for matching windows by tag
- a few new window destruction dispatchers to kill windows instead of gracefully closing
- `cyclenext` got a `visible` arg to cycle all visible windows

### Other stuff

Some less, but still notable new stuff / fixes include:

- CTM (used by hyprsunset) now has a smooth transition (except for Nvidia, because Nvidia)
- `--verify-config` has been added to Hyprland which will not launch Hyprland, and just print whether your config is well-formed or not
- hyprpm got an option to force reload all plugins
- regexes have been sped up by caching the compiled regexes where possible
- xwayland got a few fixes around clipboard and dnd
- config should now be reloaded noticeably faster than before thanks to the move to inotify

## The raw release

if you are the type that enjoys reading, check the release out on [Github](https://github.com/hyprwm/Hyprland/releases/tag/v0.47.0)

### Additional releases

[hyprutils 0.5.0](https://github.com/hyprwm/hyprutils/releases/tag/v0.5.0)

Cheers,
vax.
