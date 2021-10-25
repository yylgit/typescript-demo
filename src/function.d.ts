declare function buildName(firstName: string, lastName?: string): string;
declare let result1: string;
declare let result3: string;
declare let suits: string[];
declare function pickCard(x: {
    suit: string;
    card: number;
}[]): number;
declare function pickCard(x: number): {
    suit: string;
    card: number;
};
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck, name: string): () => Card;
}
declare let deck: Deck;
declare let cardPicker: () => Card;
declare let pickedCard: Card;
