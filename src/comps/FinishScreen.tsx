import type { FinishingScreenProp } from "../types"


function FinishScreen({results, onStart, onFinish}:FinishingScreenProp) {

    if (!results) {
        return <div>No results yet</div>;
    }
    return (
        <>
            <div>Finished
                <div>Best monkey was {results.bestMonkey} and their sentence was {results.longestSentence}</div>
            </div>

            <button onClick={onStart}>Go again</button>
            <button onClick={onFinish}>Return home</button>
        </>
    )
}
export default FinishScreen