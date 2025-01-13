import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from '../components/CalculatorSlice'

export const store = configureStore({
  reducer: {
    calculator : calculatorReducer 
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>