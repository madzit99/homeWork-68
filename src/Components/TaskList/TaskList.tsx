import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { fetchTasks } from "./taskThunk";

const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <>
      <div>
        {tasks ? (
          Object.keys(tasks).map((key) => (
            <>
              <h1>{tasks[key].title}</h1>
              <h2>status: {tasks[key].status ? "готово" : "не готово"}</h2>
            </>
          ))
        ) : (
          <h2>No tasks</h2>
        )}
      </div>
    </>
  );
};

export default TaskList;
