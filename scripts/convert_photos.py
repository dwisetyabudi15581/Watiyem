#!/usr/bin/env python3
"""Konversi PNG hasil AI ke JPG optimal untuk web, simpan ke public/images/."""
from PIL import Image
import os

SRC = "/home/z/my-project/scripts/imggen"
DST = "/home/z/my-project/public/images"

mapping = {
    "bu-watiyem.png": "bu-watiyem.jpg",
    "galeri-1.png": "galeri-nasibox.jpg",
    "galeri-2.png": "galeri-prasmanan.jpg",
    "galeri-3.png": "galeri-tumpeng.jpg",
    "galeri-4.png": "galeri-snackbox.jpg",
    "galeri-5.png": "galeri-harian.jpg",
    "galeri-6.png": "galeri-sambal.jpg",
}

os.makedirs(DST, exist_ok=True)

for src_name, dst_name in mapping.items():
    src_path = os.path.join(SRC, src_name)
    dst_path = os.path.join(DST, dst_name)
    img = Image.open(src_path).convert("RGB")
    # Batasi lebar maksimal 1600px agar ringan
    if img.width > 1600:
        ratio = 1600 / img.width
        img = img.resize((1600, int(img.height * ratio)), Image.LANCZOS)
    img.save(dst_path, "JPEG", quality=83, optimize=True)
    size_kb = os.path.getsize(dst_path) // 1024
    print(f"OK {dst_name}: {img.width}x{img.height}, {size_kb} KB")

print("\nSelesai — semua foto siap dipakai website.")
