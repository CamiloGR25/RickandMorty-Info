import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import NavegationBar from "../components/NavegationBar";
import "../styles/LocationsPages.css";

const EpisodesPage = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/location`)
            .then((response) => setLocations(response.data.results))
            .catch((error) => console.error("Error locations:", error));
    }, []);

    return (
        <div>
            <NavegationBar></NavegationBar>
            <br></br><br></br>
            <h1>Ubicaciones</h1>
            <div className="locations-container">
                {locations.map((location) => (
                    <div key={locations.id} className="locations-card">
                        <h2 className="locations-name">{location.name}</h2>
                        <p><strong>Tipo:</strong> {location.type}</p>
                        <p><strong>Dimensión:</strong> {location.dimension}</p>
                        <p><strong>Residentes:</strong> {location.residents.length}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EpisodesPage;