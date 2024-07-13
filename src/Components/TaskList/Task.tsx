import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import ButtonSpinner from "../ButtonSpinner/ButtonSpinner";

interface Props {
  title: string;
  status: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const Task: React.FC<Props> = ({ title, status, onDelete, onToggle }) => {
  const tasksIsLoading = useSelector(
    (state: RootState) => state.tasks.isLoading
  );
  return (
    <div className="card border border-primary w-50 mx-auto p-3 mt-3">
      <h3>Задача: {title}</h3>
      <div className="btn-wrapper d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id={`checkbox-${title}`}
            checked={status}
            onChange={onToggle}
          />
          <label className="form-check-label" htmlFor={`checkbox-${title}`}>
            {status ? "Готово" : "Не готово"}
          </label>
        </div>
        <Button variant="danger" onClick={onDelete} disabled={tasksIsLoading}>
          {tasksIsLoading && <ButtonSpinner />}
          Удалить
        </Button>
      </div>
    </div>
  );
};
export default Task;
