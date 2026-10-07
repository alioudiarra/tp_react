import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Compteur from "./components/Compteur";
import Filtres from "./components/Filtres";

const tachesInitiales = [
  { id: 1, texte: "Réviser le chapitre 3", terminee: false },
  { id: 2, texte: "Envoyer le rapport à M. Dubois", terminee: false },
  { id: 3, texte: "Préparer la réunion de lundi", terminee: false },
];

function App() {
  const [taches, setTaches] = useState(tachesInitiales);

  // Question 8: Ajouter une nouvelle tâche (sans mutation)
  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte: texte,
      terminee: false,
    };
    setTaches([...taches, nouvelleTache]);
  };

  // Question 10: Cocher / Décocher une tâche (sans mutation)
  const basculerTache = (id) => {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache
      )
    );
  };

  // Question 11: Supprimer une tâche par son ID
  const supprimerTache = (id) => {
    setTaches(taches.filter((tache) => tache.id !== id));
  };

  // Question 12: Supprimer toutes les tâches terminées
  const supprimerTerminees = () => {
    setTaches(taches.filter((tache) => !tache.terminee));
  };

  // Question 13: Marquer toutes les tâches comme faites
  const toutMarquerFait = () => {
    setTaches(taches.map((tache) => ({ ...tache, terminee: true })));
  };

  return (
    <div className="container">
      <h1>Mes tâches</h1>

      {/* Formulaire avec la prop onAjout pour transmettre l'action */}
      <TaskForm onAjout={ajouterTache} />

      {/* Liste des tâches avec les callbacks de bascule et de suppression */}
      <TaskList
        taches={taches}
        onToggle={basculerTache}
        onSupprimer={supprimerTache}
      />

      {/* Compteur (en attente des questions 14-16) */}
      <Compteur taches={taches} />

      {/* Filtres (en attente des questions 17-19) */}
      <Filtres />

      {/* Boutons d'actions globales (Questions 12 & 13) */}
      <div className="actions-globales">
        <button onClick={supprimerTerminees}>
          Supprimer les tâches terminées
        </button>
        <button onClick={toutMarquerFait}>
          Tout marquer comme fait
        </button>
      </div>
    </div>
  );
}

export default App;