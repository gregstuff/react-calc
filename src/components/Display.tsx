import { useAppSelector } from "../lib/Hooks";
import DisplayCurrent from "./DisplayCurrent";
import DisplayHistory from "./DisplayHistory";
import { selectState } from "./CalculatorSlice";

function Display(){

    const calcState = useAppSelector(selectState);

    return (
        <div className='calc-display'>
            <div className='calc-display-text'>
                <DisplayHistory state = {calcState} />
                <DisplayCurrent state = {calcState} />
            </div>
        </div>
    );


}

export default Display;