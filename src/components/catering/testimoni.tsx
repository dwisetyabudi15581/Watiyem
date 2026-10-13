import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONI } from "@/lib/catering-data";

export function Testimoni() {
  return (
    <section
      id="testimoni"
      className="bg-white py-14 lg:py-20"
      aria-labelledby="judul-testimoni"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Kata Pelanggan
          </p>
          <h2
            id="judul-testimoni"
            className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            Acara Mereka Berjalan Lancar, Ini Buktinya
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/65">
            Dari rapat kantor sampai syukuran keluarga — inilah kata mereka setelah
            menikmati masakan Catering Watiyem.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONI.map((t) => (
            <Card
              key={t.nama}
              className="relative border-brand-border bg-brand-surface/60 transition-shadow hover:shadow-md"
            >
              <CardContent className="flex h-full flex-col p-6">
                <Quote
                  className="absolute right-5 top-5 size-6 text-brand-border"
                  aria-hidden="true"
                />
                <div className="flex text-amber-500" aria-label="5 dari 5 bintang">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/75">
                  &ldquo;{t.teks}&rdquo;
                </blockquote>
                <footer className="mt-4 text-sm">
                  <p className="font-bold text-foreground">{t.nama}</p>
                  <p className="text-muted-foreground">{t.asal}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
