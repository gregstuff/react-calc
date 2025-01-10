import DisplayCurrent from "./DisplayCurrent";
import DisplayHistory from "./DisplayHistory";
import { useSub } from "../hooks/UseHooks";
import { CALCULATOR_BUTTON_EVENT } from "../lib/Constants";
import ButtonType from "../lib/ButtonType";

function Display(){

    useSub(CALCULATOR_BUTTON_EVENT, (data : ButtonType) => 
        {
            console.log(ButtonType[data]);
        });

    return (
        <div className='calc-display'>
            <div className='calc-display-text'>
                <DisplayHistory />
                <DisplayCurrent display="0" />
            </div>
        </div>
    );


}

export default Display;