#!/bin/bash
# Regenerate final 2 foto: harian (overhead sederhana) + dapur (bahan baku)

set -e
cd /home/z/my-project/scripts/imggen

echo "=== Regenerate: Catering harian (overhead, tanpa orang) ==="
z-ai image -p "Photorealistic overhead top-view photo of Indonesian meal prep for weekly lunch catering, five clear glass meal containers in a neat row on light wooden table, each container filled with white rice and different home-style dishes: ayam kecap soy sauce chicken, telur balado egg in red chili sauce, tempe bacem, green vegetables, red sambal, no people, no text, no labels, bright even daylight, professional food photography, sharp focus, high quality" -o ./galeri-5.png -s 1344x768

echo "=== Regenerate: Dapur (bahan baku & bumbu dapur) ==="
z-ai image -p "Photorealistic photo of fresh Indonesian cooking ingredients on rustic wooden kitchen counter in warm morning light: red chili peppers, shallots, garlic, turmeric roots, galangal, lemongrass stalks and candlenuts arranged in small woven bamboo baskets, traditional wooden mortar and pestle beside, no people, no text, professional food photography, high quality, detailed" -o ./galeri-6.png -s 1344x768

echo "=== Selesai ==="
ls -la galeri-5.png galeri-6.png
