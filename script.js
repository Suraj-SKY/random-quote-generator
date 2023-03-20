// notes: API --> https://api.quotable.io/random search for quotable io
const btnElement = document.getElementById('btn');
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const h2Element = document.getElementById('quote');
const apiURL = "https://api.quotable.io/random";


async function getQuote() {
    try {
        // while data is loading
        btnElement.innerHTML = "Loading...";
        btnElement.disabled = true;
        h2Element.innerHTML = `<img src="loader.gif" alt="Loading...">`;
        authorElement.innerHTML = "";

        const response = await fetch(apiURL);
        const data = await response.json();
        // console.log(data);

        const quoteContent = data.content;
        const quoteAuthor = data.author;

        h2Element.innerHTML = `<i class="fa-solid fa-quote-left"></i>
        <span id="quote">${quoteContent}</span>
        <i class="fa-solid fa-quote-right"></i>`;
        authorElement.innerHTML = "~ " + quoteAuthor;

        // when data loading is finished
        btnElement.innerHTML = "Get Quote";
        btnElement.disabled = false;
    } catch (error) {
        // console.log(error);
        quoteElement.innerHTML = "An error occurred, please try again later.";
        authorElement.innerHTML = "";

        btnElement.innerHTML = "Get Quote";
        btnElement.disabled = false;
    }
}

getQuote();

btnElement.addEventListener('click', getQuote);