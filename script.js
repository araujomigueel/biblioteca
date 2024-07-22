/* var bookAddress = [];

function getAddresses(){
    const newEmbedItem = document.createElement("embed");
    newEmbedItem.src = bookAddress[0];
    //booksarea.insertAdjacentElement("afterbegin", newEmbedItem);
    
    console.log(bookAddress[0].statusCode);
}

function insertBooks(){
    const booksarea = document.getElementById("booksarea");
    const newLink = document.createElement("a");
    const newEmbedItem = document.createElement("embed");
    
    newLink.target = "_blank";
    newEmbedItem.class = "book";

    newLink.appendChild(newEmbedItem);
    
    for(var i = 0; i < 10; i++)
    {
        bookAddress[i] = (i+1);

        newLink.href = `./assets/books/${bookAddress[i]}.pdf`;
        newEmbedItem.src = newLink.href;

        console.log(bookAddress[i]);
        console.log(newLink.href);

        booksarea.insertAdjacentElement("afterbegin", newLink);
    }
} */