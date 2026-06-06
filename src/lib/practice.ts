export type PracticeArea = {
  slug: string;
  title: string;
  oneLine: string;
  lead: string;
  hero: string;
  process: { n: string; title: string; body: string }[];
  highlights: string[];
  images: string[];
  iconKey: 'yacht' | 'product' | 'printing' | 'management';
};

const UNSPLASH = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const PRACTICE: PracticeArea[] = [
  {
    slug: 'build',
    title: 'The Build',
    oneLine: 'From the offset table to the launch crane.',
    iconKey: 'yacht',
    hero: UNSPLASH('1758553527857-e23046f88a63', 2000),
    images: [
      UNSPLASH('1765747631116-11e5fc65e6ca'),
      UNSPLASH('1778516805319-2e313481d24d'),
      UNSPLASH('1775550747971-dd4c5d3dad36'),
    ],
    lead:
      'Every Alpha Lyrae project moves through the same disciplined sequence. We draw, we calculate, we tank-test, we engineer, we tender, we build. The studio is present at each step, including the ones a yard would normally close to its drawing office.',
    process: [
      {
        n: '01',
        title: 'Concept and lines',
        body:
          'Initial sketches develop into a hull and rig concept. Lines plans, displacement curves and a first weight estimate are drawn before any geometry is committed.',
      },
      {
        n: '02',
        title: 'Hull form and stability',
        body:
          'Hull surfaces are fared in 3D, run against CFD where it earns its place, and checked for stability across loading cases. Hand calculations sit beside the computer at every stage.',
      },
      {
        n: '03',
        title: 'Engineering and digital twin',
        body:
          'Structure, systems and arrangement are developed to a complete digital twin of the finished boat. Class society checks are run from the same model.',
      },
      {
        n: '04',
        title: 'Tendering and yard selection',
        body:
          'Drawings, specifications and BoQs go out to a small list of yards in Italy, the Netherlands and Germany. We help the client read the bids.',
      },
      {
        n: '05',
        title: 'Build supervision',
        body:
          'A studio partner attends the yard at the agreed milestones. Variances are caught on the drawing board, not on the slipway.',
      },
      {
        n: '06',
        title: 'Sea trial and handover',
        body:
          'We sail the first miles. Performance against the prediction, sea-keeping, and the unglamorous correspondence around snagging are all part of the closing month.',
      },
    ],
    highlights: [
      'Single team from sketch to sea trial',
      'Yard selection by long acquaintance',
      'No subcontracted naval architecture',
      'Owner present at every key milestone',
    ],
  },
  {
    slug: '3d-printing',
    title: '3D Printing',
    oneLine: 'Specialised parts, printed in the studio.',
    iconKey: 'printing',
    hero: UNSPLASH('1705475025559-ad8efdedc74f', 2000),
    images: [
      UNSPLASH('1702390600380-5dc2bb300025'),
      UNSPLASH('1611505908502-5b67e53e3a76'),
      UNSPLASH('1597765206558-6f4e06954f2f'),
    ],
    lead:
      'The studio operates its own printing line. We print to evaluate forms in hand, to prototype hardware before machining, and to make one-off marine parts that would not justify a mould.',
    process: [
      {
        n: '01',
        title: 'Form study',
        body:
          'Hull plugs, deck hardware and interior components are printed at study scale early in concept work. We carry the print to the table; the drawing is amended in the hand.',
      },
      {
        n: '02',
        title: 'Functional prototype',
        body:
          'Cleats, brackets, vent plates and instrument housings are printed in PETG, ASA and reinforced nylons for fit and feel before final machining or moulding.',
      },
      {
        n: '03',
        title: 'One-off production',
        body:
          'For commissions where a single part is needed, we print finished marine components in materials suited to the loading: fairing covers, ducts, custom mounts.',
      },
      {
        n: '04',
        title: 'Tooling and jigs',
        body:
          'Yard tooling, drilling templates and bonding jigs printed in-house save a week of yard time on commissions where every detail is bespoke.',
      },
    ],
    highlights: [
      'FFF and resin printing in studio',
      'PETG, ASA, reinforced nylons',
      'Marine-grade prototypes in days',
      'No outsourced print runs',
    ],
  },
  {
    slug: 'product-design',
    title: 'Product Design',
    oneLine: 'Marine objects designed end-to-end.',
    iconKey: 'product',
    hero: UNSPLASH('1759888107050-47d4144adb22', 2000),
    images: [
      UNSPLASH('1763078163232-6e3eeae24dad'),
      UNSPLASH('1762613254695-5d83d33f93ff'),
      UNSPLASH('1773857529741-0895c47c7253'),
    ],
    lead:
      'The studio designs marine products: deck hardware, instrument housings, custom interiors, and one-off objects for owners and yards. Plastics and composites are our daily materials; we are open to others when a problem asks for them.',
    process: [
      {
        n: '01',
        title: 'Brief and reference',
        body:
          'A product begins with the use case in the hand of the user. Briefs come from the studio\u2019s own commissions, from yards we work with, and from independent owners.',
      },
      {
        n: '02',
        title: 'Drawing and CAD',
        body:
          'Quick sketches into hard CAD. Every product is drawn in three dimensions and tolerance-checked before the first print.',
      },
      {
        n: '03',
        title: 'Prototype and refine',
        body:
          'Printed prototypes are handed back and forth until the form is right. We test mountings, threads, water shedding and acoustic behaviour where it matters.',
      },
      {
        n: '04',
        title: 'Production drawings',
        body:
          'Complete production drawings go to the workshop, in plastics, in composites, or in machined metal as the brief requires.',
      },
    ],
    highlights: [
      'Plastics, composites, machined metal',
      'Industrial design and engineering in one office',
      'Prototype to production in weeks',
      'Bespoke and small-series both',
    ],
  },
  {
    slug: 'project-management',
    title: 'Project Management',
    oneLine: 'One hand on the schedule from start to finish.',
    iconKey: 'management',
    hero: UNSPLASH('1721244654394-36a7bc2da288', 2000),
    images: [
      UNSPLASH('1712696779652-dfca8766c5f8'),
      UNSPLASH('1721244653693-1d13e68b66c1'),
      UNSPLASH('1742415106160-594d07f6cc23'),
    ],
    lead:
      'Most yacht commissions stumble in the same places: at the boundary between owner and yard, at the boundary between design office and class society, at the boundary between budget and reality. Our project management work sits exactly on those boundaries.',
    process: [
      {
        n: '01',
        title: 'Scope and budget',
        body:
          'A clear, single-source specification and a budget the owner can read. Stage gates and contingencies set before the contract is signed, not after.',
      },
      {
        n: '02',
        title: 'Yard contract',
        body:
          'Schedule, payment milestones, change control, warranty terms and exit clauses negotiated on the owner\u2019s behalf with yards we know well.',
      },
      {
        n: '03',
        title: 'Build period',
        body:
          'Variation requests, technical queries, class submissions and supplier coordination all flow through one studio inbox. The owner is briefed monthly.',
      },
      {
        n: '04',
        title: 'Handover',
        body:
          'Snag list, sea trial, commissioning, documentation pack and crew familiarisation. The boat leaves the yard ready to be sailed.',
      },
    ],
    highlights: [
      'One studio inbox for all yard correspondence',
      'Owner briefed monthly, in plain language',
      'Change control with audit trail',
      'Sea trial and snagging included',
    ],
  },
];

export function getPractice(slug: string) {
  return PRACTICE.find((p) => p.slug === slug);
}
