#!/bin/bash
# Screenshot lengkap untuk VLM QA perubahan sambal pecel kering
set -e
P=/home/z/my-project/scripts/preview

# Desktop 1280
agent-browser set viewport 1280 900
agent-browser navigate http://localhost:3000
sleep 2

# 1. Tab menu Sambal Pecel aktif
agent-browser eval "(() => { const t = [...document.querySelectorAll('[role=tab]')].find(x => x.textContent.trim() === 'Sambal Pecel'); if (!t) return null; t.scrollIntoView({block: 'center'}); const r = t.getBoundingClientRect(); return JSON.stringify({x: Math.round(r.x + r.width/2), y: Math.round(r.y + r.height/2)}); })()"
sleep 0.5
agent-browser mouse move 900 450
agent-browser mouse down
agent-browser mouse up
sleep 1.5
agent-browser eval "(() => { const v = [...document.querySelectorAll('[role=tabpanel]')].find(p => p.offsetParent !== null); return v ? 'TAB SAMBAL AKTIF: ' + v.innerText.slice(0, 60) : 'GAGAL'; })()"
agent-browser screenshot $P/sambal-menu-tab.png

# 2. Kartu produk sambal (foto baru)
agent-browser eval "(() => { const c = [...document.querySelectorAll('img')].find(i => i.src.includes('sambal-pecel.jpg')); if (c) c.scrollIntoView({block: 'center'}); return c ? 'ok' : 'ketemu tidak'; })()"
sleep 1
agent-browser screenshot $P/sambal-kartu-produk.png

# 3. Galeri sambal kering (cobek)
agent-browser eval "(() => { const g = [...document.querySelectorAll('img')].find(i => i.src.includes('galeri-sambal.jpg')); if (g) g.scrollIntoView({block: 'center'}); return g ? 'ok' : 'ketemu tidak'; })()"
sleep 1
agent-browser screenshot $P/sambal-galeri.png

# 4. Mobile hero
agent-browser set viewport 390 844
agent-browser navigate http://localhost:3000
sleep 2
agent-browser screenshot $P/sambal-hero-mobile.png

echo "SEMUA SCREENSHOT SELESAI"
ls -la $P/sambal-*.png
