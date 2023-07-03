function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;

    this.info = function() {
        if(this.read)
            return `${title} by ${author}, ${pages} pages, read`
        else
            return `${title} by ${author}, ${pages} pages, not read yet`
    }
}

function removeBook(event){
    let card = event.target.parentNode.parentNode;
    removeTitleFromLibrary(card.dataset.title);
    updateLibrary();
}

function createBookCard (book) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.dataset.title = book.title;
    let title = document.createElement("h3");
    title.innerText=book.title;
    card.appendChild(title);
    let author = document.createElement("h5");
    author.innerText="by: " + book.author;
    card.appendChild(author);
    let pages = document.createElement("p");
    pages.innerText="pages: " + book.pages;
    card.appendChild(pages);
    let cardButtons = document.createElement("div");
    let remove = document.createElement("button");
    remove.innerText="Remove";
    remove.addEventListener("click", removeBook)
    cardButtons.appendChild(remove);
    card.appendChild(cardButtons);

    return card;
}

let myLibrary = [];

function updateLibrary() {
    let lib = document.getElementById("library");
    lib.innerHTML = null;

    myLibrary.forEach( b => {
        lib.appendChild(createBookCard(b));
    })
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function removeTitleFromLibrary(title){
    myLibrary = myLibrary.filter(function(el) { return el.title != title})
}

const book1 = new Book("Watership Down", "Richard Adams", 474);
const book2 = new Book("The Lord of The Rings: The fellowship of the ring", "J.R.R. Tolkien", 900);

addBookToLibrary(book1);
addBookToLibrary(book2);
updateLibrary();

myLibrary.forEach(b => {
    console.log(b.info());
});


