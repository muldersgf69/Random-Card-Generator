window.onload = function() {
    const suits = ['♠', '♣', '♥', '♦'];
    const randomSuitIndex = Math.floor(Math.random() * suits.length)
    const randomSuit = suits[randomSuitIndex];

    const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const randomValueIndex = Math.floor(Math.random()* values.length);
    const randomValue = values[randomValueIndex];
     
    const cardValueElement = document.querySelector(".card-value");
    const topSuitElement = document.querySelector(".top-suit");
    const bottomSuitElement = document.querySelector(".bottom-suit");
     
   cardValueElement.textContent = randomValue;
   topSuitElement.textContent = randomSuit;
   bottomSuitElement.textContent = randomSuit;
   
    const colors = ['red','black'];
    const randomColorIndex = Math.floor(Math.random()* colors.length);
    const randomColor = colors[randomColorIndex];
     
    cardValueElement.style.color = randomColor;
     topSuitElement.style.color = randomColor;
     bottomSuitElement.style.color = randomColor;
};