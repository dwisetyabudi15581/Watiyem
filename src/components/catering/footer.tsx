import Link from "next/link";
import { MapPin, Phone, Clock, UtensilsCrossed } from "lucide-react";
import { BISNIS, PESAN_WA } from "@/lib/catering-data";

const NAV_FOOTER = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#menu", label: "Menu & Harga" },
  { href: "#cara-pesan", label: "Cara Pesan" },
  { href: "#testimoni", label: "Testimoni" },
];

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
