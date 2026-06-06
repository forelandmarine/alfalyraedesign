import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedSection() {
  return (
    <section
      id="featured"
      className="bg-[#0c1a2e] text-[#f5f0e8] px-8 md:px-20 py-28 md:py-40 border-t border-[rgba(245,240,232,0.10)]"
    >
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-center">
        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-[#b8966b] mb-6">
            New from the studio
          </p>
          <h2
            className="font-light leading-[1.06] text-[#f5f0e8]"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontSize: 'clamp(40px, 5vw, 78px)',
            }}
          >
            Alpha Lyrae{' '}
            <span style={{ color: '#b8966b' }}>950</span>
          </h2>
          <p className="text-[13px] tracking-[0.04em] text-[#f5f0e8]/65 mt-4 font-light">
            A 9.5 metre sailing yacht. Drawn in-house from first principles.
          </p>

          <p className="text-[14px] md:text-[15px] leading-[1.85] text-[#f5f0e8]/72 font-light mt-10 max-w-[520px]">
            The studio&apos;s flagship hull. Developed as a complete digital
            twin before any build, the 950 carries the studio&apos;s approach
            to fast cruising in the Mediterranean: a light displacement form,
            fixed fin keel and fractional rig.
          </p>

          <Link
            href="/work/alpha-lyrae-950"
            className="inline-flex items-center gap-3 mt-12 border border-[#f5f0e8] px-7 py-3 text-[10px] tracking-[0.22em] uppercase font-medium text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#0c1a2e] transition-colors"
          >
            See the project
            <span aria-hidden className="text-[#b8966b] group-hover:text-[#0c1a2e]">→</span>
          </Link>
        </div>

        <div className="relative aspect-[16/11] overflow-hidden bg-[#0a1525]">
          <Image
            src="/images/classe950/CLASSE950-0.png"
            alt="Alpha Lyrae 950 hull rendering"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 56vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
