function Compteur({ taches }) {
  const restantes = taches.filter((tache) => !tache.terminee).length;
  if (restantes === 0) {
    return (
      <div className="compteur">
        <p>Toutes les tâches sont terminées !</p>
      </div>
    );
  }
  return (
    <div className="compteur">
      <p>
        Il reste {restantes} {restantes === 1 ? "tâche" : "tâches"} à faire
      </p>
    </div>
  );
}
export default Compteur;
