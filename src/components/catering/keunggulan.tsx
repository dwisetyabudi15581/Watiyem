import { Flame, Wallet, Clock, UtensilsCrossed, ShieldCheck, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { KEUNGGULAN } from "@/lib/catering-data";

const IKON = {
  flame: Flame,
  wallet: Wallet,
  clock: Clock,
  utensils: UtensilsCrossed,
  shield: ShieldCheck,
  chat: MessageCircle,
} as const;

export function Keunggulan() {
  return (
    <section className="bg-white py-14 lg:py-20" aria-labelledby="judul-keunggulan">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Kenapa Watiyem
          </p>
          <h2
            id="judul-keunggulan"
            className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            Keunggulan yang Bisa Anda Rasakan di Tiap Porsi
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/65">
            Cari catering di Magetan yang masakannya enak, harganya masuk akal, dan tidak
            pernah telat mengantar? Anda sudah ketemu tempatnya.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {KEUNGGULAN.map((item) => {
            const Ikon = IKON[item.ikon];
            return (
              <Card
                key={item.judul}
                className="group border-brand-border bg-white transition-shadow hover:shadow-lg hover:shadow-brand/5"
              >
                <CardContent className="flex gap-4 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Ikon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{item.judul}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/65">
                      {item.teks}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
