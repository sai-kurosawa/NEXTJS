import Link from "next/link";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About このアプリについて
          </h1>
          
          <div className="space-y-6 mb-8">
            <Card title="このアプリケーションについて">
              <p className="mb-4">
                Next.js 15を使用したタスク管理アプリケーションです。
              </p>
              <p>
                学習目的で作成されており、基本的なCRUD操作を実装しています。
              </p>
            </Card>
            
            <Card title="使用技術">
              <ul className="space-y-2">
                <li>• Next.js 15 (App Router)</li>
                <li>• React 19</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
              </ul>
            </Card>
          </div>
          
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← トップページへ戻る
          </Link>
        </div>
      </div>
    </>
  );
}

