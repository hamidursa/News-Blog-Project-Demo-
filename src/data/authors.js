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
    role: "Economic & Tech Analyst",
    bio: "Focuses on emerging technologies, financial sector reforms, and South Asian trade.",
    avatar: "/src/assets/Image/footlogo.png"
  }
];

export const getAuthorById = (id) => authors.find(a => a.id === id) || authors[0];
