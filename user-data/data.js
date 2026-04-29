export const sidebar = {
  name: "Garros Gong, Ph.D.",
  title: "PhD Researcher in Management Science",
  meta: "University of Waterloo | Toronto, ON, Canada",
  tagline: "Research on operations, markets, and AI-enabled decision support.",
  image: "garros.jpg",
  email: "g7gong@uwaterloo.ca",
  linkedin: "https://www.linkedin.com/in/garros-gong/",
  github: "https://github.com/garroshub",
  scholar: "https://scholar.google.ca/citations?user=uwfuukUAAAAJ&hl=en",
  researchGate: "https://www.researchgate.net/profile/Garros-Gong?ev=hdr_xprf",
  cv: "Garros_CV.pdf",
  actions: [
    { label: "CV", link: "Garros_CV.pdf", primary: true },
    {
      label: "Google Scholar",
      link: "https://scholar.google.ca/citations?user=uwfuukUAAAAJ&hl=en",
      primary: false,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/garros-gong/",
      primary: false,
    },
  ],
};

export const bio = [
  "I am a PhD researcher in Management Science at the University of Waterloo. I study how organizations and markets make consequential decisions before uncertainty clears.",
  "My work spans wildfire operations, trade and policy turbulence, and AI-enabled decision support, drawing on prior experience in finance, investment strategy, and enterprise analytics.",
];

export const hero = {
  icon: "user-o",
  title: "About Me",
  subtitle:
    "PhD researcher in Management Science studying decisions under uncertainty.",
  researchAreas: [
    { icon: "leaf", title: "Sustainable operations" },
    { icon: "exchange", title: "Trade and policy" },
    { icon: "lightbulb-o", title: "AI decision support" },
  ],
  teachingNote:
    "I also teach analytics and management science with an emphasis on judgment, assumptions, and decision quality.",
  logos: [
    {
      src: "https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg",
      label: "Waterloo",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/89/Logo-ivey.png",
      label: "Ivey",
    },
    {
      src: "https://www.uvic.ca/brand/_assets/images/cards/cards/uvic-crest.webp",
      label: "UVic",
    },
  ],
};

export const collabCta = {
  title: "Open to faculty conversations and academic collaboration",
  body: "Faculty-market and affiliated research conversations are welcome.",
  academicEmail: "g7gong@uwaterloo.ca",
  personalEmail: "kuyigougou@gmail.com",
  academicLabel: "Academic conversation",
  personalLabel: "Applied work",
  academicSubject: "Faculty / Research Conversation",
  personalSubject: "Applied Project Inquiry",
  messageTemplate:
    "Hi Garros,\n\nI am reaching out about a potential faculty, research, or applied collaboration opportunity.\n\nContext:\n- \n\nPotential fit:\n- \n\nBest,\n",
};

export const education = [
  {
    title: "University of Waterloo",
    duration: "Expected Oct 2025",
    subtitle: "Ph.D. in Management Sciences: Applied Operational Research",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg",
    details: [
      "Dissertation on data-driven decision-making under uncertainty in U.S. wildfire management.",
      "INFORMS Telecommunications and Network Analytics Conference presenter.",
    ],
  },
  {
    title: "Ivey Business School at Western University",
    duration: "May 2018",
    subtitle: "M.Sc. in Management Sciences: Business Analytics Stream",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Logo-ivey.png",
    details: [
      "Richard Ivey MSc Excellence Award.",
      "Deloitte Case Competition 2nd Place and PwC IFRS 9 Capital Advisory Project.",
    ],
  },
  {
    title: "University of Victoria",
    duration: "Jun 2016",
    subtitle: "B.S. in Financial Mathematics and Economics",
    logo: "https://www.uvic.ca/brand/_assets/images/cards/cards/uvic-crest.webp",
    details: [
      "Graduated with high distinction.",
      "Jamie Cassels Undergraduate Research Award.",
    ],
  },
];

export const featuredPublications = {
  icon: "book",
  title: "Featured Publications",
  subtitle:
    "Selected papers across wildfire operations, public policy, and digital decision support.",
  items: [
    {
      icon: "fire",
      status: "Under Review",
      venue: "Production and Operations Management",
      title: "Sustainable Wildfire Management Meets Social Media",
      summary:
        "Shows how digital visibility shapes wildfire response costs and resource allocation using a temporal gravity score model.",
    },
    {
      icon: "money",
      status: "Under Review",
      venue: "Journal of Policy Analysis and Management",
      title: "When Do Budgetary Shocks Backfire?",
      summary:
        "Examines how federal-state funding gaps affect wildfire preparedness and why short-term gains can fade over time.",
    },
    {
      icon: "globe",
      status: "Published",
      venue: "Discover Sustainability, 2024",
      title: "Digital Strategies in Wildfire Management",
      summary:
        "Integrates social media analytics and Web 3.0 ideas into wildfire prediction, monitoring, and response planning.",
      link: "https://doi.org/10.1007/s43621-024-00274-7",
      linkLabel: "View publication",
    },
  ],
};

export const media = [
  {
    title: "Increasing Monopoly Power Poses a Threat to Canada's Post-Pandemic Economic Recovery",
    source: "Yahoo News",
    year: "2023",
    description:
      "A public-facing piece on concentration, recovery, and long-run Canadian economic resilience.",
    link: "https://ca.news.yahoo.com/increasing-monopoly-power-poses-threat-115705554.html",
  },
  {
    title: "Canada's New Tech Talent Strategy Aims to Attract Workers from Around the World",
    source: "The Conversation",
    year: "2023",
    description:
      "Explains how talent policy and labor-market strategy shape the future of the domestic technology sector.",
    link: "https://theconversation.com/canadas-new-tech-talent-strategy-aims-to-attract-workers-from-around-the-world-208810",
  },
  {
    title: "For Gig Economy Millennials, Retirement is Not That Far Off. Innovation Will Be Key to Making It Work",
    source: "Toronto Star",
    year: "2023",
    description:
      "Discusses retirement design challenges in the gig economy and where innovation can improve financial systems.",
    link: "https://www.thestar.com/business/for-gig-economy-millennials-retirement-is-not-that-far-off-innovation-will-be-key-to-making-it-work/article_71fe4910-c09b-593f-b0ec-3b6437592e5d.html",
  },
];

export const professionalExperience = [
  {
    title: "CIBC Mellon",
    duration: "Oct 2025 - Present",
    subtitle: "Director, Profitability and Pricing | Toronto, Canada",
    icon: "briefcase",
    details: [
      "Rebuilt profitability models to align cost drivers with capital allocation and enterprise pricing decisions.",
      "Led AI and digital transformation work that shortened reporting cycles and improved model deployment.",
    ],
  },
  {
    title: "Scotiabank",
    duration: "Feb 2023 - Oct 2025",
    subtitle: "Manager, Investment Strategist | Toronto, Canada",
    icon: "line-chart",
    details: [
      "Built strategic dashboards and econometric forecasting tools for executive decision support.",
      "Coordinated cross-region economic and market insights into unified investment publications.",
    ],
  },
  {
    title: "Central 1 Credit Union",
    duration: "Mar 2022 - Jan 2023",
    subtitle: "Credit and Financial Analyst | Toronto, Canada",
    icon: "area-chart",
    details: [
      "Developed ESG risk frameworks with investment and data teams.",
      "Analyzed treasury holdings and improved risk-mitigation recommendations.",
    ],
  },
  {
    title: "Marret Asset Management",
    duration: "Feb 2021 - Oct 2021",
    subtitle: "Associate | Toronto, Canada",
    icon: "bar-chart",
    details: [
      "Built alpha-generation analytics from unstructured trading data.",
      "Automated reporting workflows to reduce manual portfolio research work.",
    ],
  },
  {
    title: "Vinzan International Inc.",
    duration: "Aug 2018 - Jul 2020",
    subtitle: "Financial and Corporate Analyst | Toronto, Canada",
    icon: "calculator",
    details: [
      "Applied uplift modeling and logistic regression to test go-to-market strategies.",
    ],
  },
];

export const contactLinks = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/garros-gong/",
    icon: "fa fa-linkedin",
  },
  {
    label: "GitHub",
    link: "https://github.com/garroshub",
    icon: "fa fa-github",
  },
  {
    label: "Scholar",
    link: "https://scholar.google.ca/citations?user=uwfuukUAAAAJ&hl=en",
    iconUrl: "https://www.google.com/s2/favicons?domain=scholar.google.ca&sz=64",
  },
  {
    label: "ResearchGate",
    link: "https://www.researchgate.net/profile/Garros-Gong?ev=hdr_xprf",
    iconUrl: "https://www.google.com/s2/favicons?domain=researchgate.net&sz=64",
  },
  {
    label: "CV",
    link: "Garros_CV.pdf",
    icon: "fa fa-file-pdf-o",
  },
];
