"""Render selected PDF pages to PNG for visual inspection."""
import fitz
import sys
import os

pdf_path = "/home/z/my-project/download/Panduan-Website-Catering-Watiyem.pdf"
out_dir = "/home/z/my-project/scripts/preview"
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
pages = [int(x) for x in sys.argv[1:]] if len(sys.argv) > 1 else [1, 2, 3, 12, 14, 28, 29]
for p in pages:
    if 1 <= p <= len(doc):
        page = doc[p - 1]
        pix = page.get_pixmap(dpi=72)
        pix.save(f"{out_dir}/page-{p:02d}.png")
        print(f"saved page {p} -> {out_dir}/page-{p:02d}.png  ({pix.width}x{pix.height})")
print(f"total pages: {len(doc)}")
doc.close()
