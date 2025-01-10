import DisplayCurrent from "./DisplayCurrent";
import DisplayHistory from "./DisplayHistory";
import { useSub } from "../hooks/PubSub";
import { CALCULATOR_BUTTON_EVENT } from "../lib/Constants";
import ButtonType from "../lib/ButtonType";
import { useState } from "react";

function Display(){

    const [ currentDisplay, setCurrentDisplay ] = useState('0');

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