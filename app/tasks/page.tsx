"use client";

import { useState, FormEvent } from "react";
import Navbar from "../components/Navbar";
import { useTasks } from "../contexts/TaskContext";

export default function TasksPage() {
  const { tasks, addTask, changeStatus, deleteTask } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // 新しいタスクを追加する関数
  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();
    
    if (newTaskTitle.trim() === "") {
      alert("タスクのタイトルを入力してください");
      return;
    }
    
    addTask(newTaskTitle);
    setNewTaskTitle("");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            📋 タスク一覧
          </h1>
          
          {/* タスク追加フォーム */}
          <form onSubmit={handleAddTask} className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              新しいタスクを追加
            </h2>
            <div className="flex gap-3">
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="タスクのタイトルを入力..."
                className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                追加する
              </button>
            </div>
          </form>
          
          <div className="space-y-4">
            {tasks.map((task) => (
              <div 
                key={task.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {task.title}
                    </h2>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>作成日: {task.createdAt}</span>
                    </div>
                  </div>
                  
                  <span className={`
                    px-4 py-2 rounded-full text-sm font-medium
                    ${task.status === "完了" ? "bg-green-100 text-green-800" : ""}
                    ${task.status === "進行中" ? "bg-blue-100 text-blue-800" : ""}
                    ${task.status === "未着手" ? "bg-gray-100 text-gray-800" : ""}
                  `}>
                    {task.status}
                  </span>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => changeStatus(task.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    状態を変更
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                  >
                    削除
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {tasks.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              タスクがありません
            </div>
          )}
        </div>
      </div>
    </>
  );
}

