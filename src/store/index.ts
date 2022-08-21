import { githubReducer } from './github/github.slice';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githunApi } from "./github/github.api";

export const store = configureStore({
    reducer:{
        [githunApi.reducerPath]: githunApi.reducer,
        github: githubReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githunApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>