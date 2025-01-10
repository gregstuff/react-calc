import DisplayCurrent from "./DisplayCurrent";
import DisplayHistory from "./DisplayHistory";

function Display(){
    return (
        <div className='calc-display'>
            <div className='calc-display-text'>
                <DisplayHistory />
                <DisplayCurrent />
            </div>
        </div>
    );
}

export default Display;