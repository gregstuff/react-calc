import ButtonType from "../lib/ButtonType";
import Button from "./Button";

function ButtonPanel(){
    return( 
    <>
        <div className="calc-button-panel">
            <div className="calc-button-panel-row">
                <Button type={ButtonType.CLEAR_ENTRY} />
                <Button type={ButtonType.CLEAR} />
                <Button type={ButtonType.DELETE_LEFT} />
                <Button type={ButtonType.DIVIDE} />
            </div>
            <div className="calc-button-panel-row">
                <Button type={ButtonType.ONE} />
                <Button type={ButtonType.TWO} />
                <Button type={ButtonType.THREE} />
                <Button type={ButtonType.MULTIPLY} />
            </div>
            <div className="calc-button-panel-row">
                <Button type={ButtonType.FOUR} />
                <Button type={ButtonType.FIVE} />
                <Button type={ButtonType.SIX} />
                <Button type={ButtonType.SUBTRACT} />
            </div>
            <div className="calc-button-panel-row">
                <Button type={ButtonType.SEVEN} />
                <Button type={ButtonType.EIGHT} />
                <Button type={ButtonType.NINE} />
                <Button type={ButtonType.ADD} />
            </div>
            <div className="calc-button-panel-row">
                <Button type={ButtonType.PLUSMINUS} />
                <Button type={ButtonType.ZERO} />
                <Button type={ButtonType.PERIOD} />
                <Button type={ButtonType.EQUALS} />
            </div>
         </div>
    </>
    );
}

export default ButtonPanel;