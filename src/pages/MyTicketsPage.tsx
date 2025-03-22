import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { reservations, games } from '../assets/mockData';
import { Reservation, Game } from '../types';
import './MyTicketsPage.css';

const MyTicketsPage: React.FC = () => {
  const [userReservations, setUserReservations] = useState<(Reservation & { game: Game })[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // 予約データの取得と試合データの結合をシミュレート
    const fetchReservations = () => {
      setLoading(true);
      
      // ユーザーID u1 のダミーユーザーとして扱う
      const userId = 'u1';
      
      // ユーザーの予約を取得
      const userRes = reservations.filter(res => res.userId === userId);
      
      // 予約と試合情報を結合
      const reservationsWithGameInfo = userRes.map(reservation => {
        const game = games.find(g => g.id === reservation.gameId);
        return {
          ...reservation,
          game: game!
        };
      });
      
      // データをセット
      setTimeout(() => {
        setUserReservations(reservationsWithGameInfo);
        setLoading(false);
      }, 800); // 読み込み時間をシミュレート
    };
    
    fetchReservations();
  }, []);
  
  const handleCancelReservation = (reservationId: string) => {
    // キャンセル処理（実際はAPIリクエスト）
    const updatedReservations = userReservations.map(res => {
      if (res.id === reservationId) {
        return {
          ...res,
          status: 'cancelled' as const
        };
      }
      return res;
    });
    
    setUserReservations(updatedReservations);
  };
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <span className="status-confirmed">予約確定</span>;
      case 'pending':
        return <span className="status-pending">確認待ち</span>;
      case 'cancelled':
        return <span className="status-cancelled">キャンセル済み</span>;
      default:
        return <span>{status}</span>;
    }
  };
  
  if (loading) {
    return (
      <div className="my-tickets-page">
        <div className="container">
          <h1 className="page-title">マイチケット</h1>
          <div className="loading">
            <div className="spinner"></div>
            <p>チケット情報を読み込み中...</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="my-tickets-page">
      <div className="container">
        <h1 className="page-title">マイチケット</h1>
        
        {userReservations.length > 0 ? (
          <div className="tickets-container">
            {userReservations.map(reservation => (
              <div 
                key={reservation.id} 
                className={`ticket-card ${reservation.status === 'cancelled' ? 'cancelled' : ''}`}
              >
                <div className="ticket-header">
                  <div className="ticket-teams">
                    {reservation.game.awayTeam.name} vs {reservation.game.homeTeam.name}
                  </div>
                  <div className="ticket-status">
                    {getStatusLabel(reservation.status)}
                  </div>
                </div>
                
                <div className="ticket-details">
                  <div className="ticket-detail-group">
                    <div className="detail-label">日時</div>
                    <div className="detail-value">
                      {new Date(reservation.game.date).toLocaleDateString('ja-JP')} {reservation.game.time}
                    </div>
                  </div>
                  
                  <div className="ticket-detail-group">
                    <div className="detail-label">スタジアム</div>
                    <div className="detail-value">{reservation.game.stadium}</div>
                  </div>
                  
                  <div className="ticket-detail-group">
                    <div className="detail-label">座席タイプ</div>
                    <div className="detail-value">
                      {reservation.seatType === 'standard' && 'スタンダード席'}
                      {reservation.seatType === 'premium' && 'プレミアム席'}
                      {reservation.seatType === 'vip' && 'VIP席'}
                    </div>
                  </div>
                  
                  <div className="ticket-detail-group">
                    <div className="detail-label">枚数</div>
                    <div className="detail-value">{reservation.quantity}枚</div>
                  </div>
                  
                  <div className="ticket-detail-group">
                    <div className="detail-label">合計金額</div>
                    <div className="detail-value">¥{reservation.totalPrice.toLocaleString()}</div>
                  </div>
                  
                  <div className="ticket-detail-group">
                    <div className="detail-label">予約日</div>
                    <div className="detail-value">{new Date(reservation.reservationDate).toLocaleDateString('ja-JP')}</div>
                  </div>
                </div>
                
                <div className="ticket-actions">
                  {reservation.status !== 'cancelled' && (
                    <button 
                      className="cancel-button"
                      onClick={() => handleCancelReservation(reservation.id)}
                    >
                      予約をキャンセル
                    </button>
                  )}
                  <Link 
                    to={`/games/${reservation.gameId}`} 
                    className="view-game-button"
                  >
                    試合詳細を見る
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-tickets">
            <h2>予約済みのチケットがありません</h2>
            <p>試合一覧から気になる試合のチケットを予約しましょう。</p>
            <Link to="/games" className="browse-games-button">
              試合一覧を見る
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTicketsPage; 