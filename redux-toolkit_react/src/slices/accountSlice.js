import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 1,
}

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
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } = accountSlice.actions

export default accountSlice.reducer