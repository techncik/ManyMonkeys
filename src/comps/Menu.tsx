import "./../styles/Menu.css"
import type { MenuProp, MonkeyReturn } from "../types.ts";

function Menu ({numOfMonkeys, setNumOfMonkeys, textChoice, setTextChoice, onStart}: MenuProp) {

    const handleClick0 = () => {
        // Should change apps text to Macbeth
        setTextChoice(0);
    }
    const handleClick1 = () => {
        // Should change apps text to Macbeth
        setTextChoice(1);
    }
    const handleClick2 = () => {
        // Should change apps text to Macbeth
        setTextChoice(2);
    }
    return (
        <>
            <div className="menu-div">
                <div className="monkey-num-text-div">
                    How many helpers does monkey need?
                </div>
                <div className="monkey-num-input-div">
                    <input
                        type="number"
                        value={numOfMonkeys}
                        onChange={(e) => setNumOfMonkeys(Number(e.target.value))}/>
                </div>
                <div className="text-choice-div">
                    Pick your Shakespeare Text
                </div>
                <div className="text-options-div">
                    <button onClick= {handleClick0} className="opt0">Macbeth</button>
                    <button onClick= {handleClick1} className="opt1">Romeo and Juliet</button>
                    <button onClick= {handleClick2} className="opt2">Hamlet</button>
                </div>
                <div className="start-button">
                    <button className="monkey-button" onClick={onStart}>
                        Go
                    </button>
                </div>
            </div>
        </>
    )
}
export default Menu