export interface Tournament {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  image: string;
  country: string;
}

export interface TournamentDetails extends Tournament {
  location: string;
  participants: number;
  status: string;
  description: string;
}

export const tournaments: Tournament[] = [
  {
    id: "1",
    title: "East West Spring Classic",
    subtitle: "International Youth Tournament",
    date: "28 April – 1 May, 2025",
    tags: ["Hong Kong", "Korea", "U8–U18", "International"],
    image: "https://via.placeholder.com/120x120/FF6B6B/FFFFFF?text=EW+Spring",
    country: "All",
  },
  {
    id: "2",
    title: "HKAHC",
    subtitle: "Invitational Amateur Ice Hockey Tournament",
    date: "15 Dec – 21 Feb, 2025",
    tags: ["Hong Kong", "Men's", "Local"],
    image: "https://via.placeholder.com/120x120/4ECDC4/FFFFFF?text=HKAHC",
    country: "China",
  },
  {
    id: "3",
    title: "WIHO",
    subtitle: "Women's Ice Hockey Mini Tournament",
    date: "1 Sep – 12 Sep, 2025",
    tags: ["Hong Kong", "Women's", "Local"],
    image: "https://via.placeholder.com/120x120/45B7D1/FFFFFF?text=WIHO",
    country: "China",
  },
  {
    id: "4",
    title: "Natan's Cup",
    subtitle: "International Youth Competition",
    date: "15 Dec – 20 Dec, 2025",
    tags: ["Korea", "U16–U20", "International"],
    image: "https://via.placeholder.com/120x120/96CEB4/FFFFFF?text=Natan+Cup",
    country: "Korea",
  },
  {
    id: "5",
    title: "Sakura Ice Tournament",
    subtitle: "Spring Championship Series",
    date: "10 Mar – 15 Mar, 2025",
    tags: ["Japan", "Mixed", "Professional"],
    image: "https://via.placeholder.com/120x120/FFEAA7/FFFFFF?text=Sakura+Ice",
    country: "Japan",
  },
  {
    id: "6",
    title: "Seoul Winter Cup",
    subtitle: "Elite Youth Championship",
    date: "20 Jan – 25 Jan, 2025",
    tags: ["Korea", "U14–U18", "Elite"],
    image: "https://via.placeholder.com/120x120/FD79A8/FFFFFF?text=Seoul+Cup",
    country: "Korea",
  },
  {
    id: "7",
    title: "Tokyo Ice Masters",
    subtitle: "Professional League Tournament",
    date: "5 Feb – 12 Feb, 2025",
    tags: ["Japan", "Professional", "Elite"],
    image: "https://via.placeholder.com/120x120/A29BFE/FFFFFF?text=Tokyo+Ice",
    country: "Japan",
  },
  {
    id: "8",
    title: "Beijing Dragons Cup",
    subtitle: "Youth Development Tournament",
    date: "18 Mar – 23 Mar, 2025",
    tags: ["China", "Youth", "Development"],
    image: "https://via.placeholder.com/120x120/E17055/FFFFFF?text=Beijing+Cup",
    country: "China",
  },
];

export const tournamentDetails: { [key: string]: TournamentDetails } = {
  "1": {
    id: "1",
    title: "East West Spring Classic",
    subtitle: "International Youth Tournament",
    date: "28 April – 1 May, 2025",
    location: "Hong Kong Ice Hockey Academy",
    participants: 16,
    status: "Registration Open",
    image:
      "https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=East+West+Spring+Classic",
    description:
      "The East West Spring Classic is a premier international youth tournament featuring teams from across Asia. This tournament provides young athletes with the opportunity to compete at the highest level.",
    tags: ["Hong Kong", "Korea", "U8–U18", "International"],
    country: "All",
  },
  "2": {
    id: "2",
    title: "HKAHC",
    subtitle: "Invitational Amateur Ice Hockey Tournament",
    date: "15 Dec – 21 Feb, 2025",
    location: "Mega Ice Arena",
    participants: 12,
    status: "Active",
    image:
      "https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=HKAHC+Tournament",
    description:
      "The Hong Kong Amateur Hockey Club invitational tournament brings together the best amateur teams from the region for competitive ice hockey action.",
    tags: ["Hong Kong", "Men's", "Local"],
    country: "China",
  },
  "3": {
    id: "3",
    title: "WIHO",
    subtitle: "Women's Ice Hockey Mini Tournament",
    date: "1 Sep – 12 Sep, 2025",
    location: "Central Ice Arena",
    participants: 8,
    status: "Upcoming",
    image:
      "https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=WIHO+Tournament",
    description:
      "A competitive women's ice hockey tournament promoting female participation in ice hockey and providing a platform for skilled female players.",
    tags: ["Hong Kong", "Women's", "Local"],
    country: "China",
  },
  "4": {
    id: "4",
    title: "Natan's Cup",
    subtitle: "International Youth Competition",
    date: "15 Dec – 20 Dec, 2025",
    location: "Seoul Ice Arena",
    participants: 14,
    status: "Registration Open",
    image:
      "https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Natan%27s+Cup",
    description:
      "An international youth competition bringing together talented young players from across Asia for high-level competition.",
    tags: ["Korea", "U16–U20", "International"],
    country: "Korea",
  },
  "5": {
    id: "5",
    title: "Sakura Ice Tournament",
    subtitle: "Spring Championship Series",
    date: "10 Mar – 15 Mar, 2025",
    location: "Tokyo Ice Palace",
    participants: 18,
    status: "Upcoming",
    image:
      "https://via.placeholder.com/300x200/FFEAA7/FFFFFF?text=Sakura+Ice+Tournament",
    description:
      "Japan's premier spring ice hockey tournament featuring professional and semi-professional teams in a competitive format.",
    tags: ["Japan", "Mixed", "Professional"],
    country: "Japan",
  },
  "6": {
    id: "6",
    title: "Seoul Winter Cup",
    subtitle: "Elite Youth Championship",
    date: "20 Jan – 25 Jan, 2025",
    location: "Seoul Olympic Ice Arena",
    participants: 12,
    status: "Active",
    image:
      "https://via.placeholder.com/300x200/FD79A8/FFFFFF?text=Seoul+Winter+Cup",
    description:
      "Elite youth championship showcasing the best young talent from Korea and neighboring countries.",
    tags: ["Korea", "U14–U18", "Elite"],
    country: "Korea",
  },
  "7": {
    id: "7",
    title: "Tokyo Ice Masters",
    subtitle: "Professional League Tournament",
    date: "5 Feb – 12 Feb, 2025",
    location: "Tokyo Dome Ice Arena",
    participants: 10,
    status: "Active",
    image:
      "https://via.placeholder.com/300x200/A29BFE/FFFFFF?text=Tokyo+Ice+Masters",
    description:
      "Professional league tournament featuring top-tier teams from Japan's ice hockey professional circuit.",
    tags: ["Japan", "Professional", "Elite"],
    country: "Japan",
  },
  "8": {
    id: "8",
    title: "Beijing Dragons Cup",
    subtitle: "Youth Development Tournament",
    date: "18 Mar – 23 Mar, 2025",
    location: "Beijing National Ice Center",
    participants: 16,
    status: "Registration Open",
    image:
      "https://via.placeholder.com/300x200/E17055/FFFFFF?text=Beijing+Dragons+Cup",
    description:
      "A youth development tournament focused on skill building and competitive experience for young players.",
    tags: ["China", "Youth", "Development"],
    country: "China",
  },
};

export const countries = ["All", "China", "Korea", "Japan"];

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "Active":
      return "#28a745";
    case "Registration Open":
      return "#007bff";
    case "Upcoming":
      return "#ffc107";
    case "Completed":
      return "#6c757d";
    default:
      return "#666";
  }
};
