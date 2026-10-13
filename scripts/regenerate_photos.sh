#!/bin/bash
# Regenerate 4 foto bermasalah dengan prompt yang lebih baik

set -e
cd /home/z/my-project/scripts/imggen

echo "=== Regenerate 1: Nasi box (close-up, tekstur jelas) ==="
z-ai image -p "Photorealistic professional catering food photography, top-angle close-up of Indonesian nasi box: sturdy white paper lunch box filled with fluffy yellow turmeric rice, crispy golden-brown fried chicken drumstick with visible crispy texture, dark caramelized tempe orek, fresh green stir-fried vegetables, small cup of red sambal, prawn crackers, arranged neatly on rustic wooden table, bright natural daylight, sharp focus, appetizing, high quality, detailed" -o ./galeri-1.png -s 1344x768

echo "=== Regenerate 2: Tumpeng (komposisi klasik sederhana) ==="
z-ai image -p "Photorealistic professional food photography, Indonesian tumpeng celebration dish: tall golden cone-shaped yellow rice on round woven bamboo tray lined with banana leaves, surrounded by classic side dishes - crispy fried chicken pieces, telur balado eggs with red chili coating, emping crackers, cucumber slices and tomato slices, simple clean composition, warm natural light, sharp focus, high quality, detailed" -o ./galeri-3.png -s 1344x768

echo "=== Regenerate 3: Catering harian (tanpa teks, tanpa helm) ==="
z-ai image -p "Photorealistic photo of Indonesian home-style daily lunch catering preparation, neat rows of clear plastic food containers each filled with white rice and different lauk pauk dishes like ayam kecap, telur balado, tempe and sayur, stacked ready for delivery on clean wooden table, bright morning daylight, professional documentary photography, sharp focus, high quality" -o ./galeri-5.png -s 1344x768

echo "=== Regenerate 4: Dapur (tanpa tangan close-up) ==="
z-ai image -p "Photorealistic photo of Indonesian traditional home catering kitchen in early morning, large aluminum wok pan with steaming hot food on gas stove viewed from side angle, fresh vegetables in woven bamboo baskets, jars of spices and chili on wooden counter, warm golden morning sunlight streaming through window, no people in frame, documentary photography, high quality, detailed" -o ./galeri-6.png -s 1344x768

echo "=== Selesai regenerate ==="
ls -la galeri-*.png
