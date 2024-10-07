function addBooks() {
    let list = document.getElementById('bookList');

    book.setCode();
    book.isCorrectCode();
    book.setName();
    book.setPublishedYear();
    book.checkPublishedYear();
    book.setQuantity();
    book.getStatus()
    list.innerHTML += `<tr>
            <td>${book.getCode()}</td>
            <td>${book.getName()}</td>
            <td>${book.getPublishedYear()}</td>
            <td>${book.getQuantity()}</td>
            <td>${book.status}</td>
            </tr>`
}