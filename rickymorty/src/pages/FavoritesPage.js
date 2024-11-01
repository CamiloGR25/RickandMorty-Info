import React from "react";
import { useSelector } from "react-redux";
import CharacterCard from "../components/CharacterCard";
import "../styles/CharactersPage.css";
const FavoritesPage = () => {
    const favorites = useSelector((state) => state.favorites);

    return (
        <div>
            <h2>Favoritos</h2>
            {favorites.length > 0 ? (
                favorites.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))
            ) : (
                <p>No tienes favoritos seleccionados.</p>
            )}
        </div>
    );
};

export default FavoritesPage;
