// Common types for the HKPHL app

export interface Tournament {
  id: string;
  name: string;
  status: "Active" | "Upcoming" | "Registration Open" | "Completed";
  participants: number;
  startDate?: string;
  endDate?: string;
  description?: string;
}

export interface Team {
  id: string;
  name: string;
  league: string;
  division: string;
  logo?: string;
  players?: Player[];
}

export interface Player {
  id: string;
  name: string;
  position: string;
  jerseyNumber: number;
  teamId: string;
}

export interface League {
  id: string;
  name: string;
  teams: Team[];
  season: string;
}

export interface Game {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  time: string;
  venue: string;
  score?: {
    home: number;
    away: number;
  };
  status: "Scheduled" | "Live" | "Completed" | "Cancelled";
}

export interface Standing {
  teamId: string;
  team: Team;
  gamesPlayed: number;
  wins: number;
  losses: number;
  ties: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  isAdmin: boolean;
  favouriteTeams: string[];
}
