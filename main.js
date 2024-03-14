const myLibrary = [];

function addBookToLibrary(title, author, pages) {
  let newBook = {
    title: title,
    author: author,
    pages: pages,
  };
  myLibrary.push(newBook);
};

document.getElementById("addBookForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;

  addBookToLibrary(title, author, pages);

  document.getElementById("addBookForm").reset();

  displayBooks();
});

function displayBooks() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";

  myLibrary.forEach(function(book, index) {
    const card = document.createElement("div");
    card.className = "card";

    const titlePara = document.createElement("p");
    titlePara.textContent = "Title: " + book.title;

    const authorPara = document.createElement("p");
    authorPara.textContent = "Author: " + book.author;

    const pagesPara = document.createElement("p");
    pagesPara.textContent = "Pages: " + book.pages;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function() {
      removeBook(index);
      displayBooks();
  });

  card.appendChild(titlePara);
  card.appendChild(authorPara);
  card.appendChild(pagesPara);
  card.appendChild(removeButton);

  cardContainer.appendChild(card);
});
}

function removeBook(index) {
  myLibrary.splice(index, 1);
}