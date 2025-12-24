"use client";

import { AuthProvider } from "../contexts/AuthContext";
import { TaskProvider } from "../contexts/TaskContext";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <TaskProvider>
        {children}
      </TaskProvider>
    </AuthProvider>
  );
}

