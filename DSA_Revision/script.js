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

// n = 4;
// if (n % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd Number");
// }

// n = 11;
// let count = 0;
// for (let i = 1; i <= Math.sqrt(n); i++) {
//   if (n % i === 0) {
//     count++;
//     if (n / i != i) {
//       count++;
//     }
//   }
// }
// console.log(count === 2);

// let year = 2016;
// if (year % 4 === 0 && (year % 400 === 0 || year % 100 != 0)) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }

// let n = 153;
// let count = 0;
// let temp = n;
// let arm = n;
// let sum = 0;
// while (temp != 0) {
//   count++;
//   temp = Math.floor(temp / 10);
// }
// while (arm != 0) {
//   let lastDigit = arm % 10;
//   sum += lastDigit ** count;
//   arm = Math.floor(arm / 10);
// }
// console.log(sum === n);

// let n = 5;
// let a = 0;
// let b = 1;
// for (let i = 0; i < n; i++) {
//   console.log(a);
//   let temp = b;
//   b = a + b;
//   a = temp;
// }

// let s = "level";
// let isPalindrome = true;
// for (let i = 0; i < s.length; i++) {
//   if (s[i] != s[s.length - 1 - i]) {
//     isPalindrome = false;
//     break;
//   }
// }
// console.log(isPalindrome);

// let n = 5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(fact);

// let n = 1234;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// let a = 10;
// let b = 12;
// let num1 = a;
// let num2 = b;
// while (b != 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }
// console.log(a);

// let lcm = (num1 * num2) / a;
// console.log(lcm);

// let s = "hello world";
// let vowel = 0;
// let consonants = 0;
// let space = 0;
// s = s.toLowerCase();
// for (let i = 0; i < s.length; i++) {
//   if (
//     s[i] === "a" ||
//     s[i] === "e" ||
//     s[i] === "i" ||
//     s[i] === "o" ||
//     s[i] === "u"
//   ) {
//     vowel++;
//   } else if (s[i] === " ") {
//     space++;
//   } else {
//     consonants++;
//   }
// }
// console.log(vowel, space, consonants);

// let s = "programming";
// let temp = "";
// for (let i = 0; i < s.length; i++) {
//   temp += s[s.length - 1 - i];
// }
// console.log(temp);

// let arr = [4, 7, 1, 8, 5];
// let max = arr[0];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min, max);

// let arr = [3, 1, 4, 1, 5, 9];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// function Armstrong(n) {
//   let count = 0;
//   let temp = n;
//   let arm = n;
//   let sum = 0;
//   while (temp != 0) {
//     count++;
//     temp = Math.floor(temp / 10);
//   }
//   while (arm != 0) {
//     let lastDigit = arm % 10;
//     sum += lastDigit ** count;
//     arm = Math.floor(arm / 10);
//   }
//   return sum === n;
// }
// let start = 1;
// let end = 500;
// let arr = [];
// for (let i = start; i < end; i++) {
//   if (Armstrong(i)) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// let n = 4;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${n}X${i}=${n * i}`);
// }

// function primeNumber(n) {
//   let count = 0;
//   for (let i = 1; i <= Math.sqrt(n); i++) {
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
// let end = 12;
// let arr = [];
// let sum = 0;
// let sumC = 0;
// for (let i = start; i <= end; i++) {
//   if (primeNumber(i)) {
//     sum += i;
//     arr.push(i);
//     if (end % i === 0) {
//       sumC += i;
//     }
//   }
// }
// console.log(arr);
// console.log(sum);
// console.log(sumC);

// let n = 28;
// let temp = n;
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   if (n % i === 0) {
//     sum += i;
//   }
// }
// console.log(temp === sum);

// let arr = [3, 1, 4, 1, 5, 9];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// let arr1 = [1, 5, 8, 9];
// let arr2 = [2, 3, 4, 5, 6];
// let arr = [];
// let i = 0;
// let j = 0;
// let k = 0;
// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     arr[k++] = arr1[i++];
//   } else {
//     arr[k++] = arr2[j++];
//   }
// }
// while (i < arr1.length) {
//   arr[k++] = arr1[i++];
// }
// while (j < arr2.length) {
//   arr[k++] = arr2[j++];
// }
// console.log(arr);

// let even = 0;
// let odd = 0;
// let start = 1;
// let end = 10;
// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }
// console.log(even);
// console.log(odd);

// let n = 5;
// let a = 0;
// let b = 1;
// for (let i = 0; i < n; i++) {
//   let temp = b;
//   b = a + b;
//   a = temp;
// }
// console.log(a);

// function primeNumber(n) {
//   let count = 0;
//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       count++;
//       if (n / i != i) {
//         count++;
//       }
//     }
//   }
//   return count === 2;
// }

// let end = 20;
// for (let i = 1; i <= end; i++) {
//   if (primeNumber(i)) {
//     console.log(i);
//   }
// }

// n = 12345;
// let count = 0;
// while (n != 0) {
//   count++;
//   n = Math.floor(n / 10);
// }
// console.log(count);

// let n = 3;
// let count = 1;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(` ${count++}`);
//   }
//   console.log();
// }

// let n = 4;
// let fact = 1;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(fact);
// while (fact != 0) {
//   let lastDigit = fact % 10;
//   sum += lastDigit;
//   fact = Math.floor(fact / 10);
// }
// console.log(sum);

// let arr = [1, 2, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// let max = arr[arr.length - 1];
// let actualNumber = Math.floor(max * (max + 1)) / 2;
// console.log(actualNumber - sum);

// let arr = [3, 1, 2, 4, 5];
// arr.sort((a, b) => a - b);
// console.log(arr[Math.floor(arr.length / 2)]);

// let base = 2;
// let exponent = 3;
// let temp = 1;
// for (let i = 0; i < exponent; i++) {
//   temp *= base;
// }
// console.log(temp);

// let n = 4;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// let n = 25;
// let isPerfect = false;
// for (let i = 0; i < n; i++) {
//   if (i * i === n) {
//     isPerfect = true;
//     break;
//   }
// }
// console.log(isPerfect);

// let n = 123;
// let sum = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   sum += lastDigit ** 2;
//   n = Math.floor(n / 10);
// }
// console.log(sum);

// let size = 3;
// let arr = new Array(size);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(size);
// }
// let count = 1;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     arr[i][j] = count++;
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// function sumOfDigit(n) {
//   let sum = 0;
//   while (n != 0) {
//     let lastDigit = n % 10;
//     sum += lastDigit;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

// let n = 9875;
// while (n > 10) {
//   n = sumOfDigit(n);
// }
// console.log(n);

// let n = 31232333;
// let digit = 3;
// let count = 0;
// while (n != 0) {
//   let lastDigit = n % 10;
//   if (lastDigit === digit) {
//     count++;
//   }
//   n = Math.floor(n / 10);
// }
// console.log(count);

// function fib(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   if (n > 2) return n;
//   return fib(n - 1) + fib(n - 2);
// }
// let n = 5;
// for (let i = 0; i <= n; i++) {
//   console.log(fib(i));
// }

// let n = 12;
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// let avg = sum / arr.length;
// console.log(avg);

// let s = "hello";
// let count = 0;
// for (let i = 0; i < s.length; i++) {
//   count++;
// }
// console.log(count);
