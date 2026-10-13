import Image from "next/image";
import { Phone, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TENTANG, PESAN_WA } from "@/lib/catering-data";

export function TentangKami() {
  return (
    <section
      id="tentang"
      className="bg-white py-14 lg:py-20"
      aria-labelledby="judul-tentang"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Foto Bu Watiyem */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-3 -rotate-1 rounded-3xl bg-brand-soft" aria-hidden="true" />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl shadow-brand/10">
              <Image
                src={TENTANG.foto}
                alt={TENTANG.fotoAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <span className="absolute -bottom-4 left-4 rounded-full bg-wa px-4 py-2 text-xs font-bold text-white shadow-lg sm:left-6">
              Dapur Tebon, Magetan Barat
            </span>
          </div>

          {/* Narasi */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
              {TENTANG.kicker}
            </p>
            <h2
              id="judul-tentang"
              className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
            >
              {TENTANG.judul}
            </h2>

            {TENTANG.paragraf.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-4 text-base leading-relaxed text-foreground/70"
              >
                {p}
              </p>
            ))}

            {/* Kutipan */}
            <figure className="mt-6 rounded-2xl border-l-4 border-brand bg-brand-surface p-5">
              <Quote className="size-5 text-brand/60" aria-hidden="true" />
              <blockquote className="mt-2 text-sm font-medium italic leading-relaxed text-foreground/80">
                &ldquo;{TENTANG.kutipan.teks}&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-xs font-bold text-brand">
                — {TENTANG.kutipan.pembicara}
              </figcaption>
            </figure>

            {/* Statistik */}
            <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {TENTANG.statistik.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-brand-border bg-white p-4 text-center"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-lg font-extrabold text-brand">{s.angka}</dd>
                  <dd className="mt-1 text-xs leading-snug text-foreground/60">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>

            <Button
              asChild
              className="mt-6 bg-wa font-semibold text-white hover:bg-wa-dark"
            >
              <a
                href={PESAN_WA.umum}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat langsung dengan Catering Watiyem via WhatsApp"
              >
                <Phone className="size-4" aria-hidden="true" />
                Chat Langsung dengan Bu Watiyem
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
