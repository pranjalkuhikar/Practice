// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

// let n = 5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(fact);

// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);
// let avg = sum / n;
// console.log(avg);

// let n = 20;
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

// let a = 2;
// let b = 4;
// let temp = 1;
// for (let i = 1; i <= b; i++) {
//   temp *= a;
// }
// console.log(temp);

// let n = 10;
// let even = 0;
// let odd = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }
// console.log(even, odd);

// function primeNumber(n) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     if (n % i === 0) {
//       count++;
//       if (n / i != i) {
//         count++;
//       }
//     }
//   }
//   return count === 2;
// }

// let start = 1;
// let end = 20;
// for (let i = start; i < end; i++) {
//   if (primeNumber(i)) {
//     console.log(i);
//   }
// }

// let n = 465;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// let n = 5;
// let a = 0;
// let b = 1;
// for (let i = 0; i < n; i++) {
//   console.log(a);
//   let temp = b;
//   b = a + b;
//   a = temp;
// }

// let n = 121;
// let temp = n;
// let rev = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   rev = rev * 10 + lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(rev);
// console.log(temp === rev);

// let a = 12;
// let b = 20;
// while (b != 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }
// console.log(a);

// let n1 = 12;
// let n2 = 20;
// let lcm = (n1 * n2) / a;
// console.log(lcm);

// let n = 24;
// let temp = n;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(temp % sum === 0);

// let n = 6;
// let temp = n;
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log(temp === sum);

// let n = 153;
// let temp = n;
// let copy = n;
// let count = 0;
// let sum = 0;
// while (n != 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// while (temp != 0) {
//   let lastDigit = temp % 10;
//   sum += lastDigit ** count;
//   temp = Math.floor(temp / 10);
// }
// console.log(copy === sum);

// let n = 145;
// let copy = n;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   let fact = 1;
//   for (let i = 1; i <= lastDigit; i++) {
//     fact *= i;
//   }
//   sum += fact;
//   n = Math.floor(n / 10);
// }
// console.log(copy === sum);

// let n = 25;
// let copy = n;
// let sq = n * n;
// let count = 0;
// while (n != 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// let temp = sq % Math.pow(10, count);
// console.log(copy === temp);

// let n = 6758;
// let sum = 0;
// while (n != 0 || sum >= 10) {
//   if (n === 0) {
//     n = sum;
//     sum = 0;
//   }
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// let n = 2;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${2} X ${i} = ${n * i}`);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// let n = 12;
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log(sum > n);

// let n = 9;
// let sq = n * n;
// let sum = 0;
// while (sq != 0) {
//   let lastDigit = sq % 10;
//   sum += lastDigit;
//   sq = Math.floor(sq / 10);
// }
// console.log(sum === n);
