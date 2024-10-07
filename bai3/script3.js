function addBooks() {
    // Mã số sachs
    let bookCode = prompt("Nhập mã số sách");
    console.log(bookCode[0]);
    while (bookCode.length !== 5) {
        bookCode = prompt("Nhập lại mã số sách (phải có 5 chữ số):");
    }
    while (+bookCode[0] < 1 || +bookCode[0] > 5) {
        bookCode = prompt("Nhập lại mã số sách (số đầu tiên phải từ 1-5):");
    }
    // Tên sách
    let bookName = prompt("Nhập tên sách:");
    // Năm xuất bản
    let publishingYear = prompt("Nhập năm xuất bản");
    console.log(publishingYear.length);
    while (publishingYear.length >= 5) {
        publishingYear = prompt("Nhập lại năm xuất bản:");
    }
    // Số quyển
    let bookNumber =  +prompt("Nhập số quyển:");
    // Tỉnh trạng
    let status;
    if (bookNumber > 0) {
        status = "True"
    } else {
        status = "False";
    }
    // Thêm sách mới
    let add = document.getElementById("bookList")
    add.innerHTML += `<tr>
                      </tr><td>${bookCode}</td>
                      <td>${bookName}</td>
                      <td>${publishingYear}</td>
                      <td>${bookNumber}</td>
                      <td>${status}</td>
                      </tr>`;
    alert("Đã hoàn thành nhập thông tin sách mới.")
}