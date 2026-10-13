import Image from "next/image";
import { Phone, ChevronDown, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BISNIS, PESAN_WA } from "@/lib/catering-data";

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-brand-surface">
      {/* Dekorasi latar lembut */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[480px] rounded-full bg-brand-soft"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 -left-40 size-[420px] rounded-full bg-brand-soft"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-20 lg:pt-16">
        <div className="flex flex-col items-start">
          <Badge
            variant="outline"
            className="mb-5 gap-1.5 rounded-full border-brand-border bg-white px-3 py-1.5 text-xs font-semibold text-brand shadow-sm"
          >
            <MapPin className="size-3.5" aria-hidden="true" />
            Melayani Magetan &amp; sekitarnya, Jawa Timur
          </Badge>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Sambal Pecel Madiun &amp;{" "}
            <span className="text-brand">Katering Lezat</span> di Magetan
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            {BISNIS.subTagline} Pesan semudah chat{" "}
            <strong className="font-semibold text-foreground">WhatsApp!</strong>
          </p>

          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 bg-wa px-7 text-base font-semibold text-white shadow-lg shadow-wa/25 hover:bg-wa-dark"
            >
              <a
                href={PESAN_WA.umum}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat Watiyem via WhatsApp sekarang"
              >
                <Phone className="size-5" aria-hidden="true" />
                Pesan via WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-brand-border bg-white px-7 text-base font-semibold text-brand-dark hover:bg-brand-soft hover:text-brand"
            >
              <a href="#menu" aria-label="Lihat menu dan harga lengkap">
                Lihat Menu &amp; Harga
                <ChevronDown className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/60">
            <span className="flex items-center gap-1.5">
              <span className="flex text-amber-500" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span className="sr-only">Rating 5 dari 5 bintang</span>
              <span className="font-medium text-foreground/80">
                Dipercaya acara di Magetan
              </span>
            </span>
            <span className="hidden h-4 w-px bg-brand-border sm:block" aria-hidden="true" />
            <span>
              Nasi box mulai <strong className="font-semibold text-brand">Rp15rb</strong>
            </span>
            <span className="hidden h-4 w-px bg-brand-border sm:block" aria-hidden="true" />
            <span>Snack box mulai <strong className="font-semibold text-brand">Rp8rb</strong></span>
            <span className="hidden h-4 w-px bg-brand-border sm:block" aria-hidden="true" />
            <span>
              Sambal pecel botol <strong className="font-semibold text-brand">Rp15rb</strong>
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-8 border-white shadow-2xl shadow-brand/15">
            <Image
              src="/images/hero.jpg"
              alt="Nasi box katering Magetan berisi nasi kuning, ayam bumbu, sayur, dan lauk pendamping dari Watiyem"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded-2xl bg-white px-5 py-3 shadow-xl shadow-brand/10 sm:left-8">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Dimasak fresh
            </p>
            <p className="text-sm font-bold text-foreground">
              setiap pagi, dari dapur rumahan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
