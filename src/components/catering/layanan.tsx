import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { LAYANAN } from "@/lib/catering-data";

export function Layanan() {
  return (
    <section
      id="layanan"
      className="bg-brand-surface py-14 lg:py-20"
      aria-labelledby="judul-layanan"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Layanan Kami
          </p>
          <h2
            id="judul-layanan"
            className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            Empat Layanan untuk Setiap Acara Anda
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/65">
            Dari rapat kantor sampai syukuran keluarga — tinggal pilih, kami yang sibuk
            di dapur.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LAYANAN.map((layanan) => (
            <Card
              key={layanan.id}
              className="flex flex-col overflow-hidden border-brand-border bg-white transition-shadow hover:shadow-xl hover:shadow-brand/10"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={layanan.gambar}
                  alt={layanan.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <Badge className="absolute left-3 top-3 bg-white/95 text-xs font-bold text-brand shadow-sm">
                  {layanan.minOrder}
                </Badge>
              </div>

              <CardContent className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-foreground">{layanan.nama}</h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                  {layanan.deskripsi}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {layanan.cocok.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand-dark"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex flex-col items-stretch gap-3 border-t border-brand-border p-5 pt-4">
                <p className="text-2xl font-extrabold tracking-tight text-foreground">
                  {layanan.hargaMulai}
                  <span className="text-sm font-medium text-muted-foreground">
                    {" "}
                    {layanan.satuan}
                  </span>
                </p>
                <Button
                  asChild
                  className="w-full bg-wa font-semibold text-white hover:bg-wa-dark"
                >
                  <a
                    href={layanan.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Pesan layanan ${layanan.nama} via WhatsApp`}
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    Pesan Sekarang
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
