import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  amount: 1,
}

export const getUserAccount = createAsyncThunk(
  'account/getUser',
  async(userId, thunkAPI)=>{
    const {data} = await axios.get(`http://localhost:8000/account/${userId}`)
    return data.amount;
  }
)



export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1
    },
    decrement: (state) => {
      if(state.amount <=0){
        alert("Amount balance cannot be in negative");
        return {amount: state.amount, error: "amount cannot be less than 0"};
      }else {
      state.amount -= 1
      }
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
    decrementByAmount: (state, action) =>{
      if(state.amount - action.payload < 0){
        alert("Account balance is insufficient to deduct. Please choose a different amount to process");
        return {amount: state.amount, error: "Account balance is insufficient to deduct. Please choose a different amount to process"};
        
      } 
        state.amount -= action.payload
      
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(getUserAccount.fulfilled, (state,action) =>{
        state.amount = action.payload;
        state.pending = false;
    })
    .addCase(getUserAccount.pending, (state,action) =>{
      state.pending = true;
  })
  .addCase(getUserAccount.rejected, (state,action) =>{
    state.error = action.error;
})
    
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } = accountSlice.actions

export default accountSlice.reducer