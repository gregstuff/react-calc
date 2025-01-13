import { CalculatorState } from "./CalculatorSlice";

type Props = {
    state : CalculatorState[]
}

function DisplayHistory( { state } : Props){

    var history : string = ' ';

    for(var i = state.length-1; i >= 0; --i) {
        history += `${state[i].value} `;
    }

    return (
        <div className="calc-display-history">
            <p className="calc-display-history-text"> { history } </p>
        </div>
    );
}

export default DisplayHistory;