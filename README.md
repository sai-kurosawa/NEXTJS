# タスク管理アプリ 📋

Next.js 15とTypeScriptで構築したモダンなタスク管理アプリケーションです。

## 🎯 プロジェクト概要

このプロジェクトは、Next.jsの実践的な学習を目的として作成されました。認証機能、CRUD操作、状態管理など、実際のWebアプリケーション開発で必要となる機能を実装しています。

## ✨ 主な機能

### タスク管理
- ✅ タスクの作成・表示
- ✅ タスクの編集・削除
- ✅ 状態管理（未着手 / 進行中 / 完了）
- ✅ リアルタイム更新

### 認証システム
- 🔐 ログイン / ログアウト機能
- 🔐 保護されたルート（管理画面）
- 🔐 Context APIによるグローバル状態管理

### 管理画面
- ⚙️ タスクの一括管理
- ⚙️ リアルタイム統計情報
- ⚙️ 編集モード

## 🛠️ 技術スタック

- **Next.js 15** - React フレームワーク（App Router）
- **React 19** - UIライブラリ
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **Context API** - グローバル状態管理

## 📚 学習内容

このプロジェクトで学べる内容：

1. **Next.js App Router**
   - ファイルシステムベースのルーティング
   - Server Components と Client Components
   - メタデータ管理

2. **React の基礎**
   - useState / useEffect
   - useContext
   - カスタムHooks
   - イベントハンドリング

3. **TypeScript**
   - 型定義
   - インターフェース
   - ジェネリクス（Partial型など）

4. **状態管理**
   - Context API
   - グローバル状態の設計
   - データの一元管理

5. **認証システム**
   - ログイン / ログアウト
   - 保護されたルート
   - リダイレクト処理

## 🚀 セットアップ

### 必要な環境

- Node.js 18以上
- npm / yarn / pnpm

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>

# ディレクトリに移動
cd 20251224_next

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 🔑 ログイン情報（デモ用）

管理画面にアクセスするには、以下の認証情報を使用してください：

- **ユーザー名**: `admin`
- **パスワード**: `password`

⚠️ **注意**: これはデモ用の簡易認証です。本番環境では適切なセキュリティ対策が必要です。

## 📁 プロジェクト構造

```
app/
├── contexts/          # Context API（グローバル状態）
│   ├── AuthContext.tsx
│   └── TaskContext.tsx
├── components/        # 再利用可能なコンポーネント
│   ├── Navbar.tsx
│   ├── Card.tsx
│   └── ClientLayout.tsx
├── types/            # TypeScript型定義
│   └── task.ts
├── admin/            # 管理画面
│   └── page.tsx
├── tasks/            # タスク一覧
│   └── page.tsx
├── login/            # ログインページ
│   └── page.tsx
├── about/            # Aboutページ
│   └── page.tsx
├── page.tsx          # トップページ
├── layout.tsx        # ルートレイアウト
└── globals.css       # グローバルスタイル
```

## 🎓 実装のポイント

### Context APIの使用

```typescript
// AuthContext: 認証状態を管理
const { user, login, logout, isAuthenticated } = useAuth();

// TaskContext: タスクデータを管理
const { tasks, addTask, updateTask, deleteTask } = useTasks();
```

### Server Components と Client Components

- **Server Components**: 静的なコンテンツ（デフォルト）
- **Client Components**: インタラクティブな機能（`"use client"` が必要）

### 型安全性

TypeScriptで全てのデータに型を定義：

```typescript
type Task = {
  id: number;
  title: string;
  status: "未着手" | "進行中" | "完了";
  createdAt: string;
};
```

## 🌐 デプロイ

### Vercelへのデプロイ（推奨）

1. [Vercel](https://vercel.com) にアカウント作成
2. GitHubリポジトリと連携
3. 自動デプロイ設定

```bash
# Vercel CLIを使用する場合
npm install -g vercel
vercel
```

## 📝 今後の拡張案

- [ ] データベース連携（PostgreSQL / MongoDB）
- [ ] Server Actionsの実装
- [ ] タスクの検索・フィルター機能
- [ ] タスクの優先度設定
- [ ] タスクの期限管理
- [ ] ダークモード対応
- [ ] レスポンシブデザインの最適化
- [ ] テストの追加（Jest / Testing Library）

## 🤝 貢献

学習用プロジェクトですが、改善提案は歓迎します！

## 📄 ライセンス

MIT License

## 👨‍💻 作成者

Next.js 学習プロジェクト

---

**Happy Coding! 🚀**
