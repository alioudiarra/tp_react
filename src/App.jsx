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

  const ajouterTache = (texte) => {
    const nouvelleTache = {
      id: Date.now(),
      texte: texte,
      terminee: false,
    };
    setTaches([...taches, nouvelleTache]);
  };

  const basculerTache = (id) => {
    setTaches(
      taches.map((tache) =>
        tache.id === id ? { ...tache, terminee: !tache.terminee } : tache
      )
    );
  };

  const supprimerTache = (id) => {
    setTaches(taches.filter((tache) => tache.id !== id));
  };

  const supprimerTerminees = () => {
    setTaches(taches.filter((tache) => !tache.terminee));
  };

  const toutMarquerFait = () => {
    setTaches(taches.map((tache) => ({ ...tache, terminee: true })));
  };

  return (
    <div className="container">
      <h1>Mes tâches</h1>

      <TaskForm onAjout={ajouterTache} />

      <TaskList
        taches={taches}
        onToggle={basculerTache}
        onSupprimer={supprimerTache}
      />

      <Compteur taches={taches} />
      <Filtres />

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