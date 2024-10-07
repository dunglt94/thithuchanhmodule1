 class Book {
    code; name; publishedYear; quantity;

     constructor(code, name, publishedYear, quantity) {
         this.code = code;
         this.name = name;
         this.publishedYear = publishedYear;
         this.quantity = quantity;
         this.status = "";
     }
     setCode() {
         this.code = prompt("Nhập mã số sách:");
     }
     isCorrectCode() {
         while (this.code.length !== 5) {
             this.code = prompt("Nhập lại mã số sách (phải có 5 chữ số):");
         }
         while (+this.code[0] < 1 || +this.code[0] > 5 ) {
             if (this.code.length !== 5) {
                 this.code = prompt("Nhập lại mã số sách (phải có 5 chữ số):");
             }  else
             this.code = prompt("Nhập lại mã số sách (số đầu tiên phải là từ 1-5):");
         }
     }
     setName() {
         this.name = prompt("Nhập tên sách:");
     }
     setPublishedYear() {
         this.publishedYear = prompt("Nhập năm xuất bản:");
     }
     checkPublishedYear() {
         if (this.publishedYear.length >= 5) {
             this.publishedYear = prompt("Nhập lại năm xuất bản (chỉ có 4 chữ số):")
         }
     }
     setQuantity() {
         this.quantity = +prompt("Nhập số sách:");
     }
     isAvailable() {
         return this.quantity > 0;
     }
     getCode() {
         return this.code;
     }
     getName() {
         return this.name;
     }
     getPublishedYear() {
         return this.publishedYear;
     }
     getQuantity() {
         return this.quantity;
     }
     getStatus() {
         if (this.isAvailable()) this.status = "True";
         else this.status = "False";
     }
 }
 let book  = new Book();