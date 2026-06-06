export type Project = {
  slug: string;
  name: string;
  type: string;
  kind: 'studio' | 'collaboration';
  cover: string;
  images: string[];
  partner?: string;
  partnerUrl?: string;
  body?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'alpha-lyrae-950',
    name: 'Alpha Lyrae 950',
    type: 'Sailing yacht, 9.5 m',
    kind: 'studio',
    cover: '/images/classe950/CLASSE950-0.png',
    images: Array.from({ length: 11 }, (_, i) => `/images/classe950/CLASSE950-${i}.png`),
    body: [
      'A 9.5 metre sailing yacht designed in-house by the studio. The Alpha Lyrae 950 is the studio\u2019s flagship hull, drawn from first principles and developed as a complete digital twin before any build.',
      'The hull is a light displacement form with a fixed fin keel and a fractional rig, intended for fast cruising in the Mediterranean. Interior arrangement, deck plan and rig were carried by the studio from concept to detailed drawings.',
    ],
  },
  {
    slug: 'pyrgi-580',
    name: 'Pyrgi 580',
    type: 'Rigid inflatable boat, 5.8 m',
    kind: 'studio',
    cover: '/images/pyrgi580/RIB001.png',
    images: ['/images/pyrgi580/RIB001.png'],
    body: [
      'A 5.8 metre rigid inflatable, designed as a tender and day boat. The hull lines and console were drawn in the studio and developed against rendered models.',
    ],
  },
  {
    slug: 'nero-28',
    name: 'Nero 28',
    type: 'Day sailer, 28 ft',
    kind: 'collaboration',
    partner: 'Nero Yacht',
    partnerUrl: 'https://nero-yacht.it',
    cover: 'https://nero-yacht.it/wp-content/uploads/2025/11/nero28-slide-1.jpg',
    images: [
      'https://nero-yacht.it/wp-content/uploads/2025/11/nero28-slide-1.jpg',
      'https://nero-yacht.it/wp-content/uploads/2025/11/Render-Photomontage-1.png',
    ],
    body: [
      'A 28 foot day sailer developed in collaboration with Nero Yacht. The studio contributed to design and engineering work on the hull and arrangement.',
    ],
  },
  {
    slug: 'nevo',
    name: 'Nevo',
    type: 'Yacht concept',
    kind: 'collaboration',
    partner: 'Nevo Yachts',
    partnerUrl: 'https://www.nevoyachts.com',
    cover: 'https://www.nevoyachts.com/wp-content/uploads/2025/04/Frame-9-3-1536x1452.jpg',
    images: ['https://www.nevoyachts.com/wp-content/uploads/2025/04/Frame-9-3-1536x1452.jpg'],
    body: [
      'A collaborative project with Nevo Yachts. Design and engineering contributions on a yacht concept under development.',
    ],
  },
  {
    slug: 'lyra-works',
    name: 'Lyra Works',
    type: 'Marine product',
    kind: 'collaboration',
    partner: 'Lyra Works',
    partnerUrl: 'https://lyraworks.es',
    cover: 'https://lyraworks.es/wp-content/uploads/2024/04/5-1.jpg',
    images: ['https://lyraworks.es/wp-content/uploads/2024/04/5-1.jpg'],
    body: [
      'Collaboration with Lyra Works on a marine product. Design and prototyping support contributed by the studio.',
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
