#!/bin/bash
# Verifikasi perubahan sambal pecel kering di halaman dev
set -e

echo "=== 1. Muat halaman & scroll untuk lazy-load ==="
agent-browser navigate http://localhost:3000
agent-browser set viewport 1280 900
agent-browser eval "(async () => {
  await new Promise(r => setTimeout(r, 1500));
  for (let y = 0; y <= document.body.scrollHeight; y += 400) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
  return 'scrolled';
})()"

echo ""
echo "=== 2. Cek teks sisa 'botol' di seluruh halaman ==="
agent-browser eval "document.body.innerText.toLowerCase().includes('botol') ? 'MASIH ADA BOTOL: ' + document.body.innerText.toLowerCase().split('\n').filter(l=>l.includes('botol')).join(' | ') : 'BERSIH - tidak ada kata botol'"

echo ""
echo "=== 3. Kartu layanan Sambal Pecel ==="
agent-browser eval "(() => {
  const cards = [...document.querySelectorAll('h3')].map(h => h.textContent.trim());
  const has = cards.includes('Sambal Pecel Madiun');
  const txt = document.body.innerText;
  return JSON.stringify({
    kartuSambal: has,
    harga500: txt.includes('Rp 25.000'),
    satuan500gram: txt.includes('/500 gram'),
    min100: txt.includes('Min. 100 gram'),
    kataKering: (txt.match(/kering/gi) || []).length + 'x kata kering',
    seduhAirPanas: txt.includes('seduh air panas'),
    perGram: txt.toLowerCase().includes('per gram')
  }, null, 2);
})()"

echo ""
echo "=== 4. Klik tab menu Sambal Pecel (klik asli) ==="
agent-browser find role tab click "Sambal Pecel"
sleep 1
agent-browser eval "(() => {
  const txt = document.body.innerText;
  return JSON.stringify({
    paket100: txt.includes('Coba 100 gr') && txt.includes('Rp 5.000'),
    paket250: txt.includes('250 gr') && txt.includes('Rp 12.500'),
    paket500: txt.includes('500 gr (Favorit)') && txt.includes('Rp 25.000'),
    catatanKering: txt.includes('bentuk KERING'),
    catatanSeduh: txt.includes('tinggal seduh air panas')
  }, null, 2);
})()"

echo ""
echo "=== 5. Tombol WA khusus sambal (pesan template gram) ==="
agent-browser eval "(() => {
  const links = [...document.querySelectorAll('a[href*=\"wa.me\"]')].map(a => decodeURIComponent(a.href));
  const sambalWa = links.find(h => h.includes('Sambal Pecel Madiun') && h.includes('kering'));
  return JSON.stringify({
    totalWa: links.length,
    waSambalAda: !!sambalWa,
    isiPesan: sambalWa ? sambalWa.split('?text=')[1].slice(0, 200) : null
  }, null, 2);
})()"

echo ""
echo "=== 6. Semua gambar termuat (naturalWidth) ==="
agent-browser eval "(async () => {
  for (let y = 0; y <= document.body.scrollHeight; y += 400) {
    window.scrollTo(0, y);
    await new Promise(r => setTimeout(r, 120));
  }
  window.scrollTo(0, 0);
  await new Promise(r => setTimeout(r, 800));
  const imgs = [...document.querySelectorAll('img')];
  const gagal = imgs.filter(i => i.complete && i.naturalWidth === 0).map(i => i.src);
  return JSON.stringify({ totalImg: imgs.length, gagal: gagal.length === 0 ? 'TIDAK ADA' : gagal }, null, 2);
})()"

echo ""
echo "=== 7. Hero strip & FAQ ==="
agent-browser eval "(() => {
  const txt = document.body.innerText;
  return JSON.stringify({
    heroStrip: txt.includes('Sambal pecel kering') && txt.includes('Rp5rb'),
    faqKering: txt.includes('kok bentuknya kering'),
    faqAwet: txt.includes('awet berapa lama'),
    galeriJudul: txt.includes('Sambal Pecel Kering')
  }, null, 2);
})()"

echo ""
echo "SELESAI"
