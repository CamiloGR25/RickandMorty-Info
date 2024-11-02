import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import CharacterCard from "../components/CharacterCard";
import NavegationBar from "../components/NavegationBar";
import CharacterDetailModal from "../components/CharacterDetailModal";

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null); // Estado para el personaje seleccionado

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/character`)
            .then((response) => setCharacters(response.data.results))
            .catch((error) => console.error("Error characters:", error));
    }, []);

    const handleShowInfo = (character) => {
        setSelectedCharacter(character); // Actualizar el personaje seleccionado para el modal
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null); // Cerrar modal al resetear el personaje seleccionado
    };

    return (
        <div>
            <NavegationBar />
            <br></br><br></br>
            <h1>Personajes de Rick and Morty</h1>
            <div className="characters-container">
                {characters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                        onInfo={handleShowInfo} // Pasar función de mostrar información
                    />
                ))}
            </div>
            {selectedCharacter && (
                <CharacterDetailModal
                    character={selectedCharacter}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default CharactersPage;
