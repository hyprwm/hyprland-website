For the effect of the images to work, they need a blurred version, which gets generated on build or manually.
This is to prevent lag especially on mobile by removing the need for the CSS blur filter.

`magick convert -gaussian-blur 0x20 -modulate 100,300,100 /home/vdawg/Downloads/tmp/a/img4.webp /home/vdawg/Downloads/tmp/a/img4_xx.webp`
