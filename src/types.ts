import type { Dispatch, SetStateAction } from "react";

export type AppState = 0|1|2;

export interface MenuProp {
    numOfMonkeys:number,
    setNumOfMonkeys:Dispatch<SetStateAction<number>>,
    textChoice:number,
    setTextChoice:Dispatch<SetStateAction<number>>,
    onStart: () => void;
};

export interface MonkeyReturn {
    bestMonkey:number,
    longestSentence:string;
}

export interface FinishingScreenProp {
    results: MonkeyReturn|null,
    onStart: () => void,
    onFinish: ()=> void;
}