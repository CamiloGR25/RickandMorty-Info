import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import CharacterCard from "./CharacterCard";

//cargar los datos de la API
const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get(`${API_BASE_URL}/character`)
            .then(response => setCharacters(response.data.results))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {characters.map(character => (
                <CharacterCard key={character.id} character={character} />
            ))}
        </div>
    );
};

export default CharacterList;
