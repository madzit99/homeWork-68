import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { deleteTask, fetchTasks, toggleTask } from "./taskThunk";
import Task from "./Task";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const onToggle = async (taskId: string) => {
    await dispatch(toggleTask(taskId));
    await dispatch(fetchTasks());
  };

  const onDelete = async (taskId: string) => {
    await dispatch(deleteTask(taskId));
    await dispatch(fetchTasks());
  };
  return (
    <>
      <div>
        {tasks ? (
          Object.keys(tasks).map((key) => (
            <Task
              key={key}
              title={tasks[key].title}
              status={tasks[key].status}
              onToggle={() => onToggle(key)}
              onDelete={() => onDelete(key)}
            />
          ))
        ) : (
          <h2>No tasks</h2>
        )}
      </div>
    </>
  );
};

export default TaskList;
