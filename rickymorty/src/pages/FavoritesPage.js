import React from "react";
import { useSelector } from "react-redux";
import CharacterCard from "../components/CharacterCard";
import NavegationBar from "../components/NavegationBar";
import "../styles/FavoritesPages.css";

const FavoritesPage = () => {
    const favorites = useSelector((state) => state.favorites);

    return (
        <div>
            <NavegationBar></NavegationBar>
            <br></br><br></br>
            <div className="title-container">
                <h1>Favoritos</h1>
                {favorites.length === 0 && <p id="P-favorite">No tienes favoritos seleccionados.</p>}
            </div>
            <div className="characters-container">
                {favorites.length > 0 && favorites.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>

    );
};

export default FavoritesPage;
