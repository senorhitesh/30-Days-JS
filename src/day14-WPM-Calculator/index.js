const words = `A five-year-old boy and his father, who were detained as part of United States President Donald Trump’s aggressive immigration raids and held at a detention facility in Texas, have returned to their home in Minnesota.
Liam Conejo Ramos and his father, Adrian, who are as`.split(" ")
const wordsLength = words.length

function randomWords() {
    const randomIndex = Math.floor(Math.random() * wordsLength)
    return words[randomIndex]
}

const displayedWords = document.querySelector("#words");
function formatWord(word) {
    return `<div class="words"> ${word} </div>`
}
function newGame() {
    displayedWords.innerHTML = ``;
    for (let i = 0; i < 40; i++) {
        const word = randomWords();
        word.split(``).forEach((character)=>{
            const charaterSpan = document.createElement("span")
            charaterSpan.innerHTML = " ";
displayedWords.appendChild(charaterSpan)
        })
    }
}