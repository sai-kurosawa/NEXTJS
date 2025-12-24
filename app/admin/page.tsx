"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import { useTasks } from "../contexts/TaskContext";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { Task } from "../types/task";

export default function AdminPage() {
  const { isAuthenticated, user } = useAuth();
  const { tasks, updateTask, deleteTask, changeStatus } = useTasks();
  const router = useRouter();
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  // 編集モード開始
  const startEdit = (task: Task) => {
    setEditingTask(task);
    setEditTitle(task.title);
  };

  // 編集をキャンセル
  const cancelEdit = () => {
    setEditingTask(null);
    setEditTitle("");
  };

  // 編集を保存
  const saveEdit = () => {
    if (editingTask && editTitle.trim() !== "") {
      updateTask(editingTask.id, { title: editTitle });
      cancelEdit();
    }
  };

  // タスク削除（確認付き）
  const handleDelete = (id: number, title: string) => {
    if (confirm(`「${title}」を削除しますか？`)) {
      deleteTask(id);
    }
  };

  // 統計情報を計算
  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === "完了").length,
    inProgress: tasks.filter(t => t.status === "進行中").length,
    pending: tasks.filter(t => t.status === "未着手").length,
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">リダイレクト中...</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🔐 管理画面
          </h1>
          <p className="text-gray-600 mb-2">
            タスク管理システムの管理者用ページです
          </p>
          <p className="text-blue-600 font-medium mb-8">
            ようこそ、{user?.username}さん
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card title="📊 ダッシュボード">
              <p className="mb-2">システムの統計情報</p>
              <ul className="text-sm space-y-1">
                <li>• 総タスク数: {stats.total}</li>
                <li>• 完了: {stats.completed}</li>
                <li>• 進行中: {stats.inProgress}</li>
                <li>• 未着手: {stats.pending}</li>
              </ul>
            </Card>
            
            <Card title="👥 ユーザー管理">
              <p className="mb-2">ユーザーの管理</p>
              <ul className="text-sm space-y-1">
                <li>• ユーザー追加</li>
                <li>• 権限設定</li>
                <li>• アクセス履歴</li>
              </ul>
            </Card>
            
            <Card title="✏️ タスク管理">
              <p className="mb-2">タスクの一括操作</p>
              <ul className="text-sm space-y-1">
                <li>• 一括編集</li>
                <li>• 一括削除</li>
                <li>• エクスポート</li>
              </ul>
            </Card>
            
            <Card title="⚙️ システム設定">
              <p className="mb-2">アプリケーション設定</p>
              <ul className="text-sm space-y-1">
                <li>• 全般設定</li>
                <li>• 通知設定</li>
                <li>• バックアップ</li>
              </ul>
            </Card>
          </div>
          
          {/* タスク管理セクション */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              ✏️ タスク管理
            </h2>
            
            <div className="space-y-4">
              {tasks.map((task) => (
                <div 
                  key={task.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  {editingTask?.id === task.id ? (
                    // 編集モード
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={saveEdit}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                        >
                          保存
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                        >
                          キャンセル
                        </button>
                      </div>
                    </div>
                  ) : (
                    // 通常表示
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {task.title}
                        </h3>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>作成日: {task.createdAt}</span>
                          <span className={`
                            px-3 py-1 rounded-full text-xs font-medium
                            ${task.status === "完了" ? "bg-green-100 text-green-800" : ""}
                            ${task.status === "進行中" ? "bg-blue-100 text-blue-800" : ""}
                            ${task.status === "未着手" ? "bg-gray-100 text-gray-800" : ""}
                          `}>
                            {task.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => changeStatus(task.id)}
                          className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          状態変更
                        </button>
                        <button
                          onClick={() => startEdit(task)}
                          className="px-3 py-1 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm"
                        >
                          編集
                        </button>
                        <button
                          onClick={() => handleDelete(task.id, task.title)}
                          className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                        >
                          削除
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              {tasks.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  タスクがありません
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-blue-400 text-xl">ℹ️</span>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>ヒント:</strong> タスクの追加は「タスク一覧」ページから行えます。管理画面では編集・削除・状態変更が可能です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

