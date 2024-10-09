# hyprland-website

The hyprland.org website files. See it on [hyprland.org](https://hyprland.org)

> [!NOTE]  
> If you are here to contribute to the Wiki, [click here](https://github.com/hyprwm/hyprland-wiki).

## Contributions

Feel free

## Requirements

- `pnpm` for the package management. (You can also use npm if you only intend to build the project)
- `imagemagick` to generate the blurred background images.

## Development

- `pnpm install` To install the required npm packages
- `pnpm dev` To start the dev server
- `pnpm build` To build the static site into `./build`
- `pnpm preview` To preview the built site in `./build` ( no dev environment )

## Markdown features

- News entries are in `content/news/` and feature a `title` and a `date`. The date can be provided as an Unix timestamp in seconds or as any string Javascript can parse.
- `.md` files get parsed with [mdsvex](https://github.com/pngwn/mdsvex). So you can also use `svelte` code within them.

## Credits

- [VDawg](https://github.com/vdawg-git) - for the new site and design.
