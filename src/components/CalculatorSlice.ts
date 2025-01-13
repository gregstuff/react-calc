import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ButtonType } from "../lib/ButtonType";
import { RootState } from "../lib/Store";

export interface CalculatorState {
    value: string,
    isOperation?: boolean
}

const initialState : CalculatorState[] = [
    {
        value : '',
    }
]

export const selectState = (state: RootState) => state.calculator;

export const calculatorSlice = createSlice({
    name : 'calculator',
    initialState,
    reducers : {
        appendDigit : (state, action : PayloadAction<ButtonType>) => {
            let currentState = state[0];

            if(currentState.isOperation) {
                let newValue = {
                    value : action.payload.toString()
                };
                state.unshift(newValue);
            }
            else {
                let isZero = currentState.value.length == 1
                    && currentState.value == ButtonType.ZERO;

                currentState.value = isZero ? action.payload.toString() : currentState.value + action.payload.toString();
            }
        },
        appendPeriod : (state, action : PayloadAction<ButtonType>) => {
            let currentState = state[0];

            if(currentState.value 
                && !currentState.value.includes(action.payload)
                && currentState.value !== ButtonType.ZERO){
                currentState.value += action.payload;
            }
        },
        appendOperation : (state, action : PayloadAction<ButtonType>) => {
            let currentOperation = state[0];

            if(currentOperation.value.length == 0 || currentOperation.value == ButtonType.ZERO) return;

            if(currentOperation.isOperation) {
                currentOperation.value = action.payload;
            }
            else {
                let newVal : CalculatorState = {
                    value : action.payload,
                    isOperation : true
                };
                let newBuffer : CalculatorState = {
                    value : ''
                }
                state.unshift(newVal, newBuffer);
            }
        },
        resolve : (state, action : PayloadAction<ButtonType>) => {

            console.log(state.length);
            console.log(...state);

            if(state.length < 3) return;            
            
            let curr : number = 0;
            let currOperation : string = '';

            for(var i = state.length - 1; i >= 0; --i) {
                
                let currentValue = state[i];

                if(currentValue.value.trim().length == 0) continue;

                if(currentValue.isOperation){
                    currOperation = currentValue.value;
                    continue;
                }

                let isNegative = currentValue.value.includes(ButtonType.SUBTRACT);
                let currentNumber = isNegative 
                    ? Number.parseFloat(currentValue.value.substring(1,currentValue.value.length)) * -1 : Number.parseFloat(currentValue.value);

                console.log(`current number ${curr}`);
                console.log(`new value ${currentValue.value} - parsed ${currentNumber}`);

                switch(currOperation){
                    case '':
                        curr += currentNumber;
                        break;
                    case ButtonType.ADD:
                        curr += currentNumber;
                        break;
                    case ButtonType.SUBTRACT:
                        curr -= currentNumber;
                        break;
                    case ButtonType.MULTIPLY:
                        curr *= currentNumber;
                        break;
                    case ButtonType.DIVIDE:
                        curr /= currentNumber;
                        break;
                }
            }

            return [ { value : curr.toString() } ];

        },
        clear : (state, action : PayloadAction<ButtonType>) => {
            return initialState;
        },
        clearEntry : (state, action : PayloadAction<ButtonType>) => {
            let newValue : CalculatorState = {
                value : ''
            };
            state.shift();
            state.unshift(newValue);
        },
        deleteLeft : (state, action : PayloadAction<ButtonType>) => {
            let currentState = state[0];

            if(!currentState.value){
                return state;
            }
            else{
                var newNumberValue = currentState.value.length > 1 
                    ? currentState.value.substring(0,currentState.value.length-1) : '';
                currentState.value = newNumberValue;
            }
        },
        plusMinus : (state, action : PayloadAction<ButtonType>) => {
            let currentState = state[0];

            if(currentState.isOperation 
                || currentState.value.length == 0 
                || currentState.value === ButtonType.ZERO) return;

            if(currentState.value.includes(ButtonType.SUBTRACT)){
                currentState.value = currentState.value.replace(ButtonType.SUBTRACT, '');
            }
            else{
                currentState.value = ButtonType.SUBTRACT + currentState.value;
            }
        }
    }
})

export const { appendOperation, appendDigit, appendPeriod, clear, clearEntry, deleteLeft, plusMinus, resolve } = calculatorSlice.actions;

export default calculatorSlice.reducer;

