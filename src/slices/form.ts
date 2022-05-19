import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Form } from '../interface';

const initialState: Form = {
  id: 0,
  user: '',
  title: '',
  body: '',
  date: ''
};

export const form = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // form 값 변경 및 리셋
    setFormSlice: (state, action: PayloadAction<Form>) => {
      state = action.payload;
      return state;
    }
  }
});

export const { setFormSlice } = form.actions;

export default form.reducer;
