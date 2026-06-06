import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StockImage from '@/components/StockImage';
import {
  YachtDesignIcon,
  ProductDesignIcon,
  PrintingIcon,
  ManagementIcon,
} from '@/components/icons';
import { PRACTICE, getPractice } from '@/lib/practice';

const ICONS = {
  yacht: YachtDesignIcon,
  product: ProductDesignIcon,
  printing: PrintingIcon,
  management: ManagementIcon,
};

export function generateStaticParams() {
  return PRACTICE.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await props.params;
  const area = getPractice(slug);
  if (!area) return { title: 'Practice' };
  return {
    title: area.title,
    description: area.oneLine,
  };
}

export default async function PracticeAreaPage(
  props: { params: Promise<{ slug: string }> },
) {
  const { slug } = await props.params;
  const area = getPractice(slug);
  if (!area) notFound();

  const Icon = ICONS[area.iconKey];

  const idx = PRACTICE.findIndex((p) => p.slug === slug);
  const next = PRACTICE[(idx + 1) % PRACTICE.length];

  return (
    <>
      <Header />
      <main className="bg-[#0c1a2e] text-[#f5f0e8]">
        {/* Title block */}
        <section className="px-8 md:px-20 pt-36 md:pt-44 pb-16 md:pb-20">
          <div className="max-w-[1280px] mx-auto">
            <Link
              href="/#practice"
              className="inline-block text-[10px] tracking-[0.22em] uppercase text-[#f5f0e8]/55 hover:text-[#f5f0e8] mb-12"
            >
              ← All practice
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-10 md:gap-16 items-end">
              <div className="w-16 h-16 md:w-20 md:h-20 text-[#b8966b]">
                <Icon className="w-full h-full" />
              </div>
              <h1
                className="font-light leading-[1.02] text-[#f5f0e8]"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(44px, 6vw, 96px)',
                }}
              >
                {area.title}
              </h1>
              <p
                className="font-light italic text-[#f5f0e8]/72 leading-[1.4]"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(18px, 1.6vw, 24px)',
                }}
              >
                {area.oneLine}
              </p>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-8 md:px-20 pb-20">
          <div className="max-w-[1280px] mx-auto">
            <StockImage
              containerClassName="aspect-[16/9] overflow-hidden bg-[#0a1525]"
              src={area.hero}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
          </div>
        </section>

        {/* Lead + highlights */}
        <section className="px-8 md:px-20 py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16 md:gap-24 items-start">
            <p className="text-[16px] md:text-[18px] leading-[1.75] text-[#f5f0e8]/85 font-light">
              {area.lead}
            </p>

            <dl className="border-l border-[rgba(245,240,232,0.15)] pl-8">
              <dt className="text-[9px] tracking-[0.20em] uppercase text-[#b8966b] mb-6">
                The studio standard
              </dt>
              {area.highlights.map((h, i) => (
                <dd
                  key={i}
                  className="text-[13px] leading-[1.7] text-[#f5f0e8]/80 font-light py-3 border-b border-[rgba(245,240,232,0.08)] last:border-b-0"
                >
                  {h}
                </dd>
              ))}
            </dl>
          </div>
        </section>

        {/* Process */}
        <section className="px-8 md:px-20 py-20 md:py-28 border-t border-[rgba(245,240,232,0.10)]">
          <div className="max-w-[1280px] mx-auto">
            <h2
              className="font-light italic text-[#f5f0e8] mb-16 md:mb-20"
              style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(28px, 3vw, 46px)',
              }}
            >
              How <span style={{ color: '#b8966b' }}>we work</span>.
            </h2>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
              {area.process.map((step) => (
                <li
                  key={step.n}
                  className="grid grid-cols-[60px_1fr] gap-6 py-8 border-b border-[rgba(245,240,232,0.10)] last:border-b-0"
                >
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[#b8966b] pt-[5px]">
                    {step.n}
                  </span>
                  <div>
                    <h3
                      className="font-light text-[#f5f0e8] mb-3"
                      style={{
                        fontFamily: 'var(--font-cormorant), Georgia, serif',
                        fontSize: 'clamp(22px, 1.8vw, 28px)',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[13.5px] leading-[1.8] text-[#f5f0e8]/72 font-light">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        {area.images.length > 0 && (
          <section className="px-8 md:px-20 py-20 md:py-28 border-t border-[rgba(245,240,232,0.10)]">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {area.images.map((src, i) => (
                <StockImage
                  key={src}
                  containerClassName={[
                    'overflow-hidden bg-[#0a1525]',
                    i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]',
                  ].join(' ')}
                  src={src}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 1280px, 100vw"
                />
              ))}
            </div>
          </section>
        )}

        {/* Next practice area */}
        <section className="px-8 md:px-20 pt-16 pb-28 md:pb-32 border-t border-[rgba(245,240,232,0.10)]">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#b8966b] mb-4">
                Next discipline
              </p>
              <Link href={`/practice/${next.slug}`}>
                <h3
                  className="font-light leading-[1.05] text-[#f5f0e8] hover:text-[#b8966b] transition-colors"
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: 'clamp(36px, 4vw, 64px)',
                  }}
                >
                  {next.title}
                </h3>
              </Link>
              <p className="text-[12.5px] italic text-[#f5f0e8]/55 mt-2 font-light"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}>
                {next.oneLine}
              </p>
            </div>
            <Link
              href={`/practice/${next.slug}`}
              className="inline-flex items-center gap-3 border border-[#f5f0e8] px-7 py-3 text-[10px] tracking-[0.22em] uppercase font-medium text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#0c1a2e] transition-colors w-fit"
            >
              View
              <span aria-hidden className="text-[#b8966b]">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
