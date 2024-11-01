import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlice";
import "../styles/CharactersPage.css";

const CharacterCard = ({ character }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector((state) =>
        state.favorites.some((fav) => fav.id === character.id)
    );

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFavorite(character));
        } else {
            dispatch(addFavorite(character));
        }
    };

    return (
        <div className="character-card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Especie: {character.species}</p>
            <p>Estado: {character.status}</p>
            <p>Género: {character.gender}</p>
            <p>Origen: {character.origin.name}</p>
            <p>Ubicación: {character.location.name}</p>
            <button onClick={handleFavoriteToggle} className={isFavorite ? "favorite-button clicked" : "favorite-button"}>
                {isFavorite ? "Eliminar de Favoritos" : "Añadir a Favoritos"}
            </button>
        </div>
    );
};

export default CharacterCard;
