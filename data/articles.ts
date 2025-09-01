export type Article = {
  name: string;
  writtenBy: string;
  researchedBy: string;
  date: string; // any readable format e.g. "2025-09-01" or "Sep 1, 2025"
  link: string;
};

export const articles: Article[] = [
  {
    name: "Why Are The Rich Getting Richer As The Poor Stay Stuck?",
    writtenBy: "Garrett Ward & Hayley Muchandibaya",
    researchedBy:
      "Researched by Ju Yuxuan, Eaden Hong, Yatharth Singh, & Govind",
    date: "24th, 2025",
    link: "https://docs.google.com/document/d/10F4xZ7brxkS0D3Qb41RaC7jqPLuLkAzRc4_ZPy65aJM/edit?tab=t.0",
  },
  {
    name: "Is The American Dream Dead?",
    writtenBy: "Tajwear Taharim, Go Jia Xuan, Sofia, Sunny, & Jovany",
    researchedBy: "Sunmoon Munna, Syed, & Pratham",
    date: "August 25th, 2025",
    link: "https://docs.google.com/document/d/10F4xZ7brxkS0D3Qb41RaC7jqPLuLkAzRc4_ZPy65aJM/edit?tab=t.rgp19fvta9t9",
  },
  {
    name: "How Would We Survive Another Great Depression?",
    writtenBy: "Lara Mattison",
    researchedBy: "Ven",
    date: "August 22nd, 2025",
    link: "https://docs.google.com/document/d/10F4xZ7brxkS0D3Qb41RaC7jqPLuLkAzRc4_ZPy65aJM/edit?tab=t.jszhqxe8756v",
  },
];
