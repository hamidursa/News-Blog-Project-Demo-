export const authors = [
  {
    id: "author-1",
    name: "Editorial Staff",
    nameBn: "সম্পাদকীয় ডেস্ক",
    role: "Desk News Editor",
    bio: "Third Angle newsroom delivering unbiased, fast, and verified reports round the clock.",
    avatar: "/src/assets/Image/footlogo.png"
  },
  {
    id: "author-2",
    name: "Tanvir Hasan",
    nameBn: "তানভীর হাসান",
    role: "Senior Political Reporter",
    bio: "Covering national politics, parliament proceedings, and constitutional affairs for over a decade.",
    avatar: "/src/assets/Image/footlogo.png"
  },
  {
    id: "author-3",
    name: "Sharmin Akter",
    nameBn: "শারমীন আক্তার",
    role: "Hill Tracts Correspondent",
    bio: "Special correspondent based in Rangamati reporting on indigenous communities and regional development.",
    avatar: "/src/assets/Image/footlogo.png"
  },
  {
    id: "author-4",
    name: "Rahim Chowdhury",
    nameBn: "রহিম চৌধুরী",
    role: "Economic Analyst",
    bio: "Focuses on financial sector reforms, trade policies, inflation metrics, and South Asian markets.",
    avatar: "/src/assets/Image/footlogo.png"
  },
  {
    id: "author-5",
    name: "Nusrat Jahan",
    nameBn: "নুসরাত জাহান",
    role: "Education & Campus Correspondent",
    bio: "Specialist in higher education policy, university governance, curriculum reform, and student affairs.",
    avatar: "/src/assets/Image/footlogo.png"
  },
  {
    id: "author-6",
    name: "Imran Kabir",
    nameBn: "ইমরান কবির",
    role: "Science & Technology Editor",
    bio: "Covering AI breakthroughs, digital infrastructure, telecommunications, software ecosystems, and space exploration.",
    avatar: "/src/assets/Image/footlogo.png"
  },
  {
    id: "author-7",
    name: "Sadia Rahman",
    nameBn: "সাদিয়া রহমান",
    role: "Culture, Entertainment & Lifestyle Writer",
    bio: "Writing on cinema, performing arts, literature, mental health, culinary traditions, and travel.",
    avatar: "/src/assets/Image/footlogo.png"
  },
  {
    id: "author-8",
    name: "Faisal Ahmed",
    nameBn: "ফয়সাল আহমেদ",
    role: "Senior Sports Correspondent",
    bio: "Veteran sports journalist covering Bangladesh cricket, international football tournaments, and athletics.",
    avatar: "/src/assets/Image/footlogo.png"
  },
  {
    id: "author-9",
    name: "Farhana Yasmin",
    nameBn: "ফারহানা ইয়াসমিন",
    role: "International Affairs Analyst",
    bio: "Expert on South Asian geopolitics, UN treaties, international trade corridors, and global environmental summits.",
    avatar: "/src/assets/Image/footlogo.png"
  }
];

export const getAuthorById = (id) => authors.find(a => a.id === id) || authors[0];
