import type { MonkeyReturn } from "./types.ts";
import runMonkeys from "./generator.ts";

// Web worker used to run the calculations on another thread.
// Makes the
self.onmessage = (event) => {
    const {numOfMonkeys, textChoice} = event.data;
    const result:MonkeyReturn = runMonkeys(numOfMonkeys, textChoice);

    self.postMessage(result);
}