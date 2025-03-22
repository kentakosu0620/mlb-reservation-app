import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">MLB予約システム</Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">ホーム</Link>
            </li>
            <li>
              <Link to="/games">試合一覧</Link>
            </li>
            <li>
              <Link to="/my-tickets">マイチケット</Link>
            </li>
            <li>
              <Link to="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 