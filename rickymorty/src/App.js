// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import FavoritesPage from "./pages/FavoritesPage";
import CharactersPage from "./pages/CharactersPage";
import EpisodesPage from "./pages/EpisodesPage"

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<CharactersPage />} /> {/* Pagina principal de personajes */}
          <Route path="/personajes" element={<CharactersPage />} /> {/* Pagina principal de personajes */}
          <Route path="/episodios" element={<EpisodesPage />} /> {/* Pagina de episodios */}
          <Route path="/favoritos" element={<FavoritesPage />} /> {/* Pagina de favoritos */}
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
