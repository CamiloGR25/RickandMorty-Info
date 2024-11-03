import React, { useState } from "react";
import { useSelector } from "react-redux";
import CharacterCard from "../components/CharacterCard";
import NavegationBar from "../components/NavegationBar";
import CharacterDetailModal from "../components/CharacterDetailModal";
import axios from "axios";
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

    //enviar datos a la BD
    const saveAllFavorites = async () => {
        try {
            for (const character of favorites) {
                await axios.post("http://localhost:3001/favorites", character);
            }
            alert("Datos enviados a la base de datos exitosamente");
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            alert("Hubo un error al enviar los datos a la base de datos");
        }
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
            <center>
                <button onClick={saveAllFavorites} className="button-save">GUARDAR DATOS EN LA BD</button>
            </center>

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
