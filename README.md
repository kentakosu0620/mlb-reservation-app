# MLB チケット予約アプリケーション

MLBの試合チケットを簡単に予約・管理できるウェブアプリケーションです。

## 機能

- ホームページ: 最新情報や人気チームの紹介
- 試合一覧ページ: チーム名や日付での検索・絞り込み
- 予約ページ: 希望の試合のチケットを予約
- マイチケットページ: 予約したチケットの管理

## 技術スタック

- React
- TypeScript
- React Router
- CSS

## インストール方法

1. リポジトリをクローン:
```
git clone https://github.com/kentakosu0620/mlb-reservation-app.git
```

2. 依存関係をインストール:
```
cd mlb-reservation-app
npm install
```

3. アプリを実行:
```
npm start
```

ブラウザで http://localhost:3000 を開いてアプリケーションを利用できます。

## 開発

このプロジェクトは [Create React App](https://github.com/facebook/create-react-app) で作成されています。

### 利用可能なスクリプト

- `npm start`: 開発モードでアプリを起動
- `npm test`: テストを実行
- `npm run build`: 本番用ビルドを作成
- `npm run eject`: CRAの設定をカスタマイズ

## 今後の改善点

- ユーザー認証システムの実装
- 支払い機能の追加
- リアルタイムでの座席選択機能
- モバイルアプリへの対応
