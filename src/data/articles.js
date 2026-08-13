import bannerImg from '../assets/Image/Banner_img/banner_img.png';
import hImg1 from '../assets/Image/Banner_img/h_img1.png';
import hImg2 from '../assets/Image/Banner_img/h_img2.png';
import hImg3 from '../assets/Image/Banner_img/h_img3.png';
import hImg4 from '../assets/Image/Banner_img/h_img4.png';

import hillTopImg from '../assets/Image/HillTracts/top_img.png';
import hillImg1 from '../assets/Image/HillTracts/img1.png';
import hillImg2 from '../assets/Image/HillTracts/img2.png';
import hillImg3 from '../assets/Image/HillTracts/img3.png';
import hillImg4 from '../assets/Image/HillTracts/img4.png';

import banglaTopImg from '../assets/Image/Bangla/top.png';
import bnImg1 from '../assets/Image/Bangla/img1.png';
import bnImg2 from '../assets/Image/Bangla/img2.png';
import bnImg3 from '../assets/Image/Bangla/img3.png';
import bnImg4 from '../assets/Image/Bangla/img4.png';

import nTopImg from '../assets/Image/National/top.png';
import nbImg1 from '../assets/Image/National/img1.png';
import nbImg2 from '../assets/Image/National/img2.png';
import nbImg3 from '../assets/Image/National/img3.png';
import nbImg4 from '../assets/Image/National/img4.png';

import aTopImg from '../assets/Image/Administration/top.png';
import abImg1 from '../assets/Image/Administration/img1.png';
import abImg2 from '../assets/Image/Administration/img2.png';
import abImg3 from '../assets/Image/Administration/img3.png';
import abImg4 from '../assets/Image/Administration/img4.png';

import readImg1 from '../assets/Image/ReadMoreCard/img1.png';
import readImg2 from '../assets/Image/ReadMoreCard/img2.png';
import readImg3 from '../assets/Image/ReadMoreCard/img3.png';
import readImg4 from '../assets/Image/ReadMoreCard/img4.png';

export const articles = [
  {
    id: "art-1",
    slug: "ban-on-entry-of-houseboats-in-tanguar-haor-watchtower-area",
    title: "Ban on entry of houseboats in Tanguar haor’s watchtower area in Sylhet",
    topic: "Movement of tourist houseboats",
    excerpt: "The local administration has imposed a ban on the entry of houseboats into the Tanguar Haor’s watchtower area. This development came a day after the authorities issued 12 mandatory guidelines for tourists visiting the haor in Sunamganj.",
    content: `
      The local administration of Sunamganj has placed strict restrictions prohibiting houseboats from anchoring or moving within the fragile ecological perimeter of the Tanguar Haor watchtower zone.

      Environmentalists and regional tourism officers welcomed the measure, noting that unrestrained motorized houseboat operation had caused rising noise pollution, waste dumping, and threat to native migratory bird habitats.

      Under the new 12-point guidelines:
      - All houseboats must register with the district administration.
      - Onboard waste management systems are compulsory.
      - Loud music and night-time sound systems are prohibited.
      - Speed limits apply near nesting grounds.

      Local authorities confirmed that mobile courts will regularly patrol the haor waters to enforce compliance and preserve one of Bangladesh's most prized Ramsar wetland sites.
    `,
    image: bannerImg,
    category: "National",
    categorySlug: "national",
    publishDate: "August 6, 2026",
    readingTime: "4 min read",
    viewCount: "14.2K",
    authorId: "author-1",
    authorName: "Editorial Staff",
    isHero: true,
    isFeatured: true,
    isBreaking: true,
    isTrending: true,
    tags: ["Sylhet", "Environment", "Tourism", "Tanguar Haor"]
  },
  {
    id: "art-2",
    slug: "biodiversity-threatened-by-hill-agriculture",
    title: "Biodiversity threatened by hill agriculture in Chittagong Hill Tracts",
    topic: "International Day for Biological Diversity",
    excerpt: "Unregulated land clearings and chemical fertilizer practices in steep slope agriculture threaten rare plant species and soil stability across regional hills.",
    content: `
      Agricultural experts and environmental researchers have warned that non-sustainable farming techniques on steep slopes are accelerating topsoil erosion and endangering indigenous flora across Khagrachhari, Rangamati, and Bandarban.

      Traditional slash-and-burn farming (Jhum) combined with modern chemical pesticide overuse has disrupted local hydrology and fragmented habitats of endemic wildlife.

      "We must transition toward eco-friendly contour farming, agroforestry, and indigenous crop preservation to safeguard hill ecosystems," stated senior soil scientists at a regional seminar.
    `,
    image: hImg1,
    category: "Hill Districts",
    categorySlug: "hill-tracts",
    publishDate: "30 minutes ago",
    readingTime: "3 min read",
    viewCount: "9.5K",
    authorId: "author-3",
    authorName: "Sharmin Akter",
    isFeatured: true,
    isTrending: true,
    tags: ["Hill Tracts", "Agriculture", "Environment", "Khagrachhari"]
  },
  {
    id: "art-3",
    slug: "ncp-calls-for-scrapping-4-fundamental-principles",
    title: "NCP calls for scrapping 4 fundamental principles of ’72 constitution",
    topic: "Talks with consensus commission",
    excerpt: "During consultations with the constitutional reform commission, political delegates presented recommendations aimed at reshaping core governance frameworks.",
    content: `
      In an intense round of discussions held at the state guest house, national political representatives submitted proposals advocating structural constitutional reforms.

      Key talking points included decentralization of parliamentary powers, judicial independence safeguards, term limits for key executive offices, and electoral law modernizations ahead of upcoming election schedules.
    `,
    image: hImg2,
    category: "Politics",
    categorySlug: "politics",
    publishDate: "45 minutes ago",
    readingTime: "5 min read",
    viewCount: "11.8K",
    authorId: "author-2",
    authorName: "Tanvir Hasan",
    isFeatured: true,
    tags: ["Politics", "Constitution", "Reform", "Commission"]
  },
  {
    id: "art-4",
    slug: "govt-to-take-action-against-those-who-incited-mob",
    title: "Govt to take action against those who incited mob violence",
    topic: "Law & Public Order",
    excerpt: "Ministry of Home Affairs issues strict warning declaring that individuals promoting vigilantism or public disorder will face immediate prosecution.",
    content: `
      Addressing press reporters at the Secretariat, government officials emphasized zero tolerance for vigilante justice or mob instigation.

      Law enforcement agencies have been instructed to analyze digital evidence and CCTV footage to prosecute ringleaders attempting to disturb public harmony.
    `,
    image: hImg3,
    category: "National",
    categorySlug: "national",
    publishDate: "1 hour ago",
    readingTime: "3 min read",
    viewCount: "8.3K",
    authorId: "author-1",
    authorName: "Editorial Staff",
    isBreaking: true,
    tags: ["National", "Law", "Public Order", "Dhaka"]
  },
  {
    id: "art-5",
    slug: "govt-service-ordinance-to-be-amended",
    title: "Govt service ordinance to be amended to enhance administrative efficiency",
    topic: "Administrative Reform",
    excerpt: "Proposed draft amendment aims to streamline public sector performance evaluations, promotion criteria, and civil service accountability.",
    content: `
      The Cabinet division has finalized the preliminary draft for amending existing public service regulations. The reform aims to introduce merit-based key performance indicators (KPIs) and digital governance frameworks across all ministries.
    `,
    image: hImg4,
    category: "National",
    categorySlug: "national",
    publishDate: "2 hours ago",
    readingTime: "4 min read",
    viewCount: "6.7K",
    authorId: "author-2",
    authorName: "Tanvir Hasan",
    tags: ["Administration", "Civil Service", "Reform"]
  },
  {
    id: "art-6",
    slug: "three-day-boishabi-festival-begins-in-khagrachhari",
    title: "Three-day ‘Boishabi’ festival begins with traditional colorful splendor in Khagrachhari",
    topic: "‘Phul Biju’ celebration",
    excerpt: "The first day of the festival, known as ‘Phul Biju’, is celebrated by Chakma, Tripura, Marma communities by decorating their houses with flowers and immersing them in rivers.",
    content: `
      Khagrachhari has taken on a vibrant festive look as the traditional three-day ‘Boishabi’ festival — celebrating the New Year of indigenous communities — officially kicked off at dawn.

      Members of Chakma, Tripura, Marma, and other ethnic groups gathered along bank rivers early in the morning to float wild flowers into Mother Ganga waters, offering prayers for peace, health, and communal harmony.

      Rally processions, cultural indigenous dances, traditional sports, and local handicraft displays will continue across Rangamati and Bandarban districts over the next two days.
    `,
    image: hillTopImg,
    category: "Hill Districts",
    categorySlug: "hill-tracts",
    publishDate: "Today",
    readingTime: "4 min read",
    viewCount: "18.5K",
    authorId: "author-3",
    authorName: "Sharmin Akter",
    isFeatured: true,
    isTrending: true,
    tags: ["Hill Tracts", "Boishabi", "Culture", "Khagrachhari"]
  },
  {
    id: "art-7",
    slug: "sajek-khagrachhari-open-to-tourists-after-restriction",
    title: "Sajek Valley & Khagrachhari reopen to tourists following security review",
    topic: "Tourism & Travel",
    excerpt: "Resort operators and local transport syndicates prepare to welcome thousands of weekend travelers as local administration lifts travel advisories.",
    content: `
      The popular hill destination of Sajek Valley in Rangamati and major tourist spots in Khagrachhari have officially reopened for domestic and international travelers.

      Hotels and eco-resorts reported high advance booking rates within hours of the announcement. Local transport authorities reassured visitors of full security cooperation along hill roadways.
    `,
    image: hillImg3,
    category: "Hill Districts",
    categorySlug: "hill-tracts",
    publishDate: "2 weeks ago",
    readingTime: "3 min read",
    viewCount: "15.1K",
    authorId: "author-3",
    authorName: "Sharmin Akter",
    tags: ["Sajek", "Tourism", "Rangamati"]
  },
  {
    id: "art-8",
    slug: "ncp-nibondhon-isyr-chithi",
    title: "এনসিপির নিবন্ধন আবেদনে ছয় ঘাটতি, সংশোধনের জন্য ইসির চিঠি",
    topic: "এনসিপিসহ ১৪৪টি দল আবেদন",
    excerpt: "রাজনৈতিক দল হিসেবে নিবন্ধনের জন্য জাতীয় নাগরিক পার্টির (এনসিপি) করা আবেদনে ছয়টি বিষয়ে ত্রুটি বা ঘাটতি পেয়েছে নির্বাচন কমিশন (ইসি)।",
    content: `
      রাজনৈতিক দল হিসেবে নিবন্ধনের জন্য জাতীয় নাগরিক পার্টির (এনসিপি) করা আবেদনে ছয়টি বিষয়ে ত্রুটি বা ঘাটতি পেয়েছে নির্বাচন কমিশন (ইসি)।

      প্রাথমিক যাচাইয়ে পাওয়া এসব ত্রুটি সংশোধন করে আগামী ৩ আগস্টের মধ্যে উপযুক্ত দলিল দাখিল করতে দলটিকে চিঠি দিয়েছে ইসি।

      নির্বাচন কমিশনের দায়িত্বে থাকা কর্মকর্তারা নিশ্চিত করেছেন যে নির্ধারিত সময়ের মধ্যে সংশোধিত তথ্য জমা দেওয়া সাপেক্ষে পরবর্তী ধাপের মাঠপর্যাযের সরেজমিন তদন্ত শুরু করা হবে।
    `,
    image: banglaTopImg,
    category: "Politics",
    categorySlug: "politics",
    publishDate: "আজ",
    readingTime: "৪ মিনিট পঠিত",
    viewCount: "২১.৪ হাজার",
    authorId: "author-2",
    authorName: "তানভীর হাসান",
    isFeatured: true,
    isTrending: true,
    tags: ["রাজনীতি", "ইসি", "এনসিপি", "নির্বাচন"]
  },
  {
    id: "art-9",
    slug: "chattogram-potia-sorok-oborodh",
    title: "চট্টগ্রামে পটিয়ার পর নগরেও সড়ক অবরোধ বৈষম্যবিরোধী ও এনসিপির নেতা-কর্মীদের",
    topic: "জাতীয় আন্দোলন",
    excerpt: "দাবি আদায়ের লক্ষে চট্টগ্রামের ব্যস্ততম সড়কসমূহে যানবাহন চলাচল বন্ধ রেখে বিক্ষোভ সমাবেশ ও স্লোগান দেন আন্দোলনকারী নেতা-কর্মীরা।",
    content: `
      চট্টগ্রামে পটিয়ার পর নগরের প্রধান সড়কসমূহে অবস্থান নিয়ে সড়ক অবরোধ ও বিক্ষোভ কর্মসূচি পালন করেছেন ছাত্র-জনতা।

      এর ফলে নগরের অলংকার, জিইসি এবং টাইগারপাস এলাকায় দীর্ঘ যানজটের সৃষ্টি হয়। আইন-শৃঙ্খলা রক্ষাকারী বাহিনীর উর্ধ্বতন কর্মকর্তারা ঘটনাস্থলে উপস্থিত হয়ে পরিস্থিতি নিয়ন্ত্রণে আনার চেষ্টা চালান।
    `,
    image: bnImg1,
    category: "National",
    categorySlug: "national",
    publishDate: "৩ ঘন্টা আগে",
    readingTime: "৩ মিনিট পঠিত",
    viewCount: "১২.৩ হাজার",
    authorId: "author-1",
    authorName: "সম্পাদকীয় ডেস্ক",
    tags: ["চট্টগ্রাম", "জাতীয়", "সড়ক অবরোধ"]
  },
  {
    id: "art-10",
    slug: "february-april-somne-vote-prostuti",
    title: "ফেব্রুয়ারি ও এপ্রিল সামনে রেখে ভোটের সার্বিক প্রস্তুতি নিচ্ছে ইসি",
    topic: "নির্বাচনী রোডম্যাপ",
    excerpt: "আসন্ন জাতীয় নির্বাচন সুষ্ঠু ও নিরপেক্ষভাবে সম্পন্ন করতে ভোটার তালিকা হালনাগাদ ও কেন্দ্র বিন্যাসের কাজ দ্রুত গতিতে এগিয়ে চলেছে।",
    content: `
      ফেব্রুয়ারি ও এপ্রিল মাসকে সম্ভাব্য সময়সীমা ধরে আগামী জাতীয় সংসদ নির্বাচনের প্রস্তুতিমূলক কাজ বাস্তবায়ন করছে নির্বাচন কমিশন।

      ভোটার তালিকা সংস্কার, নতুন ইসি ভবন থেকে তথ্য ভান্ডার সমন্বয় এবং আইন-শৃঙ্খলা বাহিনীর বাজেট চূড়ান্তকরণের রূপরেখা ঘোষণা করা হয়েছে।
    `,
    image: bnImg3,
    category: "Politics",
    categorySlug: "politics",
    publishDate: "৪ ঘন্টা আগে",
    readingTime: "৫ মিনিট পঠিত",
    viewCount: "১৮.৯ হাজার",
    authorId: "author-2",
    authorName: "তানভীর হাসান",
    isTrending: true,
    tags: ["রাজনীতি", "ইসি", "ভোট"]
  },
  {
    id: "art-11",
    slug: "rooppur-nuclear-power-plant-further-delay",
    title: "Rooppur Nuclear Power Plant: Further delay in power supply roadmap",
    topic: "Energy & Infrastructure",
    excerpt: "First unit may begin supplying power next year as contractor given two-year extension following grid connectivity tests.",
    content: `
      The official commercial operation timeline for the first 1,200 MW unit of the Rooppur Nuclear Power Plant in Pabna has experienced a timeline shift.

      Project management confirmed that technical integration with the National Power Grid and safety verification checks require extended testing protocols before syncing with the national distribution lines.
    `,
    image: nTopImg,
    category: "National",
    categorySlug: "national",
    publishDate: "August 5, 2026",
    readingTime: "5 min read",
    viewCount: "16.8K",
    authorId: "author-4",
    authorName: "Rahim Chowdhury",
    isFeatured: true,
    tags: ["Energy", "Rooppur", "Pabna", "Infrastructure"]
  },
  {
    id: "art-12",
    slug: "ca-urges-japan-to-enhance-cooperation",
    title: "Chief Adviser urges Japan to enhance trade & technology cooperation with Bangladesh",
    topic: "Diplomacy",
    excerpt: "High-level bilateral dialogue stresses increased Japanese FDI in Matarbari deep seaport, metro rail expansions, and renewable energy.",
    content: `
      In an official bilateral consultation held at Jamuna, the Chief Adviser welcomed Japanese diplomatic representatives to expand investment portfolios across key strategic infrastructure projects in Bangladesh.
    `,
    image: nbImg1,
    category: "National",
    categorySlug: "national",
    publishDate: "Yesterday",
    readingTime: "3 min read",
    viewCount: "10.4K",
    authorId: "author-1",
    authorName: "Editorial Staff",
    tags: ["Diplomacy", "Japan", "Trade", "Infrastructure"]
  },
  {
    id: "art-13",
    slug: "charges-filed-in-80pc-of-corruption-cases",
    title: "Anti-Corruption Commission: Charges filed in 80% of pending financial corruption cases",
    topic: "Administrative Justice",
    excerpt: "ACC releases annual accountability audit showing record prosecution timelines in high-profile banking and procurement irregularities.",
    content: `
      The Anti-Corruption Commission (ACC) submitted its latest operational performance report, revealing significant progress in concluding investigations and filing charge sheets.

      Efforts focus on recovering laundered assets, auditing public sector procurement contracts, and digitalizing public reporting portals.
    `,
    image: aTopImg,
    category: "National",
    categorySlug: "national",
    publishDate: "August 4, 2026",
    readingTime: "4 min read",
    viewCount: "13.7K",
    authorId: "author-2",
    authorName: "Tanvir Hasan",
    isFeatured: true,
    tags: ["ACC", "Administration", "Governance", "Law"]
  },
  {
    id: "art-14",
    slug: "japan-financial-support-election-commission-ballot-project",
    title: "Japan will provide $4.8 million financial support to Election Commission for modern ballot project",
    topic: "Electoral Reform",
    excerpt: "Grant agreement signed to modernize voter registration databases and transparent electoral tracking systems.",
    content: `
      The Japanese International Cooperation Agency (JICA) has finalized a grant agreement providing $4.8 million to Bangladesh’s Election Commission.

      The funding will support database infrastructure upgrades, officer training programs, and transparent voter verification technologies.
    `,
    image: readImg1,
    category: "Politics",
    categorySlug: "politics",
    publishDate: "3 weeks ago",
    readingTime: "3 min read",
    viewCount: "24.5K",
    authorId: "author-4",
    authorName: "Rahim Chowdhury",
    isTrending: true,
    tags: ["Japan", "Election", "JICA", "Politics"]
  },
  {
    id: "art-15",
    slug: "bangladesh-women-football-team-lead-half-time",
    title: "Bangladesh women’s national team secures victory following dominant performance",
    topic: "Sports",
    excerpt: "Dynamic midfield plays and clinical finishing propel Bangladesh to international victory amid enthusiastic stadium crowd support.",
    content: `
      Bangladesh women’s football team delivered a masterclass performance in front of a packed stadium audience, securing a commanding win against regional contenders.

      Head coach praised the team's defensive cohesion, physical conditioning, and swift counter-attacking tactics.
    `,
    image: readImg2,
    category: "Sports",
    categorySlug: "sports",
    publishDate: "2 weeks ago",
    readingTime: "3 min read",
    viewCount: "19.2K",
    authorId: "author-1",
    authorName: "Editorial Staff",
    isTrending: true,
    tags: ["Sports", "Football", "Bangladesh", "Victory"]
  },
  {
    id: "art-16",
    slug: "former-cec-nurul-huda-confessional-statement",
    title: "Former CEC Nurul Huda gives sworn statement during judicial inquiry",
    topic: "Court & Law",
    excerpt: "Proceedings continue at Dhaka Metropolitan Magistrate Court regarding historical election conduct oversight reviews.",
    content: `
      Legal proceedings surrounding historical election governance oversight continued as former officials appeared before judicial magistrate panels to record official statements.
    `,
    image: readImg3,
    category: "National",
    categorySlug: "national",
    publishDate: "1 week ago",
    readingTime: "4 min read",
    viewCount: "14.8K",
    authorId: "author-2",
    authorName: "Tanvir Hasan",
    tags: ["Court", "Law", "Election", "Dhaka"]
  },
  {
    id: "art-17",
    slug: "ariful-demanding-withdrawal-sylhet-dc",
    title: "Civil society representatives call for administrative transparency in Sylhet division",
    topic: "Local Governance",
    excerpt: "Public rally highlights community demands regarding flood management infrastructure and local administrative responsiveness.",
    content: `
      Prominent civic leaders and community advocates held a peaceful rally in Sylhet city center demanding accelerated flood defense embankment construction and municipal service audits.
    `,
    image: readImg4,
    category: "National",
    categorySlug: "national",
    publishDate: "5 days ago",
    readingTime: "3 min read",
    viewCount: "9.8K",
    authorId: "author-1",
    authorName: "Editorial Staff",
    tags: ["Sylhet", "Governance", "Rally"]
  }
];

export const getArticleBySlug = (slug) => articles.find(a => a.slug === slug);
export const getArticlesByCategory = (categorySlug) => articles.filter(a => a.categorySlug === categorySlug);
export const getFeaturedArticles = () => articles.filter(a => a.isFeatured);
export const getBreakingNews = () => articles.filter(a => a.isBreaking);
export const getTrendingArticles = () => articles.filter(a => a.isTrending);
