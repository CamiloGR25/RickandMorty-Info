import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import NavegationBar from "../components/NavegationBar";
import "../styles/EpisodesPages.css";

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/episode`)
            .then((response) => setEpisodes(response.data.results))
            .catch((error) => console.error("Error episodes:", error));
    }, []);

    return (
        <div>
            <NavegationBar></NavegationBar>
            <br></br><br></br>
            <h1>Episodios</h1>
            <div className="episodes-container">
                {episodes.map((episode) => (
                    <div key={episode.id} className="episode-card">
                        <h2 className="episode-name">{episode.name}</h2>
                        <p><strong>Fecha de emisión:</strong> {episode.air_date}</p>
                        <p><strong>Episodio:</strong> {episode.episode}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EpisodesPage;