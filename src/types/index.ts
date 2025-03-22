export interface Team {
  id: string;
  name: string;
  city: string;
  logoUrl: string;
  division: string;
  league: string;
}

export interface Game {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  time: string;
  stadium: string;
  availableSeats: number;
  ticketPrice: {
    standard: number;
    premium: number;
    vip: number;
  };
}

export interface Reservation {
  id: string;
  gameId: string;
  userId: string;
  seatType: 'standard' | 'premium' | 'vip';
  quantity: number;
  totalPrice: number;
  reservationDate: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export type SeatType = 'standard' | 'premium' | 'vip'; 