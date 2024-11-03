import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import NavegationBar from "../components/NavegationBar";
import "../styles/LocationsPages.css";

const EpisodesPage = () => {
    const [locations, setLocations] = useState([]);

    const [pageLocation, setPageLocation] = useState(() => {
        const savedPageLocation = localStorage.getItem('currentPageLocation');
        return savedPageLocation ? parseInt(savedPageLocation, 10) : 1; //usar la pagina uno si no hay guardadas en localstorage
    });

    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/location/?page=${pageLocation}`)
            .then((response) => setLocations(response.data.results))
            .catch((error) => console.error("Error locations:", error));
    }, [pageLocation]);

    const nextPageLocation = () => {
        setPageLocation(prevPageLocation => {
            const newPageLocation = prevPageLocation + 1;
            localStorage.setItem('currentPageLocation', newPageLocation); // Guardar en localstorage
            return newPageLocation;
        });
    };

    const previousPageLocation = () => {
        setPageLocation(prevPageLocation => {
            const newPageLocation = prevPageLocation - 1;
            localStorage.setItem('currentPageLocation', newPageLocation); // Guardar en localstorage
            return newPageLocation;
        });
    };

    return (
        <div>
            <NavegationBar></NavegationBar>
            <br></br><br></br>
            <h1>Ubicaciones</h1>
            <h2>Página: {pageLocation}</h2>
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
            <center>
                <button className="button" onClick={previousPageLocation} disabled={pageLocation === 1}>Anterior</button>
                <button className="button" onClick={nextPageLocation} disabled={pageLocation === 7}>Siguiente</button>
            </center>
        </div>
    );
}

export default EpisodesPage;