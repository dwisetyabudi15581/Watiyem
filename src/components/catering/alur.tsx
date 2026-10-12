import Image from "next/image";
import { Phone, MessageCircle, ClipboardList, CalendarCheck, ChefHat, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ALUR_PESAN, BISNIS, PESAN_WA } from "@/lib/catering-data";

const IKON_ALUR = [
  MessageCircle,
  ClipboardList,
  CalendarCheck,
  ChefHat,
] as const;

export function Alur() {
  return (
    <section
      id="cara-pesan"
      className="bg-brand-surface py-14 lg:py-20"
      aria-labelledby="judul-alur"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Cara Pesan
          </p>
          <h2
            id="judul-alur"
            className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            Alur Pemesanan Semudah Chat Tetangga
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/65">
            Tidak perlu aplikasi, tidak perlu formulir panjang — empat langkah dan
            makanan siap datang di lokasi acara Anda.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ALUR_PESAN.map((langkah, i) => {
            const Ikon = IKON_ALUR[i];
            return (
              <li
                key={langkah.judul}
                className="relative flex flex-col rounded-2xl border border-brand-border bg-white p-6"
              >
                <span className="absolute right-5 top-4 text-4xl font-extrabold text-brand-soft">
                  {i + 1}
                </span>
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand text-white shadow-sm">
                  <Ikon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {langkah.judul}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                  {langkah.teks}
                </p>
              </li>
            );
          })}
        </ol>

        {/* Banner tumpengan untuk acara syukuran */}
        <div className="mt-12 grid overflow-hidden rounded-3xl border border-brand-border bg-white shadow-lg shadow-brand/5 lg:grid-cols-5">
          <div className="relative h-52 lg:col-span-2 lg:h-auto">
            <Image
              src="/images/tumpeng.jpg"
              alt="Tumpengan nasi kuning untuk acara syukuran di Magetan dari Catering Watiyem"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-7 lg:col-span-3 lg:p-10">
            <div className="flex items-center gap-2">
              <Star className="size-5 fill-amber-500 text-amber-500" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-widest text-brand">
                Paket Syukuran Keluarga
              </p>
            </div>
            <h3 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
              Tumpengan Grand + Prasmanan untuk 50 Tamu
            </h3>
            <p className="text-sm leading-relaxed text-foreground/65 sm:text-base">
              Acara syukuran, selamatan, atau syukuran rumah baru jadi lebih berkesan:
              tumpengan lengkap dengan lauk komplit, prasmanan untuk tamu, snack box
              pendamping, sampai es teh — semua diantar 2 jam sebelum acara dimulai.
              Mulai <strong className="font-bold text-brand">Rp 1.450.000</strong>.
            </p>
            <div>
              <Button
                asChild
                className="bg-wa font-semibold text-white hover:bg-wa-dark"
              >
                <a
                  href={PESAN_WA.syukuran}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Konsultasi paket syukuran tumpengan via WhatsApp"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  Konsultasi Paket Syukuran
                </a>
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Pertanyaan lain? Chat kami setiap hari {BISNIS.jam.toLowerCase()} —{" "}
          <a
            href={PESAN_WA.umum}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand underline-offset-4 hover:underline"
          >
            {BISNIS.telepon}
          </a>
        </p>
      </div>
    </section>
  );
}
