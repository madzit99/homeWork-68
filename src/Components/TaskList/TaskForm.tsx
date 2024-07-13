import { Button, Form } from "react-bootstrap";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";
import { useState } from "react";
import { Task } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { createNewTask, fetchTasks } from "./taskThunk";

const initialState = { title: "", status: false };

const TaskForm = () => {
  const tasksIsLoading = useSelector(
    (state: RootState) => state.tasks.isLoading
  );
  const dispatch: AppDispatch = useDispatch();
  const [task, setTask] = useState<Task>(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(createNewTask(task));
      await dispatch(fetchTasks());
      setTask(initialState);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Form className="w-50 mx-auto" onSubmit={onSubmit}>
      <Form.Group controlId="task">
        <Form.Label>Задача:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Введите задачу"
          value={task.title}
          onChange={onChange}
          required
          autoComplete="off"
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-3">
        {tasksIsLoading ? <ButtonSpinner /> : "Добавить задачу"}
      </Button>
    </Form>
  );
};

export default TaskForm;
