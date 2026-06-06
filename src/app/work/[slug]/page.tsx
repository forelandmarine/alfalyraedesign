import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PROJECTS, getProject } from '@/lib/projects';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return { title: 'Work' };
  return {
    title: project.name,
    description: project.body?.[0] ?? project.type,
  };
}

export default async function ProjectPage(
  props: { params: Promise<{ slug: string }> },
) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <>
      <Header />
      <main className="bg-[#0c1a2e] text-[#f5f0e8]">
        {/* Title block */}
        <section className="px-8 md:px-20 pt-36 md:pt-44 pb-16 md:pb-20">
          <div className="max-w-[1280px] mx-auto">
            <Link
              href="/#work"
              className="inline-block text-[10px] tracking-[0.22em] uppercase text-[#f5f0e8]/55 hover:text-[#f5f0e8] mb-12"
            >
              ← All work
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20 items-end">
              <h1
                className="font-light leading-[1.02] text-[#f5f0e8]"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(44px, 6vw, 96px)',
                }}
              >
                {project.name}
              </h1>

              <dl className="grid grid-cols-[110px_1fr] gap-y-3 gap-x-6 text-[11.5px] leading-[1.85] font-light text-[#f5f0e8]/80">
                <dt className="text-[9px] tracking-[0.14em] uppercase text-[#b8966b] font-medium pt-[3px]">Type</dt>
                <dd>{project.type}</dd>
                <dt className="text-[9px] tracking-[0.14em] uppercase text-[#b8966b] font-medium pt-[3px]">Kind</dt>
                <dd className="capitalize">{project.kind}</dd>
                {project.partner && (
                  <>
                    <dt className="text-[9px] tracking-[0.14em] uppercase text-[#b8966b] font-medium pt-[3px]">With</dt>
                    <dd>
                      {project.partnerUrl ? (
                        <a
                          href={project.partnerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4 decoration-[rgba(245,240,232,0.32)] hover:decoration-[#f5f0e8]"
                        >
                          {project.partner}
                        </a>
                      ) : (
                        project.partner
                      )}
                    </dd>
                  </>
                )}
              </dl>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-8 md:px-20 pb-20">
          <div className="max-w-[1280px] mx-auto">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0a1525]">
              <Image
                src={project.cover}
                alt={`${project.name} cover image`}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1280px) 1280px, 100vw"
              />
            </div>
          </div>
        </section>

        {/* Body copy */}
        {project.body && project.body.length > 0 && (
          <section className="px-8 md:px-20 py-12 md:py-20">
            <div className="max-w-[820px] mx-auto">
              {project.body.map((para, i) => (
                <p
                  key={i}
                  className="text-[15px] md:text-[17px] leading-[1.85] text-[#f5f0e8]/85 font-light mb-6 last:mb-0"
                >
                  {para}
                </p>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        {project.images.length > 1 && (
          <section className="px-8 md:px-20 pt-12 md:pt-16 pb-28 md:pb-40">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {project.images.slice(1).map((src, i) => (
                <div
                  key={src}
                  className={[
                    'relative overflow-hidden bg-[#0a1525]',
                    i % 3 === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]',
                  ].join(' ')}
                >
                  <Image
                    src={src}
                    alt={`${project.name}, image ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 1280px, 100vw"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Next */}
        <section className="px-8 md:px-20 pt-16 pb-28 md:pb-32 border-t border-[rgba(245,240,232,0.10)]">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#b8966b] mb-4">
                Next project
              </p>
              <Link href={`/work/${next.slug}`}>
                <h3
                  className="font-light leading-[1.05] text-[#f5f0e8] hover:text-[#b8966b] transition-colors"
                  style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: 'clamp(36px, 4vw, 64px)',
                  }}
                >
                  {next.name}
                </h3>
              </Link>
              <p className="text-[11.5px] tracking-[0.04em] text-[#f5f0e8]/55 mt-2">
                {next.type}
              </p>
            </div>
            <Link
              href={`/work/${next.slug}`}
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
