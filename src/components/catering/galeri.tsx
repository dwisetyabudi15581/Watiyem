import Image from "next/image";
import { GALERI } from "@/lib/catering-data";

export function Galeri() {
  return (
    <section
      id="galeri"
      className="bg-brand-surface py-14 lg:py-20"
      aria-labelledby="judul-galeri"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-brand">
            Galeri Foto
          </p>
          <h2
            id="judul-galeri"
            className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            Langsung dari Dapur Kami
          </h2>
          <p className="mt-3 text-base leading-relaxed text-foreground/65">
            Beginilah rupa nasi box, stand prasmanan, dan tumpeng yang kami
            siapkan setiap hari untuk acara warga Magetan dan sekitarnya.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GALERI.map((foto) => (
            <figure
              key={foto.gambar}
              className="group relative overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-brand/10"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={foto.gambar}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-bold text-white drop-shadow-sm">
                    {foto.judul}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-white/85 opacity-95">
                    {foto.teks}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
