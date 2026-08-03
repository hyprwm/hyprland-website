---
title: Hyprland 0.56 has arrived!
date: 1784534430
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

Hey hey folks, it's time for Hyprland 0.56! This update includes a lot of fixes and new features,
after about 2.5 months of hard work from all of our contributors and maintainers.

This time, get it, *no breaking changes*! Truly incredible.

Let's get on to the stuff.

## New features

### Layout improvements

New scrolling and master stuff include:
- for scrolling:
  - `fit_into_view`
  - `fit expand`
  - `inhibit_scroll` 
- for master:
  - `focus_master_on_close`

### Lua API expansion

New lua APIs include:
- `change_id` workspace API
- `get_loaded_plugins`
- `clear_crashed_lockscreen` for easier recovery from a crashed lockscreen
- `is_key_down` and key events for more direct key state querying
- custom live gestures
- `physical_width` and height, CM, and reserved area for monitor objects
- `exec_scheduled_prop_refresh_immediately` to refresh props immediately and not lazy schedule them
- various `set_` functions for raw workspace management on monitors
- event registering and dispatching

### Other

Other stuff include:

- new REPL mode for lua in hyprctl
- groupbar's `disable_when_only` option
- new windowrule `stableid:` field
- new windowrules effects for `no_auto_hdr`, `suppress_event` for X11 configure events, and a silent monitor option
- XDG interactive drags support (dragging CSD titlebars)
- glow now supports gradients
- and much more...


## Fixes

Tons of issues fixed, as usual. I don't think you care for me to list them all, so let's just say the classic
"stability and performance improvements". You can read all of the fixes in the raw release on GitHub. :)

## The raw release

As always, if you prefer reading more, check the release on [Github](https://github.com/hyprwm/Hyprland/releases/tag/v0.56.0).

Cheers,
vax
