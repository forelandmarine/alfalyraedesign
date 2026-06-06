import Link from 'next/link';
import {
  YachtDesignIcon,
  ProductDesignIcon,
  PrintingIcon,
  ManagementIcon,
} from '@/components/icons';

const SERVICES = [
  {
    n: '01',
    title: 'Yacht Design & Build',
    slug: 'build',
    Icon: YachtDesignIcon,
    body:
      'From the offset table to the launch crane. Concept, lines plan, hull form, structure and build supervision, carried by one studio.',
  },
  {
    n: '02',
    title: 'Product Design',
    slug: 'product-design',
    Icon: ProductDesignIcon,
    body:
      'Marine objects designed end to end. Deck hardware, instrument housings, custom interiors, in plastics, composites and machined metal.',
  },
  {
    n: '03',
    title: '3D Printing',
    slug: '3d-printing',
    Icon: PrintingIcon,
    body:
      'A printing line in the studio. Form studies, functional prototypes, one-off marine components and yard tooling, all in-house.',
  },
  {
    n: '04',
    title: 'Project Management',
    slug: 'project-management',
    Icon: ManagementIcon,
    body:
      'One studio inbox between owner and yard. Specification, schedule, change control and sea trial, run from the drawing office.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="practice"
      className="bg-[#0c1a2e] text-[#f5f0e8] px-8 md:px-20 py-28 md:py-40"
    >
      <div className="max-w-[1280px] mx-auto">
        <h2
          className="font-light leading-[1.18] text-[#f5f0e8] max-w-[920px] pb-20 md:pb-28 border-b border-[rgba(245,240,232,0.10)]"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(28px, 3vw, 46px)',
            fontStyle: 'italic',
          }}
        >
          Four <span style={{ color: '#b8966b' }}>disciplines</span>, one studio.
        </h2>

        <ol className="grid grid-cols-1 md:grid-cols-2">
          {SERVICES.map(({ n, title, slug, Icon, body }, i) => (
            <li
              key={n}
              className={[
                'border-b border-[rgba(245,240,232,0.10)]',
                i % 2 === 0 ? 'md:border-r' : '',
                i >= SERVICES.length - 2 ? 'md:border-b-0' : '',
              ].join(' ')}
            >
              <Link
                href={`/practice/${slug}`}
                className="group block p-10 md:p-14 transition-colors hover:bg-[rgba(245,240,232,0.02)]"
              >
                <div className="flex items-start gap-8">
                  <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center text-[#b8966b]">
                    <Icon className="w-full h-full" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-6 mb-5">
                      <span className="text-[10px] tracking-[0.18em] uppercase text-[#b8966b]">
                        N° {n}
                      </span>
                      <h3
                        className="font-light text-[#f5f0e8] group-hover:text-[#b8966b] transition-colors"
                        style={{
                          fontFamily: 'var(--font-cormorant), Georgia, serif',
                          fontSize: 'clamp(22px, 2vw, 32px)',
                        }}
                      >
                        {title}
                      </h3>
                    </div>
                    <p className="text-[14px] leading-[1.85] font-light text-[#f5f0e8]/72">
                      {body}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-6 text-[10px] tracking-[0.22em] uppercase text-[#f5f0e8]/55 group-hover:text-[#b8966b] transition-colors">
                      Read the practice
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
