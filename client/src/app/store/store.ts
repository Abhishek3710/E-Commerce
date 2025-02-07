import { legacy_createStore } from "redux";
import counterReducer, { counterSlice } from "../../features/contact/counterReducer";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/catalogApi";
import { uiSlice } from "../layout/uiSlice";

export function configureTheStore(){
    return legacy_createStore(counterReducer);
}

export const store = configureStore({
    reducer:{
        [catalogApi.reducerPath] : catalogApi.reducer,
        counter: counterSlice.reducer,
        ui: uiSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(catalogApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()