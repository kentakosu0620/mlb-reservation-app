import React, { useState } from 'react';
import { Game, SeatType } from '../types';
import './ReservationForm.css';

interface ReservationFormProps {
  game: Game;
  onSubmit: (formData: ReservationFormData) => void;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phoneNumber: string;
  quantity: number;
  seatType: SeatType;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ game, onSubmit }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phoneNumber: '',
    quantity: 1,
    seatType: 'standard'
  });
  
  const [errors, setErrors] = useState<Partial<ReservationFormData>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'quantity' ? parseInt(value) : value
    });
    
    // エラーをクリア
    if (errors[name as keyof ReservationFormData]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<ReservationFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '名前は必須です';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須です';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = '電話番号は必須です';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };
  
  // チケット料金の計算
  const calculatePrice = () => {
    return game.ticketPrice[formData.seatType] * formData.quantity;
  };
  
  return (
    <div className="reservation-form-container">
      <h2>チケット予約</h2>
      <div className="game-summary">
        <div className="game-title">
          {game.awayTeam.name} vs {game.homeTeam.name}
        </div>
        <div className="game-details">
          <div>{new Date(game.date).toLocaleDateString('ja-JP')} {game.time}</div>
          <div>{game.stadium}</div>
        </div>
      </div>
      
      <form className="reservation-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">お名前</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phoneNumber">電話番号</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={errors.phoneNumber ? 'error' : ''}
          />
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="quantity">チケット枚数</label>
            <select
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num}枚</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="seatType">座席タイプ</label>
            <select
              id="seatType"
              name="seatType"
              value={formData.seatType}
              onChange={handleChange}
            >
              <option value="standard">スタンダード席 (¥{game.ticketPrice.standard.toLocaleString()}/枚)</option>
              <option value="premium">プレミアム席 (¥{game.ticketPrice.premium.toLocaleString()}/枚)</option>
              <option value="vip">VIP席 (¥{game.ticketPrice.vip.toLocaleString()}/枚)</option>
            </select>
          </div>
        </div>
        
        <div className="price-summary">
          <div className="price-label">合計金額:</div>
          <div className="total-price">¥{calculatePrice().toLocaleString()}</div>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="submit-button">予約を確定する</button>
        </div>
      </form>
      
      <div className="reservation-notes">
        <h3>予約についての注意事項</h3>
        <ul>
          <li>チケットは試合日の3日前までキャンセル可能です。</li>
          <li>お支払いは予約確定後、メールに記載されたリンクから行えます。</li>
          <li>チケットは電子チケットとして発行され、メールでお送りします。</li>
          <li>当日は電子チケットをスマートフォンでご提示ください。</li>
        </ul>
      </div>
    </div>
  );
};

export default ReservationForm; 