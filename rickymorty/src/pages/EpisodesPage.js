import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import NavegationBar from "../components/NavegationBar";

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/episode`)
            .then((response) => setEpisodes(response.data.results))
            .catch((error) => console.error("Error fetching characters:", error));
    }, []);

    return (
        <div>
            <NavegationBar></NavegationBar>
            <br></br><br></br>
            <h1>Episodios</h1>
        </div>
    );
}

export default EpisodesPage;