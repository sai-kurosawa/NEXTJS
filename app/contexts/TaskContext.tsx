"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Task } from "../types/task";

// 初期データ
const initialTasks: Task[] = [
  {
    id: 1,
    title: "Next.jsの学習",
    status: "進行中",
    createdAt: "2024-12-20",
  },
  {
    id: 2,
    title: "データベース設計",
    status: "未着手",
    createdAt: "2024-12-21",
  },
  {
    id: 3,
    title: "デプロイ準備",
    status: "完了",
    createdAt: "2024-12-19",
  },
  {
    id: 4,
    title: "UI/UXデザイン",
    status: "進行中",
    createdAt: "2024-12-22",
  },
];

type TaskContextType = {
  tasks: Task[];
  addTask: (title: string) => void;
  updateTask: (id: number, updates: Partial<Task>) => void;
  deleteTask: (id: number) => void;
  changeStatus: (id: number) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // タスクを追加
  const addTask = (title: string) => {
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    const today = new Date().toISOString().split('T')[0];
    
    const newTask: Task = {
      id: newId,
      title,
      status: "未着手",
      createdAt: today,
    };
    
    setTasks([...tasks, newTask]);
  };

  // タスクを更新
  const updateTask = (id: number, updates: Partial<Task>) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, ...updates } : task
    ));
  };

  // タスクを削除
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // タスクの状態を変更
  const changeStatus = (id: number) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const nextStatus = 
          task.status === "未着手" ? "進行中" :
          task.status === "進行中" ? "完了" : "未着手";
        return { ...task, status: nextStatus };
      }
      return task;
    }));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, changeStatus }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}

