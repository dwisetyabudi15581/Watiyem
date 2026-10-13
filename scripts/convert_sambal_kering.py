#!/usr/bin/env python3
"""Konversi foto sambal pecel kering PNG -> JPG web-optimized, ganti versi botol lama."""
from PIL import Image
import os

SRC = "/home/z/my-project/scripts/sambal-kering-raw.png"
DST = "/home/z/my-project/public/images/sambal-pecel.jpg"
MAX_W = 1600
QUALITY = 83

img = Image.open(SRC).convert("RGB")
if img.width > MAX_W:
    h = round(img.height * MAX_W / img.width)
    img = img.resize((MAX_W, h), Image.LANCZOS)

img.save(DST, "JPEG", quality=QUALITY, optimize=True, progressive=True)

old_kb = os.path.getsize(SRC) / 1024
new_kb = os.path.getsize(DST) / 1024
print(f"OK: {img.width}x{img.height}, {old_kb:.0f}KB PNG -> {new_kb:.0f}KB JPG")
print(f"Saved: {DST}")
