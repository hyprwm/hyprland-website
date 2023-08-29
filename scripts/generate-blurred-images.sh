find "./static/imgs/ricing_competitions/" -type f \
   \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.jpeg" \) -print0 |
while IFS= read -r -d '' filepath; do
    directory=$(dirname "$filepath")
    filename=$(basename "$filepath")
    generated_filename="${directory}/generated_${filename}"
    magick convert  -scale 10% -gaussian-blur 0x1 -modulate 100,300,100 -resize 1000% "$filepath" "$generated_filename"
done
