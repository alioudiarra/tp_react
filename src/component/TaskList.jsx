import TaskItem from "./TaskItem";

function TaskList({ taches }) {
  return (
    <ul className="task-list">
      {taches.map((tache) => (
        <TaskItem key={tache.id} tache={tache} />
      ))}
    </ul>
  );
}

export default TaskList;