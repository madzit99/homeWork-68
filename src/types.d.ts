export interface Task  {
    title: string;
    status: boolean;
}; 

export interface Tasks {
    [taskId: string]: Task;
}
