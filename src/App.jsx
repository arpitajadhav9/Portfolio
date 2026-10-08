import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Sparkles,
  Heart,
  Coffee,
  Star,
  MapPin,
  ExternalLink,
  Mail,
  Scissors,
  Smile,
  Compass,
  CheckCircle2,
  RefreshCw,
  FolderHeart,
  Play,
  Pause,
  ArrowUpRight,
  Layers,
  Database,
  Search,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Download,
  X,
  Code2,
  Plus,
  PenTool
} from 'lucide-react';
import confetti from 'canvas-confetti';
import './App.css';

// Featured Projects Data (Akash S, Rajdeep Sarkar & Smriti Rawat Inspired Showcase)
const projectsData = [
  {
    id: 'customer-personality',
    category: 'RETAIL MARKETING • STATISTICAL EDA • DATA SCIENCE',
    shortCategory: 'STATISTICAL EDA • PYTHON',
    filterCategory: 'data',
    title: 'Customer Personality Analysis & Segmentation',
    punchline: 'End-to-end exploratory and hypothesis-tested statistical study of 2,240 retail customers in Python, unlocking a 0.79 spend-income correlation and data-backed marketing strategies.',
    role: 'Data Analyst (End-to-End EDA & Statistical Analysis)',
    timeline: '2 Weeks • 2026',
    team: 'Solo Project (Individual Analyst)',
    image: '/project-customer-personality.jpg',
    tags: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn', 'Hypothesis Testing', 'Data Cleaning', 'Feature Engineering'],
    overview: 'Customer Personality Analysis is an end-to-end exploratory and statistical study of 2,240 customers from a retail marketing dataset. It profiles who customers are (income, education, family structure) and how they spend across products and channels. The goal was to turn those profiles into marketing recommendations backed by hypothesis tests rather than visual impressions.',
    problem: 'Marketing teams often send the same campaign to every customer. That wastes budget on low-value segments and under-serves high-value ones. The raw data also had quality problems that could distort any conclusion: missing income values (24 rows), impossible values (such as an income of $666,666 and birth years that implied customers aged 100+), constant useless columns, and inconsistent categories ("YOLO", "Absurd", "Alone" in marital status).',
    solution: 'I built a full analysis pipeline in Python, from raw data to strategy: cleaned the data by filling missing income with the median of each customer\'s education group (income was heavily right-skewed, skew ≈ 6.8); confirmed outliers with boxplots, the IQR method, and the 3-SD empirical rule, comparing capping, winsorizing, and median replacement before deleting implausible rows instead (2,240 → 2,236 rows); engineered features (Total Spend, Total Purchases, Total Kids, Has Kids, Campaigns Accepted, and Enrollment Year); visualized each variable with a chart type matched to its data type; validated every pattern statistically with a t-test, ANOVA, chi-square test, and linear regression with diagnostics; and turned the confirmed findings into a segment-based campaign strategy.',
    highlights: [
      'Income is a strong spend predictor (r = 0.79; regression R² = 0.62)',
      'Households with kids spent far less (avg $407 vs $1,105 for no-kids); the two-sample t-test confirmed this is not chance (p < 0.001)',
      'Families with kids used deals much more (2.8 vs 1.1 deal purchases on average), indicating heightened price sensitivity',
      'Education level significantly affects spend (ANOVA, p < 0.001): Basic-education customers spend ~$82 on average, versus $570–$670 for Graduation, Master and PhD',
      'Education is significantly associated with campaign response (chi-square, p < 0.001): response rates run from about 4% (Basic) to about 21% (PhD), against 15% overall',
      'Wine (50%) and meat (28%) make up about 78% of total customer spend',
      'Strategy: send premium, low-discount campaigns to high-income, no-kids, higher-education customers. Send value-bundle and deal campaigns to families.'
    ],
    challenges: [
      {
        title: 'Extreme Outliers (Income 666,666, Age 100+)',
        desc: 'Tested several treatments (capping, winsorizing, and replacement); chose deletion because values were verifiable data-entry errors, not rare real customers (2,240 → 2,236 rows).'
      },
      {
        title: 'Skewed Income with Missing Values',
        desc: 'Used grouped median imputation by education group instead of an unweighted plain mean to address severe right skewness (skew ≈ 6.8).'
      },
      {
        title: 'Messy Non-Standard Categories',
        desc: 'Merged junk marital-status labels ("YOLO", "Absurd", "Alone") and unified "2n Cycle" with "Master".'
      },
      {
        title: 'Validating Patterns vs. Random Coincidence',
        desc: 'Backed every chart pattern with formal statistical significance tests (two-sample t-test, ANOVA, Chi-Square, OLS linear regression) before recommending strategy.'
      }
    ],
    metrics: [
      { label: 'Income vs. Total Spend (r)', val: '0.79' },
      { label: 'Spend Variance (R²)', val: '62%' },
      { label: 'No-Kids vs. Kids Spend', val: '2.7x' }
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/arpitajadhav9/customer-personality-classification',
    figmaUrl: null
  },
  {
    id: 'cityflow',
    category: 'SMART CITY • GRAPH ALGORITHMS • FULL-STACK',
    shortCategory: 'DSA • GRAPH ALGORITHMS',
    filterCategory: 'dsa',
    title: 'CityFlow — Smart City Traffic Navigation System',
    punchline: "Modeled urban road networks as weighted directed graphs in Python, applying Dijkstra's algorithm with min-heap priority queues for dynamic traffic-aware route optimization.",
    role: 'DSA Developer • Backend Developer • Frontend & UI Integration',
    timeline: 'Academic Project • Semester 6',
    team: 'Team Project (Collaborative Engineering)',
    image: '/project-cityflow.jpg',
    tags: ['Python', 'Flask', "Dijkstra's Algorithm", 'Weighted Directed Graph', 'Min-Heap Priority Queue', 'Leaflet.js', 'Cypress', 'Selenium', 'JMeter'],
    overview: "CityFlow is a smart city traffic navigation system that finds optimized routes between city junctions using Dijkstra's Shortest Path Algorithm. The system represents the city as a weighted directed graph, where junctions are nodes and roads are edges. Users can select a source and destination and choose between a fastest route based on travel time or a shortest route based on road distance. The system also simulates traffic congestion and dynamically updates road travel times, allowing Dijkstra's algorithm to recalculate and find a new optimal route in real time.",
    problem: 'Traditional shortest-path demonstrations generally use fixed distances and do not represent how traffic conditions affect route selection. In a real city, the shortest road is not always the fastest: traffic congestion significantly increases travel time, road conditions change dynamically while navigating, and commuters need to contrast the shortest physical distance against the fastest duration. CityFlow was designed to bridge theoretical Data Structures and Algorithms with a practical, interactive smart-city navigation challenge.',
    solution: "CityFlow models urban road networks as a weighted directed graph using an adjacency list for efficient memory storage and fast neighbor lookups. Each junction is represented as a node, while each road is a directed edge storing distance, base speed, traffic factor, and calculated travel time. Route optimization runs via Dijkstra's algorithm with Python's heapq min-heap priority queue. In Shortest Route mode, the edge weight is physical road distance (km); in Fastest Route mode, the edge weight is travel time (minutes) dynamically computed from distance, base speed, and congestion factor. When congestion is simulated, the traffic factor increases on selected roads, triggering dynamic route recalculation with path reconstruction via predecessor tracking.",
    highlights: [
      "Dijkstra-based dual-mode route optimization: Shortest Route (distance in km) vs. Fastest Route (traffic-aware travel time in minutes)",
      "Weighted directed graph representation using adjacency lists for efficient neighbor traversal (Space Complexity: O(V + E))",
      "Min-heap priority queue (Python heapq) for optimal junction extraction in O((V + E) log V) time",
      "Dynamic traffic simulation engine that alters road weights in real-time and triggers automatic Dijkstra recalculation",
      "Interactive Leaflet.js map visualization with source/destination selection, polyline path rendering, and multi-city datasets (Bengaluru & Mumbai)",
      "Full automated test suite across Cypress (E2E workflows), Selenium/TestNG (functional UI tests), and Apache JMeter (concurrency & load testing)"
    ],
    challenges: [
      {
        title: 'Finding the Optimal Route Among Multiple Paths',
        desc: "A complex city grid has dozens of route permutations between any two junctions. Solved by implementing Dijkstra's shortest-path algorithm with predecessor tracking for exact path reconstruction."
      },
      {
        title: 'Shortest vs. Fastest Route Trade-off',
        desc: 'A physically shorter route often takes longer due to bottlenecks and congestion. Solved by decoupling edge weights into Distance Mode (km) and Time Mode (minutes computed from base speed and traffic factors).'
      },
      {
        title: 'Dynamic Traffic & Route Adaptation',
        desc: 'Real-world traffic conditions mutate mid-journey. Solved by building a dynamic simulation layer that updates edge weights and re-executes Dijkstra to discover alternative diversion corridors.'
      },
      {
        title: 'Memory-Efficient Graph Representation',
        desc: 'Dense matrix representation wastes quadratic memory for sparse city graphs. Solved by architecting an adjacency list with hash maps, keeping space complexity linear at O(V + E).'
      },
      {
        title: 'Fastest Next-Junction Extraction',
        desc: "Linear scans for the unvisited node with lowest cost would degrade Dijkstra to O(V²). Solved by integrating Python's heapq min-heap priority queue, reducing complexity to O((V + E) log V)."
      },
      {
        title: 'Showing Calculated Geometry to Users',
        desc: 'Finding node sequences in Python backend is abstract without visual geographic representation. Solved by connecting Flask REST APIs with Leaflet.js to render interactive map polylines and segment turn-by-turns.'
      }
    ],
    metrics: [
      { label: 'Route Modes', val: '2 Modes' },
      { label: 'Time Complexity', val: 'O((V+E) log V)' },
      { label: 'Testing Frameworks', val: '3 Types' }
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/arpitajadhav9/DSASem6Project',
    figmaUrl: null
  },
  {
    id: 'telco-churn',
    category: 'PREDICTIVE ML • MLOPS • PRODUCTION SYSTEM',
    shortCategory: 'ML & MLOPS • FASTAPI',
    filterCategory: 'ml',
    title: 'Telco Customer Churn Intelligence',
    punchline: 'End-to-end production ML system predicting customer churn and revenue exposure, containerized with FastAPI, Streamlit, MLflow, DVC, and automated GitHub Actions CI/CD.',
    role: 'Machine Learning & MLOps Engineer',
    timeline: 'Academic Project • Fall 2026',
    team: 'Solo Build • End-to-End Implementation',
    image: '/project-telco-churn.jpg',
    tags: ['Python', 'Scikit-learn', 'FastAPI', 'Streamlit', 'Docker', 'MLflow', 'DVC', 'GitHub Actions', 'SHAP', 'Pytest'],
    overview: 'Telco Customer Churn Intelligence is an end-to-end machine learning and MLOps system that predicts churn probability, quantifies at-risk revenue exposure, and delivers model-supported explanations. Moving far beyond a static notebook, the project integrates feature engineering, experiment tracking, interpretable modeling, and an automated CI/CD pipeline deploying containerized microservices to Docker Hub.',
    problem: 'Telecom providers face massive recurring revenue losses when customers leave, yet reactive analysis only captures churn after the fact. Predicting churn in active customers requires handling moderate class imbalance (26.5% churn), multicollinearity (~0.9996 correlation between TotalCharges and tenure × MonthlyCharges), missing values in zero-tenure records, and preventing preprocessing data leakage—all while delivering interpretable risk factors that business teams can act upon.',
    solution: 'Engineered a scikit-learn classification pipeline (StandardScaler + OneHotEncoder + class-weighted Logistic Regression) selected over Random Forest and XGBoost for top ROC-AUC (0.841) and recall (78.6%) paired with native odds-ratio interpretability. The pipeline is packaged into model.joblib and served via FastAPI endpoints alongside an interactive Streamlit console. DVC ensures pipeline and data reproducibility, MLflow tracks experiments and model registry, and GitHub Actions automates testing, Docker builds, and Docker Hub container publishing.',
    highlights: [
      'Customer-level churn scoring with Low (<40%), Medium (40–70%), and High (>70%) risk thresholds',
      'Estimated Revenue Exposure metric calculating probability-weighted annual customer value at risk',
      'Model interpretability via Logistic Regression odds ratios, permutation importance, and SHAP analysis',
      'Domain feature engineering: tenure lifecycle buckets, total services adoption, and average monthly spend',
      'Multi-model benchmarking across Logistic Regression, Random Forest, and XGBoost with MLflow tracking',
      'Containerized dual-service architecture (FastAPI backend + Streamlit UI) with 6/6 automated Pytest validations',
      'Automated GitHub Actions CI/CD pipeline compiling DVC stages, running test suites, and publishing Docker images'
    ],
    challenges: [
      {
        title: 'Git vs. DVC Conflict in CI/CD',
        desc: 'CI runners failed when the dataset was treated simultaneously as a Git-tracked file and a DVC output. Resolved by configuring the raw dataset as a pure DVC pipeline dependency rather than a conflicting output target.'
      },
      {
        title: 'Preventing Preprocessing Leakage',
        desc: 'Fitting scalers or encoders across the entire dataset distorts evaluation. Strictly scoped all transformations within an sklearn ColumnTransformer fitted exclusively on training folds.'
      },
      {
        title: 'High Multicollinearity & Zero-Tenure Data',
        desc: 'TotalCharges was heavily collinear (~0.9996) and missing on 11 zero-tenure records. Resolved through conditional business-logic imputation and deriving an orthogonal avg_monthly_spend feature.'
      },
      {
        title: 'Interpretability vs. Complexity Trade-off',
        desc: 'While tree ensembles performed well, retention teams needed clear coefficients. Champion Logistic Regression delivered both higher Recall (78.6%) and actionable odds ratios.'
      },
      {
        title: 'Reliable Production Containerization',
        desc: 'Transitioning from notebook experiments to microservices required automated verification. Architected multi-stage Docker builds triggered only after DVC pipeline reproduction and Pytest pass.'
      }
    ],
    metrics: [
      { label: 'ROC-AUC Score', val: '0.841' },
      { label: 'Recall (Churners Detected)', val: '78.6%' },
      { label: 'Automated API Tests Passed', val: '6/6 Tests' }
    ],
    liveUrl: null,
    githubUrl: 'https://github.com/arpitajadhav9/TelcoML',
    figmaUrl: null
  },
  {
    id: 'mindease',
    category: 'MOBILE / WEB • HEALTH TECH • UX RESEARCH',
    shortCategory: 'HEALTH TECH • UX RESEARCH',
    filterCategory: 'mobile',
    title: 'MindEase — Behavioral Habit & Wellness Engine',
    punchline: 'Conducted end-to-end user research across 40+ interviews to architect an accessible habit tracker achieving 88% weekly user retention.',
    role: 'UX Researcher & Mobile Developer',
    timeline: '7 Weeks • Winter 2024',
    team: 'Independent Study & UX Thesis',
    image: '/project-mindease.jpg',
    tags: ['Mobile UI', 'React Native', 'Accessibility', 'Figma', 'Behavioral Science'],
    overview: 'MindEase is a calming, scientifically-grounded wellness companion that uses micro-interventions and gentle cognitive feedback to help university students build sustainable daily routines.',
    problem: 'Most habit-tracking apps overwhelm users with aggressive streaks, guilt-inducing red alerts, and complex setup forms, causing 70% of users to drop off after day three.',
    solution: 'Designed an inclusive, pressure-free interface using soft pastel palettes, tactile circular progress rings, and adaptive micro-goals backed by behavioral cognitive therapy principles.',
    highlights: [
      'Gentle circular progress rings with soothing haptic micro-interactions and celebration states',
      'Weekly mood spectrum graph that correlates daily routine consistency with stress levels',
      'Audio-guided micro-meditations and hydration reminders with zero high-pressure streaks',
      'WCAG AAA accessible contrast, scalable typography, and reduced-motion toggle'
    ],
    metrics: [
      { label: 'Weekly Retention Rate', val: '88%' },
      { label: 'User Study Cohort', val: '40+ Users' },
      { label: 'App Store Rating', val: '4.9 ★' }
    ],
    liveUrl: 'https://example.com/demo/mindease',
    githubUrl: 'https://github.com/arpitajadhav/mindease-app',
    figmaUrl: 'https://figma.com/@arpita/mindease'
  }
];

// Career Experience Ledger Data (Arpita Jadhav's Real Experience)
const experienceData = [
  {
    id: 'engaze',
    dates: 'July 2025 – Dec 2025',
    company: 'Engaze',
    role: 'UI/UX Designer Intern',
    location: 'Mumbai, India',
    badge: 'Core Product',
    color: '#b93822',
    bgColor: '#c2412d',
    textColor: '#ffffff',
    summary: 'Crafting wireframes, prototypes, and high-fidelity UI screens in Figma across 6 product features, optimising user flows and visual hierarchy.',
    bulletPoints: [
      'Created wireframes, prototypes, and high-fidelity UI screens in Figma across 6 product features, optimising user flows and visual hierarchy for the core product.',
      'Partnered with the development team for pixel-accurate implementation; led 5+ usability review sessions and iterated on feedback, improving screen-flow consistency across releases.'
    ],
    skills: ['Figma', 'Wireframing', 'High-Fidelity UI', 'Usability Reviews', 'User Flows', 'Design Systems']
  },
  {
    id: 'letsupgrade-uiux',
    dates: 'July 2024 – Aug 2024',
    company: 'LetsUpgrade',
    role: 'Student Intern - UI/UX',
    location: 'Mumbai, India',
    badge: 'Website Redesign',
    color: '#b45309',
    bgColor: '#d97706',
    textColor: '#ffffff',
    summary: 'Redesigning UI concepts and restructuring navigation across 4+ key pages to enhance layout and visual hierarchy.',
    bulletPoints: [
      'Redesigned UI concepts for a full website redesign project, restructuring navigation across 4+ key pages to improve layout and visual hierarchy.',
      'Aligned design solutions with branding guidelines and usability goals, delivering final Figma assets in collaboration with the core product.'
    ],
    skills: ['Website Redesign', 'Information Architecture', 'Figma Assets', 'Brand Guidelines', 'Visual Hierarchy']
  },
  {
    id: 'letsupgrade-marketing',
    dates: 'July 2024 – Aug 2024',
    company: 'LetsUpgrade',
    role: 'Student Intern - Marketing & Analysis',
    location: 'Mumbai, India',
    badge: 'UX Audit & Strategy',
    color: '#0e655d',
    bgColor: '#0f766e',
    textColor: '#ffffff',
    summary: 'Auditing platform UX and contributing to EdTech campaign ideation with actionable usability recommendations.',
    bulletPoints: [
      'Contributed to marketing strategy discussions and campaign ideation for an EdTech platform as part of a cross-functional team.',
      'Audited existing platform UX and delivered a set of actionable recommendations to improve user engagement and usability, presented to the internship cohort.'
    ],
    skills: ['UX Audit', 'Campaign Ideation', 'User Engagement', 'EdTech Platform', 'Actionable Insights']
  }
];

// Arpita's Verified Skills & Toolkit Pillars
const skillCategoriesData = [
  {
    id: 'product-design',
    number: '01',
    title: 'Product & Design',
    themeClass: 'sticky-theme-lavender',
    backingClass: 'sheet-lavender',
    tagLabel: 'Figma & UI',
    paperclipClass: 'clip-purple',
    paperclipStroke: '#8b5cf6',
    tabHeartColor: '#8b5cf6',
    naturalRot: '-2.4deg',
    skills: [
      { name: 'Figma', desc: 'Design systems, UI kits & wireframes' },
      { name: 'User-Centric Design', desc: 'Heuristics & user research' },
      { name: 'Agile Methodologies', desc: 'Sprint planning & iteration' },
      { name: 'Product Lifecycle', desc: 'Discovery, metrics & ship specs' }
    ]
  },
  {
    id: 'software-web',
    number: '02',
    title: 'Software & Web Dev',
    themeClass: 'sticky-theme-yellow',
    backingClass: 'sheet-yellow',
    tagLabel: 'Full-Stack',
    paperclipClass: 'clip-gold',
    paperclipStroke: '#ca8a04',
    tabHeartColor: '#ca8a04',
    naturalRot: '2.1deg',
    skills: [
      { name: 'Python & C++', desc: 'Core algorithms & clean code' },
      { name: 'MERN Stack', desc: 'MongoDB, Express, React, Node' },
      { name: 'Testing & QA', desc: 'Selenium & Cypress test suites' },
      { name: 'Version Control', desc: 'Git & GitHub CI/CD workflows' }
    ]
  },
  {
    id: 'data-cs',
    number: '03',
    title: 'Data & CS Fundamentals',
    themeClass: 'sticky-theme-mint',
    backingClass: 'sheet-mint',
    tagLabel: 'Data & CS',
    paperclipClass: 'clip-teal',
    paperclipStroke: '#0d9488',
    tabHeartColor: '#0d9488',
    naturalRot: '-1.8deg',
    skills: [
      { name: 'Machine Learning', desc: 'Supervised & unsupervised models' },
      { name: 'Statistical Analysis', desc: 'Python data stack & NumPy' },
      { name: 'Data Structures', desc: 'Algorithms & complexity' },
      { name: 'DBMS & SQL', desc: 'Database design & queries' }
    ]
  }
];

// Arpita's Curated Life & Craft Snapshots (Interactive Accordion Strip)
const aboutPhotosData = [
  {
    id: 'mumbai-tech-week',
    src: '/about/mumbai-tech-week.jpg',
    title: 'Mumbai Tech Week',
    shortTitle: 'Tech Summit',
    category: 'Community & Tech',
    caption: 'Mumbai Tech Week • immersing in frontier tech, systems & developer dialogue ✦',
    objectPosition: 'center 22%'
  },
  {
    id: 'presenting',
    src: '/about/presentation-lead.jpg',
    title: 'Technical Presentation & Sprints',
    shortTitle: 'Speaking',
    category: 'Leadership & Craft',
    caption: 'Pitching technical architectures & walking through user flows in sprint reviews 🎙️',
    objectPosition: 'center 20%'
  },
  {
    id: 'dance-stage',
    src: '/about/dance-performance.jpg',
    title: 'Classical & Expressive Dance',
    shortTitle: 'Stage Dance',
    category: 'Creative Artistry',
    caption: 'Performing at U Fest 2025 • years of rhythm, discipline & expressive storytelling 🩰',
    objectPosition: 'center 35%'
  },
  {
    id: 'mountain-valley',
    src: '/about/mountain-retreat.jpg',
    title: 'Snow Peaks & Serene Rivers',
    shortTitle: 'Mountains',
    category: 'Wanderlust',
    caption: 'Quiet mountain valleys & snowscapes • finding calm and fresh perspective 🏔️',
    objectPosition: 'center center'
  },
  {
    id: 'cafe-treats',
    src: '/about/cafe-patisserie.jpg',
    title: 'Cafe Hopping & Quiet Mornings',
    shortTitle: 'Cafe Rituals',
    category: 'Daily Ritual',
    caption: 'Dark chocolate cake, quiet corner sketch sessions & warm cozy cafes ✨',
    objectPosition: 'center 60%'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [activeStamp, setActiveStamp] = useState('star');
  const [isStampKitOpen, setIsStampKitOpen] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  const [isSkillsInView, setIsSkillsInView] = useState(false);
  const heroRef = React.useRef(null);
  const skillsRef = React.useRef(null);
  const deskRef = React.useRef(null);

  // Footer Interactive Desk Status Switcher (from User Feedback: Replaces song with personal dispatch)
  const footerStatuses = [
    {
      kicker: "CURRENT CRAFT & FOCUS",
      text: "Architecting AI agent workflows & tactile web apps with pixel precision ✦",
      icon: "✨",
      tag: "Active Project"
    },
    {
      kicker: "LOCATION & TIMEZONE",
      text: "Based in Mumbai, India (IST • UTC+5:30) • Open for Remote & Relocation",
      icon: "📍",
      tag: "Available 2026"
    },
    {
      kicker: "DAILY FUEL & RITUAL",
      text: "Lo-fi beats, chronic doodling, clean code & zero-to-one engineering ✨",
      icon: "🎧",
      tag: "Daily Rhythm"
    }
  ];
  const [footerStatusIdx, setFooterStatusIdx] = useState(0);
  const handleCycleFooterStatus = () => {
    setFooterStatusIdx((prev) => (prev + 1) % footerStatuses.length);
  };

  // Footer Email 1-Click Copy State
  const [emailCopied, setEmailCopied] = useState(false);
  const handleCopyEmail = (e) => {
    e?.stopPropagation?.();
    navigator.clipboard.writeText('arpitajadhav9@gmail.com');
    setEmailCopied(true);
    confetti({
      particleCount: 28,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#ec4899', '#fde047', '#38bdf8', '#a855f7']
    });
    setTimeout(() => setEmailCopied(false), 2600);
  };

  // Scroll to Top Handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll-triggered tilt and reveal for Skills Pencil Pouch & Sticky Notes
  useEffect(() => {
    const handleScroll = () => {
      if (!deskRef.current) return;
      const rect = deskRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Trigger tilt & reveal when the desk (pouch & sticky notes) scrolls
      // into the comfortable center of the viewport (top <= 48% of screen height)
      if (rect.top <= vh * 0.48 && rect.bottom >= 120) {
        setIsSkillsInView(true);
      } else if (rect.top > vh * 0.78 || rect.bottom < -100) {
        // Reset when user scrolls far back up to previous sections
        setIsSkillsInView(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial check on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Clicking pouch plays celebratory stationery confetti without hiding sticky notes
  const handlePouchClick = () => {
    confetti({
      particleCount: 28,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#2dd4bf', '#fb7185', '#fde047', '#818cf8']
    });
  };

  // Experience Section Active Role State
  const [activeExpId, setActiveExpId] = useState('engaze');
  const activeExp = experienceData.find((item) => item.id === activeExpId) || experienceData[0];

  // Projects Section State (Modal Sub-Container)
  const [selectedProject, setSelectedProject] = useState(null);

  // Set tab title and butterfly favicon explicitly on client mount
  useEffect(() => {
    document.title = 'Arpita Jadhav';
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = '/favicon.svg';
    document.head.appendChild(link);
  }, []);

  // Handle ESC key and scroll-lock for Project Modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  // Placed stamps with exact coordinates (Removed certified creative stamp)
  const [placedStamps, setPlacedStamps] = useState([
    { id: 1, type: 'star', x: 70, y: 340, rot: -14 },
    { id: 2, type: 'heart', x: 860, y: 380, rot: 16 }
  ]);

  // Vinyl music player state
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  // Typewriter effect phrases (concise single-line sentences, zero layout jumping)
  const typewriterPhrases = [
    "intuitive UI/UX experiences.",
    "scalable full-stack web apps.",
    "data-driven digital products.",
    "human-centered user research.",
    "bridges between design & code."
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(75);

  // 5 Core Disciplines (research, design, product, data, code)
  const [artifacts, setArtifacts] = useState([
    // LEFT SIDE
    { id: 'research', word: 'Research', posClass: 'pos-research', baseRot: -8 },
    { id: 'design', word: 'Design', posClass: 'pos-design', baseRot: 6 },

    // RIGHT SIDE
    { id: 'product', word: 'Product', posClass: 'pos-product', baseRot: 8 },
    { id: 'data', word: 'Data', posClass: 'pos-data', baseRot: -5 },
    { id: 'code', word: 'Code', posClass: 'pos-code', baseRot: 7 }
  ]);

  // On page load / reload, arrange artifacts with subtle organic tilt
  useEffect(() => {
    setArtifacts((prev) =>
      prev.map((item) => ({
        ...item,
        rot: item.baseRot + (Math.floor(Math.random() * 8) - 4),
        floatDelay: (Math.random() * 2.5).toFixed(2)
      }))
    );
  }, []);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    let timer;

    if (!isDeleting && displayedText === currentPhrase) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(35);
      }, 2200);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
      setTypingSpeed(75);
    } else {
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIndex, typingSpeed]);

  // Handle stamping anywhere on the hero card without layout shift
  const handleDeskClick = (e) => {
    if (
      e.target.closest('button') ||
      e.target.closest('a') ||
      e.target.closest('.stamp-dropside-container')
    ) return;
    if (!heroRef.current) return;

    const cardRect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    const randomRot = Math.floor(Math.random() * 36) - 18;

    const newStamp = {
      id: Date.now() + Math.random(),
      type: activeStamp,
      x: Math.round(x),
      y: Math.round(y),
      rot: randomRot
    };

    setPlacedStamps((prev) => [...prev.slice(-40), newStamp]);

    if (activeStamp === 'star' || activeStamp === 'heart') {
      confetti({
        particleCount: 15,
        spread: 45,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
        colors: ['#fef08a', '#fbcfe8', '#bbf7d0', '#c2412d']
      });
    }
  };

  const handleConfettiBoom = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fde047', '#f472b6', '#34d399', '#60a5fa', '#fb923c']
    });
  };

  return (
    <div className="scrapbook-desk">
      {/* Decorative Washi Tapes in page corners */}
      <div className="washi-tape washi-tape-yellow" style={{ top: '6px', left: '8%', width: '130px', transform: 'rotate(-4deg)' }} />
      <div className="washi-tape washi-tape-mint" style={{ top: '10px', right: '12%', width: '110px', transform: 'rotate(5deg)' }} />

      {/* COMPACT FLOATING NAVBAR */}
      <div className="scrapbook-nav-wrapper">
        <header className="scrapbook-navbar">
          {/* Section Tabs */}
          <nav className="nav-links-list" aria-label="Portfolio sections">
            <a
              href="#hero"
              className={`nav-butterfly-btn ${activeTab === 'hero' ? 'active' : ''}`}
              onClick={() => setActiveTab('hero')}
              title="Intro • Scroll to top"
              aria-label="Intro"
            >
              <img
                src="/butterfly.png"
                alt="Intro Butterfly"
                className="nav-butterfly-img"
              />
            </a>
            <a
              href="#about"
              className={`nav-pill-item ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => setActiveTab('about')}
            >
              <span>📖</span> About
            </a>
            <a
              href="#experience"
              className={`nav-pill-item ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <span>💼</span> Experience
            </a>
            <a
              href="#skills"
              className={`nav-pill-item ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <span>🛠️</span> Skills
            </a>
            <a
              href="#projects"
              className={`nav-pill-item ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <span>📂</span> Projects
            </a>
            <a
              href="#contact"
              className={`nav-pill-item ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              <span>✉️</span> Contact
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="nav-right-actions">
            <button
              className="nav-confetti-btn"
              onClick={handleConfettiBoom}
              title="Toss some celebratory confetti!"
            >
              <Sparkles size={15} color="#c2412d" />
              <span>Confetti!</span>
            </button>
            <a href="#contact" className="nav-cta-btn">
              <span>Let's Talk</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </header>
      </div>

      {/* SVG Filter for 4-Sided Natural Torn Paper Deckled Edges */}
      <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }} aria-hidden="true">
        <defs>
          <filter id="natural-torn-paper" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="7.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* ===================================================
          HERO SECTION CANVAS (Natural 4-Sided Torn Paper Spread)
          =================================================== */}
      <main id="hero">
        <section
          ref={heroRef}
          className="hero-spread-canvas"
          onClick={handleDeskClick}
          title="Click anywhere to stamp your favorite stickers!"
        >
          {/* Natural 4-Sided Torn Paper Sheet Backdrop */}
          <div className="hero-natural-torn-sheet" aria-hidden="true" />

          {/* Brass Paperclip on top-right */}
          <div className="paperclip" style={{ top: '-18px', right: '36px' }} aria-hidden="true" />

          {/* Absolute Isolated Stamp Overlay (zero layout shift, lands anywhere in 2D space) */}
          <div className="stamps-overlay-layer" aria-hidden="true">
            {placedStamps.map((stamp) => (
              <div
                key={stamp.id}
                className="stamp-spot"
                style={{
                  left: `${stamp.x}px`,
                  top: `${stamp.y}px`,
                  '--rot': `${stamp.rot}deg`
                }}
              >
                {stamp.type === 'star' && (
                  <div style={{ fontSize: '26px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}>
                    ⭐
                  </div>
                )}
                {stamp.type === 'heart' && (
                  <div style={{ fontSize: '24px', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}>
                    💖
                  </div>
                )}
                {stamp.type === 'coffee' && (
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    border: '3px solid rgba(110, 75, 45, 0.45)',
                    boxShadow: 'inset 0 0 6px rgba(110, 75, 45, 0.25)',
                    opacity: 0.7
                  }} />
                )}
              </div>
            ))}
          </div>

          {/* Top-Left Scrapbook Accent: Pressed Botanical Wildflower taped with translucent washi tape */}
          <div className="hero-pressed-flower-wrapper" aria-hidden="true" title="Pressed Botanical Wildflower">
            <div className="pressed-flower-tape washi-tape washi-tape-peach" />
            <img
              src="/pressed-flower.png"
              alt="Pressed Botanical Wildflower"
              className="hero-pressed-flower-img"
            />
          </div>

          {/* 1. TOP GREETING PILL */}
          <div className="hero-greeting-pill">
            <span className="status-dot-live" />
            <span>B.Tech CSE Student • Open for Opportunities</span>
          </div>

          {/* 2. MAIN EDITORIAL HEADLINE (Restored to exact design in user's image) */}
          <h1 className="hero-editorial-headline">
            Hello, I'm <span className="editorial-italic-name">Arpita</span>{' '}
            <span className="inline-sticker-badge">✨</span>
            <br />
            a product builder who blends
            <br />
            engineering thinking with
            <br />
            intuitive design.
          </h1>

          {/* 3. TYPEWRITER SENTENCE STRIP (Strictly 1 Line, No Jumping) */}
          <div className="scrapbook-typewriter-strip">
            <div className="washi-tape washi-tape-pink typewriter-strip-tape" />
            <span className="typewriter-prefix">Right now, I'm building</span>
            <span className="typewriter-animated-content">
              {displayedText}
              <span className="typewriter-ink-cursor">|</span>
            </span>
          </div>

          {/* 4. DUAL-ARC SCRAPBOOK CUTOUTS (Smriti Rawat & Shreya Sama Inspired Arrangement) 
              Pure transparent cutouts with soft 3D drop shadow - NO container boxes! */}
          <div
            className="scrapbook-artifacts-container"
            aria-label="Creative desk disciplines"
          >
            {artifacts.map((art) => (
              <div
                key={art.id}
                className={`scrap-artifact-card ${art.posClass} floating`}
                style={{
                  '--rot': `${art.rot || art.baseRot}deg`,
                  animationDelay: `${art.floatDelay || 0}s`
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  confetti({
                    particleCount: 22,
                    spread: 55,
                    origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
                    colors: ['#fde047', '#f472b6', '#34d399', '#60a5fa', '#fb923c']
                  });
                }}
              >
                <div className="scrap-artifact-icon-wrap">
                  {/* 1. USER RESEARCH: Field Notebook & Brass Magnifier */}
                  {art.id === 'research' && (
                    <svg width="94" height="88" viewBox="0 0 96 90" fill="none">
                      <rect x="8" y="10" width="58" height="70" rx="5" fill="#faf4e8" stroke="#cfbeaa" strokeWidth="2" />
                      {[18, 27, 36, 45, 54, 63, 72].map((y, i) => (
                        <g key={i}>
                          <circle cx="12" cy={y} r="2.2" fill="#786e63" />
                          <circle cx="7" cy={y} r="1.5" fill="#a89a88" />
                        </g>
                      ))}
                      <line x1="19" y1="22" x2="56" y2="22" stroke="#d5c7b3" strokeWidth="2" strokeLinecap="round" />
                      <line x1="19" y1="31" x2="48" y2="31" stroke="#d5c7b3" strokeWidth="2" strokeLinecap="round" />
                      <rect x="19" y="38" width="18" height="15" rx="2" fill="#f1ece1" stroke="#c4b5a0" strokeWidth="1" strokeDasharray="2 2" />
                      <line x1="41" y1="42" x2="56" y2="42" stroke="#d5c7b3" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="41" y1="49" x2="52" y2="49" stroke="#d5c7b3" strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="19" y1="62" x2="54" y2="62" stroke="#d5c7b3" strokeWidth="2" strokeLinecap="round" />
                      <rect x="42" y="12" width="26" height="15" rx="2" fill="#fecdd3" stroke="#f43f5e" strokeWidth="1" transform="rotate(5 42 12)" />
                      <text x="45" y="23" fontFamily="Space Grotesk" fontSize="8.5" fontWeight="bold" fill="#9f1239" transform="rotate(5 42 12)">WHY?</text>
                      <circle cx="62" cy="54" r="19" fill="#ffffff" fillOpacity="0.88" stroke="#92400e" strokeWidth="3.5" />
                      <circle cx="62" cy="54" r="15.5" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3 2" />
                      <path d="M52 48 Q 62 44 70 51" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" opacity="0.65" />
                      <circle cx="59" cy="54" r="4" fill="#fb7185" opacity="0.85" />
                      <path d="M75 67 L 90 82" stroke="#92400e" strokeWidth="5.5" strokeLinecap="round" />
                      <path d="M77 69 L 88 80" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="75" cy="67" r="3" fill="#ca8a04" />
                    </svg>
                  )}

                  {/* 2. PRODUCT DESIGN: Figma Artboard, Vector Bézier Curve, Design Tokens & Pen Tool */}
                  {art.id === 'design' && (
                    <svg width="94" height="88" viewBox="0 0 96 90" fill="none">
                      <defs>
                        <filter id="artboard-shadow" x="4" y="4" width="82" height="84" filterUnits="userSpaceOnUse">
                          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#431407" floodOpacity="0.09" />
                        </filter>
                        <linearGradient id="pen-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1e1b4b" />
                          <stop offset="50%" stopColor="#312e81" />
                          <stop offset="100%" stopColor="#0f172a" />
                        </linearGradient>
                        <linearGradient id="pen-nib-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f1f5f9" />
                          <stop offset="50%" stopColor="#94a3b8" />
                          <stop offset="100%" stopColor="#64748b" />
                        </linearGradient>
                        <linearGradient id="curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ec4899" />
                          <stop offset="50%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>

                      {/* 1. Backing Artboard Sheet */}
                      <g filter="url(#artboard-shadow)">
                        <rect x="10" y="8" width="70" height="74" rx="7" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.8" />
                      </g>

                      {/* Dotted Canvas Grid */}
                      <g opacity="0.32">
                        <circle cx="22" cy="25" r="0.9" fill="#94a3b8" />
                        <circle cx="34" cy="25" r="0.9" fill="#94a3b8" />
                        <circle cx="46" cy="25" r="0.9" fill="#94a3b8" />
                        <circle cx="58" cy="25" r="0.9" fill="#94a3b8" />
                        <circle cx="70" cy="25" r="0.9" fill="#94a3b8" />

                        <circle cx="22" cy="37" r="0.9" fill="#94a3b8" />
                        <circle cx="34" cy="37" r="0.9" fill="#94a3b8" />
                        <circle cx="46" cy="37" r="0.9" fill="#94a3b8" />
                        <circle cx="58" cy="37" r="0.9" fill="#94a3b8" />
                        <circle cx="70" cy="37" r="0.9" fill="#94a3b8" />

                        <circle cx="22" cy="49" r="0.9" fill="#94a3b8" />
                        <circle cx="34" cy="49" r="0.9" fill="#94a3b8" />
                        <circle cx="46" cy="49" r="0.9" fill="#94a3b8" />
                        <circle cx="58" cy="49" r="0.9" fill="#94a3b8" />
                        <circle cx="70" cy="49" r="0.9" fill="#94a3b8" />
                      </g>

                      {/* Artboard Header Tag: "# FRAME 01" */}
                      <rect x="15" y="13" width="31" height="7.5" rx="2" fill="#f3e8ff" />
                      <text x="18" y="18.8" fontFamily="Space Grotesk, sans-serif" fontSize="5" fontWeight="700" fill="#7e22ce" letterSpacing="0.4"># FRAME 01</text>

                      {/* 2. Vector Bézier Curve & Tangent Handles */}
                      <line x1="24" y1="48" x2="38" y2="28" stroke="#c084fc" strokeWidth="1.2" strokeDasharray="2.5 1.5" />
                      <circle cx="38" cy="28" r="2.2" fill="#ffffff" stroke="#9333ea" strokeWidth="1.4" />

                      <line x1="66" y1="46" x2="52" y2="34" stroke="#c084fc" strokeWidth="1.2" strokeDasharray="2.5 1.5" />
                      <circle cx="52" cy="34" r="2.2" fill="#ffffff" stroke="#9333ea" strokeWidth="1.4" />

                      <path d="M 24 48 C 38 28, 52 34, 66 46" stroke="url(#curve-grad)" strokeWidth="3" strokeLinecap="round" fill="none" />

                      {/* Anchor Points */}
                      <rect x="21.5" y="45.5" width="5" height="5" rx="1" fill="#ffffff" stroke="#7c3aed" strokeWidth="1.6" />
                      <rect x="63.5" y="43.5" width="5" height="5" rx="1" fill="#7c3aed" stroke="#ffffff" strokeWidth="1" />

                      {/* 3. Design System Color Swatches */}
                      <g transform="translate(17, 61)">
                        <rect x="0" y="0" width="11" height="15" rx="2.5" fill="#f43f5e" />
                        <rect x="0" y="9.5" width="11" height="5.5" rx="1" fill="#ffffff" />
                        <text x="2" y="13.5" fontFamily="Space Grotesk, sans-serif" fontSize="3.5" fontWeight="700" fill="#881337">500</text>

                        <rect x="14" y="0" width="11" height="15" rx="2.5" fill="#8b5cf6" />
                        <rect x="14" y="9.5" width="11" height="5.5" rx="1" fill="#ffffff" />
                        <text x="16" y="13.5" fontFamily="Space Grotesk, sans-serif" fontSize="3.5" fontWeight="700" fill="#4c1d95">600</text>

                        <rect x="28" y="0" width="11" height="15" rx="2.5" fill="#06b6d4" />
                        <rect x="28" y="9.5" width="11" height="5.5" rx="1" fill="#ffffff" />
                        <text x="30" y="13.5" fontFamily="Space Grotesk, sans-serif" fontSize="3.5" fontWeight="700" fill="#164e63">400</text>

                        <rect x="42" y="0" width="11" height="15" rx="2.5" fill="#f59e0b" />
                        <rect x="42" y="9.5" width="11" height="5.5" rx="1" fill="#ffffff" />
                        <text x="44" y="13.5" fontFamily="Space Grotesk, sans-serif" fontSize="3.5" fontWeight="700" fill="#78350f">300</text>
                      </g>

                      {/* 4. Figma Designer Cursor */}
                      <g transform="translate(56, 19)">
                        <path d="M 0 0 L 0 11 L 3 8.5 L 6.5 13 L 8.5 12 L 5 7.5 L 9 7.5 Z" fill="#f43f5e" stroke="#ffffff" strokeWidth="1" />
                        <rect x="8" y="8" width="17" height="7.5" rx="2" fill="#f43f5e" />
                        <text x="10" y="13.5" fontFamily="Space Grotesk, sans-serif" fontSize="4.6" fontWeight="700" fill="#ffffff">Arpita</text>
                      </g>

                      {/* 5. Precision Vector Pen Tool */}
                      <g transform="translate(68, 48) rotate(-42)">
                        <rect x="-3" y="0" width="6" height="32" rx="2" fill="url(#pen-body-grad)" stroke="#475569" strokeWidth="0.8" />
                        <rect x="-3" y="4" width="6" height="2" fill="#f59e0b" />
                        <rect x="-3" y="24" width="6" height="3" fill="#cbd5e1" />
                        <path d="M -3 0 L 0 -8 L 3 0 Z" fill="url(#pen-nib-grad)" stroke="#64748b" strokeWidth="0.6" />
                        <circle cx="0" cy="-3.5" r="0.75" fill="#0f172a" />
                        <line x1="0" y1="-3.5" x2="0" y2="-8" stroke="#0f172a" strokeWidth="0.6" />
                        <circle cx="0" cy="-8.5" r="1.4" fill="#a855f7" />
                      </g>
                    </svg>
                  )}

                  {/* 3. PRODUCT BUILDING: Hardcover SPRINT Book & Rocket Sticker */}
                  {art.id === 'product' && (
                    <svg width="94" height="90" viewBox="0 0 96 92" fill="none">
                      <rect x="20" y="12" width="62" height="72" rx="4" fill="#faf7ee" stroke="#cbd5e1" strokeWidth="1.5" />
                      <rect x="15" y="10" width="65" height="74" rx="4" fill="#facc15" stroke="#ca8a04" strokeWidth="2.5" />
                      <line x1="25" y1="10" x2="25" y2="84" stroke="#eab308" strokeWidth="2.5" />
                      <path d="M40 84 V 90 L 44 87 L 48 90 V 84 Z" fill="#2563eb" />
                      <text x="36" y="38" fontFamily="Syne" fontSize="14" fontWeight="900" fill="#1e293b" letterSpacing="1.2">SPRINT</text>
                      <text x="36" y="50" fontFamily="Space Grotesk" fontSize="8" fontWeight="800" fill="#854d0e">0 → 1 LAUNCH</text>
                      <line x1="36" y1="58" x2="68" y2="58" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3 2" />
                      <line x1="36" y1="65" x2="62" y2="65" stroke="#ca8a04" strokeWidth="1" strokeDasharray="3 2" />
                      <g transform="translate(48, 46) rotate(15)">
                        <circle cx="16" cy="16" r="13" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
                        <path d="M16 6 C 11 12, 10 19, 10 22 H 22 C 22 19, 21 12, 16 6 Z" fill="#ef4444" />
                        <circle cx="16" cy="14" r="2.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                        <path d="M10 18 L 6 23 V 24 H 10" fill="#b91c1c" />
                        <path d="M22 18 L 26 23 V 24 H 22" fill="#b91c1c" />
                        <path d="M14 22 C 14 25, 16 28, 16 28 C 16 28, 18 25, 18 22 Z" fill="#f59e0b" />
                      </g>
                    </svg>
                  )}

                  {/* 4. DATA & ANALYTICS: 3D Rising Bars & Growth Trend */}
                  {art.id === 'data' && (
                    <svg width="94" height="86" viewBox="0 0 96 88" fill="none">
                      <rect x="8" y="8" width="80" height="72" rx="7" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                      <line x1="16" y1="22" x2="80" y2="22" stroke="#f1f5f9" strokeWidth="1.5" />
                      <line x1="16" y1="38" x2="80" y2="38" stroke="#f1f5f9" strokeWidth="1.5" />
                      <line x1="16" y1="54" x2="80" y2="54" stroke="#f1f5f9" strokeWidth="1.5" />
                      <rect x="20" y="46" width="10" height="26" rx="2.5" fill="#38bdf8" />
                      <rect x="35" y="32" width="10" height="40" rx="2.5" fill="#818cf8" />
                      <rect x="50" y="40" width="10" height="32" rx="2.5" fill="#fb7185" />
                      <rect x="65" y="20" width="10" height="52" rx="2.5" fill="#34d399" />
                      <path d="M20 48 Q 38 32, 50 38 T 72 16" stroke="#ea580c" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="72" cy="16" r="4.5" fill="#ea580c" stroke="#ffffff" strokeWidth="2" />
                      <rect x="48" y="6" width="36" height="14" rx="4" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
                      <text x="53" y="16" fontFamily="Space Grotesk" fontSize="8" fontWeight="bold" fill="#15803d">↑ +48%</text>
                    </svg>
                  )}

                  {/* 5. CODE & ENGINEERING: Retro Beige CRT Terminal with Cyan Code */}
                  {art.id === 'code' && (
                    <svg width="94" height="88" viewBox="0 0 96 90" fill="none">
                      <rect x="10" y="8" width="76" height="60" rx="8" fill="#f5eee1" stroke="#b4a48c" strokeWidth="2.5" />
                      <rect x="17" y="14" width="62" height="46" rx="5" fill="#e0d4be" />
                      <rect x="21" y="18" width="54" height="38" rx="3.5" fill="#080c16" />
                      <path d="M26 27 L 30 30 L 26 33" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="34" y1="30" x2="48" y2="30" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" />
                      <line x1="28" y1="38" x2="62" y2="38" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
                      <line x1="28" y1="46" x2="44" y2="46" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
                      <rect x="47" y="43" width="3" height="5" fill="#4ade80" />
                      <line x1="48" y1="54" x2="70" y2="54" stroke="#8a7a66" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="73" cy="54" r="1.5" fill="#22c55e" />
                      <path d="M34 68 H 62 L 68 84 H 28 L 34 68 Z" fill="#e8deca" stroke="#b4a48c" strokeWidth="2" />
                    </svg>
                  )}
                </div>

                <div className="scrap-artifact-tooltip">
                  {art.word}
                </div>
              </div>
            ))}
          </div>

          {/* 5. CENTERED CALL TO ACTIONS */}
          <div className="hero-centered-cta-row">
            <a href="#projects" className="btn-hero-primary" title="Flip Through Projects">
              <FolderHeart size={16} />
              <span>Flip Through Projects</span>
            </a>
            <a
              href="/resume.pdf"
              download="Arpita_Jadhav_Resume.pdf"
              className="btn-hero-secondary"
              title="Download Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* 6. LEFT-SIDE DROPSIDE INTERACTIVE STAMP KIT (Zero Layout Shift) */}
          <div className="stamp-dropside-container">
            <button
              type="button"
              className={`stamp-dropside-pill-btn ${isStampKitOpen ? 'active' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsStampKitOpen(!isStampKitOpen);
              }}
              title="Open interactive stamp kit"
            >
              <span className="stamp-dropside-icon">🎨</span>
              <span className="stamp-dropside-label">Stamp Kit</span>
              <ChevronRight
                size={14}
                className={`stamp-dropside-chevron ${isStampKitOpen ? 'open' : ''}`}
              />
            </button>

            {isStampKitOpen && (
              <div
                className="stamp-dropside-tray"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="stamp-dropside-chips">
                  <button
                    type="button"
                    className={`stamp-chip-mini ${activeStamp === 'star' ? 'active' : ''}`}
                    onClick={() => setActiveStamp('star')}
                    title="Stamp gold star"
                  >
                    <span>⭐</span>
                    <span>Star</span>
                  </button>
                  <button
                    type="button"
                    className={`stamp-chip-mini ${activeStamp === 'heart' ? 'active' : ''}`}
                    onClick={() => setActiveStamp('heart')}
                    title="Stamp heart"
                  >
                    <span>💖</span>
                    <span>Heart</span>
                  </button>
                  <button
                    type="button"
                    className={`stamp-chip-mini ${activeStamp === 'coffee' ? 'active' : ''}`}
                    onClick={() => setActiveStamp('coffee')}
                    title="Stamp coffee stain"
                  >
                    <span>☕</span>
                    <span>Coffee</span>
                  </button>
                </div>

                {placedStamps.length > 0 && (
                  <button
                    type="button"
                    className="stamp-dropside-clear-btn"
                    onClick={() => setPlacedStamps([])}
                    title="Clear placed stamps"
                  >
                    <RefreshCw size={11} />
                    <span>Clear ({placedStamps.length})</span>
                  </button>
                )}

                <button
                  type="button"
                  className="stamp-dropside-close-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsStampKitOpen(false);
                  }}
                  title="Close stamp tray"
                >
                  <X size={13} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEC. 02: ABOUT ME (SCRAPBOOK DESK WITH CENTER PHOTO STACK) */}
        {/* ======================================================== */}
        <section id="about" className="scrapbook-about-section">
          {/* Centered Editorial Header */}
          <div className="about-header-centered">
            <h2 className="about-section-title">
              About <span className="about-me-script">me</span>
              <span className="about-doodle-sparkle">✦</span>
            </h2>

            <p className="about-tagline-lead">
              Software engineer by craft, designer by instinct, chronic doodler at heart.
            </p>
          </div>

          {/* Scrapbook Canvas: 4 Distinct Stationery Designs directly inspired by User's Photos */}
          <div className="about-scrapbook-canvas">
            {/* Left Flank Notes */}
            <div className="about-canvas-flank flank-left">
              {/* Note 1: Torn Deckle Paper with Periwinkle Backing Sheet & Metallic Clip (User Photo 3 Top) */}
              <div className="scrapbook-cutout-card cutout-deckle-paper" style={{ '--cutout-tilt': '-2deg' }}>
                {/* Periwinkle/Lavender Torn Backing Sheet peaking behind */}
                <div className="deckle-backing-sheet" aria-hidden="true" />

                {/* Silver Metallic Paperclip at top */}
                <div className="cutout-paperclip" aria-hidden="true" title="Paperclipped">
                  <svg width="24" height="40" viewBox="0 0 24 42" fill="none">
                    <defs>
                      <linearGradient id="silver-clip-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#94a3b8" />
                        <stop offset="45%" stopColor="#e2e8f0" />
                        <stop offset="100%" stopColor="#64748b" />
                      </linearGradient>
                    </defs>
                    <path d="M7 14 V32 C7 36 17 36 17 32 V8 C17 3 4 3 4 8 V35 C4 41 20 41 20 35 V14"
                      stroke="url(#silver-clip-grad)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Vintage Air Mail Postage Stamp */}
                <img
                  src="/stickers/sticker-stamp.svg"
                  alt="Vintage postage stamp sticker"
                  className="about-decor-sticker sticker-airmail-stamp"
                  title="Air mail postage stamp"
                />

                {/* Main Front Torn Deckle Sheet */}
                <div className="deckle-front-sheet">
                  <div className="cutout-sheet-content">
                    <span className="canvas-badge badge-lavender">DEV & DESIGN</span>
                    <h3 className="canvas-note-title">"I speak both 'Developer' & 'Designer' fluently."</h3>
                    <p className="canvas-note-desc">
                      Bridging scalable React & Python systems with pixel-crafted Figma components and intuitive UX.
                    </p>
                    <div className="canvas-note-footer">
                      <span className="footer-doodle doodle-lavender">✦ 0 errors • 100% craft</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note 2: Vintage Brass Clipboard Note with Torn Lined Paper & Gold Star (User Photo 2 Bottom) */}
              <div className="scrapbook-cutout-card cutout-clipboard-note" style={{ '--cutout-tilt': '1.4deg' }}>
                {/* Vintage Brass Clipboard Clamp Header */}
                <div className="clipboard-clamp-header" aria-hidden="true">
                  <img src="/stickers/brass-clip.svg" alt="Brass clipboard clamp" className="clipboard-brass-img" />
                </div>

                {/* Green Washi Tape with Gold Star pinned on top-right */}
                <div className="clipboard-tape-star" aria-hidden="true">
                  <div className="clipboard-green-tape" />
                  <img src="/stickers/sticker-star.svg" alt="Gold star" className="clipboard-star-sticker" />
                </div>

                {/* French Fries Carton Sticker */}
                <img
                  src="/stickers/sticker-fries.png"
                  alt="French fries sticker"
                  className="about-decor-sticker sticker-french-fries"
                  title="Perpetually craving fries 🍟"
                />

                {/* Main Clipboard Lined Notepad Sheet */}
                <div className="clipboard-sheet-body">
                  {/* Classic American Legal Pad Double Red Margin */}
                  <div className="legal-pad-margin-line" aria-hidden="true" />

                  {/* Left Margin Punch Holes */}
                  <div className="clipboard-holes-col" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="clipboard-punch-hole" />
                    ))}
                  </div>

                  <div className="cutout-sheet-content pl-punch">
                    <span className="canvas-badge badge-peach">LITTLE OBSESSIONS</span>
                    <h3 className="canvas-note-title">"Curiosity, code & memories ✦"</h3>
                    <p className="canvas-note-desc">
                      Street food explorer (I take my parathas seriously!), vintage stationery hoarder, and morning light seeker.
                    </p>
                    <div className="canvas-note-footer">
                      <span className="footer-doodle doodle-peach">♥ fueled by curiosity & warmth</span>
                    </div>
                  </div>

                  {/* Authentic Micro-perforated Ragged Torn Bottom Edge SVG */}
                  <svg className="torn-bottom-svg" viewBox="0 0 320 18" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 0 L0 8 L9 13 L16 7 L25 14 L32 8 L41 14 L48 7 L57 13 L64 8 L73 14 L80 7 L89 13 L96 8 L105 14 L112 7 L121 13 L128 8 L137 14 L144 7 L153 13 L160 8 L169 14 L176 7 L185 13 L192 8 L201 14 L208 7 L217 13 L224 8 L233 14 L240 7 L249 13 L256 8 L265 14 L272 7 L281 13 L288 8 L297 14 L304 8 L313 13 L320 8 L320 0 Z" fill="#fef9db" />
                    <path d="M0 8 L9 13 L16 7 L25 14 L32 8 L41 14 L48 7 L57 13 L64 8 L73 14 L80 7 L89 13 L96 8 L105 14 L112 7 L121 13 L128 8 L137 14 L144 7 L153 13 L160 8 L169 14 L176 7 L185 13 L192 8 L201 14 L208 7 L217 13 L224 8 L233 14 L240 7 L249 13 L256 8 L265 14 L272 7 L281 13 L288 8 L297 14 L304 8 L313 13 L320 8" stroke="#ebd9a2" strokeWidth="1.2" fill="none" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Center: The Compact Interactive Photo Stack Accordion + Surrounding Stickers */}
            <div className="about-canvas-center">
              {/* Handwritten Doodles around stack */}
              <div className="doodle-annotation top-doodle" aria-hidden="true">
                making art & software ✦
                <img
                  src="/stickers/sticker-star.svg"
                  alt="Gold sparkle sticker"
                  className="about-decor-sticker sticker-gold-star"
                  title="Sparkle ✦"
                />
              </div>

              {/* The Photo Accordion Container */}
              <div className="accordion-strip-container">
                {aboutPhotosData.map((photo, index) => {
                  const isExpanded = activePhotoIndex === index;
                  return (
                    <div
                      key={photo.id}
                      className={`accordion-photo-panel ${isExpanded ? 'is-expanded' : 'is-collapsed'}`}
                      onClick={() => setActivePhotoIndex(index)}
                      onMouseEnter={() => setActivePhotoIndex(index)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View ${photo.title}`}
                    >
                      {/* Washi Tape Strip at top of photo */}
                      <div className="accordion-washi-tape" aria-hidden="true" />

                      {/* Photo Image */}
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="accordion-img"
                        style={{ objectPosition: photo.objectPosition || 'center center' }}
                        loading="lazy"
                      />

                      {/* Collapsed Vertical Tag Indicator */}
                      {!isExpanded && (
                        <div className="accordion-vertical-label">
                          <span className="vertical-label-num">0{index + 1}</span>
                        </div>
                      )}

                      {/* Expanded Caption Overlay */}
                      {isExpanded && (
                        <div className="accordion-caption-overlay">
                          <div className="caption-tag-pill">{photo.category}</div>
                          <p className="caption-text">{photo.caption}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Doodle under stack */}
              <div className="doodle-annotation bottom-doodle" aria-hidden="true">
                if u catch me staring, im probably sketching ✎
              </div>
            </div>

            {/* Right Flank Notes */}
            <div className="about-canvas-flank flank-right">
              {/* Note 3: Botanical Herbarium Note with Kraft Tape & Leafy Watercolor Branch (User Photo 4) */}
              <div className="scrapbook-cutout-card cutout-botanical-card" style={{ '--cutout-tilt': '1.5deg' }}>
                {/* Watercolor Leafy Branch Sprig emerging from behind top-left */}
                <img
                  src="/stickers/botanical-branch.svg"
                  alt="Watercolor leaf branch"
                  className="botanical-branch-under"
                  aria-hidden="true"
                />

                {/* Kraft Paper Washi Tape Strip at top */}
                <div className="kraft-tape-strip" aria-hidden="true" />

                {/* Botanical Lavender Sprigs Bundle (From User Sticker Sheet) */}
                <img
                  src="/stickers/sticker-lavender.png"
                  alt="Lavender botanical sprigs"
                  className="about-decor-sticker sticker-pressed-daisy"
                  title="French lavender sprigs 🌿"
                />

                {/* Retro Instax Camera Sticker with Daisies (Moved from busy photos onto The Maker card) */}
                <img
                  src="/stickers/sticker-camera.png"
                  alt="Retro Instax camera sticker"
                  className="about-decor-sticker sticker-instax-camera"
                  title="Fujifilm memories 📷"
                />

                {/* Artist's Wire-Bound Sketchbook Page with Drafting Grid */}
                <div className="botanical-card-body">
                  {/* Spiral Wire Punch Header with Perforated Tear Line */}
                  <div className="sketchbook-spiral-header" aria-hidden="true">
                    <div className="spiral-holes-row">
                      {[...Array(9)].map((_, i) => (
                        <span key={i} className="spiral-wire-hole" />
                      ))}
                    </div>
                    <div className="spiral-perf-line" />
                  </div>

                  <div className="botanical-card-inner">
                    <span className="canvas-badge badge-mint">THE MAKER</span>
                    <h3 className="canvas-note-title">"A chronic doodler since childhood ✎"</h3>
                    <p className="canvas-note-desc">
                      If you catch me staring quietly in a cafe, I’m probably sketching the room or dreaming up an interface.
                    </p>
                    <div className="canvas-note-footer">
                      <span className="footer-doodle doodle-mint">★ sketchbook always in my bag</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note 4: Red-and-White Gingham Envelope Note with Wax Seal (User Photo 2 Middle) */}
              <div className="scrapbook-cutout-card cutout-gingham-envelope" style={{ '--cutout-tilt': '-1.5deg' }}>
                {/* Woven Red Gingham Fabric Backing with Pinked Sawtooth Edges */}
                <div className="gingham-fabric-backing" aria-hidden="true" />

                {/* Kraft Envelope Flap peaking from behind */}
                <div className="kraft-envelope-flap" aria-hidden="true" />

                {/* Pink Embossed Wax Seal on Top-Left */}
                <img
                  src="/stickers/wax-seal.svg"
                  alt="Wax seal stamp"
                  className="envelope-wax-seal"
                  aria-hidden="true"
                />

                {/* Indian Classical Dance Feet Sticker (Moved from busy photos onto Core Belief / Craft card) */}
                <img
                  src="/stickers/sticker-dance.png"
                  alt="Classical dance feet sticker"
                  className="about-decor-sticker sticker-dance-feet"
                  title="Rhythm in my soul 🩰"
                />

                {/* User's Blue Film-Strip Perforated Note Sticker */}
                <div className="about-decor-sticker sticker-blue-note-wrap" title="Desk memo 📝">
                  <img
                    src="/stickers/sticker-blue-note.png"
                    alt="Blue memo note sticker"
                    className="sticker-blue-note-img"
                  />
                  <div className="sticker-blue-note-caption">
                    <span>stay curious ✦</span>
                  </div>
                </div>

                {/* Cream Linen Letter Card with Aerogramme Accents */}
                <div className="gingham-letter-card">
                  <div className="aerogramme-corner-accent top-left" aria-hidden="true" />
                  <div className="aerogramme-corner-accent bottom-right" aria-hidden="true" />

                  <div className="cutout-sheet-content">
                    <span className="canvas-badge badge-rose">CORE BELIEF</span>
                    <h3 className="canvas-note-title">"Human connection is the crux of everything I make."</h3>
                    <p className="canvas-note-desc">
                      The process, the pivots, and the care make the outcome deliberate. Tech should feel warm, accessible, and real.
                    </p>
                    <div className="canvas-note-footer">
                      <span className="footer-doodle doodle-rose">✦ deliberate craft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Centered Action Bar & Gallery Controls */}
          <div className="about-center-actions">
            <a href="#contact" className="about-cta-btn">
              <span>Let's talk</span>
              <ArrowUpRight size={16} className="btn-arrow-icon" />
            </a>

            <a
              href="/resume.pdf"
              download="Arpita_Jadhav_Resume.pdf"
              className="about-resume-btn"
              title="Download Arpita's Resume"
            >
              <Download size={15} />
              <span>Resume</span>
            </a>

            {/* Photo Navigator */}
            <div className="about-gallery-nav" aria-label="Photo gallery controls">
              <button
                onClick={() => setActivePhotoIndex((prev) => (prev > 0 ? prev - 1 : aboutPhotosData.length - 1))}
                className="gallery-nav-btn prev"
                title="Previous photo"
                aria-label="Previous photo"
              >
                ←
              </button>
              <span className="gallery-counter">
                {String(activePhotoIndex + 1).padStart(2, '0')} / {String(aboutPhotosData.length).padStart(2, '0')}
              </span>
              <button
                onClick={() => setActivePhotoIndex((prev) => (prev < aboutPhotosData.length - 1 ? prev + 1 : 0))}
                className="gallery-nav-btn next"
                title="Next photo"
                aria-label="Next photo"
              >
                →
              </button>
            </div>
          </div>
        </section>

        {/* ===================================================
            PROJECTS SHOWCASE SECTION (2-Column Grid + Interactive Modal Dossier)
            =================================================== */}
        <section id="projects" className="scrapbook-projects-section">
          {/* Scrapbook Section Header (Harmonious Editorial Layout with Vintage Pencil & Craft Vignette) */}
          <div className="projects-section-header left-aligned">
            <div className="projects-header-left-content">
              {/* Herbarium Specimen Bar: Pressed Dried Fern secured with Hand-Sewn Cross-Stitches */}
              <div className="header-specimen-bar" aria-hidden="true">
                <div className="header-pressed-botanical" title="Pressed herbarium botanical specimen">
                  <svg width="64" height="30" viewBox="0 0 100 48" fill="none">
                    <defs>
                      <linearGradient id="botanical-stem" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4f633c" />
                        <stop offset="100%" stopColor="#7a945d" />
                      </linearGradient>
                      <linearGradient id="botanical-leaf-1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#809c64" />
                        <stop offset="100%" stopColor="#53693e" />
                      </linearGradient>
                      <linearGradient id="botanical-leaf-2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9cb880" />
                        <stop offset="100%" stopColor="#67814c" />
                      </linearGradient>
                      <filter id="botanical-drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="1" dy="1.5" stdDeviation="1" floodColor="#26331a" floodOpacity="0.18" />
                      </filter>
                    </defs>
                    <g filter="url(#botanical-drop-shadow)">
                      <path d="M4 36 C24 32, 50 24, 92 10" stroke="url(#botanical-stem)" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M20 33 C18 25, 23 19, 30 21 C32 27, 28 32, 20 33 Z" fill="url(#botanical-leaf-1)" />
                      <path d="M26 29 C32 23, 40 24, 42 31 C36 34, 28 33, 26 29 Z" fill="url(#botanical-leaf-2)" />
                      <path d="M40 25 C39 16, 46 11, 54 14 C55 20, 49 25, 40 25 Z" fill="url(#botanical-leaf-1)" />
                      <path d="M48 22 C55 16, 64 18, 65 25 C58 28, 50 26, 48 22 Z" fill="url(#botanical-leaf-2)" />
                      <path d="M62 18 C63 10, 71 7, 78 9 C78 16, 71 19, 62 18 Z" fill="url(#botanical-leaf-1)" />
                      <path d="M70 15 C77 10, 85 13, 85 19 C78 21, 72 18, 70 15 Z" fill="url(#botanical-leaf-2)" />
                      <path d="M86 10 C91 4, 96 6, 95 11 C92 14, 88 12, 86 10 Z" fill="url(#botanical-leaf-2)" />
                      <circle cx="93" cy="6" r="2" fill="#d97736" opacity="0.85" />
                    </g>
                  </svg>
                </div>

                {/* Hand-sewn cross-stitches holding the botanical stem */}
                <div className="header-craft-stitches" title="Hand-stitched thread securing specimen">
                  <svg width="44" height="12" viewBox="0 0 44 12" fill="none">
                    <g stroke="#c2412d" strokeWidth="1.8" strokeLinecap="round" opacity="0.8">
                      <line x1="3" y1="2" x2="11" y2="10" />
                      <line x1="11" y1="2" x2="3" y2="10" />
                      <circle cx="3" cy="2" r="0.7" fill="#381b12" opacity="0.45" />
                      <circle cx="11" cy="10" r="0.7" fill="#381b12" opacity="0.45" />
                      <circle cx="11" cy="2" r="0.7" fill="#381b12" opacity="0.45" />
                      <circle cx="3" cy="10" r="0.7" fill="#381b12" opacity="0.45" />
                    </g>
                    <g stroke="#c2412d" strokeWidth="1.8" strokeLinecap="round" opacity="0.8">
                      <line x1="19" y1="2" x2="27" y2="10" />
                      <line x1="27" y1="2" x2="19" y2="10" />
                      <circle cx="19" cy="2" r="0.7" fill="#381b12" opacity="0.45" />
                      <circle cx="27" cy="10" r="0.7" fill="#381b12" opacity="0.45" />
                    </g>
                  </svg>
                </div>
              </div>

              <h2 className="projects-section-title">
                <span className="highlight-pen-text">Crafted</span> Projects
                <span className="title-sparkle-emoji" aria-hidden="true"> ✨</span>
              </h2>

              <p className="projects-section-subtitle">
                Systems I've engineered with code and designed with care.
              </p>
            </div>

            {/* Scrapbook Desk Vignette: Hand-Sharpened 2B Drafting Pencil + Pinned Handwritten Note */}
            <div className="projects-header-desk-cluster">
              {/* Vintage Wooden 2B Drafting Pencil pointing towards the handwritten note */}
              <div className="header-vintage-pencil" title="Vintage 2B Drafting Pencil (Handmade & Sharpened)" aria-hidden="true">
                <svg width="176" height="26" viewBox="0 0 176 26" fill="none">
                  <defs>
                    <filter id="pencil-shadow" x="-10%" y="-20%" width="130%" height="160%">
                      <feDropShadow dx="2" dy="3.5" stdDeviation="2.2" floodColor="#2a1a08" floodOpacity="0.25" />
                    </filter>
                    <linearGradient id="pencil-facet-top" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fde68a" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                    <linearGradient id="pencil-facet-mid" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <linearGradient id="pencil-facet-bot" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#b45309" />
                      <stop offset="100%" stopColor="#78350f" />
                    </linearGradient>
                    <linearGradient id="pencil-ferrule" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fef08a" />
                      <stop offset="30%" stopColor="#d4af37" />
                      <stop offset="70%" stopColor="#a16207" />
                      <stop offset="100%" stopColor="#713f12" />
                    </linearGradient>
                    <linearGradient id="pencil-eraser" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fda4af" />
                      <stop offset="60%" stopColor="#f43f5e" />
                      <stop offset="100%" stopColor="#be123c" />
                    </linearGradient>
                    <linearGradient id="pencil-cedar" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#fef3c7" />
                      <stop offset="50%" stopColor="#fde68a" />
                      <stop offset="100%" stopColor="#fed7aa" />
                    </linearGradient>
                    <linearGradient id="pencil-graphite" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#374151" />
                      <stop offset="60%" stopColor="#1f2937" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                  </defs>

                  <g filter="url(#pencil-shadow)">
                    {/* Pink Rubber Eraser */}
                    <rect x="4" y="8" width="14" height="10" rx="3" fill="url(#pencil-eraser)" />
                    <path d="M6 10 L15 10" stroke="#fecdd3" strokeWidth="0.8" opacity="0.7" strokeLinecap="round" />

                    {/* Golden Brass Ferrule Band with crimp notches */}
                    <rect x="16" y="7" width="14" height="12" rx="1" fill="url(#pencil-ferrule)" stroke="#5c3803" strokeWidth="0.4" />
                    <line x1="20" y1="7" x2="20" y2="19" stroke="#5c3803" strokeWidth="0.8" opacity="0.6" />
                    <line x1="26" y1="7" x2="26" y2="19" stroke="#5c3803" strokeWidth="0.8" opacity="0.6" />
                    <circle cx="23" cy="13" r="0.7" fill="#fef08a" opacity="0.9" />

                    {/* Hexagonal Wood Barrel */}
                    <polygon points="30,7 134,7 134,11 30,11" fill="url(#pencil-facet-top)" />
                    <polygon points="30,11 134,11 134,15 30,15" fill="url(#pencil-facet-mid)" />
                    <polygon points="30,15 134,15 134,19 30,19" fill="url(#pencil-facet-bot)" />

                    <line x1="30" y1="11" x2="134" y2="11" stroke="#92400e" strokeWidth="0.5" opacity="0.4" />
                    <line x1="30" y1="15" x2="134" y2="15" stroke="#78350f" strokeWidth="0.5" opacity="0.6" />

                    {/* Hot-Stamped Gold Foil Imprint */}
                    <text x="82" y="13.8" textAnchor="middle" fill="#fef3c7" fontSize="4.2" fontFamily="'Space Grotesk', monospace" fontWeight="700" letterSpacing="0.8" opacity="0.85">
                      ✦ 2B • CRAFT &amp; CODE • HB ✦
                    </text>

                    {/* Sharpened Exposed Cedar Wood Cone with Carved Scallops */}
                    <path
                      d="M134 7 
                         C136 9, 136 9, 134 11 
                         C136 13, 136 13, 134 15 
                         C136 17, 136 17, 134 19 
                         L158 14.5 
                         L158 11.5 
                         Z"
                      fill="url(#pencil-cedar)"
                    />
                    <path d="M138 10 L152 12.2" stroke="#d97706" strokeWidth="0.4" opacity="0.4" />
                    <path d="M138 16 L152 13.8" stroke="#d97706" strokeWidth="0.4" opacity="0.4" />

                    {/* Graphite Lead Tip Cone */}
                    <polygon points="158,11.5 170,13 158,14.5" fill="url(#pencil-graphite)" />
                    <circle cx="169" cy="13" r="0.5" fill="#f8fafc" opacity="0.8" />
                  </g>
                </svg>
              </div>

              {/* Handwritten Note pinned with Vintage Brass Thumbtack */}
              <div className="projects-header-handwritten-note">
                <div className="note-thumbtack" aria-hidden="true" title="Pinned with vintage brass thumbtack">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <defs>
                      <radialGradient id="tack-gold" cx="35%" cy="35%" r="65%">
                        <stop offset="0%" stopColor="#fef08a" />
                        <stop offset="40%" stopColor="#d4af37" />
                        <stop offset="80%" stopColor="#92400e" />
                        <stop offset="100%" stopColor="#451a03" />
                      </radialGradient>
                      <filter id="tack-shadow" x="-30%" y="-30%" width="170%" height="170%">
                        <feDropShadow dx="1" dy="2.5" stdDeviation="1.5" floodColor="#2a1805" floodOpacity="0.32" />
                      </filter>
                    </defs>
                    <g filter="url(#tack-shadow)">
                      <ellipse cx="12" cy="14" rx="4" ry="1.5" fill="#3a2202" opacity="0.3" />
                      <circle cx="12" cy="11" r="8" fill="url(#tack-gold)" stroke="#5c3803" strokeWidth="0.6" />
                      <circle cx="11.5" cy="10.5" r="5.5" fill="url(#tack-gold)" />
                      <circle cx="9.5" cy="8.5" r="2" fill="#fff" opacity="0.7" />
                    </g>
                  </svg>
                </div>
                <div className="note-content-row">
                  <span className="projects-handwritten-text">
                    click any card to open case study
                  </span>
                  <svg width="26" height="20" viewBox="0 0 28 22" fill="none" className="note-doodle-arrow" aria-hidden="true">
                    <path d="M4 4 C14 2, 22 8, 20 18 M15 14 L20 18 L24 13" stroke="#c2412d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* 2-Column Responsive Project Grid (Compact Scrapbook Cards) */}
          <div className="projects-showcase-grid">
            {projectsData.map((project, idx) => (
              <article
                key={project.id}
                className="project-showcase-card scrapbook-card-textured"
                style={{ '--card-rot': `${idx % 2 === 0 ? -1.1 : 1.1}deg` }}
                onClick={() => setSelectedProject(project)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                aria-label={`Open case study for ${project.title}`}
              >
                {/* Scrapbook Accent: Color Washi Tape Strip at top of card */}
                <div
                  className={`card-washi-tape tape-variant-${(idx % 4) + 1}`}
                  aria-hidden="true"
                />

                {/* Card Index & Category Header */}
                <div className="project-card-index-tag">
                  <span className="project-index-num">#{String(idx + 1).padStart(2, '0')}</span>
                  <span className="project-index-dot" />
                  <span className="project-index-cat">{project.shortCategory}</span>
                </div>

                {/* 1. Visual Preview Box with Soft Studio Backdrop, Rounded Corners & Floating Arrow Button */}
                <div className="project-preview-box">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-preview-img"
                    loading="lazy"
                  />

                  {/* Floating Circular Arrow Button */}
                  <div className="project-preview-corner-btn" title="Open Case Study Dossier">
                    <ArrowUpRight size={16} />
                  </div>

                  {/* Hover Overlay Badge */}
                  <div className="project-preview-hover-tag">
                    <span>Read Dossier ↗</span>
                  </div>
                </div>

                {/* 2. Metadata Content (Clean bold title and impact) */}
                <div className="project-info-box">
                  {/* Bold Title */}
                  <h3 className="project-card-title">
                    {project.title}
                  </h3>

                  {/* Punchline Impact */}
                  <p className="project-card-punchline">
                    {project.punchline}
                  </p>

                  {/* Tech Tag Pills */}
                  <div className="project-tag-chips-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </section>

        {/* ===================================================
            EXPERIENCE SECTION (Interactive Ledger + Dynamic Memo Card Dossier)
            =================================================== */}
        <section id="experience" className="scrapbook-experience-section">
          {/* Section Header (Clean title without SEC. 03 tag) */}
          <div className="experience-section-header">
            <div className="experience-title-wrap">
              <h2 className="experience-section-title">
                Here's where I've <span className="highlight-pen-text">done it</span>
                <svg className="experience-doodle-flag" width="28" height="22" viewBox="0 0 32 24" fill="none" aria-hidden="true">
                  <path d="M4 22 L4 3 L20 3 C24 3, 24 9, 20 9 L4 9" stroke="#16a34a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="rgba(22, 163, 74, 0.15)" />
                </svg>
              </h2>
              <p className="experience-section-subtitle">
                Designing intuitive interfaces, untangling complex workflows, and shaping digital products.
              </p>
            </div>
          </div>

          {/* Split Layout: Left Ledger Table + Right Floating Detail Memo Card */}
          <div className="experience-showcase-split">
            {/* Left Column: The Engineering & Design Ledger Sheet pinned with Golden Pushpin */}
            <div className="experience-ledger-sheet">
              {/* Golden Paper Pin provided by user */}
              <div className="ledger-golden-pushpin-container" aria-hidden="true" title="Golden paper pin">
                <img
                  src="/golden-paper-pin.png"
                  alt="Golden Paper Pin"
                  className="ledger-golden-paper-pin"
                />
              </div>

              {/* Binder Margin with 3 Ring-Binder Punch Holes (Scrapbook Workshop Detail) */}
              <div className="ledger-binder-margin" aria-hidden="true">
                <span className="punch-hole" />
                <span className="punch-hole" />
                <span className="punch-hole" />
              </div>

              <div className="ledger-table-wrap">
                <div className="ledger-table-header">
                  <div className="col-date">DATES</div>
                  <div className="col-company">COMPANY</div>
                  <div className="col-title">ROLE / TITLE</div>
                </div>

                <div className="ledger-table-body" role="tablist">
                  {experienceData.map((item) => {
                    const isSelected = activeExpId === item.id;
                    return (
                      <div
                        key={item.id}
                        className={`ledger-row ${isSelected ? 'active' : ''}`}
                        onClick={() => setActiveExpId(item.id)}
                        onMouseEnter={() => setActiveExpId(item.id)}
                        tabIndex={0}
                        role="tab"
                        aria-selected={isSelected}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActiveExpId(item.id);
                          }
                        }}
                      >
                        <div className="col-date">
                          <span className="ledger-date-text">{item.dates}</span>
                        </div>
                        <div className="col-company">
                          <span className="ledger-company-name">{item.company}</span>
                          <span className="ledger-location-text">📍 {item.location}</span>
                        </div>
                        <div className="col-title">
                          <span className="ledger-title-text">{item.role}</span>
                          <span className="ledger-row-arrow" aria-hidden="true">→</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer link to resume */}
                <div className="ledger-table-footer">
                  <span className="ledger-footer-text">
                    Want to learn more?{' '}
                    <a
                      href="#contact"
                      className="ledger-resume-link"
                      onClick={(e) => {
                        e.preventDefault();
                        const contactEl = document.getElementById('contact');
                        if (contactEl) {
                          contactEl.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.location.hash = '#contact';
                        }
                      }}
                    >
                      View my full resume <ArrowUpRight size={13} className="resume-icon" />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: The Dynamic Color Memo Card with Foldback Binder Clip (Image 2) */}
            <div className="experience-card-container">
              <div
                key={activeExp.id}
                className="experience-memo-card"
                style={{
                  '--memo-bg': activeExp.bgColor,
                  '--memo-color': activeExp.textColor
                }}
              >
                {/* Foldback Binder Clip (Matching Image 2 Reference) */}
                {/* Foldback Binder Clip (Matching Scrapbook Reference) */}
                <div className="memo-binder-clip" aria-hidden="true" title="Foldback binder clip">
                  <img
                    src="/pink-binder-clip.png?v=2"
                    alt="Paper binder clip"
                    className="memo-binder-clip-img"
                  />
                </div>

                {/* Company Name Header */}
                <div className="memo-header">
                  <span className="memo-brand-name">{activeExp.company}</span>
                </div>


                {/* Key Accomplishments / Bullet Points from Resume */}
                <div className="memo-bullet-points-list">
                  {activeExp.bulletPoints.map((bp, i) => (
                    <div key={i} className="memo-bullet-point-item">
                      <span className="memo-bullet-icon">✦</span>
                      <span className="memo-bullet-text">{bp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech & Skills Chips */}
                <div className="memo-skills-chips">
                  {activeExp.skills.map((s) => (
                    <span key={s} className="memo-skill-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEC. 04: SKILLS & TOOLKIT SECTION (STATIONERY POUCH THEME) */}
        {/* ======================================================== */}
        <section id="skills" ref={skillsRef} className="scrapbook-skills-section">
          {/* Section Header */}
          <div className="skills-section-header">
            <div className="skills-title-wrap">
              <h2 className="skills-section-title">
                What's in my <span className="highlight-pen-text">Toolkit</span>
                <span className="skills-doodle-sparkle">✦</span>
              </h2>
              <p className="skills-section-subtitle">
                The tools, technologies, and craft I build with every day.
              </p>
            </div>
          </div>

          {/* Side-by-Side: Left Pencil Pouch + Right 3 Sticky Notes */}
          <div ref={deskRef} className="skills-desk-layout">
            {/* Left Column: Interactive Mint Pencil Pouch with Cute Charms */}
            <div className="skills-pouch-column">
              <div
                className={`skills-pouch-interactive-card ${isSkillsInView ? 'is-tilted-open' : 'is-resting'}`}
                onClick={handlePouchClick}
                title="Arpita's Pencil Pouch (Click for confetti!)"
              >
                <div className="pouch-visual-wrapper">
                  {/* Soft Baby Pink Open Patterned Pencil Pouch Main Image */}
                  <img
                    src="/pink-open-pouch.png"
                    alt="Arpita's Pink Open Patterned Pencil Pouch"
                    className="skills-pouch-sticker-img"
                  />

                  {/* Cute Dangling Keychain Charm attached to zipper slider */}
                  <div className={`pouch-keychain-charm ${isSkillsInView ? 'is-swinging' : ''}`} aria-hidden="true">
                    <div className="charm-ball-chain">
                      <span className="chain-link" />
                      <span className="chain-link" />
                      <span className="chain-link" />
                    </div>
                    <div className="charm-star-pendant" title="Star Charm">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeLinejoin="round" />
                        <circle cx="9.5" cy="11" r="1.1" fill="#713f12" />
                        <circle cx="14.5" cy="11" r="1.1" fill="#713f12" />
                        <path d="M10 13.5c.8.8 2.2.8 3 0" stroke="#713f12" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                      </svg>
                    </div>
                  </div>

                  {/* Delicate enamel flower pin on pouch fabric */}
                  <div className="pouch-enamel-badge" title="Daisy Pin" aria-hidden="true">
                    🌸
                  </div>


                  <div className="pouch-desk-trinket trinket-bead" aria-hidden="true">
                    ✨
                  </div>

                  {/* Bursting stationery sparkles pouring out */}
                  {isSkillsInView && (
                    <div className="pouch-unzip-burst" key="pouch-burst">
                      <span className="burst-sparkle s1">✦</span>
                      <span className="burst-sparkle s2">✎</span>
                      <span className="burst-sparkle s3">✧</span>
                      <span className="burst-sparkle s4">📐</span>
                      <span className="burst-sparkle s5">📎</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Pinterest-Inspired 3 Sticky Notes (Strictly 1 Row) */}
            <div className="skills-sticky-board">
              {skillCategoriesData.map((category) => {
                return (
                  <div
                    key={category.id}
                    style={{
                      '--natural-rot': category.naturalRot
                    }}
                    className={`scrapbook-sticky-note ${category.themeClass} ${activeSkillCategory === category.id ? 'is-spotlight' : ''} ${isSkillsInView ? 'is-emerged' : 'is-packed'}`}
                    onClick={() => setActiveSkillCategory(category.id === activeSkillCategory ? 'all' : category.id)}
                  >
                    {/* 1. Layered Backing Sheet (Offset paper effect from Image 2) */}
                    <div className={`sticky-layered-sheet ${category.backingClass}`} aria-hidden="true" />

                    {/* 2. Top Gingham Checkered Washi Tape (From Image 1) */}
                    <div className="sticky-gingham-tape" aria-hidden="true" />

                    {/* 3. Wire Paperclip pinned on Top-Left (From Image 2) */}
                    <div className={`sticky-paperclip-graphic ${category.paperclipClass}`} aria-hidden="true">
                      <svg width="20" height="34" viewBox="0 0 20 34" fill="none">
                        <path
                          d="M10 2C6.69 2 4 4.69 4 8v16c0 4.42 3.58 8 8 8s8-3.58 8-8V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v17c0 1.1.9 2 2 2s2-.9 2-2V9"
                          stroke={category.paperclipStroke}
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* 4. Heart Sticky Index Tab peeking at Top-Right (From Image 2) */}
                    <div className="sticky-heart-sticker-tab" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill={category.tabHeartColor}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>

                    {/* 5. Spiral Notebook / Binder Punch Holes on Left Margin (From Image 2) */}
                    <div className="sticky-punch-margin" aria-hidden="true">
                      <span className="punch-dot" />
                      <span className="punch-dot" />
                      <span className="punch-dot" />
                      <span className="punch-dot" />
                      <span className="punch-dot" />
                      <span className="punch-dot" />
                    </div>

                    {/* 6. Corner Doodles (From Image 1) */}
                    <span className="sticky-corner-doodle top-left-sparkle" aria-hidden="true">彡</span>
                    <div className="sticky-corner-doodle top-right-star" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.6 6.8L22 9.5l-5.3 4.6 1.6 7.2L12 17.6 5.7 21.3l1.6-7.2L2 9.5l7.4-.7L12 2z" />
                      </svg>
                    </div>
                    <div className="sticky-corner-doodle bottom-left-star" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.6 6.8L22 9.5l-5.3 4.6 1.6 7.2L12 17.6 5.7 21.3l1.6-7.2L2 9.5l7.4-.7L12 2z" />
                      </svg>
                    </div>
                    <div className="sticky-corner-doodle bottom-right-heart" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </div>

                    {/* 7. Clean Sticky Note Header (No Emojis) */}
                    <div className="sticky-note-header">
                      <div className="sticky-title-container">
                        <h3 className="sticky-note-title">{category.title}</h3>
                        <span className="sticky-tag-label">{category.tagLabel}</span>
                      </div>
                    </div>

                    {/* 8. Ruled Notebook Lines with Sparkle Star Bullets & Line-Wise Content */}
                    <div className="sticky-ruled-lines-body">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="sticky-ruled-line-row">
                          <span className="ruled-line-bullet" aria-hidden="true">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 1L14.8 9.2L23 12L14.8 14.8L12 23L9.2 14.8L1 12L9.2 9.2L12 1Z" />
                            </svg>
                          </span>
                          <div className="ruled-line-content">
                            <span className="ruled-skill-name">{skill.name}</span>
                            <span className="ruled-skill-desc">— {skill.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* SEC. 05 / FOOTER: THE SCRAPBOOK FINALE & CONTACT SANCTUARY */}
        {/* ======================================================== */}
        <footer id="contact" className="scrapbook-footer">
          {/* 1. Scalloped Paper Arch Divider Trim (from Image 5 Vardhanika) */}
          <div className="footer-scallop-divider" aria-hidden="true">
            <svg viewBox="0 0 1440 48" fill="none" preserveAspectRatio="none">
              <path
                d="M0,0 
                   Q 30,36 60,0 Q 90,36 120,0 Q 150,36 180,0 Q 210,36 240,0 Q 270,36 300,0
                   Q 330,36 360,0 Q 390,36 420,0 Q 450,36 480,0 Q 510,36 540,0 Q 570,36 600,0
                   Q 630,36 660,0 Q 690,36 720,0 Q 750,36 780,0 Q 810,36 840,0 Q 870,36 900,0
                   Q 930,36 960,0 Q 990,36 1020,0 Q 1050,36 1080,0 Q 1110,36 1140,0 Q 1170,36 1200,0
                   Q 1230,36 1260,0 Q 1290,36 1320,0 Q 1350,36 1380,0 Q 1410,36 1440,0
                   L 1440,48 L 0,48 Z"
                fill="#fcf8f0"
              />
              <path
                d="M0,0 
                   Q 30,36 60,0 Q 90,36 120,0 Q 150,36 180,0 Q 210,36 240,0 Q 270,36 300,0
                   Q 330,36 360,0 Q 390,36 420,0 Q 450,36 480,0 Q 510,36 540,0 Q 570,36 600,0
                   Q 630,36 660,0 Q 690,36 720,0 Q 750,36 780,0 Q 810,36 840,0 Q 870,36 900,0
                   Q 930,36 960,0 Q 990,36 1020,0 Q 1050,36 1080,0 Q 1110,36 1140,0 Q 1170,36 1200,0
                   Q 1230,36 1260,0 Q 1290,36 1320,0 Q 1350,36 1380,0 Q 1410,36 1440,0"
                stroke="#ebdccb"
                strokeWidth="1.8"
                strokeDasharray="4 3"
                fill="none"
              />
            </svg>
          </div>

          <div className="footer-inner-wrapper">
            {/* Giant Soft Typography Watermark in Background (from Image 2 Diya Patel) */}
            <div className="footer-bg-watermark" aria-hidden="true">
              Arpita Jadhav
            </div>

            {/* Vintage Newspaper Cutout: Upper Corner of Container (Top-Left) */}
            <div className="footer-corner-cutout cutout-above" aria-hidden="true">
              <div className="corner-washi-tape tape-top" />
              <img
                src="/stickers/ephemera-newspaper-butterfly.png"
                alt="Vintage newspaper clipping with butterfly"
                className="corner-newspaper-img"
                title="Vintage newspaper 📰"
              />
            </div>

            {/* 2. Header & Conversational Invitation (Sitting directly on the container - NO separate card!) */}
            <div className="footer-header-cluster">
              <div className="footer-eyebrow-script">
                <span className="script-text">still here? thanks for wandering all the way down ✎</span>
                <span className="footer-sparkle-doodle">✦</span>
              </div>

              <h2 className="footer-main-title">
                Let's connect & <span className="script-highlight">make something intentional.</span>
              </h2>

              <p className="footer-tagline">
                Got an exciting engineering challenge, a full-time role, or just want to geek out over tactile software craft & design? My inbox is always open.
              </p>

              {/* Availability Status Badge with Pulsing Live Dot */}
              <div className="footer-availability-badge">
                <span className="live-pulse-dot" />
                <span className="availability-text">Open for Full-Time Engineering & Product Roles • 2026</span>
              </div>
            </div>

            {/* 3. The Main Scrapbook Desk Composition: Side-by-Side Asymmetric Stationery Showcase */}
            <div className="footer-desk-composition">

              {/* Coffee ring stain on desk */}
              <div className="desk-coffee-stain" aria-hidden="true" />

              {/* OBJECT 1 (LEFT): Compact Archival Photo Specimen Tag (Shortened Content & Unique Chamfered Shape) */}
              <div className="footer-photo-specimen-card" style={{ '--card-tilt': '-3deg' }}>

                {/* Brass Grommet & Twine Loop at top */}
                <div className="specimen-tag-twine" aria-hidden="true" />
                <div className="specimen-tag-grommet" aria-hidden="true" />

                {/* Vintage Curved Brass Bulldog Clip (From User Clip Sheet) */}
                <img
                  src="/stickers/clip-vintage-brass.png"
                  alt="Vintage brass bulldog clip"
                  className="specimen-brass-clamp"
                  aria-hidden="true"
                  title="Vintage brass clamp 📎"
                />

                {/* Inline SVG Purple Ink Cancellation Postmark */}
                <div className="specimen-postmark-stamp" aria-hidden="true">
                  <svg viewBox="0 0 160 160" width="95" height="95" fill="none">
                    <circle cx="80" cy="80" r="74" stroke="#6d28d9" strokeWidth="2.2" strokeDasharray="8 4" opacity="0.8" />
                    <circle cx="80" cy="80" r="64" stroke="#6d28d9" strokeWidth="1.5" opacity="0.85" />
                    <path id="postmark-specimen-top" d="M 26 80 A 54 54 0 0 1 134 80" fill="none" />
                    <path id="postmark-specimen-bot" d="M 134 80 A 54 54 0 0 1 26 80" fill="none" />
                    <text fill="#5b21b6" fontFamily="'Space Grotesk', monospace" fontSize="9.5" fontWeight="700" letterSpacing="2.2" opacity="0.95">
                      <textPath href="#postmark-specimen-top" startOffset="50%" textAnchor="middle">
                        ★ MUMBAI • 2026 ★
                      </textPath>
                    </text>
                    <text fill="#5b21b6" fontFamily="'Space Grotesk', monospace" fontSize="8.5" fontWeight="700" letterSpacing="1.8" opacity="0.95">
                      <textPath href="#postmark-specimen-bot" startOffset="50%" textAnchor="middle">
                        DEV & DESIGN
                      </textPath>
                    </text>
                    <polygon points="80,68 83,77 92,77 85,82.5 87.5,91 80,86 72.5,91 75,82.5 68,77 77,77" fill="#6d28d9" opacity="0.9" />
                  </svg>
                </div>

                {/* Chamfered Tag Body */}
                <div className="specimen-tag-body">
                  <div className="specimen-tag-kicker">
                    <span>SPECIMEN // 02</span>
                    <span className="specimen-status-tag">FULL-STACK & UX</span>
                  </div>

                  {/* Arpita's Portrait Polaroid */}
                  <div className="specimen-polaroid-frame">
                    <img
                      src="/arpita-portrait.jpg"
                      alt="Arpita Jadhav"
                      className="specimen-portrait-img"
                    />
                    <div className="specimen-polaroid-caption">
                      <span className="specimen-name">Arpita Jadhav ✦</span>
                      <span className="specimen-sub">Software Engineer & Designer</span>
                    </div>
                  </div>

                  {/* Shortened Concise Punchy Bio */}
                  <div className="specimen-bio-note">
                    <p className="specimen-bio-quote">
                      "Software engineer by craft, designer by instinct. Turning chaotic ambiguity into tactile, human-first web & AI software."
                    </p>
                  </div>

                  {/* Bottom Doodled Conversation Memo */}
                  <div className="specimen-footer-memo">
                    <span className="specimen-memo-text">P.S. Always open for good conversations ✦</span>
                    <img
                      src="/stickers/sticker-teacup.png"
                      alt="Vintage porcelain teacup sticker"
                      className="specimen-teacup-sticker"
                      aria-hidden="true"
                      title="Good conversations ✦"
                    />
                  </div>
                </div>
              </div>

              {/* OBJECT 2 (RIGHT): The Hero Conversation & Mail Station (Focal Point!) */}
              <div className="footer-terracotta-envelope" style={{ '--envelope-tilt': '1.5deg' }}>

                {/* Woven Triangular Envelope Flap */}
                <div className="envelope-v-flap" aria-hidden="true" />

                {/* Stitched Edge perimeter line */}
                <div className="envelope-stitching" aria-hidden="true" />

                {/* Pink Embossed Wax Seal on Top-Left */}
                <img
                  src="/stickers/wax-seal.svg"
                  alt="Wax seal stamp"
                  className="envelope-wax-seal-badge"
                  aria-hidden="true"
                />

                {/* Olive Green Thank You Label Sticker (From User Sticker Sheet) */}
                <img
                  src="/stickers/sticker-thank-you.png"
                  alt="Thank you for existing sticker"
                  className="envelope-thankyou-sticker"
                  aria-hidden="true"
                  title="Thank you for existing 🌿"
                />

                {/* Letter Sheet peeking from envelope pocket */}
                <div className="envelope-letter-sheet">
                  {/* Ruby Jewel Heart Paperclip (From User Clip Sheet) */}
                  <img
                    src="/stickers/clip-heart-ruby.png"
                    alt="Ruby jewel heart paperclip"
                    className="letter-ruby-clip"
                    aria-hidden="true"
                    title="Heart paperclip 💖"
                  />

                  <div className="letter-header-row">
                    <div className="letter-stamp-badge">
                      <Mail size={12} />
                      <span>DIRECT INBOX</span>
                    </div>
                    <span className="letter-confidential-tag">STRICTLY CRAFT-DRIVEN</span>
                  </div>

                  <h3 className="letter-heading">Say hello or drop an invite</h3>
                  <p className="letter-subline">
                    Always excited for high-ownership software roles, ambitious builds, or great design & tech chats.
                  </p>

                  {/* One-Click Copy Email Ribbon */}
                  <div
                    className="letter-email-ribbon"
                    onClick={handleCopyEmail}
                    role="button"
                    tabIndex={0}
                    title="Click to copy email address"
                    onKeyDown={(e) => {
                      if (e.key === ' ' || e.key === 'Enter') {
                        e.preventDefault();
                        handleCopyEmail();
                      }
                    }}
                  >
                    <div className="email-ribbon-left">
                      <div className="email-envelope-icon" aria-hidden="true">
                        <Mail size={16} />
                      </div>
                      <span className="letter-email-text">arpitajadhav9@gmail.com</span>
                    </div>
                    <button
                      type="button"
                      className="letter-copy-btn"
                      aria-label="Copy email address"
                    >
                      {emailCopied ? (
                        <span className="letter-copied-pill">Copied! ✨</span>
                      ) : (
                        <span className="letter-copy-label">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                          </svg>
                          Copy
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="letter-actions-row">
                    <a href="mailto:arpitajadhav9@gmail.com" className="letter-primary-btn">
                      <span>Start the conversation</span>
                      <ArrowUpRight size={16} />
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer" className="letter-resume-btn">
                      <span>View Resume</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                  {/* Live Status Tag inside Letter */}
                  <div className="letter-status-footer">
                    <span className="live-status-dot" />
                    <span className="status-footer-text">Open for Full-Time Engineering & Product Roles • 2026</span>
                  </div>
                </div>

                {/* Silk Ribbon Bow Sticker (From User Sticker Sheet - Replaces repeated butterfly!) */}
                <img
                  src="/stickers/sticker-ribbon-bow.png"
                  alt="Silk ribbon bow sticker"
                  className="envelope-ribbon-decor"
                  aria-hidden="true"
                  title="Vintage ribbon bow 🎀"
                />
              </div>

            </div>

            {/* 4. Quick Page Navigation & Social Pills Bar (Strictly ONE Line on Desktop!) */}
            <div className="footer-quick-links-bar">
              {/* Left: Pages */}
              <div className="footer-nav-col">
                <span className="nav-row-title">PAGES</span>
                <div className="pages-pills-list">
                  <a href="#about" className="footer-nav-pill">About</a>
                  <a href="#projects" className="footer-nav-pill">Projects</a>
                  <a href="#experience" className="footer-nav-pill">Experience</a>
                  <a href="#skills" className="footer-nav-pill">Skills</a>
                  <a href="#contact" className="footer-nav-pill active">Contact</a>
                </div>
              </div>

              {/* Center: Social Links */}
              <div className="footer-social-col">
                <span className="nav-row-title">FIND ME</span>
                <div className="social-pills-list">
                  <a href="https://github.com/arpitajadhav" target="_blank" rel="noreferrer" className="footer-social-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GITHUB</span>
                    <span className="pill-arrow">↗</span>
                  </a>

                  <a href="https://linkedin.com/in/arpitajadhav" target="_blank" rel="noreferrer" className="footer-social-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LINKEDIN</span>
                    <span className="pill-arrow">↗</span>
                  </a>

                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>TWITTER</span>
                    <span className="pill-arrow">↗</span>
                  </a>

                  <a href="mailto:arpitajadhav9@gmail.com" className="footer-social-pill">
                    <Mail size={13} />
                    <span>EMAIL</span>
                    <span className="pill-arrow">↗</span>
                  </a>
                </div>
              </div>

              {/* Right: Scroll To Top Button (strictly on the same row!) */}
              <div className="footer-scroll-top-col">
                <button
                  onClick={scrollToTop}
                  className="scroll-to-top-btn"
                  title="Back to top"
                  aria-label="Back to top"
                >
                  <span className="arrow-up-icon">↑</span>
                  <span className="scroll-btn-label">TOP</span>
                </button>
              </div>
            </div>

            {/* Vintage Newspaper Cutout: Lower Corner of Container (Bottom-Right) */}
            <div className="footer-corner-cutout cutout-below" aria-hidden="true">
              <div className="corner-washi-tape tape-bottom" />
              <img
                src="/stickers/ephemera-antique-manuscript.png"
                alt="Vintage newsprint article column"
                className="corner-newspaper-img"
                title="Vintage newsprint 📰"
              />
            </div>

            {/* 5. Bottom Colophon & Typewriter Timestamp (From Image 1, 2 & 3) */}
            <div className="footer-bottom-colophon">
              <div className="colophon-left">
                <span className="colophon-copyright">© 2026 Arpita Jadhav • Crafted with code & care ✨</span>
                <span className="colophon-sub">Designed with scrapbook paper textures & coded with React</span>
              </div>
              <div className="colophon-right">
                <span className="colophon-timestamp">LAST COMMITTED: OCTOBER 2026 // MUMBAI, IN 🇮🇳</span>
              </div>
            </div>

          </div>
        </footer>
      </main>

      {/* ===================================================
          INTERACTIVE PROJECT CASE STUDY DOSSIER (Portal to body: Highest Layer, Zero Stacking Bleed)
          =================================================== */}
      {selectedProject && typeof document !== 'undefined' && createPortal(
        <div
          className="project-dossier-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="project-dossier-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scrapbook Top Washi Tape Accent */}
            <div className="dossier-washi-tape" aria-hidden="true" />

            {/* Dossier Header Bar */}
            <header className="dossier-header-bar">
              <div className="dossier-header-meta">
                <span className="dossier-badge">
                  CASE STUDY DOSSIER • {selectedProject.shortCategory}
                </span>
                <h3 id="modal-project-title" className="dossier-title">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                className="dossier-close-btn"
                onClick={() => setSelectedProject(null)}
                title="Close case study (Esc)"
                aria-label="Close case study"
              >
                <X size={20} />
              </button>
            </header>

            {/* Scrollable Dossier Body */}
            <div className="dossier-scroll-body">
              {/* Hero Visual Preview */}
              <div className="dossier-hero-preview">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="dossier-hero-img"
                />
              </div>

              {/* Quick Meta Strip (Role, Timeline, Team) */}
              <div className="dossier-meta-strip">
                <div className="dossier-meta-cell">
                  <span className="meta-label">ROLE</span>
                  <span className="meta-value">{selectedProject.role}</span>
                </div>
                <div className="dossier-meta-cell">
                  <span className="meta-label">TIMELINE</span>
                  <span className="meta-value">{selectedProject.timeline}</span>
                </div>
                <div className="dossier-meta-cell">
                  <span className="meta-label">COLLABORATION</span>
                  <span className="meta-value">{selectedProject.team}</span>
                </div>
              </div>

              {/* Key Impact Metrics Callout Cards */}
              <div className="dossier-metrics-grid">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="dossier-metric-card">
                    <span className="metric-number">{m.val}</span>
                    <span className="metric-caption">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Detailed Breakdown Sections */}
              <div className="dossier-content-sections">
                {/* 01 // Overview */}
                <div className="dossier-section-block">
                  <h4 className="dossier-section-heading">
                    <span className="dossier-section-num">01</span>
                    Project Overview
                  </h4>
                  <p className="dossier-text">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* 02 // The Problem */}
                <div className="dossier-section-block">
                  <h4 className="dossier-section-heading">
                    <span className="dossier-section-num">02</span>
                    The Problem & Context
                  </h4>
                  <p className="dossier-text">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* 03 // The Solution & Architecture */}
                <div className="dossier-section-block">
                  <h4 className="dossier-section-heading">
                    <span className="dossier-section-num">03</span>
                    The Solution & System Design
                  </h4>
                  <p className="dossier-text">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* 04 // Highlights */}
                <div className="dossier-section-block">
                  <h4 className="dossier-section-heading">
                    <span className="dossier-section-num">04</span>
                    Key Features & Highlights
                  </h4>
                  <ul className="dossier-highlights-list">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="dossier-highlight-item">
                        <CheckCircle2 size={16} className="highlight-check-icon" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 05 // Tech Stack */}
                <div className="dossier-section-block">
                  <h4 className="dossier-section-heading">
                    <span className="dossier-section-num">05</span>
                    Technologies & Tools Used
                  </h4>
                  <div className="dossier-tech-pills">
                    {selectedProject.tags.map((t) => (
                      <span key={t} className="dossier-tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 06 // Challenges & How I Solved Them (Optional for rich case studies) */}
                {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                  <div className="dossier-section-block">
                    <h4 className="dossier-section-heading">
                      <span className="dossier-section-num">06</span>
                      Challenges & How I Solved Them
                    </h4>
                    <div className="dossier-challenges-grid">
                      {selectedProject.challenges.map((c, i) => (
                        <div key={i} className="dossier-challenge-item">
                          <h5 className="challenge-item-title">
                            <span className="challenge-bullet">✦</span>
                            {c.title}
                          </h5>
                          <p className="challenge-item-desc">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dossier Action Buttons / Footer */}
              <div className="dossier-footer-actions">
                <div className="dossier-links-group">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="dossier-action-btn primary"
                    >
                      <ExternalLink size={16} />
                      <span>Live Prototype</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`dossier-action-btn ${!selectedProject.liveUrl ? 'primary' : 'secondary'}`}
                    >
                      <Code2 size={16} />
                      <span>View on GitHub</span>
                    </a>
                  )}
                  {selectedProject.figmaUrl && (
                    <a
                      href={selectedProject.figmaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="dossier-action-btn secondary"
                    >
                      <Layers size={16} />
                      <span>Figma Design</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  className="dossier-action-btn close-text"
                  onClick={() => setSelectedProject(null)}
                >
                  Done Reading ✕
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
