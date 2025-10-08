import type { MonkeyReturn } from "./types";
// const URL = "https://www.random.org/integers/?num=1&min=0&max=99999&col=5&base=10&format=plain&rnd=new"
// const macbeth = "thetragedyofmacbeth";
// const raj = "romeoandjuliet";
// const hamlet = "thetragedyofhamlet"
const macbeth = "macbeth";
const raj = "romeoandjuliet";
const hamlet = "thetragedyofhamlet"
const ascii_lowercase = "abcdefghijklmnopqrstuvwxyz"

// Unused function
// let getSeed = async function (url: string): Promise<number> {
//     let res: Response = await fetch(url);
//     let seed: number = Number(res.text);
//     return seed;
// }
// let seed: number = getSeed(URL);

// Unused code related to getting a random seed. Not sure how well js
// pseudo random works yet



const runMonkeys = (numOfMonkeys: number, textOption:number):MonkeyReturn => {

    let longestSentence:string = "";
    let bestMonkey:number = 0;
    let text:string;

    // Use Macbeth
    if (textOption == 0) {
        text = macbeth;
    }
    // Use Romeo and Juilet 
    else if (textOption == 1) {
        text = raj;
    }
    // Use Hamlet 
    else {
        text = hamlet;
    }

    for (let x = 0; x < numOfMonkeys; x++) {

        let notBroken:boolean = true;
        let sentence:string = "";
        let i:number = 0;

        while(notBroken) {

            // Pick random number between 0 and 25 (26 characters)
            let random:number = Math.floor(Math.random() * 26);
            let letter:string = ascii_lowercase[random];

            // Possible efficiency gain, do this after 

            sentence = sentence + letter;
            // Current letter doesn't match the expected letter, sentence ends
            if (letter != text[i]) {
                notBroken = false;

                // If the monkey that just failed is the best monkey, then update
                // best sentence and best monkey
                if (i > longestSentence.length) {
                    longestSentence = sentence;
                    bestMonkey = x;
                }
            }
            else {
                i++;
            }
        }
    }
    const ret:MonkeyReturn = {bestMonkey, longestSentence};
    return ret;
}

export default runMonkeys;
