import { create } from "zustand";

interface Task {
  id: number;
  title: string;
}

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (task: Task) => set((store) => ({ tasks: [...store.tasks, task] })),
  deleteTask: (taskId: number) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.id !== taskId),
    })),
}));

export default useTaskStore;
