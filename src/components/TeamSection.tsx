import Image from 'next/image';
import { LinkedInIcon } from '@/components/icons';

type Member = {
  name: string;
  photo: string;
  role: string;
  skills: string[];
  linkedin: string;
};

const TEAM: Member[] = [
  {
    name: 'Michele Molino',
    photo: '/images/people/mm.jpg',
    role: 'Project Manager',
    skills: ['Naval Architect'],
    linkedin: '#',
  },
  {
    name: 'Giovanni Mengucci',
    photo: '/images/people/gm.jpg',
    role: 'Yacht Design',
    skills: ['Sailor', 'Software Development', 'Data Analysis'],
    linkedin: '#',
  },
  {
    name: 'Jordi Rizo',
    photo: '/images/people/jr.jpg',
    role: 'Yacht Design',
    skills: ['Product Design'],
    linkedin: '#',
  },
  {
    name: 'Dylan Soares de Melo',
    photo: '/images/people/ds.jpg',
    role: 'Marine Engineering',
    skills: ['Boat Builder'],
    linkedin: '#',
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="bg-[#f5f0e8] text-[#0c1a2e] px-8 md:px-20 py-28 md:py-40"
    >
      <div className="max-w-[1280px] mx-auto">
        <h2
          className="font-light leading-[1.18] text-[#0c1a2e] max-w-[920px] pb-20 md:pb-24 border-b border-[rgba(12,26,46,0.10)]"
          style={{
            fontFamily: 'var(--font-cormorant), Georgia, serif',
            fontSize: 'clamp(28px, 3vw, 46px)',
            fontStyle: 'italic',
          }}
        >
          The <span style={{ color: '#b8966b' }}>partners</span>.
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16 pt-16 md:pt-24">
          {TEAM.map((m) => (
            <li key={m.name}>
              <div className="relative aspect-[3/4] overflow-hidden bg-[rgba(12,26,46,0.06)] mb-6">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3
                className="font-light text-[#0c1a2e]"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontSize: 'clamp(22px, 1.8vw, 28px)',
                }}
              >
                {m.name}
              </h3>
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#b8966b] mt-2">
                {m.role}
              </p>
              <ul className="mt-4 space-y-1">
                {m.skills.map((s) => (
                  <li
                    key={s}
                    className="text-[11.5px] tracking-[0.04em] text-[#4a6080] font-light"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <a
                href={m.linkedin}
                aria-label={`${m.name} on LinkedIn`}
                className="inline-flex items-center justify-center mt-5 text-[#b8966b] hover:text-[#0c1a2e] transition-colors"
              >
                <LinkedInIcon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
