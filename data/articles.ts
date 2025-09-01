export type Article = {
  name: string;
  writtenBy: string;
  researchedBy: string;
  date: string;
  slug: string;
  contentPath?: string;
};

export const articles: Article[] = [
  {
    name: "Why Are The Rich Getting Richer As The Poor Stay Stuck?",
    writtenBy: "Garrett Ward & Hayley Muchandibaya",
    researchedBy:
      "Researched by Ju Yuxuan, Eaden Hong, Yatharth Singh, & Govind",
    date: "24th, 2025",
    slug: "why-are-the-rich-getting-richer-as-the-poor-stay-stuck",
  },
  {
    name: "Is The American Dream Dead?",
    writtenBy: "Tajwear Taharim, Go Jia Xuan, Sofia, Sunny, & Jovany",
    researchedBy: "Sunmoon Munna, Syed, & Pratham",
    date: "August 25th, 2025",
    slug: "is-the-american-dream-dead",
  },
  {
    name: "How Would We Survive Another Great Depression?",
    writtenBy: "Lara Mattison",
    researchedBy: "Ven",
    date: "August 22nd, 2025",
    slug: "how-would-we-survive-another-great-depression",
  },
];
