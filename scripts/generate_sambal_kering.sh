#!/bin/bash
# Generate foto produk: Sambal Pecel Madiun KERING per gram (bukan botol)
# Berdasarkan referensi riil: butiran kasar kacang+cabai+kencur, warna coklat kemerahan,
# kemasan pouch transparan vacuum tanpa label, disajikan dengan seduh air panas.

set -e
cd /home/z/my-project

z-ai image \
  -p "Professional Indonesian food product photography, 45-degree angle: authentic dry sambal pecel Madiun (bumbu pecel kering) - a coarse-ground granular mixture of crushed roasted peanuts, red chili flakes, kencur galangal and palm sugar, reddish-brown golden color with glossy oily sheen, visible chunky peanut bits 2-4mm, NOT smooth paste, NOT liquid. The dry sambal is generously piled on a fresh green banana leaf on a rustic round woven bamboo tray (tampah). Beside it a transparent vacuum-sealed clear plastic pouch packet filled with the same dry sambal pecel granules visible through the plastic, plain pouch with no label no text. Around the tray: small wooden bowl of raw peanuts in shells, fresh red bird's eye chilies, pieces of kencur root, a dark block of Javanese palm sugar (gula jawa), a small glass of hot water being poured. Warm rustic dark wooden table, soft natural window light from left, shallow depth of field, appetizing, hyper-realistic, high detail, no text, no watermark, no people, no hands" \
  -n 1 \
  -s 1344x768 \
  -o scripts/sambal-kering-raw.png

echo "DONE"
