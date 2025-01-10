import { useState } from "react";

type Props = {
    display : string;
};

function DisplayCurrent( { display } : Props) {

    return (
        <div className="calc-display-current">
            <p className="calc-display-current-text"> { display } </p>
        </div>
    );
}

export default DisplayCurrent;