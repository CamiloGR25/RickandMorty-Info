import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlice";
import "../styles/CharactersPage.css";

const CharacterCard = ({ character, onInfo }) => {
    const dispatch = useDispatch();
    const isFavorite = useSelector((state) =>
        state.favorites.some((fav) => fav.id === character.id)
    );

    const handleFavoriteToggle = (e) => {
        e.stopPropagation(); // Evitar que el clic se propague al contenedor de la tarjeta
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
            <button onClick={handleFavoriteToggle} className={isFavorite ? "favorite-button clicked" : "favorite-button"}>
                {isFavorite ? "Eliminar de Favoritos" : "Añadir a Favoritos"}
            </button>
            <button onClick={() => onInfo(character)} className="info-button">
                Más Información
            </button>
        </div>
    );
};

export default CharacterCard;
