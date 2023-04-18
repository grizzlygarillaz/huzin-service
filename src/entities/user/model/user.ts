import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthThunk } from '@processes/auth';
import { User } from '@entities/user';

export const emptyUserState: User = {
  id: 0,
  name: '',
  login: '',
  email: '',
  created_at: '',
  updated_at: '',
};

export const userModel = createSlice({
  initialState: emptyUserState,
  name: '@@USER',
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AuthThunk.getUser.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(AuthThunk.signIn.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(AuthThunk.logout.fulfilled, (state, { payload }) => {
        return payload;
      });
  },
});

export const { setUser } = userModel.actions;
