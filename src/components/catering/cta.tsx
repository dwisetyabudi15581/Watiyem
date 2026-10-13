import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BISNIS, FAQ, PESAN_WA } from "@/lib/catering-data";

export function Cta() {
  return (
    <section className="bg-white pb-14 lg:pb-20" aria-labelledby="judul-faq">
      {/* Banner ajakan utama */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-7 py-12 text-center shadow-xl shadow-brand/25 sm:px-10 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-16 size-72 rounded-full bg-white/10"
          />
          <h2 className="relative mx-auto max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
            Laper? Chat Sekarang — Menu Hari Ini Bisa Langsung Kita Atur!
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/85">
            Konsultasi gratis, tanpa minimum transaksi. Kabari saja tanggal acara,
            jumlah tamu, dan budget Anda — sisanya biarkan dapur kami yang sibuk.
          </p>
          <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-13 bg-wa px-8 text-base font-bold text-white shadow-lg hover:bg-wa-dark"
            >
              <a
                href={PESAN_WA.umum}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pesan sambal pecel & katering via WhatsApp sekarang"
              >
                <Phone className="size-5" aria-hidden="true" />
                Pesan via WhatsApp
              </a>
            </Button>
            <p className="text-sm font-medium text-white/80">
              {BISNIS.telepon} · {BISNIS.jam}
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Tanya Jawab
          </p>
          <h2
            id="judul-faq"
            className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/65">
            Jawaban cepat sebelum Anda chat — kalau masih ada yang mau ditanyakan,
            kami siap di WhatsApp.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-8">
          {FAQ.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-brand-border"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-brand hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-foreground/70">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
