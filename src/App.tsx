import Title from "./comps/Title.tsx"
import Menu from "./comps/Menu.tsx"
import Loading from "./comps/Loading.tsx";
import FinishScreen from "./comps/FinishScreen.tsx";
import "./styles/App.css"
import { useState } from "react";
import type { AppState, MonkeyReturn } from "./types.ts";
import runMonkeys from "./generator.ts";


// Helper function to create a mandatory 5 second delay between runs
function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function App() {

    /*
    state used to handle switching between the differennt displays
    results used to get the best monkey and best sentence from the calculations
    numOfMonkeys used to keep track of inputed number from user
    textChoice used to keep track of which text the user is running
    */
    const [state, setState] = useState<AppState>(0);
    const [results, setResults] = useState<MonkeyReturn|null>(null);
    const [numOfMonkeys, setNumOfMonkeys] = useState<number>(1);
    const [textChoice, setTextChoice] = useState<number>(0);

    // Function runs the monkey calculations with the numOfMonkeys and
    // textChoice from the user, and returns it to results for end screen
    const handleRun = async () => {

        // Show loading screen and start calculation timer
        setState(1);
        const start = Date.now();

        // Make those monkeys type
        const result:MonkeyReturn = await runMonkeys(numOfMonkeys ,textChoice);

        // If the calculation takes less than 5 seconds, make the app wait
        // until 5 seconds has passed, then show the results on end page
        const elapsed = Date.now() - start;
        const remaining = 5000 - elapsed;
        if (remaining > 0) {
            await sleep (remaining);
        }
        setResults(result);
        setState(2);
    }

    // Function used entirely to return to menu from end screen
    const handleMenu = async () => {
        setState(0);
    }

    // Conditional rendering of the app
    // Menu screen display
    if (state == 0) { 
        return (
            <div className="start-screen">
                <div className="title-div">
                    <Title></Title>
                </div>
                <div className="menu-container">
                    <Menu
                    numOfMonkeys={numOfMonkeys}
                    setNumOfMonkeys={setNumOfMonkeys}
                    textChoice={textChoice}
                    setTextChoice={setTextChoice}
                    onStart={handleRun}
                    ></Menu>
                </div>    
            </div>
            );
        };
    // Loading screen display
    if (state == 1) {
        return (
            <div className="loading-screen">
                <Loading></Loading>
            </div>
            );
        };
    // Finish screen display
    if (state == 2) {
        return (
            <div className="finish-screen">
                <FinishScreen 
                results={results}
                onStart={handleRun}
                onFinish={handleMenu}></FinishScreen>
            </div>
        )
    }    
}

export default App