function Filtres({ filtre, setFiltre }) {
    return (
        <div className="filtres">
            <button
                className={filtre === "toutes" ? "active" : ""}
                onClick={() => setFiltre("toutes")}
            >
                Toutes
            </button>
            <button
            className={filtre === "en-cours" ? "active" : ""}
            onClick={() => setFiltre("en-cours")}
            >
               en-cours
            </button>
            <button
                className={filtre === "terminees" ? "active" : ""}
                onClick={() => setFiltre("terminees")}
            >   
                Terminées
            </button>
        </div>
    );
}
export default Filtres;
