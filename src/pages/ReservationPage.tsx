import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReservationForm, { ReservationFormData } from '../components/ReservationForm';
import { games } from '../assets/mockData';
import { Game } from '../types';
import './ReservationPage.css';

const ReservationPage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const navigate = useNavigate();
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reservationComplete, setReservationComplete] = useState(false);
  
  useEffect(() => {
    // ゲームIDに対応する試合データを検索
    const fetchGame = () => {
      setLoading(true);
      try {
        const foundGame = games.find(g => g.id === gameId);
        
        if (foundGame) {
          setGame(foundGame);
          setError(null);
        } else {
          setError('指定された試合が見つかりませんでした。');
        }
      } catch (err) {
        setError('データの読み込み中にエラーが発生しました。');
      } finally {
        setLoading(false);
      }
    };
    
    fetchGame();
  }, [gameId]);
  
  const handleReservationSubmit = (formData: ReservationFormData) => {
    setIsSubmitting(true);
    
    // 予約処理（実際はAPIリクエストなど）をシミュレート
    setTimeout(() => {
      // 予約成功
      setIsSubmitting(false);
      setReservationComplete(true);
    }, 1500);
  };
  
  const handleBackToGames = () => {
    navigate('/games');
  };
  
  if (loading) {
    return (
      <div className="reservation-page">
        <div className="container">
          <div className="loading">
            <div className="spinner"></div>
            <p>データを読み込み中...</p>
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="reservation-page">
        <div className="container">
          <div className="error-message">
            <h2>エラーが発生しました</h2>
            <p>{error}</p>
            <button onClick={handleBackToGames} className="back-button">
              試合一覧に戻る
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  if (reservationComplete) {
    return (
      <div className="reservation-page">
        <div className="container">
          <div className="reservation-complete">
            <div className="success-icon">✓</div>
            <h2>予約が完了しました！</h2>
            <p>予約確認メールが送信されました。内容をご確認ください。</p>
            <div className="reservation-actions">
              <button onClick={handleBackToGames} className="back-button">
                試合一覧に戻る
              </button>
              <button onClick={() => navigate('/my-tickets')} className="my-tickets-button">
                マイチケットを見る
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="reservation-page">
      <div className="container">
        <h1 className="page-title">チケット予約</h1>
        
        {game && (
          <>
            <div className="breadcrumb">
              <span onClick={handleBackToGames} className="breadcrumb-link">試合一覧</span>
              <span className="breadcrumb-separator">&gt;</span>
              <span>予約</span>
            </div>
            
            {isSubmitting ? (
              <div className="loading">
                <div className="spinner"></div>
                <p>予約処理中...</p>
              </div>
            ) : (
              <ReservationForm game={game} onSubmit={handleReservationSubmit} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ReservationPage; 