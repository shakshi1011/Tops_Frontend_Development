import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: [],
  reducers: {
    addItem: (state, action) => { state.push({ id: Date.now(), text: action.payload }); },
    deleteItem: (state, action) => { return state.filter((item) => item.id !== action.payload); },
    updateItem: (state, action) => {
      const { id, newText } = action.payload;
      const item = state.find((item) => item.id === id);
      if (item) item.text = newText;
    },
  },
});

export const { addItem, deleteItem, updateItem } = crudSlice.actions;
export default crudSlice.reducer;
