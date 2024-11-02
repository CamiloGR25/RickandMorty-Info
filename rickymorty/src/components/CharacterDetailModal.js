import React, { useEffect, useState } from "react";
import "../styles/CharacterDetailModal.css";

const CharacterDetailModal = ({ character, onClose }) => {

    const [firstEpisode, setFirstEpisode] = useState({ name: null, episodio: null });
    useEffect(() => {
        if (character.episode.length > 0) {
            // Toma la URL del primer episodio
            const firstEpisodeUrl = character.episode[0];

            //solicitud a la API para obtener los detalles del episodio
            fetch(firstEpisodeUrl)
                .then(response => response.json())
                .then(data => { setFirstEpisode({ name: data.name, episode: data.episode }); })
                .catch(error => console.error("Error episode:", error));
        }
    }, [character]);

    return (
        <div className="modal-overlay">
            <br></br><br></br>
            <div className="modal-content">
                <img src={character.image} alt={character.name} />
                <h2>{character.name}</h2>
                <p>Especie: {character.species}</p>
                <p>Estado: {character.status}</p>
                <p>Género: {character.gender}</p>
                <p>Lugar de origen: {character.origin.name}</p>
                <p>Última ubicación: {character.location.name}</p>
                <p>Primer episodio: {firstEpisode.name}</p>
                <p>Temporada y Episodio: {firstEpisode.episode}</p>

                <button onClick={onClose} className="close-button">Cerrar</button>
            </div>
        </div>
    );
};

export default CharacterDetailModal;
