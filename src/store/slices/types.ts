export interface TasksState {
  tasks: Task[];
}

export type Task = {
  id: string;
  name: string;
  description: string;
};
