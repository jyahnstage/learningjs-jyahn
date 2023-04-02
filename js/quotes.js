const quotes = [
    { 
    content: "So, whether you eat or drink or whatever you do, you should do it all for God's glory.",
    verse: "1 Corinthians 10:31",
    },

    {
        content: "Don't judge according to appearances. Judge with right judgment.",
        verse: "John 7:24",
    },

    {
        content: "I can endure all these things through the power of the one who gives me strength.",
        verse: "Philippians 4:13",
    },

    {
        content: "Taste and see how good the Lord is! The one who takes refuge in him is truly happy!",
        verse: "Psalm 34:8",
    },

    {
        content: "Jesus answered, 'I am the way, the truth, and the life. No one comes to the Father except through me.'",
        verse: "John 14:6",
    },

    {
        content: "He only is my rock and my salvation, my fortress; I shall not be shaken.",
        verse: "Psalm 62:6",
    },
];

const content = document.querySelector("#quote span:first-child");
const verse = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

content.innerText = todaysQuote.content;
verse.innerText = todaysQuote.verse;
