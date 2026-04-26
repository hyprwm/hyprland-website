---
title: Lua-ification of Hyprland configs
date: 1777213652
author:
  name: Vaxry
  link: https://github.com/vaxerski/
  picture: /imgs/profile_pictures/vaxry.webp
---

Hyprland has just undergone the biggest change since our move off of wlroots, and for the
end user, probably even bigger than that.

For 4 years, Hyprland has grown in the amount of features - and expectations. We added more
and more features, on top of a simple config syntax made up by a 17-year-old me in my parents'
basement back in 2021.
It's obvious that the syntax got ugly. What was a simple `k = v` syntax turned into:

```ini
windowrule = immediate yes, border_size 4, class:^(amongus)$, title:^(sus)$
```

which starts being unreliable, unreadable, limited and simply cluttered.

With today's change, no more.

## Lua configs

Starting from today on `git`, or a future 0.55 release, you will be able to use lua to configure
your Hyprland desktop.

For now, lua is _optional_: if you don't have a `hyprland.lua` config file, your old `hyprland.conf`
will be loaded, business as usual.

However, if you do have one, `hyprland.lua` will be loaded instead. This check is only done once at
startup, so if you launch hyprland with a `.lua` config, it will not load a legacy one unless
you restart Hyprland. The same goes for the reverse.

The lua syntax has been reengineered from the ground up to be more readable, simpler, and more descriptive.
Many hyprlang-specific methods are completely gone, and are replaced by simpler and more intuitive alternatives.

On top of that, we introduced a ton of helpers into lua, with timers, events, callbacks, layout data, and more - allowing
you to do things not even possible without plugins before.

Please check the wiki for full instructions on the new configs.

## Old hyprlang syntax

The old hyprlang syntax will continue to be supported for 1 - 2 releases starting from 0.55. After that,
hyprlang will be dropped.

New config features will also not be added to hyprlang anymore.

## Hypr* tools

Other hypr* tools will for now continue using hyprlang as their config language provider - most of those tools
are simple in nature and work totally fine with a simple syntax, and do not need a turing-complete
scripting language for their functionality.

## Bugs / Feature requests

The lua syntax has been tested by many helpful people from our community, but we can't do everything - if you
have some problems, bugs, or feature requests, please do not hesitate to open a discussion and suggest
your solution!

Cheers and enjoy,<br/>
vax

