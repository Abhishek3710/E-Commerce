import { createSlice } from "@reduxjs/toolkit";
import { ProductParams } from "../../app/models/productParams";

const initialState: ProductParams = {
  pageNumber: 1,
  pageSize: 8,
  types: [],
  brands: [],
  orderBy: "name",
  searchTerm: "",
};

export const catalogSlice = createSlice({
  name: "catalogSlice",
  initialState,
  reducers: {
    setpageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setpageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
      state.pageNumber = 1;
    },
    setTypes: (state, action) => {
      state.types = action.payload;
      state.pageNumber = 1;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
      state.pageNumber = 1;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.pageNumber = 1;
    },
    resetParams: () => {
      return initialState;
    },
  },
});

export const {setpageNumber,setpageSize, setOrderBy, setBrands, setTypes, setSearchTerm, resetParams}= catalogSlice.actions;
