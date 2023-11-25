#!/usr/bin/env bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

cd "$parent_path"

find "../static/imgs/ricing_competitions/" -type f \
   \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.jpeg" -o -iname "*.webp" \) -not -name "generated_*" -print0 |
while IFS= read -r -d '' filepath; do
    echo "$filepath" gets blurred
    
    directory=$(dirname "$filepath")
    filename=$(basename "$filepath")
    generated_filename="${directory}/generated_${filename}"
    brightness=$( convert $filepath -colorspace Gray -format "%[mean]" info: )
    max_brightness="65535" # The possible maximum brightness possible from the previous command
    brightness_threshold=$( python -c "print( $max_brightness * 0.5 )"  )
    
    # Boost the brightness if the image is very dark
    brightness_boost=$( python -c "print( max( (1 - ($brightness / $brightness_threshold)) * 50 , 0) )" )
    
    # Modify colors with LUT
    magick convert -brightness-contrast ${brightness_boost}x40 -modulate 100,1000,100    "$filepath" "$generated_filename" 
    magick  "$generated_filename" "./hald-clut.color.io.png" -hald-clut "$generated_filename" 
    # Also make them smaller to reduce file size
    magick convert -modulate 100,250,100   -scale 10% -gaussian-blur 0x20  -resize 500% -quality 50   "$generated_filename" "$generated_filename" 
    

    # magick convert  -scale 10%   -brightness-contrast ${brightness_boost}x25 -modulate 100,500,100  -gaussian-blur 0x20  -resize 1000%   "$filepath" "$generated_filename" 
done
