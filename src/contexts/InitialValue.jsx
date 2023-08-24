// InitialValue.jsx

const cards = [
    { name: "The Fool", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "0" },
    { name: "The Magician", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "I" },
    { name: "The High Priestess", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "II" },
    { name: "The Empress", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "III" },
    { name: "The Emperor", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "IV" },
    { name: "The Hierophant", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "V" },
    { name: "The Lovers", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "VI" },
    { name: "The Chariot", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "VII" },
    { name: "Strength", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "VIII" },
    { name: "The Hermit", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "IX" },
    { name: "Wheel of Fortune", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "X" },
    { name: "Justice", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "XI" },
    { name: "The Hanged Man", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "XII" },
    { name: "Death", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "XIII" },
    { name: "Temperance", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "XIV" },
    { name: "The Devil", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "XV" },
    { name: "The Tower", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "XVI" },
    { name: "The Star", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "XVII" },
    { name: "The Moon", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "XVIII" },
    { name: "The Sun", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "XIX" },
    { name: "Judgement", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "XX" },
    { name: "The World", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: true, minorArcana: false, suit: null, role: null, number: "XXI" },
    { name: "Ace of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: null, number: null },
    { name: "Two of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: null, number: null },
    { name: "Three of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: null, number: null },
    { name: "Four of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: null, number: null },
    { name: "Five of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: null, number: null },
    { name: "Six of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: null, number: null },
    { name: "Seven of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: null, number: null },
    { name: "Eight of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: null, number: null },
    { name: "Nine of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: null, number: null },
    { name: "Ten of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: null, number: null },
    { name: "Page of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: "Page", number: null },
    { name: "Knight of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: "Knight", number: null },
    { name: "Queen of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: "Queen", number: null },
    { name: "King of Wands", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Wands", role: "King", number: null },
    { name: "Ace of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: null, number: null },
    { name: "Two of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: null, number: null },
    { name: "Three of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: null, number: null },
    { name: "Four of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: null, number: null },
    { name: "Five of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: null, number: null },
    { name: "Six of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: null, number: null },
    { name: "Seven of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: null, number: null },
    { name: "Eight of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: null, number: null },
    { name: "Nine of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: null, number: null },
    { name: "Ten of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: null, number: null },
    { name: "Page of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: "Page", number: null },
    { name: "Knight of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: "Knight", number: null },
    { name: "Queen of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: "Queen", number: null },
    { name: "King of Pentacles", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Pentacles", role: "King", number: null },
    { name: "Ace of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: null, number: null },
    { name: "Two of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: null, number: null },
    { name: "Three of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: null, number: null },
    { name: "Four of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: null, number: null },
    { name: "Five of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: null, number: null },
    { name: "Six of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: null, number: null },
    { name: "Seven of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: null, number: null },
    { name: "Eight of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: null, number: null },
    { name: "Nine of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: null, number: null },
    { name: "Ten of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: null, number: null },
    { name: "Page of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: "Page", number: null },
    { name: "Knight of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: "Knight", number: null },
    { name: "Queen of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: "Queen", number: null },
    { name: "King of Swords", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Swords", role: "King", number: null },
    { name: "Ace of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: null, number: null },
    { name: "Two of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: null, number: null },
    { name: "Three of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: null, number: null },
    { name: "Four of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: null, number: null },
    { name: "Five of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: null, number: null },
    { name: "Six of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: null, number: null },
    { name: "Seven of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: null, number: null },
    { name: "Eight of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: null, number: null },
    { name: "Nine of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: null, number: null },
    { name: "Ten of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: null, number: null },
    { name: "Page of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: "Page", number: null },
    { name: "Knight of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: "Knight", number: null },
    { name: "Queen of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: "Queen", number: null },
    { name: "King of Cups", tablePosition: -1, arrayPosition: -1, status: null, majorArcana: false, minorArcana: true, suit: "Cups", role: "King", number: null }
];

const backgroundMusic = [
    { name: "default", purchased: true, price: 0 },
    { name: "star", purchased: false, price: 80 },
    { name: "moon", purchased: false, price: 80 }
];

const tablecloth = [
    { name: "default", purchased: true, price: 0 },
    { name: "red", purchased: false, price: 40 },
    { name: "blue", purchased: false, price: 40 }
];

const cardFace = [
    { name: "default", purchased: true, price: 0 },
    { name: "classic", purchased: false, price: 50 },
    { name: "modern", purchased: false, price: 50 }
];

const crystalBall = [
    { name: "default", purchased: true, price: 0 },
    { name: "purple", purchased: false, price: 70 },
    { name: "green", purchased: false, price: 70 }
];

const aromatherapy = [
    { name: "default", purchased: true, price: 0 },
    { name: "rose", purchased: false, price: 30 },
    { name: "lavender", purchased: false, price: 30 },
    { name: "jasmine", purchased: false, price: 30 }
];

export { cards, backgroundMusic, tablecloth, cardFace, crystalBall, aromatherapy };