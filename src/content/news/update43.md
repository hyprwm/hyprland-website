---
title: Hyprland 0.43.0 released!
date: 1725814920
---

Quite a while after 0.42.0, 0.43.0 has finally been released.

This update focuses mostly on polishing up annoying issues from 0.42.0, especially those with random crashes and monitors
not turning on/displaying garbage.

Most (like 95%) of the "monitor not on" issues have now been fixed with 0.43, though please also use aquamarine 0.4.1 as
some fixes were done in aquamarine itself.

Additionally to all the bugfixes, some new features have been added, for example:
 - New windowrule to keep windows rendered when invisible ([#7582](https://github.com/hyprwm/Hyprland/pull/7582))
 - `exec-shutdown` added to the config to execute something on hyprland exit
 - Animations got `workspacein` and `workspaceout` configs
 - `hyprctl switchxkblayout` now can also take `current` and `all` for keyboard param
 - `HYPRLAND_NO_SD_VARS` environment has been added to prevent Hyprland from updating systemd's environment
 - New screens for when your lockscreen dies instead of the infamous red screen of death, with information on recovering
 - `xwayland:enabled` has been added to runtime-disable xwayland
 - `cursor:sync_gsettings_theme` has been added to sync the cursor theme to system gsettings
 - and much much more!

Hyprland continues being the most advanced independent wayland compositor, all thanks to the amazing community and the huge
influx of new contributors! Your contributions are greatly appreciated.

Cheers, vax.
