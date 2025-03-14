import { legacy_createStore } from "redux";
import counterReducer, { counterSlice } from "../../features/contact/counterReducer";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/catalogApi";
import { uiSlice } from "../layout/uiSlice";
import { errorApi } from "../../features/about/errorApi";
import { basketApi } from "../../features/basket/basketApi";
import { catalogSlice } from "../../features/catalog/catalogSlice";
import { accountApi } from "../../features/account/accountApi";

export function configureTheStore(){
    return legacy_createStore(counterReducer);
}

export const store = configureStore({
    reducer:{
        [catalogApi.reducerPath] : catalogApi.reducer,
        [errorApi.reducerPath] : errorApi.reducer,
        [basketApi.reducerPath] : basketApi.reducer,
        [accountApi.reducerPath] : accountApi.reducer,
        counter: counterSlice.reducer,
        ui: uiSlice.reducer,
        catalog: catalogSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(catalogApi.middleware, errorApi.middleware, basketApi.middleware, accountApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()