// Bài 1

let n = 50;
let arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(i);
}
document.write(arr);
console.log(arr);
console.log(`Số lươợng phần tử nhập vào là: ${arr.length}`);
let count = 0;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
            count += 1;
        }
    }
}
let avg = sum / count;
console.log(`Trung bình cộng các số lẻ ở vị trí chẵn: ${avg}`);
document.write(`<br> Trung bình cộng các số lẻ ở vị trí chẵn: ${avg}`);


