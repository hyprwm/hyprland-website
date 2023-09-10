parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

cd "$parent_path"

find "../static/imgs/profile_pictures/" -type f \
   \( -iname "*.jpg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.bmp" -o -iname "*.jpeg" -o -iname "*.webp" \) -not -name "generated_*" -print0 |
   
while IFS= read -r -d '' filepath; do
    echo "$filepath" gets blurred
    
    directory=$(dirname "$filepath")
    filename=$(basename "$filepath")
    
    
    for SIZE in 100x100 64x64 48x48 32x32 
    do
       generated_filename="${directory}/generated_${SIZE}-${filename}"

      magick  "$filepath" --resize "${SIZE}" "${generated_filename}" 
    done

done
