# 画像差し替えガイド — 炉ばた 浜

納品時にお店から正式な写真素材をいただき、以下のダミー画像を差し替えてください。

## 画像スロット一覧

| # | 場所 | ファイル | 現在の画像 | 推奨差し替え内容 |
|---|------|---------|-----------|----------------|
| 1 | ヒーロー背景 | `app/components/Hero.tsx` | Unsplash: grilled food | 店舗外観 or 看板写真 |
| 2 | メニュー写真1 | `app/menu/MenuPage.tsx` | Unsplash: grilled seafood | 炉端焼きの料理写真 |
| 3 | メニュー写真2 | `app/menu/MenuPage.tsx` | Unsplash: seafood | お刺身 or 一品料理の写真 |
| 4 | メニュー写真3 | `app/menu/MenuPage.tsx` | Unsplash: sake | 日本酒・ドリンクの写真 |
| 5 | メニュー写真4 | `app/menu/MenuPage.tsx` | Unsplash: sashimi | 刺身盛り合わせの写真 |

## 差し替え手順

1. `public/images/` ディレクトリに画像ファイルを配置
2. 各コンポーネントの `src` プロパティを `/images/ファイル名` に変更
3. `next.config.ts` の `remotePatterns` からUnsplashの設定を削除可能

## 画像仕様

- ヒーロー: 1920x1080px以上推奨（横長）
- メニュー: 640x640px以上推奨（正方形）
- 形式: JPG or WebP
- ファイルサイズ: 各500KB以下推奨
