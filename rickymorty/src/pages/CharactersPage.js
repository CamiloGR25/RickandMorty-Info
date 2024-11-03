import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import CharacterCard from "../components/CharacterCard";
import NavegationBar from "../components/NavegationBar";
import CharacterDetailModal from "../components/CharacterDetailModal";
import "../styles/EpisodesPages.css";

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null); // estado para el personaje seleccionado

    const [page, setPage] = useState(() => {
        const savedPage = localStorage.getItem('currentPage');
        return savedPage ? parseInt(savedPage, 10) : 1; //usar la pagina uno si no hay guardadas en localstorage
    });

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/character/?page=${page}`)
            .then((response) => setCharacters(response.data.results))
            .catch((error) => console.error("Error characters:", error));
    }, [[page]]);

    const nextPage = () => {
        setPage(prevPage => {
            const newPage = prevPage + 1;
            localStorage.setItem('currentPage', newPage); // Guardar en localstorage
            return newPage;
        });
    };

    const previousPage = () => {
        setPage(prevPage => {
            const newPage = prevPage - 1;
            localStorage.setItem('currentPage', newPage); // Guardar en localstorage
            return newPage;
        });
    };

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
            <h2>Página: {page}</h2>
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
            <center>
                <button className="button" onClick={previousPage} disabled={page === 1}>Anterior</button>
                <button className="button" onClick={nextPage} disabled={page === 42}>Siguiente</button>
            </center>
        </div>

    );
};

export default CharactersPage;
