import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers"; // importacion del reducer raiz

//guardar la persistencia de favoritos:
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["favorites"], // persiste solo favoritos
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor };
