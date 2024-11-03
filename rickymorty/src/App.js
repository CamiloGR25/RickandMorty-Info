import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import FavoritesPage from "./pages/FavoritesPage";
import CharactersPage from "./pages/CharactersPage";
import EpisodesPage from "./pages/EpisodesPage"
import LocationsPage from "./pages/LocationsPage";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<CharactersPage />} /> {/* Pagina principal de personajes */}
          <Route path="/episodios" element={<EpisodesPage />} /> {/* Pagina de episodios */}
          <Route path="/favoritos" element={<FavoritesPage />} /> {/* Pagina de favoritos */}
          <Route path="/ubicacion" element={<LocationsPage />} /> {/* Pagina de ubicación */}
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
