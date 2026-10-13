import Link from "next/link";
import { MapPin, Phone, Clock, UtensilsCrossed, ExternalLink } from "lucide-react";
import { BISNIS, PESAN_WA } from "@/lib/catering-data";

const NAV_FOOTER = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#menu", label: "Menu & Harga" },
  { href: "#galeri", label: "Galeri" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#cara-pesan", label: "Cara Pesan" },
  { href: "#testimoni", label: "Testimoni" },
];

const MAPS_EMBED =
  "https://maps.google.com/maps?q=Catering+Watiyem@-7.5596481,111.4541782&z=17&hl=id&output=embed";

export function Footer() {
  return (
    <footer
      id="kontak"
      className="border-t border-brand-border bg-brand-surface"
      aria-labelledby="judul-footer"
    >
      <h2 id="judul-footer" className="sr-only">
        Informasi kontak Catering Watiyem
      </h2>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-white">
              <UtensilsCrossed className="size-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              Catering Watiyem
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/65">
            Dapur rumahan di Tebon, Magetan Barat, yang setiap hari menyiapkan nasi
            box, prasmanan, langganan makan siang, dan snack box untuk warga Magetan
            dan sekitarnya. Semua menu dimasak fresh, bumbunya diracik sendiri, dan
            porsinya jujur — karena bagi kami, acara Anda adalah reputasi kami.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Kontak
          </h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-foreground/70">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={BISNIS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed underline-offset-4 hover:text-brand hover:underline"
              >
                {BISNIS.alamat}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
              <a
                href={PESAN_WA.umum}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline-offset-4 hover:text-brand hover:underline"
              >
                {BISNIS.telepon} (WhatsApp)
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
              <span>{BISNIS.jam}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Jelajahi
          </h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            {NAV_FOOTER.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/70 underline-offset-4 hover:text-brand hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-brand-border shadow-sm">
          <iframe
            src={MAPS_EMBED}
            title="Peta lokasi Catering Watiyem di Setro, Tebon, Magetan Barat"
            className="h-64 w-full sm:h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          {/* Kartu lokasi overlay — meniru kartu bisnis Google Maps */}
          <div className="pointer-events-none absolute left-3 top-3 max-w-[85%] rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur sm:left-4 sm:top-4">
            <p className="flex items-center gap-1.5 text-sm font-extrabold text-foreground">
              <MapPin className="size-4 shrink-0 text-brand" aria-hidden="true" />
              Catering Watiyem
            </p>
            <p className="mt-1 text-xs leading-snug text-foreground/70">
              {BISNIS.alamat}
            </p>
            <a
              href={BISNIS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto mt-1.5 inline-flex items-center gap-1 text-xs font-bold text-brand underline-offset-2 hover:underline"
            >
              Buka di Google Maps
              <ExternalLink className="size-3" aria-hidden="true" />
            </a>
          </div>
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Plus Code: {BISNIS.plusCode}
        </p>
      </div>

      <div className="border-t border-brand-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} Catering Watiyem — Magetan, Jawa Timur.
          </p>
          <p>Area layanan: {BISNIS.area}</p>
        </div>
      </div>
    </footer>
  );
}
