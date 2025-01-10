import Display from './Display';
import ButtonPanel from './ButtonPanel';

function CalculatorBody(){
    return (
        <div className="calc-body">
            <Display />
            <ButtonPanel />
        </div>
    )
}

export default CalculatorBody;