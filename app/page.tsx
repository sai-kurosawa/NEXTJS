import Link from "next/link";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* ヒーローセクション */}
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              タスク管理アプリ
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Next.js 15とTypeScriptで構築した<br />
              モダンなタスク管理アプリケーション
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tasks" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg"
              >
                タスク一覧を見る 📋
              </Link>
              <Link 
                href="/login" 
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
              >
                管理画面へ 🔐
              </Link>
            </div>
          </div>
        </div>

        {/* 機能紹介セクション */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              主な機能
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card title="📝 タスク管理">
                <ul className="space-y-2 text-sm">
                  <li>• タスクの作成と表示</li>
                  <li>• 状態管理（未着手/進行中/完了）</li>
                  <li>• リアルタイム更新</li>
                </ul>
              </Card>
              
              <Card title="🔐 認証システム">
                <ul className="space-y-2 text-sm">
                  <li>• ログイン/ログアウト</li>
                  <li>• 保護されたルート</li>
                  <li>• セッション管理</li>
                </ul>
              </Card>
              
              <Card title="⚙️ 管理画面">
                <ul className="space-y-2 text-sm">
                  <li>• タスクの編集・削除</li>
                  <li>• ダッシュボード統計</li>
                  <li>• 一元管理機能</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>

        {/* 技術スタックセクション */}
        <div className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              技術スタック
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card title="フロントエンド">
                <ul className="space-y-2 text-sm">
                  <li>🚀 Next.js 15 (App Router)</li>
                  <li>⚛️ React 19</li>
                  <li>📘 TypeScript</li>
                  <li>🎨 Tailwind CSS</li>
                </ul>
              </Card>
              
              <Card title="学習内容">
                <ul className="space-y-2 text-sm">
                  <li>• Server/Client Components</li>
                  <li>• Context API でのグローバル状態管理</li>
                  <li>• CRUD操作の実装</li>
                  <li>• 認証システムの構築</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>

        {/* CTAセクション */}
        <div className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              さっそく始めましょう
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              タスクを追加して、管理画面で編集してみましょう
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/tasks" 
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
              >
                タスク一覧
              </Link>
              <Link 
                href="/about" 
                className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
              >
                詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
