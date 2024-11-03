import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import NavegationBar from "../components/NavegationBar";
import "../styles/EpisodesPages.css";

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);

    const [pageEpisodes, setPageEpisodes] = useState(() => {
        const savedPageEpisodes = localStorage.getItem('currentPageEpisodes');
        return savedPageEpisodes ? parseInt(savedPageEpisodes, 10) : 1; //usar la pagina uno si no hay guardadas en localstorage
    });

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/episode/?page=${pageEpisodes}`)
            .then((response) => setEpisodes(response.data.results))
            .catch((error) => console.error("Error episodes:", error));
    }, [pageEpisodes]);

    const nextPageEpisodes = () => {
        setPageEpisodes(prevPageEpisodes => {
            const newPageEpisodes = prevPageEpisodes + 1;
            localStorage.setItem('currentPageEpisodes', newPageEpisodes); // Guardar en localstorage
            return newPageEpisodes;
        });
    };

    const previousPageEpisodes = () => {
        setPageEpisodes(prevPageEpisodes => {
            const newPageEpisodes = prevPageEpisodes - 1;
            localStorage.setItem('currentPageEpisodes', newPageEpisodes); // Guardar en localstorage
            return newPageEpisodes;
        });
    };

    return (
        <div>
            <NavegationBar></NavegationBar>
            <br></br><br></br>
            <h1>Episodios</h1>
            <h2>Página: {pageEpisodes}</h2>
            <div className="episodes-container">
                {episodes.map((episode) => (
                    <div key={episode.id} className="episode-card">
                        <h2 className="episode-name">{episode.name}</h2>
                        <p><strong>Fecha de emisión:</strong> {episode.air_date}</p>
                        <p><strong>Episodio:</strong> {episode.episode}</p>
                    </div>
                ))}
            </div>
            <center>
                <button className="button" onClick={previousPageEpisodes} disabled={pageEpisodes === 1}>Anterior</button>
                <button className="button" onClick={nextPageEpisodes} disabled={pageEpisodes === 3}>Siguiente</button>
            </center>

        </div>
    );
}

export default EpisodesPage;