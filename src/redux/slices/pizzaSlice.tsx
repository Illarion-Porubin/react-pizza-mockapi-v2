import { createSlice, createAsyncThunk, PayloadAction, Action } from "@reduxjs/toolkit";
import { PizzaTypes } from "../../types/types";
import axios from "../../axios";

export const fetchGetPizzas = createAsyncThunk<PizzaTypes[], undefined, {rejectValue: string}>(
  'pizzas/fetchGetPizzas', async (_, { rejectWithValue }) => {
      const {data} = await axios.get(`https://6612becb53b0d5d80f664b71.mockapi.io/items`);
      if (!data) {
        return rejectWithValue('fetchGetPizzas Error!');
      }
      return data;
});

export const fetchFilterPizzas = createAsyncThunk<PizzaTypes[], string, { rejectValue: string}>(
  "pizzas/fetchFilterPizzas", async (category: string, { rejectWithValue }) => {
      if(category){
        switch (category) {
          case '0': {
            const {data} = await axios.get(`https://6612becb53b0d5d80f664b71.mockapi.io/items?page=1&limit=${quantityProduct}`);
            return data;
          }
          default: {
            const {data} = await axios.get(`https://6612becb53b0d5d80f664b71.mockapi.io/items?limit=${quantityProduct}&category=${category}`);
            return data;
          }
        }
      } 
      else{
        return rejectWithValue('fetchFilterPizzas Error!');
      }
  }
)

export const fetchSearchPizzas = createAsyncThunk<PizzaTypes[], string, {rejectValue: string}>(
  "pizzas/fetchSearchPizzas", async (value: string, {rejectWithValue}) => {
      if(!value) {
        return rejectWithValue('fetchFilterPizzas Error!');
      }
      const {data} = await axios.get(`https://6612becb53b0d5d80f664b71.mockapi.io/items?title=${value}`);
      return data;
  } 
)

export const fetchSortPizzas = createAsyncThunk<PizzaTypes[], {sort: string, mark: string}, {rejectValue: string}>(
  "pizzas/fetchSortPizzas", async (value: {sort: string, mark: string}, {rejectWithValue}) => {
    console.log(value.mark);
      if(!value) {
        return rejectWithValue('fetchSortPizzas Error!');  
      }
      const {data} = await axios.get(`https://6612becb53b0d5d80f664b71.mockapi.io/items?sortBy=${value.sort}`);
      return value.mark === "LESS" ? data : data.reverse();
  } 
)

export const fetchPaginationPizzas = createAsyncThunk<PizzaTypes[], number, {rejectValue: string}>(
  'pizzas/fetchPaginationPizzas', async (page: number, { rejectWithValue }) => {
      const { data } = await axios.get(`https://6612becb53b0d5d80f664b71.mockapi.io/items?page=${page}&limit=${quantityProduct}`)
      if (!data) {
        return rejectWithValue('fetchPaginationPizzas Error!');
      }
      return data;
});

export const fetchPostPizza = createAsyncThunk<PizzaTypes, PizzaTypes, {rejectValue: string}>(
  "pizza/fetchPostPizza", async (newPizza, { rejectWithValue }) => {
      if(!newPizza){
        return rejectWithValue('fetchGetPizzas Error!');
      }
      const {data} = await axios.post('https://6612becb53b0d5d80f664b71.mockapi.io/items', newPizza);
      return data;
  }
)

export const fetchDeletePizza = createAsyncThunk<PizzaTypes, number, {rejectValue: string}>(
  "pizza/fetchDeletePizza", async (id: number, { rejectWithValue }) => {
      if(!id){
        return rejectWithValue('fetchDeletePizza Error!');
      }
      const {data} = await axios.delete(`https://6612becb53b0d5d80f664b71.mockapi.io/id=${id}`);
      return data;
  }
)

const quantityProduct  = 8;

export type PizzaState = {
  pages : number,
  pizzas: PizzaTypes[] | [],
  isLoading: 'idle' | 'loading' | 'loaded' | 'error',
  error: null | string,
};

const initialState: PizzaState = {
  pages: 0,
  pizzas: [],
  isLoading: 'idle',
  error: null,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.pages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    ///fetchGetPizzas
    .addCase(fetchGetPizzas.pending, (state) => {
      state.pizzas = [];
      state.isLoading = 'loading';
    })
    .addCase(fetchGetPizzas.fulfilled, (state, action) => {
      state.pages = Math.round(action.payload.length / quantityProduct) || 0;
      state.pizzas = action.payload;
      state.isLoading = 'loaded';
    })
    .addCase(fetchGetPizzas.rejected, (state) => {
      state.pizzas = [];
      state.isLoading = 'error';
    })
     ///fetchFilterPizzas
    .addCase(fetchFilterPizzas.pending, (state) => {
      state.pizzas = [];
      state.isLoading = 'loading';
    })
    .addCase(fetchFilterPizzas.fulfilled, (state, action) => {
      state.pages = Math.round(action.payload.length / quantityProduct) || 0;
      state.pizzas = action.payload; 
      state.isLoading = 'loaded';
    })
    .addCase(fetchFilterPizzas.rejected, (state) => {
      state.pizzas = [];
      state.isLoading = 'error';
    })
    //fetchSearchPizzas
    .addCase(fetchSearchPizzas.pending, (state) => {
      state.pizzas = [];
      state.isLoading = 'loading';
    })
    .addCase(fetchSearchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload; 
      state.isLoading = 'loaded';
    })
    .addCase(fetchSearchPizzas.rejected, (state) => {
      state.pizzas = [];
      state.isLoading = 'error';
    })
    ///fetchSortPizzas
    .addCase(fetchSortPizzas.pending, (state) => {
      state.pizzas = [];
      state.isLoading = 'loading';
    })
    .addCase(fetchSortPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload; 
      state.isLoading = 'loaded';
    })
    .addCase(fetchSortPizzas.rejected, (state) => {
      state.pizzas = [];
      state.isLoading = 'error';
    })
    ///fetchPaginationPizzas
    .addCase(fetchPaginationPizzas.pending, (state) => {
      state.pizzas = [];
      state.isLoading = 'loading';
    })
    .addCase(fetchPaginationPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload; 
      state.isLoading = 'loaded';
    })
    .addCase(fetchPaginationPizzas.rejected, (state) => {
      state.pizzas = [];
      state.isLoading = 'error';
    })
    .addMatcher(isError, (state, action: PayloadAction<string>) => {
      state.error = action.type;
      state.isLoading = "error"
    })
  }
});


export default pizzaSlice.reducer;

function isError(action: Action) {
  return action.type.endsWith('rejected');
}