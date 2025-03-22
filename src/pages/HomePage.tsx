import React from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import { games, teams } from '../assets/mockData';
import './HomePage.css';

const HomePage: React.FC = () => {
  // 直近の試合3件を取得
  const upcomingGames = games.slice(0, 3);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>MLBの試合チケットを予約しよう！</h1>
          <p>あなたのお気に入りのチームの試合をリアルタイムで体験</p>
          <Link to="/games" className="cta-button">試合一覧を見る</Link>
        </div>
      </section>

      <section className="upcoming-games">
        <div className="container">
          <h2 className="section-title">今後の試合</h2>
          <div className="game-list">
            {upcomingGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/games" className="view-all-link">
              すべての試合を見る
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="teams-section">
        <div className="container">
          <h2 className="section-title">人気チーム</h2>
          <div className="team-grid">
            {teams.map(team => (
              <div key={team.id} className="team-card">
                <div className="team-logo-container">
                  <img src={team.logoUrl} alt={team.name} className="team-logo" />
                </div>
                <h3 className="team-name">{team.city} {team.name}</h3>
                <p className="team-division">{team.division}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">予約の特徴</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>
                </svg>
              </div>
              <h3>安全で簡単な予約</h3>
              <p>当サイトでは、安全かつ簡単にチケットを予約することが可能です。すべての取引は暗号化されています。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
              </div>
              <h3>リアルタイム更新</h3>
              <p>チケットの在庫状況やイベント情報をリアルタイムで更新します。常に最新の情報を確認できます。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </div>
              <h3>キャンセル保証</h3>
              <p>試合日の3日前までであれば、チケットを無料でキャンセルすることができます。安心して予約できます。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>最新情報を受け取る</h2>
            <p>MLB試合の最新情報やお得な情報を定期的にお届けします。</p>
            <form className="newsletter-form">
              <input type="email" placeholder="メールアドレスを入力" required />
              <button type="submit">登録する</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 