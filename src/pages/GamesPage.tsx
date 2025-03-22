import React, { useState, useEffect, useCallback } from 'react';
import GameCard from '../components/GameCard';
import { games, teams } from '../assets/mockData';
import { Team } from '../types';
import './GamesPage.css';

const GamesPage: React.FC = () => {
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [sortBy, setSortBy] = useState<'date' | 'team'>('date');

  // 検索と絞り込みの処理
  const handleFilter = useCallback(() => {
    let result = [...games];
    
    // チーム絞り込み
    if (selectedTeam) {
      result = result.filter(
        game => 
          game.homeTeam.id === selectedTeam || 
          game.awayTeam.id === selectedTeam
      );
    }
    
    // 検索キーワード絞り込み
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        game => 
          game.homeTeam.name.toLowerCase().includes(term) ||
          game.homeTeam.city.toLowerCase().includes(term) ||
          game.awayTeam.name.toLowerCase().includes(term) ||
          game.awayTeam.city.toLowerCase().includes(term) ||
          game.stadium.toLowerCase().includes(term)
      );
    }
    
    // ソート
    if (sortBy === 'date') {
      result.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    } else if (sortBy === 'team') {
      result.sort((a, b) => a.homeTeam.name.localeCompare(b.homeTeam.name));
    }
    
    setFilteredGames(result);
  }, [selectedTeam, searchTerm, sortBy]);
  
  // 検索が変更された時の処理
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  // チーム選択が変更された時の処理
  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeam(e.target.value);
  };
  
  // ソート変更時の処理
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as 'date' | 'team');
  };
  
  // フィルター適用
  useEffect(() => {
    handleFilter();
  }, [selectedTeam, searchTerm, sortBy, handleFilter]);

  return (
    <div className="games-page">
      <div className="container">
        <h1 className="page-title">MLB試合一覧</h1>
        
        <div className="filter-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="チーム名やスタジアムを検索..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          
          <div className="filter-options">
            <div className="filter-group">
              <label htmlFor="team-filter">チーム:</label>
              <select
                id="team-filter"
                value={selectedTeam}
                onChange={handleTeamChange}
              >
                <option value="">すべてのチーム</option>
                {teams.map((team: Team) => (
                  <option key={team.id} value={team.id}>
                    {team.city} {team.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="sort-by">並び替え:</label>
              <select
                id="sort-by"
                value={sortBy}
                onChange={handleSortChange}
              >
                <option value="date">日付順</option>
                <option value="team">チーム名順</option>
              </select>
            </div>
          </div>
        </div>
        
        {filteredGames.length > 0 ? (
          <div className="games-grid">
            {filteredGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="no-games">
            <p>条件に一致する試合が見つかりませんでした。</p>
            <p>検索条件を変更してお試しください。</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamesPage; 