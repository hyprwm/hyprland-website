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
    
    # Adjust the brightness, make it brighter if dark, otherwise lighten it
    brightness_boost=$( python -c "print( (1 - ($brightness / $brightness_threshold)) * 50 )" )
    
    magick convert  -scale 10%   -brightness-contrast ${brightness_boost}x20 -modulate 100,500,100 -gaussian-blur 0x20 -resize 1000%   "$filepath" "$generated_filename" 
    # magick  "$generated_filename" "./hald-clut.png" -hald-clut "$generated_filename" 
done
