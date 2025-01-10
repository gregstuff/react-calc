import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonType from "../lib/ButtonType";
import { 
    fa0, fa1, fa2, fa3, 
    fa4, fa5, fa6, fa7, 
    fa8, fa9, faAdd, 
    faSubtract, faEquals, 
    faPlusMinus, faMultiply,
    faO, faE, faC, faDivide,
    faDeleteLeft, IconDefinition
} from "@fortawesome/free-solid-svg-icons";


type Props = {
  type: ButtonType;
};

type ButtonData = {
    icon : IconDefinition[],
    className?: string
}

function Button( { type } : Props){

    let buttonData : ButtonData;
    var lgBackground : string = 'lg-background';

    switch(type) {
        case ButtonType.ONE:
            buttonData = {
                icon : [fa1],
            }
            break;
        case ButtonType.TWO:
            buttonData = {
                icon : [fa2],
            }
            break;
        case ButtonType.THREE:
            buttonData = {
                icon : [fa3],
            }
            break;
        case ButtonType.FOUR:
            buttonData = {
                icon : [fa4],
            }
            break;
        case ButtonType.FIVE:
            buttonData = {
                icon : [fa5],
            }
            break;
        case ButtonType.SIX:
            buttonData = {
                icon : [fa6],
            }
            break;
        case ButtonType.SEVEN:
            buttonData = {
                icon : [fa7],
            }
            break;
        case ButtonType.EIGHT:
            buttonData = {
                icon : [fa8],
            }
            break;
        case ButtonType.NINE:
            buttonData = {
                icon : [fa9],
            }
            break;
        case ButtonType.ZERO:
            buttonData = {
                icon : [fa0],
            }
            break;
        case ButtonType.ADD:
            buttonData = {
                icon : [faAdd],
                className: lgBackground
            }
            break;
        case ButtonType.SUBTRACT:
            buttonData = {
                icon : [faSubtract],
                className : lgBackground
            }
            break;
        case ButtonType.PLUSMINUS:
            buttonData = {
                icon : [faPlusMinus],
                className : lgBackground
            }
            break;
        case ButtonType.EQUALS:
            buttonData = {
                icon : [faEquals],
                className : lgBackground
            }
            break;
        case ButtonType.MULTIPLY:
            buttonData = {
                icon : [faMultiply],
                className : lgBackground
            }
            break;
        case ButtonType.PERIOD:
            buttonData = {
                icon : [faO],
                className : lgBackground
            }
            break;
        case ButtonType.CLEAR:
            buttonData = {
                icon : [faC],
                className : lgBackground
            }
            break;
        case ButtonType.CLEAR_ENTRY:
            buttonData = {
                icon : [faC, faE],
                className : lgBackground
            }
            break;
        case ButtonType.DELETE_LEFT:
            buttonData = {
                icon : [faDeleteLeft],
                className : lgBackground
            }
            break;
        case ButtonType.DIVIDE:
            buttonData = {
                icon : [faDivide],
                className : lgBackground
            }
            break;
        default:
            buttonData = {
                icon : [fa0],
                className : lgBackground
            }
            break;
    }


    return( 
    <>
        <button className= { `calc-button ${buttonData.className}` } >
            {
                buttonData.icon.map(i => <FontAwesomeIcon icon={i} />)
            }
        </button>
    </>
    );
}

export default Button; 