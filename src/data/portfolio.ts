// Single source of truth for portfolio content across both designs.
// Wording improved from the original index.html. No em dashes anywhere.
// Social profile URLs were placeholders ("#") in the source; marked TODO.

export const profile = {
  fullName: "Mian Muhammad Talha Suleman",
  shortName: "Talha Suleman",
  monogram: "MTS",
  roles: ["Entrepreneur", "AI Builder", "Founder"],
  location: "Pakistan",
  // One-line positioning statement (kept tight for hero subtext).
  tagline:
    "Building businesses from Pakistan across AI, e-commerce, manufacturing, and emerging technology.",
  heroCta: {
    primary: "See the work",
    secondary: "Get in touch",
  },
} as const;

export const about = {
  // Editorial pull-quote style headline (no em dash).
  statement: "I don't wait for opportunity. I build it.",
  statementFollow:
    "From launching an e-commerce operation to researching industrial markets across the Gulf, I turn ideas into businesses that are already moving.",
  bio: [
    "I'm Mian Muhammad Talha Suleman, an aspiring entrepreneur and AI builder based in Pakistan. My work spans artificial intelligence, e-commerce, electric vehicles, dairy, chatbot platforms, and manufacturing. These are the fields I believe will define the next decade.",
    "My goal is to study at a world-class university, deepen my expertise, and scale these ventures globally. I build products that solve real problems for real people.",
  ],
};

export const stats = [
  { value: "3+", label: "Active ventures" },
  { value: "5+", label: "Industries in focus" },
  { value: "1", label: "E-commerce business live" },
  { value: "0 to 1", label: "Where I like to operate" },
];

export const ventures = [
  {
    name: "E-Commerce Business",
    status: "Live",
    summary:
      "An e-commerce operation that is already live and selling. Building scalable online sales channels and refining product sourcing, branding, and digital marketing for local and cross-border markets.",
    points: [
      "Launched and operating today",
      "Scalable online sales channels",
      "Product sourcing and brand building",
      "Local and cross-border markets",
    ],
  },
  {
    name: "AI Chatbot Platform",
    status: "In development",
    summary:
      "Advanced AI assistant prototypes in progress, with research into image and video generation products and monetizable SaaS AI tools.",
    points: [
      "AI assistant prototypes",
      "Image and video generation research",
      "Monetizable SaaS AI tooling",
    ],
  },
  {
    name: "Electric Vehicles",
    status: "Research",
    summary:
      "Researching EV solutions and charging infrastructure opportunities in Pakistan and the GCC, where energy and mobility are shifting fast.",
    points: [
      "EV solutions for Pakistan and GCC",
      "Charging infrastructure research",
      "Partnership and market mapping",
    ],
  },
  {
    name: "Manufacturing and GCC",
    status: "Research",
    summary:
      "Active research across steel, automotive, dairy, and industrial sectors in Gulf Cooperation Council countries, mapping where capital and demand are moving next.",
    points: [
      "Steel, automotive, and dairy",
      "Industrial sectors across the GCC",
      "Capital and demand mapping",
    ],
  },
  {
    name: "Dairy Business",
    status: "Exploring",
    summary:
      "Exploring dairy as a high-potential agribusiness vertical, from production to modern distribution models built for regional demand.",
    points: [
      "Production to distribution",
      "Modern agribusiness models",
      "Regional demand focus",
    ],
  },
];

export const education = [
  {
    label: "A Levels",
    title: "Business, Economics, Sociology and Politics",
    description:
      "A rigorous analytical foundation across business strategy, macroeconomics, social theory, and political systems. Directly applicable to building and scaling ventures.",
    phase: "Completed",
  },
  {
    label: "Self-directed, ongoing",
    title: "Artificial Intelligence and Python",
    description:
      "Completed AI learning programs with hands-on Python study, including building and experimenting with AI chatbot projects applied to real products.",
    phase: "Ongoing",
  },
  {
    label: "Future goal",
    title: "World-class university",
    description:
      "Working toward admission at a leading global institution to deepen expertise in business, technology, and entrepreneurship, and to build an international network.",
    phase: "In progress",
  },
];

export const achievements = [
  {
    title: "Completed AI and Python learning programs",
    description:
      "Self-driven study in artificial intelligence and Python programming, with hands-on project experimentation.",
  },
  {
    title: "Launched an active e-commerce business",
    description:
      "Started and operates an e-commerce venture, moving from idea to real commercial activity.",
  },
  {
    title: "Started multiple businesses",
    description:
      "Serial entrepreneurial thinking in practice, initiating ventures across several industries at once.",
  },
  {
    title: "Built and experimented with AI chatbot projects",
    description:
      "Developed working AI chatbot prototypes that bridge technical skill with commercial product thinking.",
  },
  {
    title: "Active research across GCC and emerging industries",
    description:
      "Deep market research in EV, steel, automotive, dairy, and manufacturing sectors across the GCC.",
  },
  {
    title: "Preparing for a world-class university",
    description:
      "Building a strong academic and project portfolio to earn admission at a leading global institution.",
  },
];

export const skillGroups = [
  {
    title: "AI and technology",
    skills: ["Artificial intelligence", "Chatbot development", "Python fundamentals"],
  },
  {
    title: "Business and commerce",
    skills: [
      "E-commerce operations",
      "Business planning",
      "Business development",
      "Entrepreneurship",
    ],
  },
  {
    title: "Strategy and research",
    skills: ["Market research", "GCC market research", "Technology strategy"],
  },
  {
    title: "Mindset",
    skills: ["Problem solving", "Innovation thinking"],
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: "email" | "phone" | "linkedin" | "x" | "instagram" | "location";
};

export const faqs: FAQ[] = [
  {
    question: "Who is Mian Muhammad Talha Suleman?",
    answer:
      "Mian Muhammad Talha Suleman is a Pakistan-based entrepreneur and AI builder. He works across AI, e-commerce, manufacturing, electric vehicles, and emerging technology, turning ideas into active businesses.",
  },
  {
    question: "What does Talha Suleman do?",
    answer:
      "He builds early-stage ventures. His current work includes a live e-commerce business, AI chatbot prototypes, research into EV and charging infrastructure, and market studies across steel, automotive, and dairy sectors in the GCC.",
  },
  {
    question: "What skills does Talha Suleman have?",
    answer:
      "His skills span artificial intelligence, chatbot development, Python, e-commerce operations, business planning, market research, GCC market analysis, and technology strategy, supported by a problem-solving and innovation-focused mindset.",
  },
  {
    question: "Where is Talha Suleman based?",
    answer:
      "He is based in Pakistan and actively researches opportunities across Pakistan and Gulf Cooperation Council countries.",
  },
  {
    question: "Is Talha Suleman open to collaborations or investment?",
    answer:
      "Yes. He is open to collaborations, university opportunities, investment conversations, and business partnerships. The fastest way to reach him is by email at miantalha1717@gmail.com or phone at +92 325 8407786.",
  },
  {
    question: "How can I contact Talha Suleman?",
    answer:
      "You can email miantalha1717@gmail.com, call or message +92 325 8407786, or connect via LinkedIn, X, and Instagram.",
  },
];

// TODO: replace placeholder "#" URLs with real profile links once available.
export const contacts: ContactLink[] = [
  {
    label: "Email",
    value: "miantalha1717@gmail.com",
    href: "mailto:miantalha1717@gmail.com",
    icon: "email",
  },
  {
    label: "Phone",
    value: "+92 325 8407786",
    href: "tel:+923258407786",
    icon: "phone",
  },
  {
    label: "LinkedIn",
    value: "miantalha17",
    href: "#", // TODO: full LinkedIn URL
    icon: "linkedin",
  },
  {
    label: "X (Twitter)",
    value: "@miantalha17",
    href: "#", // TODO: full X URL
    icon: "x",
  },
  {
    label: "Instagram",
    value: "@miantalha17__",
    href: "#", // TODO: full Instagram URL
    icon: "instagram",
  },
  {
    label: "Location",
    value: "Pakistan",
    href: "#",
    icon: "location",
  },
];