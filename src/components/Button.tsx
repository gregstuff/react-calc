import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonType } from "../lib/ButtonType";
import { 
    fa0, fa1, fa2, fa3, 
    fa4, fa5, fa6, fa7, 
    fa8, fa9, faAdd, 
    faSubtract, faEquals, 
    faPlusMinus, faMultiply,
    faO, faE, faC, faDivide,
    faDeleteLeft, IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { appendOperation, appendDigit, resolve, appendPeriod, clear, clearEntry, plusMinus, deleteLeft } from "./CalculatorSlice";
import { Action, ActionCreatorWithPayload } from "@reduxjs/toolkit";


type Props = {
  type: ButtonType;
};

type ButtonData = {
    icon : IconDefinition[],
    className?: string,
    operation: ActionCreatorWithPayload<ButtonType>
}

function Button( { type } : Props){

    let buttonData : ButtonData;
    const dispatch = useDispatch();
    var lgBackground : string = 'lg-background';

    switch(type) {
        case ButtonType.ONE:
            buttonData = {
                icon : [fa1],
                operation : appendDigit
            }
            break;
        case ButtonType.TWO:
            buttonData = {
                icon : [fa2],
                operation : appendDigit
            }
            break;
        case ButtonType.THREE:
            buttonData = {
                icon : [fa3],
                operation : appendDigit
            }
            break;
        case ButtonType.FOUR:
            buttonData = {
                icon : [fa4],
                operation : appendDigit
            }
            break;
        case ButtonType.FIVE:
            buttonData = {
                icon : [fa5],
                operation : appendDigit
            }
            break;
        case ButtonType.SIX:
            buttonData = {
                icon : [fa6],
                operation : appendDigit
            }
            break;
        case ButtonType.SEVEN:
            buttonData = {
                icon : [fa7],
                operation : appendDigit
            }
            break;
        case ButtonType.EIGHT:
            buttonData = {
                icon : [fa8],
                operation : appendDigit
            }
            break;
        case ButtonType.NINE:
            buttonData = {
                icon : [fa9],
                operation : appendDigit
            }
            break;
        case ButtonType.ZERO:
            buttonData = {
                icon : [fa0],
                operation : appendDigit
            }
            break;
        case ButtonType.ADD:
            buttonData = {
                icon : [faAdd],
                className: lgBackground,
                operation : appendOperation
            }
            break;
        case ButtonType.SUBTRACT:
            buttonData = {
                icon : [faSubtract],
                className : lgBackground,
                operation : appendOperation
            }
            break;
        case ButtonType.PLUSMINUS:
            buttonData = {
                icon : [faPlusMinus],
                className : lgBackground,
                operation : plusMinus
            }
            break;
        case ButtonType.EQUALS:
            buttonData = {
                icon : [faEquals],
                className : lgBackground,
                operation : resolve
            }
            break;
        case ButtonType.MULTIPLY:
            buttonData = {
                icon : [faMultiply],
                className : lgBackground,
                operation : appendOperation
            }
            break;
        case ButtonType.PERIOD:
            buttonData = {
                icon : [faO],
                className : lgBackground,
                operation : appendPeriod
            }
            break;
        case ButtonType.CLEAR:
            buttonData = {
                icon : [faC],
                className : lgBackground,
                operation : clear
            }
            break;
        case ButtonType.CLEAR_ENTRY:
            buttonData = {
                icon : [faC, faE],
                className : lgBackground,
                operation : clearEntry
            }
            break;
        case ButtonType.DELETE_LEFT:
            buttonData = {
                icon : [faDeleteLeft],
                className : lgBackground,
                operation : deleteLeft
            }
            break;
        case ButtonType.DIVIDE:
            buttonData = {
                icon : [faDivide],
                className : lgBackground,
                operation : appendOperation
            }
            break;
    }

    return ( 
    <>
        <button title = { type } type = 'button' 
            className = { `calc-button ${buttonData.className}` } onClick={ () => dispatch(buttonData.operation(type))}>
            {
                buttonData.icon.map(i => <FontAwesomeIcon icon={i} key={i.iconName} />)
            }
        </button>
    </>
    );
}

export default Button; 