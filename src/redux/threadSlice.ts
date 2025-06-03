import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  threads: [
    { id: 1, name: "David" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "Leo" },
    { id: 4, name: "Emma" },
    { id: 5, name: "Carlos" },
  ],
};

const threadsSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    // No actions yet, just showing the data
  },
});

export default threadsSlice.reducer;