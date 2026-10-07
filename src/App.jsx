import { useState } from 'react';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';
import Compteur from './component/Compteur';
import Filtres from './component/Filtres';

const tachesInitiales = [
  { id: 1, texte: "Réviser le chapitre 3", terminee: false },
  { id: 2, texte: "Envoyer le rapport à M. Dubois", terminee: true },
  { id: 3, texte: "Préparer la réunion de lundi", terminee: false },
];

function App() {
  const [taches, setTaches] = useState(tachesInitiales);

 
  const [filtre, setFiltre] = useState("toutes");

  
  const tachesFiltrees = taches.filter((tache) => {
    if (filtre === "en-cours") return !tache.terminee;
    if (filtre === "terminees") return tache.terminee;
    return true;
  });

  return (
    <div className="container">
      <h1>Mes tâches</h1>

      <TaskForm />

   
      <TaskList taches={tachesFiltrees} />

     
      <Compteur taches={taches} />

      
      <Filtres filtre={filtre} setFiltre={setFiltre} />
    </div>
  );
}

export default App;