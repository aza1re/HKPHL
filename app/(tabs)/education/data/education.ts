export interface EducationItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  tags: string[];
  type: "camp" | "showcase";
}

export const educationData: EducationItem[] = [
  {
    id: "1",
    title: "Summer Hockey Development Camp",
    subtitle: "Intensive Skills Training Program",
    date: "15 Jun – 22 Jun, 2025",
    image: "https://picsum.photos/200/150?random=1",
    tags: ["Hong Kong", "U10-U16", "Development", "Skills"],
    type: "camp",
  },
  {
    id: "2",
    title: "Elite Youth Hockey Camp",
    subtitle: "Advanced Training & Competition",
    date: "5 Jul – 12 Jul, 2025",
    image: "https://picsum.photos/200/150?random=2",
    tags: ["Hong Kong", "U14-U18", "Elite", "Competition"],
    type: "camp",
  },
  {
    id: "3",
    title: "Asia Pacific Hockey Showcase",
    subtitle: "International Talent Exhibition",
    date: "20 Aug – 23 Aug, 2025",
    image: "https://picsum.photos/200/150?random=3",
    tags: ["International", "U16-U18", "Showcase", "Scouts"],
    type: "showcase",
  },
  {
    id: "4",
    title: "Hong Kong Youth Showcase",
    subtitle: "Local Talent Development Event",
    date: "10 Sep – 12 Sep, 2025",
    image: "https://picsum.photos/200/150?random=4",
    tags: ["Hong Kong", "U12-U16", "Youth", "Development"],
    type: "showcase",
  },
  {
    id: "5",
    title: "Winter Hockey Intensive",
    subtitle: "Off-Season Training Program",
    date: "15 Dec – 22 Dec, 2025",
    image: "https://picsum.photos/200/150?random=5",
    tags: ["Hong Kong", "All Ages", "Training", "Intensive"],
    type: "camp",
  },
  {
    id: "6",
    title: "Regional Skills Showcase",
    subtitle: "Cross-Border Hockey Exhibition",
    date: "28 Oct – 30 Oct, 2025",
    image: "https://picsum.photos/200/150?random=6",
    tags: ["Regional", "U14-U18", "Skills", "Exhibition"],
    type: "showcase",
  },
];
