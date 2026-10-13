"""Find which physical page each BAB chapter starts on, for TOC filling."""
import fitz

pdf_path = "/home/z/my-project/download/Panduan-Website-Catering-Watiyem.pdf"
doc = fitz.open(pdf_path)

chapters = {
    "bab1": "Profil Usaha & Strategi Website",
    "bab2": "Struktur Website & Layout Homepage",
    "bab3": "Copywriting & Teks SEO Lengkap",
    "bab4": "Menu, Paket & Kisaran Harga",
    "bab5": "Google Search Console Langkah demi Langkah",
    "bab6": "Google Business Profile & Google Maps",
    "bab7": "Checklist SEO Lokal & Perawatan Rutin",
    "bab8": "Lampiran",
}

# Extract text per page
page_texts = [doc[i].get_text() for i in range(len(doc))]
doc.close()

found = {}
for key, marker in chapters.items():
    for i in range(2, len(page_texts)):  # skip physical pages 1-2 (cover, TOC)
        # Chapter header renders title in large font; text present on page
        if marker in page_texts[i]:
            # For bab8 verify it is the chapter header page (contains BAB 8 tag + title)
            if key == "bab8":
                if "Konten Siap Pakai" not in page_texts[i]:
                    continue
            found[key] = i + 1  # 1-indexed physical page
            break

print("Physical pages:", found)
print()
print("Body numbering (physical - 2):")
for key in sorted(found, key=lambda k: int(k[3:])):
    print(f'  {key}: body page {found[key] - 2}')
