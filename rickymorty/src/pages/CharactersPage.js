import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import CharacterCard from "../components/CharacterCard";
import NavegationBar from "../components/NavegationBar";

const CharactersPage = () => {
    const [characters, setCharacters] = useState([]);
    //guardar y convertir los datos de la api en characters
    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/character`)
            .then((response) => setCharacters(response.data.results))
            .catch((error) => console.error("Error fetching characters:", error));
    }, []);

    //mostrar la pagina con los datos de characterCard
    return (
        <div>
            <NavegationBar></NavegationBar>
            <br></br><br></br>
            <h1>Personajes de Rick and Morty</h1>
            <div className="characters-container">
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};

export default CharactersPage;
