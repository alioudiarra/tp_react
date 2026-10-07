function TaskList({ taches, onToggle, onSupprimer }) {
  if (taches.length === 0) {
    return <p>Aucune tâche</p>; // Q20
  }

  return (
    <ul>
      {taches.map((tache) => (
        <TaskItem 
          key={tache.id} 
          tache={tache} 
          onToggle={onToggle} 
          onSupprimer={onSupprimer} 
        />
      ))}
    </ul>
  );
}

export default TaskList;