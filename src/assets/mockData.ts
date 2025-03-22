import { Game, Team, Reservation, User } from '../types';

// チームのダミーデータ
export const teams: Team[] = [
  {
    id: 't1',
    name: 'Yankees',
    city: 'New York',
    logoUrl: '/team-logos/yankees.png',
    division: 'AL East',
    league: 'American'
  },
  {
    id: 't2',
    name: 'Red Sox',
    city: 'Boston',
    logoUrl: '/team-logos/red-sox.png',
    division: 'AL East',
    league: 'American'
  },
  {
    id: 't3',
    name: 'Dodgers',
    city: 'Los Angeles',
    logoUrl: '/team-logos/dodgers.png',
    division: 'NL West',
    league: 'National'
  },
  {
    id: 't4',
    name: 'Giants',
    city: 'San Francisco',
    logoUrl: '/team-logos/giants.png',
    division: 'NL West',
    league: 'National'
  },
  {
    id: 't5',
    name: 'Cubs',
    city: 'Chicago',
    logoUrl: '/team-logos/cubs.png',
    division: 'NL Central',
    league: 'National'
  },
  {
    id: 't6',
    name: 'Cardinals',
    city: 'St. Louis',
    logoUrl: '/team-logos/cardinals.png',
    division: 'NL Central',
    league: 'National'
  },
];

// 試合のダミーデータ
export const games: Game[] = [
  {
    id: 'g1',
    homeTeam: teams[0], // Yankees
    awayTeam: teams[1], // Red Sox
    date: '2023-07-15',
    time: '19:05',
    stadium: 'Yankee Stadium',
    availableSeats: 250,
    ticketPrice: {
      standard: 50,
      premium: 120,
      vip: 300
    }
  },
  {
    id: 'g2',
    homeTeam: teams[2], // Dodgers
    awayTeam: teams[3], // Giants
    date: '2023-07-16',
    time: '16:10',
    stadium: 'Dodger Stadium',
    availableSeats: 180,
    ticketPrice: {
      standard: 45,
      premium: 110,
      vip: 280
    }
  },
  {
    id: 'g3',
    homeTeam: teams[4], // Cubs
    awayTeam: teams[5], // Cardinals
    date: '2023-07-17',
    time: '13:20',
    stadium: 'Wrigley Field',
    availableSeats: 200,
    ticketPrice: {
      standard: 40,
      premium: 100,
      vip: 250
    }
  },
  {
    id: 'g4',
    homeTeam: teams[1], // Red Sox
    awayTeam: teams[0], // Yankees
    date: '2023-07-18',
    time: '19:10',
    stadium: 'Fenway Park',
    availableSeats: 150,
    ticketPrice: {
      standard: 55,
      premium: 130,
      vip: 320
    }
  },
  {
    id: 'g5',
    homeTeam: teams[3], // Giants
    awayTeam: teams[2], // Dodgers
    date: '2023-07-19',
    time: '18:45',
    stadium: 'Oracle Park',
    availableSeats: 220,
    ticketPrice: {
      standard: 48,
      premium: 115,
      vip: 290
    }
  },
];

// ユーザーのダミーデータ
export const users: User[] = [
  {
    id: 'u1',
    name: '山田太郎',
    email: 'yamada@example.com'
  },
  {
    id: 'u2',
    name: '鈴木花子',
    email: 'suzuki@example.com'
  }
];

// 予約のダミーデータ
export const reservations: Reservation[] = [
  {
    id: 'r1',
    gameId: 'g1',
    userId: 'u1',
    seatType: 'premium',
    quantity: 2,
    totalPrice: 240,
    reservationDate: '2023-06-20',
    status: 'confirmed'
  },
  {
    id: 'r2',
    gameId: 'g3',
    userId: 'u2',
    seatType: 'standard',
    quantity: 4,
    totalPrice: 160,
    reservationDate: '2023-06-22',
    status: 'confirmed'
  }
]; 