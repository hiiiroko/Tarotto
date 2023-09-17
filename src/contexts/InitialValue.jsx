// InitialValue.jsx

const coinInitial = 100;

const plusInfoInitial = null;

const backgroundMusicList = [
    { name: "default", purchased: true, price: 0 },
    { name: "star", purchased: false, price: 80 },
    { name: "moon", purchased: false, price: 80 }
];

const tableclothList = [
    { name: "default", purchased: true, price: 0 },
    { name: "red", purchased: false, price: 40 },
    { name: "blue", purchased: false, price: 40 }
];

const cardFaceList = [
    { name: "default", purchased: true, price: 0 },
    { name: "classic", purchased: false, price: 50 },
    { name: "modern", purchased: false, price: 50 }
];

const crystalBallList = [
    { name: "default", purchased: true, price: 0 },
    { name: "purple", purchased: false, price: 70 },
    { name: "green", purchased: false, price: 70 }
];

const aromatherapyList = [
    { name: "default", purchased: true, price: 0 },
    { name: "rose", purchased: false, price: 30 },
    { name: "lavender", purchased: false, price: 30 },
    { name: "jasmine", purchased: false, price: 30 }
];

const usernameInital = null;

const otherInfoInitial = "user";

const languageList = ["zh-CN", "en-US"];

const themeList = ["light", "dark"];

const avatarList = ["default", "pony"];

const cardsInitial = [
    { "name": "The Fool", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Magician", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The High Priestess", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Empress", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Emperor", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Hierophant", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Lovers", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Chariot", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Strength", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Hermit", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Wheel of Fortune", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Justice", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Hanged Man", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Death", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Temperance", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Devil", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Tower", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Star", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Moon", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The Sun", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Judgement", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "The World", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Ace of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Two of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Three of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Four of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Five of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Six of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Seven of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Eight of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Nine of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Ten of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Page of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Knight of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Queen of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "King of Wands", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Ace of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Two of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Three of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Four of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Five of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Six of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Seven of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Eight of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Nine of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Ten of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Page of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Knight of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Queen of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "King of Pentacles", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Ace of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Two of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Three of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Four of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Five of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Six of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Seven of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Eight of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Nine of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Ten of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Page of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Knight of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Queen of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "King of Swords", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Ace of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Two of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Three of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Four of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Five of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Six of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Seven of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Eight of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Nine of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Ten of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Page of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Knight of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "Queen of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null },
    { "name": "King of Cups", "tablePosition": -1, "arrayPosition": -1, "reversed": false, "flipped": false, "status": null }
];

export { coinInitial, plusInfoInitial, backgroundMusicList, tableclothList, cardFaceList, crystalBallList, aromatherapyList, usernameInital, otherInfoInitial, languageList, themeList, avatarList, cardsInitial };