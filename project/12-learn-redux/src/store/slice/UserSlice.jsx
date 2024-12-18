import { createSlice } from "@reduxjs/toolkit";
import { removeAllUser } from "../action";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },

    removeUser(state, action) {
      state.splice(action.payload, 1);
    },

    // removeAllUser(state, action) {
    //   return [];
    // },
  },

  extraReducers(builder) {
    builder.addCase(removeAllUser, () => {
      return [];
    });
  },
});

// console.log(UserSlice);

export const { addUser, removeUser,  } = UserSlice.actions;
export default UserSlice.reducer;


