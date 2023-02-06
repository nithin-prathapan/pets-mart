import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: [],
  reducers: {
    createUser: (state, action) => {
      state = action.payload;
    },
  },
});
export default userReducer;
