export type TaskType = {
  id?: number;
  title: string;
  description: string;
  status: 'added' | 'in progress' | 'completed';
};

export type TasksSliceType = { tasks: TaskType[]; isLoading: boolean; isError: boolean };
