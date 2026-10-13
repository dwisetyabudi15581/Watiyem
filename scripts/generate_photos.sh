#!/bin/bash
# Generate foto AI untuk website Catering Watiyem
# 1 foto profil Bu Watiyem + 6 foto galeri masakan

set -e
mkdir -p /home/z/my-project/scripts/imggen
cd /home/z/my-project/scripts/imggen

echo "=== 1/7: Foto profil Bu Watiyem ==="
z-ai image -p "Photorealistic portrait of a friendly Indonesian Javanese woman in her 50s, caterer, warm genuine smile, wearing a clean dark red apron over a modest blouse, standing in a bright traditional Javanese home kitchen, fresh vegetables and spice baskets on wooden table behind her, soft natural window light, documentary photography style, high quality, detailed" -o ./bu-watiyem.png -s 864x1152

echo "=== 2/7: Galeri - Nasi box ==="
z-ai image -p "Photorealistic food photography of Indonesian nasi box catering, dozens of white paper boxes neatly arranged in rows filled with yellow rice, fried chicken, tempe orek, vegetables and sambal, on long wooden table, bright natural daylight, professional catering photography, high quality, detailed" -o ./galeri-1.png -s 1344x768

echo "=== 3/7: Galeri - Prasmanan ==="
z-ai image -p "Photorealistic photo of Indonesian prasmanan buffet catering stand for office event, chafing dishes with white rice, ayam kecap, semur, sayur asem, decorated buffet table with red and white cloth, bright event hall, professional event catering photography, high quality" -o ./galeri-2.png -s 1344x768

echo "=== 4/7: Galeri - Tumpeng ==="
z-ai image -p "Photorealistic food photography of Indonesian tumpeng syukuran, golden cone-shaped yellow rice surrounded by ayam goreng, emping, shredded omelette, vegetables on round woven bamboo tray tampah with banana leaves, festive traditional Javanese celebration, warm natural light, professional food photography, high quality" -o ./galeri-3.png -s 1344x768

echo "=== 5/7: Galeri - Snack box ==="
z-ai image -p "Photorealistic food photography of Indonesian snack boxes for seminar coffee break, golden risoles, pastel pastries and lumpia spring rolls arranged neatly in white boxes with tissue paper, cups of tea beside, bright natural daylight, professional catering photography, high quality, detailed" -o ./galeri-4.png -s 1024x1024

echo "=== 6/7: Galeri - Catering harian ==="
z-ai image -p "Photorealistic photo of Indonesian daily lunch catering, stack of clear food containers with home-style meals, rice, lauk pauk and vegetables, delivery boxes ready on table with motorcycle delivery helmet nearby, bright morning daylight, documentary photography style, high quality" -o ./galeri-5.png -s 1344x768

echo "=== 7/7: Galeri - Dapur ==="
z-ai image -p "Photorealistic photo of Indonesian home catering kitchen in the morning, big wok of food steaming on gas stove, woman hands stirring with wooden spatula, fresh ingredients, baskets of vegetables and spices around, warm morning sunlight through window, documentary photography, high quality" -o ./galeri-6.png -s 1344x768

echo "=== Selesai. File PNG tersimpan di scripts/imggen ==="
ls -la /home/z/my-project/scripts/imggen/*.png
