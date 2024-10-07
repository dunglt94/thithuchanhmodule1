// Bài 2
function checkNum (a, b) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < a; i++) {
        if (a % i === 0) sum1 += i;
    }
    console.log(sum1);
    for (let j = 0; j < b; j++) {
        if (b % j === 0) sum2 += j;
    }
    console.log(sum2);
    if (a === sum2) {
        if (b === sum1) {
            return true;
        }
    } else return false;
}

console.log(checkNum(220, 284));
console.log(checkNum(284, 220));
console.log(checkNum(123, 234));
console.log(checkNum(17296, 18416));