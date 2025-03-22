import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MLB予約システム</h3>
            <p>お気に入りのMLBチームの試合チケットを簡単に予約できるプラットフォームです。</p>
          </div>
          
          <div className="footer-section">
            <h3>リンク</h3>
            <ul>
              <li><a href="/">ホーム</a></li>
              <li><a href="/games">試合一覧</a></li>
              <li><a href="/my-tickets">マイチケット</a></li>
              <li><a href="/contact">お問い合わせ</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>お問い合わせ</h3>
            <p>メール: info@mlb-reservation.example.com</p>
            <p>電話: 03-1234-5678</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 MLB予約システム. All Rights Reserved.</p>
          <p className="disclaimer">このサイトはデモアプリであり、実際のMLBとは関係ありません。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 