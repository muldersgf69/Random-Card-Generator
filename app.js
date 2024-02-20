window.onload = function() {
    const suits = ['♠', '♣', '♥', '♦'];
    const randomSuitIndex = Math.floor(Math.random() * suits.length)
    const randomSuit = suits[randomSuitIndex];
    console.log(randomSuit);

    const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const randomValueIndex = Math.floor(Math.random()* values.length);
    const randomValue = values[randomValueIndex];
    console.log(randomValue)
    
    const topRow = document.querySelector(".top-row");
    const middleRow = document.querySelector(".middle-row");
    const bottomRow = document.querySelector (".bottom-row");
    
    const topTextNode = document.createTextNode(randomSuit);
    const middleTextNode = document.createTextNode(randomValue);
    const bottomTextNode = document.createTextNode(randomSuit);
    
    topRowElement.appendChild(topTextNode);
    topRow.appendChild(topRowElement);

    middleRowElement.appendChild(middleTextNode);
    middleRow.appendChild(middleRowElement);

    bottomRowElement.appendChild(bottomTextNode);
    bottomRow.appendChild(bottomRowElement);

}