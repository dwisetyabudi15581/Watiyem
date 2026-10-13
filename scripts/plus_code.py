#!/usr/bin/env python3
"""Hitung Plus Code (Open Location Code) untuk koordinat lokasi Catering Watiyem."""

ALPHABET = "23456789CFGHJMPQRVWX"

def encode_olc(lat: float, lon: float) -> str:
    lat = max(-90.0, min(90.0, lat)) + 90.0
    lon = max(-180.0, min(180.0, lon)) + 180.0
    resolutions = [20.0, 1.0, 0.05, 0.0025, 0.000125]
    code = ""
    for res in resolutions:
        lat_d = int(lat // res)
        lon_d = int(lon // res)
        lat -= lat_d * res
        lon -= lon_d * res
        code += ALPHABET[lat_d] + ALPHABET[lon_d]
    return code[:8] + "+" + code[8:]

lat, lon = -7.5595919, 111.4540572
full = encode_olc(lat, lon)
print(f"Koordinat : {lat}, {lon}")
print(f"Plus Code : {full}")
print(f"Bentuk pendek (lokal Magetan): {full[4:8]}+{full[9:]}")

# pembanding: koordinat lama yang salah
print(f"\n(pembanding koordinat lama -7.6604,111.3804: {encode_olc(-7.6604, 111.3804)})")
