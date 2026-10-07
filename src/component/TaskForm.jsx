import { useState } from "react";

function TaskForm({ onAjout }) {
  const [texte, setTexte] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    if (texte.trim() === "") return;

    onAjout(texte);
    setTexte("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Nouvelle tâche…"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskForm;