/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

let All_P = document.querySelectorAll('p')
console.log(All_P)

let First_Div = document.querySelector("div")
console.log(First_Div)

let JumboText = document.querySelector("#jumbotron-text")
console.log(JumboText)

let All_P_In_Primary = document.querySelector(".primary-content").querySelectorAll("p")
console.log(All_P_In_Primary)
/* 
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

function ClickOnAlert(){
    alert("Thanks for visiting Bikes for Refugees!")
}

let AlertButton = document.querySelector("#alertBtn").addEventListener('click', ClickOnAlert)


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
/*
let buttonChangeColor = document.getElementById('bgrChangeBtn').addEventListener('click', event => {
    changeColor()
})

function changeColor(){
    document.querySelector('body').style.backgroundColor = 'blue'
}
*/
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

let AddSomeText = document.querySelector("#addTextBtn").addEventListener('click', (e) => {
    addParagraph("hola")
    console.log("hola")
})

function addParagraph(text){
    const pContainer = document.querySelector("#mainArticles")
    const article = document.createElement("article")
    article.classList.add("article")
    const para = document.createElement('p')
    para.classList.add("article-lead")
    para.textContent = text
    article.appendChild(para)
    pContainer.appendChild(article)
}
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const allLinks = [...document.querySelectorAll('a')];
const largerLinksBtn = document.querySelector('#largerLinksBtn');
largerLinksBtn.addEventListener('click', increaseLinksFontSize);
console.log(allLinks)

function increaseLinksFontSize() {
    allLinks.map(link => link.style.fontSize = '1.3em');
}
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
let addButton = document.querySelector('#addArticleBtn').addEventListener('click', (e) => {
    const inputText = document.querySelector('.addArticle').value;
    let TEXT = inputText.trim()
    addParagraph(TEXT)
})

function addParagraph(text){
    const pContainer = document.querySelector("#mainArticles")
    const article = document.createElement("article")
    article.classList.add("article")
    const para = document.createElement('p')
    para.classList.add("article-lead")
    para.textContent = text
    article.appendChild(para)
    pContainer.appendChild(article)
    document.querySelector('.addArticle').value = '';
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

let buttonChangeColor = document.getElementById('bgrChangeBtn')
buttonChangeColor.addEventListener('click', event => {
    changeColor(event, 'blue')
})

function changeColor(event,color){
    const arrColors=['blue', 'yellow', 'black', 'grey'];
    event.preventDefault();
    const body = document.querySelector('body')
    const bodyColor = body.style.backgroundColor;
    let colorIndex = arrColors.indexOf(bodyColor)
    console.log(colorIndex)
    console.log(bodyColor)
    if(colorIndex === -1 || (colorIndex === arrColors.length -1)){
        body.style.backgroundColor = arrColors[0]
        console.log("Entrando al true")
    } else {
        console.log("Entrando en el false")
        body.style.backgroundColor = arrColors[colorIndex +1]
    }
}
