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
    title: "Ban on entry of houseboats in Tanguar Haor's watchtower area to protect wildlife",
    topic: "Ecotourism Regulations",
    excerpt: "The local administration has imposed a ban on the entry of houseboats into the Tanguar Haor watchtower area following rising environmental concerns. Twelve mandatory guidelines have been issued for tourists visiting the Sunamganj wetland.",
    content: `
      The local administration of Sunamganj has placed strict restrictions prohibiting houseboats from anchoring or moving within the fragile ecological perimeter of the Tanguar Haor watchtower zone.

      Environmentalists and regional tourism officers welcomed the measure, noting that unrestrained motorized houseboat operation had caused rising noise pollution, waste dumping, and threats to native migratory bird habitats.

      Under the new 12-point guidelines, all houseboats must register with the district administration. Onboard waste management systems are compulsory. Loud music and night-time sound systems are prohibited. Speed limits apply near nesting grounds.

      Local authorities confirmed that mobile courts will regularly patrol the haor waters to enforce compliance and preserve one of Bangladesh's most prized Ramsar wetland sites.

      The Tanguar Haor wetland, spread across Sunamganj and Netrokona districts, is home to over 140 species of migratory birds and is recognized as a Ramsar site of international importance since 2000.
    `,
    image: bannerImg,
    category: "National",
    categorySlug: "national",
    publishDate: "August 13, 2026",
    readingTime: "4 min read",
    viewCount: "24.2K",
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
    title: "Biodiversity under threat as unregulated hill agriculture expands in CHT",
    topic: "Environmental Conservation",
    excerpt: "Unregulated land clearings and chemical fertilizer practices on steep slopes threaten rare plant species and soil stability across the Chittagong Hill Tracts.",
    content: `
      Agricultural experts and environmental researchers have warned that non-sustainable farming techniques on steep slopes are accelerating topsoil erosion and endangering indigenous flora across Khagrachhari, Rangamati, and Bandarban.

      Traditional slash-and-burn farming (Jhum) combined with modern chemical pesticide overuse has disrupted local hydrology and fragmented habitats of endemic wildlife.

      "We must transition toward eco-friendly contour farming, agroforestry, and indigenous crop preservation to safeguard hill ecosystems," stated senior soil scientists at a regional seminar.

      The Bangladesh Forest Department has called for a joint task force to monitor agricultural activities within the 2,500-meter hill range buffer zones.
    `,
    image: hImg1,
    category: "Hill Districts",
    categorySlug: "hill-tracts",
    publishDate: "August 13, 2026",
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
    title: "NCP calls for scrapping 4 fundamental principles of the 1972 constitution",
    topic: "Constitutional Reform",
    excerpt: "During consultations with the constitutional reform commission, political delegates presented recommendations aimed at reshaping core governance frameworks.",
    content: `
      In an intense round of discussions held at the state guest house, national political representatives submitted proposals advocating structural constitutional reforms.

      Key talking points included decentralization of parliamentary powers, judicial independence safeguards, term limits for key executive offices, and electoral law modernizations ahead of upcoming election schedules.

      The NCP emphasized that the four state principles of nationalism, socialism, democracy, and secularism were products of a different era and need to be replaced with contemporary governance values.
    `,
    image: hImg2,
    category: "Politics",
    categorySlug: "politics",
    publishDate: "August 13, 2026",
    readingTime: "5 min read",
    viewCount: "11.8K",
    authorId: "author-2",
    authorName: "Tanvir Hasan",
    isFeatured: true,
    isBreaking: true,
    tags: ["Politics", "Constitution", "Reform", "Commission"]
  },
  {
    id: "art-4",
    slug: "govt-to-take-action-against-those-who-incited-mob",
    title: "Government announces crackdown on mob violence instigators across divisions",
    topic: "Law and Public Order",
    excerpt: "Ministry of Home Affairs issues a strict warning declaring that individuals promoting vigilantism or public disorder will face immediate prosecution under existing penal codes.",
    content: `
      Addressing press reporters at the Secretariat, government officials emphasized zero tolerance for vigilante justice or mob instigation.

      Law enforcement agencies have been instructed to analyze digital evidence and CCTV footage to prosecute ringleaders attempting to disturb public harmony.

      The RAB and local police have been put on high alert across Dhaka, Chittagong, Sylhet, and Rajshahi divisions. At least 14 individuals have already been detained in connection with recent incidents.
    `,
    image: hImg3,
    category: "National",
    categorySlug: "national",
    publishDate: "August 13, 2026",
    readingTime: "3 min read",
    viewCount: "18.3K",
    authorId: "author-1",
    authorName: "Editorial Staff",
    isBreaking: true,
    isTrending: true,
    tags: ["National", "Law", "Public Order", "Dhaka"]
  },
  {
    id: "art-5",
    slug: "govt-service-ordinance-to-be-amended",
    title: "Government service ordinance to be amended for streamlined civil service accountability",
    topic: "Administrative Reform",
    excerpt: "Proposed draft amendment aims to streamline public sector performance evaluations, promotion criteria, and civil service accountability across all ministries.",
    content: `
      The Cabinet division has finalized the preliminary draft for amending existing public service regulations. The reform aims to introduce merit-based key performance indicators (KPIs) and digital governance frameworks across all ministries.

      The amendment would also introduce a mandatory annual audit for senior civil servants and a new whistle-blower protection clause for reporting corruption within government departments.
    `,
    image: hImg4,
    category: "National",
    categorySlug: "national",
    publishDate: "August 12, 2026",
    readingTime: "4 min read",
    viewCount: "6.7K",
    authorId: "author-2",
    authorName: "Tanvir Hasan",
    tags: ["Administration", "Civil Service", "Reform"]
  },
  {
    id: "art-6",
    slug: "three-day-boishabi-festival-begins-in-khagrachhari",
    title: "Three-day Boishabi festival opens with traditional splendor in Khagrachhari",
    topic: "Cultural Celebration",
    excerpt: "The first day of the festival, known as Phul Biju, is celebrated by Chakma, Tripura, and Marma communities by decorating homes with flowers and offerings at riverside.",
    content: `
      Khagrachhari has taken on a vibrant festive look as the traditional three-day Boishabi festival, celebrating the New Year of indigenous communities, officially kicked off at dawn.

      Members of Chakma, Tripura, Marma, and other ethnic groups gathered along riverside banks early in the morning to float wild flowers into the river, offering prayers for peace, health, and communal harmony.

      Rally processions, cultural indigenous dances, traditional sports, and local handicraft displays continue across Rangamati and Bandarban districts over the next two days. Thousands of tourists and well-wishers from across the country have joined the celebrations.
    `,
    image: hillTopImg,
    category: "Hill Districts",
    categorySlug: "hill-tracts",
    publishDate: "August 12, 2026",
    readingTime: "4 min read",
    viewCount: "28.5K",
    authorId: "author-3",
    authorName: "Sharmin Akter",
    isFeatured: true,
    isTrending: true,
    tags: ["Hill Tracts", "Boishabi", "Culture", "Khagrachhari"]
  },
  {
    id: "art-7",
    slug: "sajek-khagrachhari-open-to-tourists-after-restriction",
    title: "Sajek Valley and Khagrachhari reopen to tourists following comprehensive security review",
    topic: "Tourism and Travel",
    excerpt: "Resort operators and local transport syndicates prepare to welcome thousands of weekend travelers as local administration lifts travel advisories and issues new safety guidelines.",
    content: `
      The popular hill destination of Sajek Valley in Rangamati and major tourist spots in Khagrachhari have officially reopened for domestic and international travelers.

      Hotels and eco-resorts reported high advance booking rates within hours of the announcement. Local transport authorities reassured visitors of full security cooperation along hill roadways.

      A new eco-tourism framework has been introduced requiring tourists to register digitally, carry identification, and avoid restricted forest zones during their visits.
    `,
    image: hillImg3,
    category: "Hill Districts",
    categorySlug: "hill-tracts",
    publishDate: "August 11, 2026",
    readingTime: "3 min read",
    viewCount: "15.1K",
    authorId: "author-3",
    authorName: "Sharmin Akter",
    tags: ["Sajek", "Tourism", "Rangamati"]
  },
  {
    id: "art-8",
    slug: "ncp-nibondhon-isyr-chithi",
    title: "এনসিপির নিবন্ধন আবেদনে ছয় ঘাটতি, সংশোধনের জন্য ইসির চিঠি",
    topic: "এনসিপিসহ ১৪৪টি দল আবেদন",
    excerpt: "রাজনৈতিক দল হিসেবে নিবন্ধনের জন্য জাতীয় নাগরিক পার্টির (এনসিপি) করা আবেদনে ছয়টি বিষয়ে ত্রুটি বা ঘাটতি পেয়েছে নির্বাচন কমিশন (ইসি)।",
    content: `
      রাজনৈতিক দল হিসেবে নিবন্ধনের জন্য জাতীয় নাগরিক পার্টির (এনসিপি) করা আবেদনে ছয়টি বিষয়ে ত্রুটি বা ঘাটতি পেয়েছে নির্বাচন কমিশন (ইসি)।

      প্রাথমিক যাচাইয়ে পাওয়া এসব ত্রুটি সংশোধন করে আগামী ৩ আগস্টের মধ্যে উপযুক্ত দলিল দাখিল করতে দলটিকে চিঠি দিয়েছে ইসি।

      নির্বাচন কমিশনের দায়িত্বে থাকা কর্মকর্তারা নিশ্চিত করেছেন যে নির্ধারিত সময়ের মধ্যে সংশোধিত তথ্য জমা দেওয়া সাপেক্ষে পরবর্তী ধাপের মাঠপর্যায়ের সরেজমিন তদন্ত শুরু করা হবে।
    `,
    image: banglaTopImg,
    category: "Politics",
    categorySlug: "politics",
    publishDate: "আগস্ট ১৩, ২০২৬",
    readingTime: "৪ মিনিট পঠিত",
    viewCount: "২১.৪ হাজার",
    authorId: "author-2",
    authorName: "তানভীর হাসান",
    isFeatured: true,
    isTrending: true,
    isBreaking: true,
    tags: ["রাজনীতি", "ইসি", "এনসিপি", "নির্বাচন"]
  },
  {
    id: "art-9",
    slug: "chattogram-potia-sorok-oborodh",
    title: "চট্টগ্রামে পটিয়ার পর নগরেও সড়ক অবরোধ বৈষম্যবিরোধী ও এনসিপির নেতা-কর্মীদের",
    topic: "জাতীয় আন্দোলন",
    excerpt: "দাবি আদায়ের লক্ষে চট্টগ্রামের ব্যস্ততম সড়কসমূহে যানবাহন চলাচল বন্ধ রেখে বিক্ষোভ সমাবেশ ও স্লোগান দেন আন্দোলনকারী নেতা-কর্মীরা।",
    content: `
      চট্টগ্রামে পটিয়ার পর নগরের প্রধান সড়কসমূহে অবস্থান নিয়ে সড়ক অবরোধ ও বিক্ষোভ কর্মসূচি পালন করেছেন ছাত্র-জনতা।

      এর ফলে নগরের অলংকার, জিইসি এবং টাইগারপাস এলাকায় দীর্ঘ যানজটের সৃষ্টি হয়। আইন-শৃঙ্খলা রক্ষাকারী বাহিনীর উর্ধ্বতন কর্মকর্তারা ঘটনাস্থলে উপস্থিত হয়ে পরিস্থিতি নিয়ন্ত্রণে আনার চেষ্টা চালান।
    `,
    image: bnImg1,
    category: "National",
    categorySlug: "national",
    publishDate: "আগস্ট ১৩, ২০২৬",
    readingTime: "৩ মিনিট পঠিত",
    viewCount: "১২.৩ হাজার",
    authorId: "author-1",
    authorName: "সম্পাদকীয় ডেস্ক",
    tags: ["চট্টগ্রাম", "জাতীয়", "সড়ক অবরোধ"]
  },
  {
    id: "art-10",
    slug: "february-april-somne-vote-prostuti",
    title: "ফেব্রুয়ারি ও এপ্রিল সামনে রেখে ভোটের সার্বিক প্রস্তুতি নিচ্ছে ইসি",
    topic: "নির্বাচনী রোডম্যাপ",
    excerpt: "আসন্ন জাতীয় নির্বাচন সুষ্ঠু ও নিরপেক্ষভাবে সম্পন্ন করতে ভোটার তালিকা হালনাগাদ ও কেন্দ্র বিন্যাসের কাজ দ্রুত গতিতে এগিয়ে চলেছে।",
    content: `
      ফেব্রুয়ারি ও এপ্রিল মাসকে সম্ভাব্য সময়সীমা ধরে আগামী জাতীয় সংসদ নির্বাচনের প্রস্তুতিমূলক কাজ বাস্তবায়ন করছে নির্বাচন কমিশন।

      ভোটার তালিকা সংস্কার, নতুন ইসি ভবন থেকে তথ্য ভান্ডার সমন্বয় এবং আইন-শৃঙ্খলা বাহিনীর বাজেট চূড়ান্তকরণের রূপরেখা ঘোষণা করা হয়েছে।
    `,
    image: bnImg3,
    category: "Politics",
    categorySlug: "politics",
    publishDate: "আগস্ট ১২, ২০২৬",
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
    title: "Rooppur Nuclear Power Plant faces further delays as grid synchronization tests continue",
    topic: "Energy and Infrastructure",
    excerpt: "The first 1,200 MW unit may begin power supply next year as the contractor receives a two-year extension following ongoing national grid connectivity tests.",
    content: `
      The official commercial operation timeline for the first 1,200 MW unit of the Rooppur Nuclear Power Plant in Pabna has experienced a timeline shift.

      Project management confirmed that technical integration with the National Power Grid and safety verification checks require extended testing protocols before syncing with the national distribution lines.

      The Bangladesh Atomic Energy Commission stated that all safety certifications from the IAEA are on track, and the delay is purely technical in nature related to grid stabilization requirements.
    `,
    image: nTopImg,
    category: "National",
    categorySlug: "national",
    publishDate: "August 12, 2026",
    readingTime: "5 min read",
    viewCount: "26.8K",
    authorId: "author-4",
    authorName: "Rahim Chowdhury",
    isFeatured: true,
    isTrending: true,
    tags: ["Energy", "Rooppur", "Pabna", "Infrastructure"]
  },
  {
    id: "art-12",
    slug: "ca-urges-japan-to-enhance-cooperation",
    title: "Chief Adviser urges Japan to enhance trade and technology cooperation with Bangladesh",
    topic: "Bilateral Diplomacy",
    excerpt: "High-level bilateral dialogue stresses increased Japanese FDI in Matarbari deep seaport, metro rail expansions, and renewable energy partnerships.",
    content: `
      In an official bilateral consultation held at Jamuna, the Chief Adviser welcomed Japanese diplomatic representatives to expand investment portfolios across key strategic infrastructure projects in Bangladesh.

      Japan agreed to accelerate technical assistance under the Matarbari deep seaport project and provide support for the Dhaka metro rail system's Phase 5 expansion.

      Both sides also signed a memorandum of understanding on digital education and technology transfer that will benefit over 500,000 young Bangladeshi tech professionals.
    `,
    image: nbImg1,
    category: "National",
    categorySlug: "national",
    publishDate: "August 11, 2026",
    readingTime: "3 min read",
    viewCount: "10.4K",
    authorId: "author-1",
    authorName: "Editorial Staff",
    tags: ["Diplomacy", "Japan", "Trade", "Infrastructure"]
  },
  {
    id: "art-13",
    slug: "charges-filed-in-80pc-of-corruption-cases",
    title: "Anti-Corruption Commission files charges in 80% of pending financial corruption cases",
    topic: "Administrative Justice",
    excerpt: "ACC releases its annual accountability audit showing record prosecution timelines in high-profile banking and procurement irregularity cases.",
    content: `
      The Anti-Corruption Commission (ACC) submitted its latest operational performance report, revealing significant progress in concluding investigations and filing charge sheets.

      Efforts focus on recovering laundered assets, auditing public sector procurement contracts, and digitalizing public reporting portals.

      The ACC Commissioner stated that a dedicated fast-track court has been established to handle the backlog of over 2,000 financial crime cases registered since 2023.
    `,
    image: aTopImg,
    category: "National",
    categorySlug: "national",
    publishDate: "August 11, 2026",
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
    title: "Japan provides $4.8 million to Bangladesh Election Commission for modern ballot digitization",
    topic: "Electoral Reform",
    excerpt: "Grant agreement signed to modernize voter registration databases and transparent electoral tracking systems ahead of the next general election.",
    content: `
      The Japanese International Cooperation Agency (JICA) has finalized a grant agreement providing $4.8 million to Bangladesh's Election Commission.

      The funding will support database infrastructure upgrades, officer training programs, and transparent voter verification technologies.

      This is the second JICA grant for Bangladesh's electoral reforms, following a $2.1 million initiative in 2022 that digitalized approximately 32 million voter records.
    `,
    image: readImg1,
    category: "Politics",
    categorySlug: "politics",
    publishDate: "August 10, 2026",
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
    title: "Bangladesh women's national team secures dominant international victory",
    topic: "Sports",
    excerpt: "Dynamic midfield plays and clinical finishing propel Bangladesh to an international victory amid enthusiastic stadium crowd support.",
    content: `
      Bangladesh women's football team delivered a masterclass performance in front of a packed stadium audience, securing a commanding win against regional contenders.

      Head coach praised the team's defensive cohesion, physical conditioning, and swift counter-attacking tactics.

      The victory marks Bangladesh's best international result since their historic 2024 SAFF Women's Championship run, with key striker Sabina Khatun earning Player of the Match honors.
    `,
    image: readImg2,
    category: "Sports",
    categorySlug: "sports",
    publishDate: "August 10, 2026",
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
    title: "Former CEC Nurul Huda gives sworn statement during ongoing judicial inquiry",
    topic: "Court and Law",
    excerpt: "Proceedings continue at Dhaka Metropolitan Magistrate Court regarding historical election conduct oversight and alleged irregularities.",
    content: `
      Legal proceedings surrounding historical election governance oversight continued as former officials appeared before judicial magistrate panels to record official statements.

      The case involves allegations of procedural violations during previous electoral cycles, with the court reviewing documentary evidence submitted by the Election Commission's technical audit department.
    `,
    image: readImg3,
    category: "National",
    categorySlug: "national",
    publishDate: "August 9, 2026",
    readingTime: "4 min read",
    viewCount: "14.8K",
    authorId: "author-2",
    authorName: "Tanvir Hasan",
    tags: ["Court", "Law", "Election", "Dhaka"]
  },
  {
    id: "art-17",
    slug: "civil-society-demands-transparency-sylhet",
    title: "Civil society groups rally in Sylhet demanding flood protection infrastructure",
    topic: "Local Governance",
    excerpt: "Public rally highlights community demands regarding flood management infrastructure and local administrative accountability in the Sylhet division.",
    content: `
      Prominent civic leaders and community advocates held a peaceful rally in Sylhet city center demanding accelerated flood defense embankment construction and municipal service audits.

      The rally drew participation from over 5,000 residents, farmers, and community leaders who called on the Water Development Board to fast-track the Surma River flood control project.
    `,
    image: readImg4,
    category: "National",
    categorySlug: "national",
    publishDate: "August 8, 2026",
    readingTime: "3 min read",
    viewCount: "9.8K",
    authorId: "author-1",
    authorName: "Editorial Staff",
    tags: ["Sylhet", "Governance", "Rally"]
  },
  {
    id: "art-18",
    slug: "rangamati-indigenous-rights-conference-2026",
    title: "Rangamati hosts landmark indigenous rights conference with regional delegates",
    topic: "Human Rights",
    excerpt: "The two-day conference brings together tribal leaders, rights advocates, and government representatives to discuss land rights and cultural preservation policies.",
    content: `
      A landmark two-day conference on indigenous rights was held in Rangamati, bringing together tribal leaders from across the Chittagong Hill Tracts, rights advocates from Dhaka, and senior government representatives.

      Key discussions focused on implementation of the 1997 CHT Peace Accord, land rights protections, educational opportunities in indigenous languages, and cultural heritage preservation.

      The conference concluded with a joint declaration calling for the establishment of a permanent Indigenous Rights Commission with statutory authority to address community grievances.
    `,
    image: hillImg1,
    category: "Hill Districts",
    categorySlug: "hill-tracts",
    publishDate: "August 13, 2026",
    readingTime: "5 min read",
    viewCount: "11.2K",
    authorId: "author-3",
    authorName: "Sharmin Akter",
    isFeatured: true,
    tags: ["Hill Tracts", "Indigenous Rights", "Rangamati", "Policy"]
  },
  {
    id: "art-19",
    slug: "bandarban-eco-resort-project-approved",
    title: "Government approves 12 eco-resort projects in Bandarban under new sustainable tourism policy",
    topic: "Tourism Development",
    excerpt: "The newly approved projects are designed to generate income for indigenous communities while preserving the natural landscape of the Sangu river valley.",
    content: `
      The Ministry of Civil Aviation and Tourism has given final approval for 12 community-owned eco-resort projects in Bandarban district under the newly introduced Sustainable Hill Tourism Policy 2026.

      Each project is mandated to employ at least 70% local indigenous workers and dedicate 25% of net revenues to a community development fund for schools and healthcare.

      The Sangu River Valley corridor, previously underdeveloped, is expected to become one of Bangladesh's premier nature tourism destinations by 2028 following this initiative.
    `,
    image: hillImg2,
    category: "Hill Districts",
    categorySlug: "hill-tracts",
    publishDate: "August 12, 2026",
    readingTime: "4 min read",
    viewCount: "8.6K",
    authorId: "author-3",
    authorName: "Sharmin Akter",
    tags: ["Bandarban", "Tourism", "Eco Resort", "Policy"]
  },
  {
    id: "art-20",
    slug: "bnp-alliance-demands-election-before-december",
    title: "BNP-led alliance demands national election held no later than December 2026",
    topic: "Electoral Politics",
    excerpt: "BNP Secretary General presents a joint declaration from 22 allied parties calling for a clear electoral roadmap and caretaker government formation within 30 days.",
    content: `
      The BNP-led democratic alliance held an emergency joint press conference at Gulshan, where Secretary General Mirza Fakhrul Islam Alamgir presented a declaration signed by 22 allied political parties.

      The declaration demands that the Chief Election Commissioner announce a formal electoral schedule by September, formation of a neutral caretaker administration, and release of all political detainees.

      Political analysts described this as the most coordinated opposition push since the 2024 political transition, with implications for Bangladesh's democratic trajectory heading into 2027.
    `,
    image: bnImg2,
    category: "Politics",
    categorySlug: "politics",
    publishDate: "August 13, 2026",
    readingTime: "5 min read",
    viewCount: "32.7K",
    authorId: "author-2",
    authorName: "Tanvir Hasan",
    isFeatured: true,
    isBreaking: true,
    isTrending: true,
    tags: ["BNP", "Election", "Alliance", "Politics"]
  },
  {
    id: "art-21",
    slug: "dhaka-metro-rail-phase-4-inaugurated",
    title: "Dhaka Metro Rail Phase 4 inaugurated connecting Gabtoli to Kamalapur",
    topic: "Urban Infrastructure",
    excerpt: "The 18.5 km Phase 4 extension is expected to reduce daily commute times for 800,000 passengers and significantly ease traffic congestion across west Dhaka.",
    content: `
      The Prime Minister officially inaugurated the Dhaka Metro Rail Phase 4 extension, a 18.5 km corridor connecting Gabtoli bus terminal to Kamalapur Railway Station.

      The new line features 14 stations, real-time digital displays, disabled access facilities, and a passenger capacity of 60,000 per hour during peak times.

      Transportation experts predict a 23% reduction in road congestion across the Mirpur, Dhanmondi, and Motijheel corridors within the first six months of full operation.
    `,
    image: nbImg2,
    category: "National",
    categorySlug: "national",
    publishDate: "August 13, 2026",
    readingTime: "4 min read",
    viewCount: "41.3K",
    authorId: "author-4",
    authorName: "Rahim Chowdhury",
    isFeatured: true,
    isBreaking: true,
    isTrending: true,
    tags: ["Dhaka", "Metro Rail", "Infrastructure", "Transport"]
  },
  {
    id: "art-22",
    slug: "bangladesh-inflation-drops-to-8-percent",
    title: "Bangladesh inflation drops to 8% as food prices stabilize following government interventions",
    topic: "Economy",
    excerpt: "The Bangladesh Bureau of Statistics reports CPI inflation fell to 8.2% in July, down from 9.7% in June, driven by lower rice, vegetable, and fuel prices.",
    content: `
      Bangladesh's Consumer Price Index (CPI) inflation cooled significantly to 8.2% in July 2026, down from 9.7% in June, according to the Bangladesh Bureau of Statistics.

      The moderation was primarily driven by declining rice prices following a bumper boro harvest, lower global fuel costs, and the government's open market sale (OMS) program for essential commodities.

      The Finance Ministry projected that if global commodity prices remain stable, inflation could fall below 7% by November, relieving pressure on middle and low-income households.
    `,
    image: nbImg3,
    category: "National",
    categorySlug: "national",
    publishDate: "August 12, 2026",
    readingTime: "4 min read",
    viewCount: "17.6K",
    authorId: "author-4",
    authorName: "Rahim Chowdhury",
    isTrending: true,
    tags: ["Economy", "Inflation", "Finance", "Bangladesh"]
  },
  {
    id: "art-23",
    slug: "karnaphuli-tunnel-traffic-record-august",
    title: "Karnaphuli Tunnel sets new daily traffic record with 38,000 vehicles in August",
    topic: "Infrastructure",
    excerpt: "The Bangabandhu Sheikh Mujibur Rahman Tunnel surpasses its operational design capacity as Chittagong port freight traffic increases year-on-year by 34%.",
    content: `
      The Karnaphuli Tunnel, officially named the Bangabandhu Sheikh Mujibur Rahman Tunnel, recorded a new daily traffic peak of 38,000 vehicles on August 8, 2026, exceeding its original design benchmark.

      The tunnel authority has announced plans for a supplementary parallel tunnel feasibility study to address the growing demand, with preliminary construction potentially beginning in 2028.

      Port authorities credited the spike to increased export container volume following new trade agreements with ASEAN nations signed in the first quarter of 2026.
    `,
    image: nbImg4,
    category: "National",
    categorySlug: "national",
    publishDate: "August 11, 2026",
    readingTime: "3 min read",
    viewCount: "12.1K",
    authorId: "author-1",
    authorName: "Editorial Staff",
    tags: ["Chittagong", "Karnaphuli", "Infrastructure", "Traffic"]
  },
  {
    id: "art-24",
    slug: "parbatya-chattogram-development-board-budget-increase",
    title: "CHT Development Board receives 40% budget increase in 2026-27 fiscal year",
    topic: "Regional Development",
    excerpt: "The increased allocation aims to fund road connectivity, solar electrification, and healthcare center upgrades across remote hill district communities.",
    content: `
      The Chittagong Hill Tracts Development Board has received a substantial budget increase of 40% for the 2026-27 fiscal year, reaching a total allocation of BDT 2,800 crore.

      Priority areas for spending include completion of the Rangamati-Khagrachhari mountain highway, solar micro-grid installations for 400 remote villages, and construction of 28 new community health centers.

      The Hill Districts Minister stated the investment reflects the government's commitment to reducing the development gap between hill districts and the rest of Bangladesh.
    `,
    image: hillImg4,
    category: "Hill Districts",
    categorySlug: "hill-tracts",
    publishDate: "August 10, 2026",
    readingTime: "4 min read",
    viewCount: "7.3K",
    authorId: "author-3",
    authorName: "Sharmin Akter",
    isFeatured: true,
    tags: ["CHT", "Development", "Budget", "Hill Tracts"]
  },
  {
    id: "art-25",
    slug: "awami-league-internal-restructuring-underway",
    title: "Awami League begins major internal restructuring ahead of upcoming party council",
    topic: "Party Politics",
    excerpt: "Party insiders reveal a sweeping reorganization of district and upazila-level committees as the Awami League prepares for its first full party council since 2022.",
    content: `
      Awami League's central working committee has begun a comprehensive reorganization of its grassroots structure ahead of the National Party Council scheduled for October 2026.

      Sources indicate that approximately 40% of district-level committee leaders will be replaced to bring in younger leadership and address internal accountability concerns.

      Political observers note this restructuring is the most significant since the party's 2019 reorganization and signals a strategic reset in response to changing political dynamics.
    `,
    image: abImg2,
    category: "Politics",
    categorySlug: "politics",
    publishDate: "August 12, 2026",
    readingTime: "4 min read",
    viewCount: "22.4K",
    authorId: "author-2",
    authorName: "Tanvir Hasan",
    isTrending: true,
    tags: ["Awami League", "Politics", "Party Reform"]
  }
];

export const getArticleBySlug = (slug) => articles.find(a => a.slug === slug);
export const getArticlesByCategory = (categorySlug) => articles.filter(a => a.categorySlug === categorySlug);
export const getFeaturedArticles = () => articles.filter(a => a.isFeatured);
export const getBreakingNews = () => articles.filter(a => a.isBreaking);
export const getTrendingArticles = () => articles.filter(a => a.isTrending);
