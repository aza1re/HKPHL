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
    image: "",
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
    image: "",
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
    image: "",
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
