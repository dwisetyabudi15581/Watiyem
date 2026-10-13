"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, UtensilsCrossed, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BISNIS, PESAN_WA } from "@/lib/catering-data";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#beranda", label: "Beranda" },
  { href: "#layanan", label: "Layanan" },
  { href: "#menu", label: "Menu & Harga" },
  { href: "#galeri", label: "Galeri" },
  { href: "#tentang", label: "Tentang" },
  { href: "#cara-pesan", label: "Cara Pesan" },
  { href: "#kontak", label: "Kontak" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="#beranda"
          className="flex items-center gap-2.5"
          aria-label="Catering Watiyem — kembali ke beranda"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
            <UtensilsCrossed className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight text-foreground sm:text-lg">
              Catering Watiyem
            </span>
            <span className="hidden text-[11px] font-medium text-muted-foreground sm:block">
              Magetan &amp; sekitarnya
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-brand-soft hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden bg-wa text-white shadow-sm hover:bg-wa-dark sm:inline-flex"
            size="default"
          >
            <a
              href={PESAN_WA.umum}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pesan catering via WhatsApp"
            >
              <Phone className="size-4" aria-hidden="true" />
              Pesan via WhatsApp
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-brand-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            <Menu className="size-5" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {/* Menu mobile */}
      <nav
        className={cn(
          "border-t border-brand-border bg-white lg:hidden",
          open ? "block" : "hidden"
        )}
        aria-label="Navigasi seluler"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-brand-soft hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={PESAN_WA.umum}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-wa px-3 py-3 text-sm font-semibold text-white"
          >
            <Phone className="size-4" aria-hidden="true" />
            Pesan via WhatsApp — {BISNIS.telepon}
          </a>
        </div>
      </nav>
    </header>
  );
}
