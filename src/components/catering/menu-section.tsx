"use client";

import * as React from "react";
import { Phone, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { LAYANAN, MENU_TABS, PESAN_WA } from "@/lib/catering-data";

const WA_PER_TAB: Record<string, string> = {
  "nasi-box": PESAN_WA.nasiBox,
  prasmanan: PESAN_WA.prasmanan,
  harian: PESAN_WA.harian,
  "snack-box": PESAN_WA.snackBox,
  "sambal-pecel": PESAN_WA.sambalPecel,
};

export function MenuSection() {
  return (
    <section id="menu" className="bg-white py-14 lg:py-20" aria-labelledby="judul-menu">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Menu &amp; Harga
          </p>
          <h2
            id="judul-menu"
            className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            Harga Transparan, Tanpa Biaya Tersembunyi
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/65">
            Pilih kategori layanan untuk melihat paket lengkap. Harga dapat berubah
            mengikuti harga bahan — konfirmasi terbaru selalu via WhatsApp.
          </p>
        </div>

        <Tabs defaultValue="nasi-box" className="mt-10">
          <TabsList className="mx-auto flex h-auto w-full max-w-2xl flex-wrap justify-center gap-1 rounded-xl bg-brand-soft p-1.5">
            {Object.entries(MENU_TABS).map(([key, tab]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="rounded-lg px-4 py-2.5 text-sm font-semibold data-[state=active]:bg-white data-[state=active]:text-brand data-[state=active]:shadow-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(MENU_TABS).map(([key, tab]) => {
            const layanan = LAYANAN.find((l) => l.id === key);
            return (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="grid gap-4 lg:grid-cols-3">
                  {tab.paket.map((paket, i) => (
                    <div
                      key={paket.nama}
                      className={
                        i === 2
                          ? "relative flex flex-col rounded-2xl border-2 border-brand bg-white p-6 shadow-lg shadow-brand/10"
                          : "flex flex-col rounded-2xl border border-brand-border bg-white p-6 transition-shadow hover:shadow-md"
                      }
                    >
                      {i === 2 && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
                          Paling Lengkap
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-foreground">{paket.nama}</h3>
                      <p className="mt-1 text-3xl font-extrabold tracking-tight text-brand">
                        {paket.harga}
                      </p>
                      <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-foreground/70">
                        {paket.isi.split("·").map((item) => (
                          <li key={item} className="flex gap-2">
                            <BadgeCheck
                              className="mt-0.5 size-4 shrink-0 text-brand"
                              aria-hidden="true"
                            />
                            <span>{item.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className="mt-5 rounded-xl bg-brand-soft px-5 py-4 text-sm leading-relaxed text-foreground/70">
                  <strong className="font-semibold text-brand-dark">
                    {layanan?.minOrder ?? "Min. order berlaku"}
                  </strong>{" "}
                  — {tab.catatan}
                </p>

                <div className="mt-5 flex justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 bg-wa px-8 text-base font-semibold text-white shadow-lg shadow-wa/25 hover:bg-wa-dark"
                  >
                    <a
                      href={WA_PER_TAB[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Pesan paket ${tab.label} via WhatsApp`}
                    >
                      <Phone className="size-5" aria-hidden="true" />
                      Pesan {tab.label} via WhatsApp
                    </a>
                  </Button>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
