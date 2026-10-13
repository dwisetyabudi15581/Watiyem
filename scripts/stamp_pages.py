"""Stamp page numbers onto the guide PDF.

Scheme (per pagination.md five-zone convention):
- Physical page 1 (cover): no number
- Physical page 2 (TOC / front matter): roman 'i'
- Physical pages 3..N (body): arabic 1..N-2
Numbers are centered in the footer, in muted warm gray.
"""
from pypdf import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
import io

SRC = "/home/z/my-project/download/Panduan-Website-Catering-Watiyem.pdf"
OUT = "/home/z/my-project/download/Panduan-Website-Catering-Watiyem.pdf"

reader = PdfReader(SRC)
writer = PdfWriter()

n = len(reader.pages)
for i, page in enumerate(reader.pages):
    w = float(page.mediabox.width)
    h = float(page.mediabox.height)

    label = None
    if i == 1:
        label = "i"
    elif i >= 2:
        label = str(i - 1)

    if label:
        buf = io.BytesIO()
        c = canvas.Canvas(buf, pagesize=(w, h))
        c.setFont("Helvetica", 8.5)
        c.setFillColor(HexColor("#8A7A72"))
        c.drawCentredString(w / 2.0, 16, label)
        c.save()
        buf.seek(0)
        overlay = PdfReader(buf).pages[0]
        page.merge_page(overlay)
    writer.add_page(page)

# carry metadata over
if reader.metadata:
    md = {k: v for k, v in reader.metadata.items() if isinstance(v, str)}
    if md:
        writer.add_metadata(md)

with open(OUT, "wb") as f:
    writer.write(f)
print(f"stamped {n} pages -> {OUT}")
