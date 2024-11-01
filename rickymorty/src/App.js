// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import CharacterList from "./components/CharacterList";
import FavoritesPage from "./pages/FavoritesPage";
import CharactersPage from "./pages/CharactersPage";

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<CharactersPage />} /> {/* Página principal */}
          <Route path="/list" element={<CharacterList />} /> {/* Página de lista */}
          <Route path="/favorites" element={<FavoritesPage />} /> {/* Página de favoritos */}
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
