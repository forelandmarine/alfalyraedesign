import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';

export default function GallerySection() {
  return (
    <section
      id="work"
      className="bg-[#0c1a2e] text-[#f5f0e8] px-8 md:px-20 py-28 md:py-40 border-t border-[rgba(245,240,232,0.10)]"
    >
      <div className="max-w-[1280px] mx-auto">
        <h2
          className="font-light leading-[1.18] text-[#f5f0e8] max-w-[920px] pb-20 md:pb-24 border-b border-[rgba(245,240,232,0.10)]"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(28px, 3vw, 46px)',
            fontStyle: 'italic',
          }}
        >
          <span style={{ color: '#b8966b' }}>Work</span> from the studio.
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 pt-16 md:pt-24">
          {PROJECTS.map((p) => (
            <li key={p.slug}>
              <Link href={`/work/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0a1525]">
                  <Image
                    src={p.cover}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex items-baseline justify-between mt-6">
                  <h3
                    className="font-light text-[#f5f0e8] group-hover:text-[#b8966b] transition-colors"
                    style={{
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                      fontSize: 'clamp(22px, 2vw, 30px)',
                    }}
                  >
                    {p.name}
                  </h3>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[#b8966b]">
                    {p.kind === 'studio' ? 'Studio' : 'Collab'}
                  </span>
                </div>
                <p className="text-[11.5px] tracking-[0.04em] text-[#f5f0e8]/55 mt-1">
                  {p.type}
                  {p.partner ? ` · with ${p.partner}` : ''}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
