export type Task = {
  id: number;
  title: string;
  status: "未着手" | "進行中" | "完了";
  createdAt: string;
};

