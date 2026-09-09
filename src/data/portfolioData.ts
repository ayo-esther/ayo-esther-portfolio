import { ExperienceItem, WorkProject, PublicationItem, LeadershipItem, FocusArea } from '../types';

export const PERSONAL_INFO = {
  name: 'Ayo Oformeh Esther',
  firstName: 'Ayo',
  middleName: 'Oformeh',
  lastName: 'Esther',
  title: 'Law • Intellectual Property • Technology • Policy',
  positioning: 'Building at the intersection of law, intellectual property, technology and policy.',
  leadStatement:
    'Building at the intersection of law, intellectual property, technology and policy. Dedicated to navigating the complexities of digital innovation through a legal lens that fosters growth and protects creative authorship.',
  aboutOpening:
    'I am interested in the questions that emerge where law meets technology, intellectual property and policy.',
  aboutBody1:
    'My work and learning increasingly draw me toward understanding how legal systems respond to innovation, creativity and the changing ways people create, share and build.',
  aboutBody2:
    'By bridge-building between traditional legal frameworks and the dynamic needs of digital creators, I aim to foster an environment where technological progress and intellectual rights coexist harmoniously.',
  aboutSubhead:
    'A multi-disciplinary legal professional committed to bridging the gap between emerging technologies and robust policy frameworks.',
  aboutExtended1:
    'With a specialized focus on Intellectual Property and Technology Law, my work examines how digital advancements reshape traditional legal concepts. I believe that policy should not merely react to innovation but actively participate in shaping a sustainable ecosystem for creators and tech enterprises alike.',
  aboutExtended2:
    'From advising on data governance to architecting IP strategies for startups, my approach is rooted in a deep understanding of both the technical architecture of software and the nuanced requirements of global legal standards.',
  visionStatement: 'Building expertise. Creating opportunities. Preparing to serve.',
  email: 'ayoesthermeme@gmail.com',
  phone1: '+2349049554004',
  phone1Display: '+234 904 955 4004',
  phone2: '+2349165626660',
  phone2Display: '+234 916 562 6660',
  phones: [
    { number: '+2349049554004', display: '+234 904 955 4004', label: 'Primary Line' },
    { number: '+2349165626660', display: '+234 916 562 6660', label: 'Direct Line' },
  ],
  linkedInUrl: 'https://www.linkedin.com/in/oformeh-esther-a-9a325b356',
  linkedInDisplay: 'Oformeh Esther Ayo',
  location: 'Nigeria / Global',
  focusSummary: 'IP & Tech Policy',
  cvPdfPath: '/assets/Ayo-Oformeh-Esther-CV.pdf',
  portraitPath: '/assets/images/portrait.jpg',
};

export const EDUCATION_INFO = {
  degree: 'LL.B. Candidate',
  institution: 'Nile University of Nigeria',
  period: 'October 2024 – Present',
  area: 'Public and International Law',
  description:
    'Focusing on public and international law, intellectual property foundations, comparative jurisprudence, and technology governance.',
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    iconName: 'FileText',
    summary: 'Strategic advisory on copyright, trademarks, and patent policy within the digital economy.',
    details: [
      'Copyright protection in algorithmic & creative ecosystems',
      'Trademark strategy & digital brand protection',
      'Patent policy & open-source software interfaces',
      'Protection of creative and innovative digital assets',
      'Commercialisation & licensing for digital creators',
    ],
  },
  {
    id: 'tech-policy',
    title: 'Tech Policy',
    iconName: 'Globe',
    summary: 'Crafting frameworks for AI governance, data privacy, and ethical technology implementation.',
    details: [
      'Technology & regulatory frameworks',
      'AI governance & machine learning accountability',
      'Data protection (NDPA 2023 & cross-border compliance)',
      'Digital policy & platform responsibility',
      'Emerging digital markets and infrastructure standards',
    ],
  },
  {
    id: 'legal-research',
    title: 'Legal Research',
    iconName: 'BookOpen',
    summary: 'Comprehensive analysis of cross-border digital laws and emerging tech-legal precedents.',
    details: [
      'Comparative & multi-jurisdictional legal analysis',
      'Statutory interpretation & legislative gap analysis',
      'Appellate brief research & moot court strategy',
      'Case commentary on technological precedents',
      'Synthesized advisory memoranda for policy and industry',
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'soair',
    date: 'AUGUST 2026 – PRESENT',
    role: 'LEGAL DEPT, IP OVERSIGHT',
    organization: 'SOAIR (School of Artificial Intelligence and Robotics)',
    department: 'Legal Department',
    description:
      'Providing IP oversight across four major departments, helping identify and protect ideas, innovations, creative works, software and other digital assets before commercialisation or deployment.',
    isCurrent: true,
  },
  {
    id: 'military-court-martial',
    date: 'CURRENT (TUESDAYS & THURSDAYS)',
    role: 'INTERN',
    organization: 'Military Court-Martial',
    description:
      'Intern connected to the military’s Court-Martial, observing courtroom proceedings, judicial flow, and administrative compliance convened bi-weekly.',
    isCurrent: true,
  },
  {
    id: 'platinum-taylor-hill',
    date: 'JULY 1–31, 2026',
    role: 'INTERN (PTHVIP 4.0)',
    organization: 'Platinum and Taylor Hill',
    description:
      'Virtual court-clerk experience during simulated moot proceedings, including exposure to courtroom flow, procedural documentation, docket order and judicial/trial administration.',
    isCurrent: false,
  },
  {
    id: 'lawrit-ljl',
    date: 'MAY 2026 – JUNE 2026',
    role: 'LEGAL INTERN – IP & ENTERTAINMENT LAW TRACK',
    organization: 'Lawrit Journal of Law (LJL) Impact Lab',
    description:
      'Practical exposure to trademark, patent, copyright, enforcement issues, emerging digital markets, and legal frameworks protecting creators and commercial innovations.',
    isCurrent: false,
  },
  {
    id: 'davron-attorneys',
    date: 'MARCH 2026 – APRIL 2026',
    role: 'VIRTUAL LEGAL INTERN',
    organization: 'Davron Attorneys',
    description:
      'Commercial practice, corporate contracts, legal research, advisory memos, and exposure to technology-enabled legal service delivery.',
    isCurrent: false,
  },
  {
    id: 'internlex',
    date: 'APRIL 2026',
    role: 'INTERNATIONAL INTERN',
    organization: 'InternLex',
    description:
      'Comparative legal research, case commentary, specialized legal writing, and cross-border legal analysis.',
    isCurrent: false,
  },
  {
    id: 'oputa-chamber',
    date: 'APRIL 2026 – PRESENT',
    role: 'VIRTUAL INTERN & RESEARCHER',
    organization: 'Justice Oputa Student Chamber',
    description:
      'Researching digital policy, property ownership models, and comparative / multi-jurisdictional legal frameworks.',
    isCurrent: true,
  },
  {
    id: 'nile-justice-chamber-head',
    date: 'DECEMBER 2025 – PRESENT',
    role: 'ASSISTANT JUSTICE CHAMBER HEAD',
    organization: 'Nile University Law Student Society',
    description:
      'Coordinating chamber activities, supporting junior members, and mentoring peers on structured legal research and oral advocacy.',
    isCurrent: true,
  },
  {
    id: 'nile-moot-counsel',
    date: 'MARCH 2025 – MARCH 2026',
    role: 'LEGAL COUNSEL',
    organization: 'Moot Court — Nile University Law Student Society',
    description:
      'Formulating legal strategy, conducting deep case research, drafting appellate briefs, and presenting oral arguments across civil and criminal moot proceedings.',
    isCurrent: false,
  },
];

export const WORK_PROJECTS: WorkProject[] = [
  {
    id: 'liquid-land',
    title: 'Liquid Land: A Comparative Study of Fractional Ownership in Nigeria and India',
    year: '2026',
    domain: 'Property Law & Digital Assets',
    summary:
      'An analytical comparative inquiry evaluating regulatory and property law barriers to fractionalized land tenure models across emerging markets in Nigeria and India, exploring statutory title registration and tokenized real-property interests.',
    keyThemes: ['Fractional Ownership', 'Real Property Law', 'Comparative Jurisprudence', 'Title Governance'],
  },
  {
    id: 'digital-ghostwriting',
    title: 'Digital Ghostwriting: Does the Copyright Act 2022 Actually Protect Nigerian Creators?',
    year: '2026',
    domain: 'Intellectual Property & Creator Rights',
    summary:
      'A critical statutory examination of Nigeria’s Copyright Act 2022 against the realities of modern digital content creation, ghost authorship, online attribution, and economic rights in distributed creative ecosystems.',
    keyThemes: ['Copyright Act 2022', 'Digital Creators', 'Moral Rights', 'Economic Authorship'],
  },
  {
    id: 'bridging-awareness-gap',
    title: 'Bridging the Awareness Gap: A Critical Review of the NDPA 2023',
    year: '2026',
    domain: 'Data Protection & Digital Policy',
    summary:
      'A comprehensive evaluation of the Nigeria Data Protection Act (NDPA) 2023, analyzing compliance hurdles, institutional awareness gaps, consumer literacy, and enforcement mechanisms across technology enterprises.',
    keyThemes: ['NDPA 2023', 'Data Privacy', 'Regulatory Enforcement', 'Consumer Awareness'],
  },
  {
    id: 'ozoro-case',
    title: 'When Tradition Collides with the Constitution: The Case of Ozoro',
    year: '2026',
    domain: 'Constitutional Law & Customary Jurisprudence',
    summary:
      'A rigorous constitutional case study exploring the friction between entrenched customary practices and fundamental constitutional rights under Nigerian jurisprudence, focusing on judicial review and the repugnancy doctrine.',
    keyThemes: ['Constitutional Law', 'Customary Law', 'Fundamental Rights', 'Repugnancy Doctrine'],
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-1',
    title: 'Liquid Land: A Comparative Study of Fractional Ownership in Nigeria and India',
    year: '2026',
    type: 'Comparative Legal Research',
    venueOrContext: 'Academic Research & Comparative Property Law Inquiry',
    description:
      'Examines fractional ownership legal structures, examining title transfer mechanisms, statutory property constraints, and bilateral parallels between Nigeria and India.',
  },
  {
    id: 'pub-2',
    title: 'Digital Ghostwriting: Does the Copyright Act 2022 Actually Protect Nigerian Creators?',
    year: '2026',
    type: 'Intellectual Property Treatise',
    venueOrContext: 'IP Law & Digital Economy Review',
    description:
      'Investigates statutory protections under the Copyright Act 2022 for digital authors, freelancers, and creative ghostwriters in decentralized media.',
  },
  {
    id: 'pub-3',
    title: 'Bridging the Awareness Gap: A Critical Review of the NDPA 2023',
    year: '2026',
    type: 'Statutory Policy Analysis',
    venueOrContext: 'Data Privacy & Digital Policy Review',
    description:
      'Assesses data governance frameworks, consumer rights under NDPA 2023, and practical compliance strategies for emerging technology startups.',
  },
  {
    id: 'pub-4',
    title: 'When Tradition Collides with the Constitution: The Case of Ozoro',
    year: '2026',
    type: 'Constitutional Case Commentary',
    venueOrContext: 'Constitutional Jurisprudence & Human Rights Review',
    description:
      'Constitutional analysis exploring the balance between customary law practices and fundamental human rights protections within contemporary legal adjudication.',
  },
];

export const LEADERSHIP_ITEMS: LeadershipItem[] = [
  {
    id: 'rovatel',
    organization: 'ROVATEL',
    role: 'National Coordinator',
    period: 'March 2026 – Present',
    focus: 'National coordination, organizational strategy, youth advocacy, and cross-chapter initiatives.',
  },
  {
    id: 'fida',
    organization: 'FIDA Nigeria – Nile Student Chapter',
    role: 'Public Relations Officer',
    period: 'May 2026 – Present',
    focus: 'External communications, student outreach, legal rights advocacy, and institutional engagement.',
  },
  {
    id: 'yoda',
    organization: 'Youth of Democracy Assembly (YoDA)',
    role: 'Delegate – Kaduna State',
    period: '2026',
    focus: 'Democratic deliberation, youth civic participation, constitutional awareness, and policy dialogue.',
  },
  {
    id: 'legal-diamonds',
    organization: 'Legal Diamonds',
    role: 'Campus Ambassador',
    period: 'April 2026 – Present',
    focus: 'Campus leadership, professional mentorship dissemination, and student legal development.',
  },
];
