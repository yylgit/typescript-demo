declare let result1: any;
declare let result3: any;
declare let suits: string[];
declare function pickCard(x: {
    suit: string;
    card: number;
}[]): number;
declare function pickCard(x: number): {
    suit: string;
    card: number;
};
declare let myDeck: {
    suit: string;
    card: number;
}[];
declare let pickedCard1: any;
declare let pickedCard2: number | {
    suit: string;
    card: number;
} | undefined;
