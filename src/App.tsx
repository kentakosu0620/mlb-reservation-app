import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import ReservationPage from './pages/ReservationPage';
import MyTicketsPage from './pages/MyTicketsPage';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/:gameId/reserve" element={<ReservationPage />} />
            <Route path="/my-tickets" element={<MyTicketsPage />} />
            <Route path="*" element={<div className="container not-found">
              <h1>404 - ページが見つかりません</h1>
              <p>お探しのページは存在しないか、移動した可能性があります。</p>
            </div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
