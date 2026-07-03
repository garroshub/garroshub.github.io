export const sidebar = {
  name: "Garros Gong, Ph.D.",
  title: "Empirical Operations Management Researcher",
  meta: "University of Waterloo | Toronto, ON, Canada",
  tagline: "Supply-chain resilience, organizational adaptation, and AI-enabled decision support.",
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
  "I am an empirical operations management researcher whose work examines how organizations and markets adapt under uncertainty.",
  "My research studies how information frictions, incentives, risk exposure, and operational constraints shape decision quality across supply chains, emergency response, prediction markets, and AI-enabled decision-support settings. My senior management experience in large financial organizations strengthens my industry connections and helps me bring applied analytics, finance, and managerial decision-making into the classroom.",
];

export const hero = {
  icon: "user-o",
  title: "About Me",
  subtitle:
    "Empirical operations researcher studying decisions under uncertainty across supply chains, markets, and AI-enabled decision support.",
  researchAreas: [
    { icon: "leaf", title: "Sustainable operations management" },
    { icon: "sitemap", title: "Supply-chain resilience" },
    { icon: "random", title: "Organizational and market adaptation" },
    { icon: "lightbulb-o", title: "AI-enabled decision support" },
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
    duration: "Oct 2025",
    subtitle: "Ph.D. in Management Sciences (OR)",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/6e/University_of_Waterloo_seal.svg",
    details: [
      "Dissertation: Data-Driven Decision-Making Under Uncertainty: An Empirical Study of U.S. Wildfire Management.",
      "Research Award: Finalist, Canadian Operational Research Society (CORS) Student Paper Competition (2026).",
    ],
  },
  {
    title: "Ivey Business School",
    duration: "May 2018",
    subtitle: "M.Sc. in Management Sciences",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Logo-ivey.png",
    details: [],
  },
  {
    title: "University of Victoria",
    duration: "Jun 2016",
    subtitle: "B.S. in Financial Mathematics and Economics",
    logo: "https://www.uvic.ca/brand/_assets/images/cards/cards/uvic-crest.webp",
    details: ["Research Award: Jamie Cassels Undergraduate Research Awards (2014)."],
  },
];

export const researchSection = {
  icon: "book",
  title: "Publications and Selected Research",
  subtitle: "Peer-reviewed publications and selected studies from the current CV.",
  groups: [
    {
      title: "Peer-Reviewed Publications",
      layout: "preview",
      items: [
        {
          icon: "fire",
          label: "Published",
          venue: "Production and Operations Management (2026)",
          imageSrc: "https://www.google.com/s2/favicons?domain=journals.sagepub.com&sz=128",
          imageAlt: "Production and Operations Management",
          theme: "pom",
          title:
            "Sustainable Wildfire Management Meets Social Media: How Virtual Interaction Affects Wildfire Response Costs.",
          summary:
            "Introduces the Visibility Efficiency Paradox: public visibility can improve responsiveness while weakening cost efficiency when resource use approaches saturation.",
          link: "https://journals.sagepub.com/doi/10.1177/10591478261445692",
          linkLabel: "Read article",
        },
        {
          icon: "globe",
          label: "Published",
          venue: "Discover Sustainability (2024)",
          imageSrc: "https://www.google.com/s2/favicons?domain=link.springer.com&sz=128",
          imageAlt: "Discover Sustainability",
          theme: "springer",
          title:
            "Digital strategies in wildfire management: Social media analytics and Web 3.0 integration.",
          summary:
            "Develops a wildfire decision-support framework using social media analytics for monitoring, prediction, and response.",
          link: "https://link.springer.com/article/10.1007/s43621-024-00274-7",
          linkLabel: "Read article",
        },
      ],
    },
    {
      title: "Selected Research",
      items: [
        {
          icon: "sitemap",
          label: "Major Revision",
          venue: "Omega",
          title:
            "Benchmarking Supply Chain Resilience: An Exposure-Conditioned Decision Framework.",
          summary:
            "Develops an exposure-conditioned benchmark for supply-chain resilience using supplier-customer stress and firm operating outcomes, with interpretable nonlinear risk diagnostics and out-of-sample validation.",
        },
        {
          icon: "random",
          label: "Under Peer Review",
          venue: "Management Science",
          title:
            "Mechanism Uncertainty in Firm Adaptation to Supply-Chain Shocks: A Causal-Atlas Approach.",
          summary:
            "Studies firm adaptation to supply-chain shocks when multiple recovery mechanisms are plausible, using a mechanism-atlas approach to evaluate theory-specified mechanism claims across admissible quasi-causal designs.",
        },
        {
          icon: "comments-o",
          label: "Resubmitted",
          venue: "Decision Sciences Journal",
          title:
            "When Text Helps: AI Text Signals for Calibration-Sensitive Tail-Risk Decisions in Prediction Markets.",
          summary:
            "Studies when AI-extracted public text improves calibration-sensitive downside-risk assessment beyond price-based benchmarks in prediction markets.",
        },
        {
          icon: "money",
          label: "Major Revision",
          venue: "Journal of Environmental Management",
          title:
            "When Do Budgetary Shocks Backfire? Temporal Decoupling of Fiscal Signals under Climate Risk.",
          summary:
            "Documents a preparedness funding paradox in U.S. wildfire management, showing that positive federal budget shocks can improve same-year alignment but attenuate or reverse over subsequent budget cycles.",
        },
      ],
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
    duration: "2025 - 2026",
    subtitle: "Director, Profitability and Pricing | Toronto, Canada",
    icon: "briefcase",
    details: [
      "Led profitability, pricing analytics, and AI transformation initiatives in the finance division, linking cost drivers, client margins, and capital-allocation logic.",
    ],
  },
  {
    title: "Scotiabank",
    duration: "2023 - 2025",
    subtitle: "Manager, Investment Strategist | Toronto, Canada",
    icon: "line-chart",
    details: [
      "Developed macroeconomic, machine-learning, and factor-model analytics to support portfolio guidance and investment strategy across Canada and Latin America.",
    ],
  },
  {
    title: "Central 1 Credit Union",
    duration: "2022 - 2023",
    subtitle: "Credit and Financial Analyst | Toronto, Canada",
    icon: "area-chart",
    details: ["Supported treasury portfolio analysis, liquidity planning, and risk monitoring."],
  },
  {
    title: "Marret Asset Management",
    duration: "2021 - 2022",
    subtitle: "Associate, Fixed Income Research | Toronto, Canada",
    icon: "bar-chart",
    details: [
      "Built fixed-income research automation, market-data pipelines, and trading-signal analytics to support investment research and financial operations.",
    ],
  },
  {
    title: "Vinzan International Inc.",
    duration: "2018 - 2020",
    subtitle: "Financial and Corporate Analyst | Toronto, Canada",
    icon: "calculator",
    details: ["Built valuation and pro forma models for corporate finance decisions."],
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
