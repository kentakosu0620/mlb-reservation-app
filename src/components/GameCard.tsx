import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';
import './GameCard.css';

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { id, homeTeam, awayTeam, date, time, stadium, availableSeats } = game;
  
  // 日付のフォーマット
  const formattedDate = new Date(date).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });
  
  return (
    <div className="game-card">
      <div className="game-date">{formattedDate}</div>
      <div className="game-time">{time}</div>
      <div className="game-teams">
        <div className="team away">
          <img src={awayTeam.logoUrl} alt={awayTeam.name} className="team-logo" />
          <div className="team-name">{awayTeam.city} {awayTeam.name}</div>
        </div>
        <div className="vs">VS</div>
        <div className="team home">
          <img src={homeTeam.logoUrl} alt={homeTeam.name} className="team-logo" />
          <div className="team-name">{homeTeam.city} {homeTeam.name}</div>
        </div>
      </div>
      <div className="game-info">
        <div className="stadium">{stadium}</div>
        <div className="available-seats">残り{availableSeats}席</div>
      </div>
      <div className="game-action">
        <Link to={`/games/${id}`} className="view-details-btn">詳細を見る</Link>
        <Link to={`/games/${id}/reserve`} className="reserve-btn">予約する</Link>
      </div>
    </div>
  );
};

export default GameCard; 