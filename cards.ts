// A UNO deck:
// 19 Red cards – 0 to 9
// 19 Blue cards – 0 to 9
// 19 Green cards – 0 to 9
// 19 Yellow cards – 0 to 9
// 8 Skip cards – two cards of each color
// 8 Reverse cards – two cards of each color
// 8 Draw cards – two cards of each color
// 8 Black cards – 4 wild cards and 4 Wild Draw 4 cards
// 4 Blank cards (can be used as replacements cards or as special cards that fit your house rules.). For original Uno, you can put them aside.
// -- 112 in total --
// via. https://www.unorules.org/how-many-cards-in-uno/

export type Red = "red";
export type Blue = "blue";
export type Green = "green";
export type Yellow = "yellow";
export type Wild = "wild";

export type Color = Red | Blue | Green | Yellow | Wild;
export type Numbering = "unassigned" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Special = "unassigned" | "blank-card" | "wild-card" | "wild-draw" | "draw-card" | "reverse-card" | "skip-card";
//export type Visual = [Numbering | Special, Color]

export type Card = { 
    color : Color,
    numbering : Numbering,
    special : Special
};

export type Deck = Array<Card>;


// Naming is as follows: 
// The first symbol is the first letter of Color of the card.
// The second symbol is the Number or Special value of the card.
// The third symbol is the n-th time the card occurs (some have duplicates), starting from 0 if it's the first occurence.
// Made the cards according to this image: https://www.unorules.org/wp-content/uploads/2021/03/All-Uno-cards-how-many-cards-in-uno.png

// Red
const r00 : Card = {color : "red", numbering : 0, special : "unassigned"};
const r10 : Card = {color : "red", numbering : 1, special : "unassigned"};
const r20 : Card = {color : "red", numbering : 2, special : "unassigned"};
const r30 : Card = {color : "red", numbering : 3, special : "unassigned"};
const r40 : Card = {color : "red", numbering : 4, special : "unassigned"};
const r50 : Card = {color : "red", numbering : 5, special : "unassigned"};
const r60 : Card = {color : "red", numbering : 6, special : "unassigned"};
const r70 : Card = {color : "red", numbering : 7, special : "unassigned"};
const r80 : Card = {color : "red", numbering : 8, special : "unassigned"};
const r90 : Card = {color : "red", numbering : 9, special : "unassigned"};

const r11 : Card = {color : "red", numbering : 1, special : "unassigned"};
const r21 : Card = {color : "red", numbering : 2, special : "unassigned"};
const r31 : Card = {color : "red", numbering : 3, special : "unassigned"};
const r41 : Card = {color : "red", numbering : 4, special : "unassigned"};
const r51 : Card = {color : "red", numbering : 5, special : "unassigned"};
const r61 : Card = {color : "red", numbering : 6, special : "unassigned"};
const r71 : Card = {color : "red", numbering : 7, special : "unassigned"};
const r81 : Card = {color : "red", numbering : 8, special : "unassigned"};
const r91 : Card = {color : "red", numbering : 9, special : "unassigned"};

const rsc0 : Card = {color : "red", numbering : "unassigned", special : "skip-card"};
const rsc1 : Card = {color : "red", numbering : "unassigned", special : "skip-card"};

const rrc0 : Card = {color : "red", numbering : "unassigned", special : "reverse-card"};
const rrc1 : Card = {color : "red", numbering : "unassigned", special : "reverse-card"};

const rdc0 : Card = {color : "red", numbering : "unassigned", special : "draw-card"};
const rdc1 : Card = {color : "red", numbering : "unassigned", special : "draw-card"};

// Yellow
const y00 : Card = {color : "yellow", numbering : 0, special : "unassigned"};
const y10 : Card = {color : "yellow", numbering : 1, special : "unassigned"};
const y20 : Card = {color : "yellow", numbering : 2, special : "unassigned"};
const y30 : Card = {color : "yellow", numbering : 3, special : "unassigned"};
const y40 : Card = {color : "yellow", numbering : 4, special : "unassigned"};
const y50 : Card = {color : "yellow", numbering : 5, special : "unassigned"};
const y60 : Card = {color : "yellow", numbering : 6, special : "unassigned"};
const y70 : Card = {color : "yellow", numbering : 7, special : "unassigned"};
const y80 : Card = {color : "yellow", numbering : 8, special : "unassigned"};
const y90 : Card = {color : "yellow", numbering : 9, special : "unassigned"};

const y11 : Card = {color : "yellow", numbering : 1, special : "unassigned"};
const y21 : Card = {color : "yellow", numbering : 2, special : "unassigned"};
const y31 : Card = {color : "yellow", numbering : 3, special : "unassigned"};
const y41 : Card = {color : "yellow", numbering : 4, special : "unassigned"};
const y51 : Card = {color : "yellow", numbering : 5, special : "unassigned"};
const y61 : Card = {color : "yellow", numbering : 6, special : "unassigned"};
const y71 : Card = {color : "yellow", numbering : 7, special : "unassigned"};
const y81 : Card = {color : "yellow", numbering : 8, special : "unassigned"};
const y91 : Card = {color : "yellow", numbering : 9, special : "unassigned"};

const ysc0 : Card = {color : "yellow", numbering : "unassigned", special : "skip-card"};
const ysc1 : Card = {color : "yellow", numbering : "unassigned", special : "skip-card"};

const yrc0 : Card = {color : "yellow", numbering : "unassigned", special : "reverse-card"};
const yrc1 : Card = {color : "yellow", numbering : "unassigned", special : "reverse-card"};

const ydc0 : Card = {color : "yellow", numbering : "unassigned", special : "draw-card"};
const ydc1 : Card = {color : "yellow", numbering : "unassigned", special : "draw-card"};

// Blue
const b00 : Card = {color : "blue", numbering : 0, special : "unassigned"};
const b10 : Card = {color : "blue", numbering : 1, special : "unassigned"};
const b20 : Card = {color : "blue", numbering : 2, special : "unassigned"};
const b30 : Card = {color : "blue", numbering : 3, special : "unassigned"};
const b40 : Card = {color : "blue", numbering : 4, special : "unassigned"};
const b50 : Card = {color : "blue", numbering : 5, special : "unassigned"};
const b60 : Card = {color : "blue", numbering : 6, special : "unassigned"};
const b70 : Card = {color : "blue", numbering : 7, special : "unassigned"};
const b80 : Card = {color : "blue", numbering : 8, special : "unassigned"};
const b90 : Card = {color : "blue", numbering : 9, special : "unassigned"};

const b11 : Card = {color : "blue", numbering : 1, special : "unassigned"};
const b21 : Card = {color : "blue", numbering : 2, special : "unassigned"};
const b31 : Card = {color : "blue", numbering : 3, special : "unassigned"};
const b41 : Card = {color : "blue", numbering : 4, special : "unassigned"};
const b51 : Card = {color : "blue", numbering : 5, special : "unassigned"};
const b61 : Card = {color : "blue", numbering : 6, special : "unassigned"};
const b71 : Card = {color : "blue", numbering : 7, special : "unassigned"};
const b81 : Card = {color : "blue", numbering : 8, special : "unassigned"};
const b91 : Card = {color : "blue", numbering : 9, special : "unassigned"};

const bsc0 : Card = {color : "blue", numbering : "unassigned", special : "skip-card"};
const bsc1 : Card = {color : "blue", numbering : "unassigned", special : "skip-card"};

const brc0 : Card = {color : "blue", numbering : "unassigned", special : "reverse-card"};
const brc1 : Card = {color : "blue", numbering : "unassigned", special : "reverse-card"};

const bdc0 : Card = {color : "blue", numbering : "unassigned", special : "draw-card"};
const bdc1 : Card = {color : "blue", numbering : "unassigned", special : "draw-card"};

// Green
const g00 : Card = {color : "green", numbering : 0, special : "unassigned"};
const g10 : Card = {color : "green", numbering : 1, special : "unassigned"};
const g20 : Card = {color : "green", numbering : 2, special : "unassigned"};
const g30 : Card = {color : "green", numbering : 3, special : "unassigned"};
const g40 : Card = {color : "green", numbering : 4, special : "unassigned"};
const g50 : Card = {color : "green", numbering : 5, special : "unassigned"};
const g60 : Card = {color : "green", numbering : 6, special : "unassigned"};
const g70 : Card = {color : "green", numbering : 7, special : "unassigned"};
const g80 : Card = {color : "green", numbering : 8, special : "unassigned"};
const g90 : Card = {color : "green", numbering : 9, special : "unassigned"};

const g11 : Card = {color : "green", numbering : 1, special : "unassigned"};
const g21 : Card = {color : "green", numbering : 2, special : "unassigned"};
const g31 : Card = {color : "green", numbering : 3, special : "unassigned"};
const g41 : Card = {color : "green", numbering : 4, special : "unassigned"};
const g51 : Card = {color : "green", numbering : 5, special : "unassigned"};
const g61 : Card = {color : "green", numbering : 6, special : "unassigned"};
const g71 : Card = {color : "green", numbering : 7, special : "unassigned"};
const g81 : Card = {color : "green", numbering : 8, special : "unassigned"};
const g91 : Card = {color : "green", numbering : 9, special : "unassigned"};

const gsc0 : Card = {color : "green", numbering : "unassigned", special : "skip-card"};
const gsc1 : Card = {color : "green", numbering : "unassigned", special : "skip-card"};

const grc0 : Card = {color : "green", numbering : "unassigned", special : "reverse-card"};
const grc1 : Card = {color : "green", numbering : "unassigned", special : "reverse-card"};

const gdc0 : Card = {color : "green", numbering : "unassigned", special : "draw-card"};
const gdc1 : Card = {color : "green", numbering : "unassigned", special : "draw-card"};

// Wild
const wwc0 : Card = {color : "wild", numbering : "unassigned", special : "wild-card"};
const wwc1 : Card = {color : "wild", numbering : "unassigned", special : "wild-card"};
const wwc2 : Card = {color : "wild", numbering : "unassigned", special : "wild-card"};
const wwc3 : Card = {color : "wild", numbering : "unassigned", special : "wild-card"};

const wwd0 : Card = {color : "wild", numbering : "unassigned", special : "wild-draw"};
const wwd1 : Card = {color : "wild", numbering : "unassigned", special : "wild-draw"};
const wwd2 : Card = {color : "wild", numbering : "unassigned", special : "wild-draw"};
const wwd3 : Card = {color : "wild", numbering : "unassigned", special : "wild-draw"};

const wbc0 : Card = {color : "wild", numbering : "unassigned", special : "blank-card"};
const wbc1 : Card = {color : "wild", numbering : "unassigned", special : "blank-card"};
const wbc2 : Card = {color : "wild", numbering : "unassigned", special : "blank-card"};
const wbc3 : Card = {color : "wild", numbering : "unassigned", special : "blank-card"};

export const deck : Deck = [
r00,r10,r20,r30,r40,r50,r60,r70,r80,r90,r11,r21,r31,r41,r51,r61,r71,r81,r91,rsc0,rsc1,rrc0,rrc1,rdc0,rdc1,
y00,y10,y20,y30,y40,y50,y60,y70,y80,y90,y11,y21,y31,y41,y51,y61,y71,y81,y91,ysc0,ysc1,yrc0,yrc1,ydc0,ydc1,
b00,b10,b20,b30,b40,b50,b60,b70,b80,b90,b11,b21,b31,b41,b51,b61,b71,b81,b91,bsc0,bsc1,brc0,brc1,bdc0,bdc1,
g00,g10,g20,g30,g40,g50,g60,g70,g80,g90,g11,g21,g31,g41,g51,g61,g71,g81,g91,gsc0,gsc1,grc0,grc1,gdc0,gdc1,
wwc0,wwc1,wwc2,wwc3,wwd0,wwd1,wwd2,wwd3,wbc0,wbc1,wbc2,wbc3
];
















