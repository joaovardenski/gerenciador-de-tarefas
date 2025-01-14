import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import Button from "./button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {!tasks || tasks.length === 0 ? (
        <li className="text-center text-slate-600">
          Nenhuma tarefa cadastrada
        </li>
      ) : (
        tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => {
                onTaskClick(task.id);
              }}
              className={`bg-slate-400 text-left w-full text-white p-2 rounded-md flex ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.isCompleted ? <CheckIcon /> : ""}
              {task.title}
            </button>
            <Button
              onClick={() => {
                onSeeDetailsClick(task);
              }}
            >
              <ChevronRightIcon />
            </Button>
            <Button
              onClick={() => {
                onDeleteTaskClick(task.id);
              }}
            >
              <TrashIcon />
            </Button>
          </li>
        ))
      )}
    </ul>
  );
}

// Validação das props
Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      isCompleted: PropTypes.bool,
    })
  ).isRequired,
  onTaskClick: PropTypes.func.isRequired, // Adicionado aqui
  onDeleteTaskClick: PropTypes.func.isRequired,
};

export default Tasks;
