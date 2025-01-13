import { useAppSelector } from "../lib/Hooks";
import { CalculatorState, selectState } from "./CalculatorSlice"

type Props = {
    state : CalculatorState[]
}

function DisplayCurrent( { state } : Props ) {

    let numberValue : string = '';

    for(var i = 0; i < state.length; ++i) {
        if(!state[i].isOperation){
            numberValue = state[i].value;
            break;
        }
    }

    return (
        <div className="calc-display-current">
            <p className="calc-display-current-text"> 
                { numberValue ? numberValue : '0' }
            </p>
        </div>
    );
}

export default DisplayCurrent;