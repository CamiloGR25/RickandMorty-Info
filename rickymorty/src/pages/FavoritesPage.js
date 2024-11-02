import React, { useState } from "react";
import { useSelector } from "react-redux";
import CharacterCard from "../components/CharacterCard";
import NavegationBar from "../components/NavegationBar";
import CharacterDetailModal from "../components/CharacterDetailModal";
import "../styles/FavoritesPages.css";

const FavoritesPage = () => {
    const favorites = useSelector((state) => state.favorites);

    const [selectedCharacter, setSelectedCharacter] = useState(null); // Estado para el personaje seleccionado

    const handleShowInfo = (character) => {
        setSelectedCharacter(character); // Actualizar el personaje seleccionado para el modal
    };

    const handleCloseModal = () => {
        setSelectedCharacter(null); // Cerrar el modal
    };

    return (
        <div>
            <NavegationBar />
            <br />
            <br />
            <div className="title-container">
                <h1>Favoritos</h1>
                {favorites.length === 0 && <p id="P-favorite">No tienes favoritos seleccionados.</p>}
            </div>
            <div className="characters-container">
                {favorites.length > 0 && favorites.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                        onInfo={handleShowInfo} // Pasar la función de mostrar información
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

export default FavoritesPage;
