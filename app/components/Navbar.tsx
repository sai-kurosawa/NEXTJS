"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };
  
  // リンクのスタイルを生成する関数
  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `px-3 py-2 rounded-lg transition-colors ${
      isActive 
        ? "bg-blue-700 text-white font-semibold" 
        : "hover:bg-blue-700 hover:text-white"
    }`;
  };
  
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:text-blue-100 transition-colors">
            タスク管理アプリ
          </Link>
          
          <div className="flex gap-3">
            <Link href="/" className={getLinkClass("/")}>
              ホーム
            </Link>
            <Link href="/tasks" className={getLinkClass("/tasks")}>
              タスク一覧
            </Link>
            {isAuthenticated && (
              <Link href="/admin" className={getLinkClass("/admin")}>
                管理画面
              </Link>
            )}
            <Link href="/about" className={getLinkClass("/about")}>
              About
            </Link>
            
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-colors text-white font-medium"
              >
                ログアウト
              </button>
            ) : (
              <Link 
                href="/login" 
                className="px-3 py-2 rounded-lg bg-green-500 hover:bg-green-600 transition-colors text-white font-medium"
              >
                ログイン
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

