// const ism = prompt("ismni kiriting ");

// const mehmonlar = [
//   "Ahror",
//   "Sarvarjon",
//   "Dadaxon",
//   "Bahrom",
//   "MuhammadNurullox ",
//   "Behzod ",
//   "Davlaltjon ",
//   "odil",
//   "hoshim",
//   "yahyobek",
// ];
// console.log(mehmonlar[Math.floor(Math.random() * (mehmonlar.length - 1))]);
// console.log(mehmonlar[Math.floor(Math.random() * mehmonlar.length)]);
// if (mehmonlar.includes(ism)) {
//   console.log("true");
// } else {
//   console.log("fasle");
// }

// const a = prompt("sonni kiriting ");
// let counter = [];
// for (let i = 1; i <= a; i++) {
//   if (i % 2 == 1) {
//     counter.push(i);
//     console.log(i);
//   }
// }
// console.log(counter);
// console.log(counter.length);

/* 1-misol*/

// const n = prompt(" n sonini kiriting ");

// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

/* 2-misol*/

// const n = prompt("n sonini kiriting");

// for (let i = n; i >= 1; i--) {
//   console.log(i);
// }

/* 3-misol*/

// const n = prompt("n sonini kiriting");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log("yigindisi = " + sum);

/* 4-misol*/

// const n = prompt("n sonini kiriting");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//     console.log(i);
//   }
// }
// console.log(" juft sonlarni yigindisi = " + sum);

/* 5-misol*/

// const n = prompt("n sonini kiriting");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 1) {
//     sum += i;
//     console.log(i);
//   }
// }
// console.log(" toq sonlarni yigindisi = " + sum);

/* 6-misol*/

// const n = prompt("n sonini kiriting");

// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }
// console.log(n + " sonning qoldiqsiz bolinuvchiilari ");

/* 7-misol*/

// const n = prompt("n sonini kiriting");
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//     sum += i;
//   }
// }
// console.log(n + " sonning qoldiqsiz bolinuvchiilari ");
// console.log(sum + " bolinivchilkarni yogindisi  ");

/* 8-misol*/

// const n = prompt("n sonini kiriting");
// for (let i = 2; i <= n; i++) {
//   if (n % i === 0) {
//     console.log("bu tub son emas ");
//   } else {
//     ("bu tub son !");
//   }
// }

// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// let n = prompt("n sonni kiriting");
// for (let i = 1; i <= n; i++) {
//   if (isPrime(i)) {
//     console.log(i + " tub son.");
//   } else {
//     console.log(i + " tub son emas.");
//   }
// }

/* 9-misol*/

// let k = prompt(" k soninoi kiriting ");
// let n = prompt(" n soninoi kiriting ");

// for (let i = 0; i < n; i++) {
//   console.log(k);
// }

/* 10-misol*/

// let a = prompt(" a soninoi kiriting ");
// let b = prompt(" b soninoi kiriting ");

// for (let i = a; i <= b; i++) {
//   console.log(i);
// }

/* 11-misol*/

// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting b adan katta bosin ");

// for (let i = b - 1; i > a; i--) {
//   console.log(i);
// }

// console.log(`soni ${b - a - 1}`);

/* 12-misol*/

// let a = prompt("1kg kanfet narxini kiriting");

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}kg  ${i * a} so'm`);
// }

/* 13-misol*/

// let a = prompt("1kg konfet narxini kiriting");

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i * 100}gr ${(a * i) / 10} so'm`);
// }

/* 14-misol*/

// let a = prompt("1kg konfet narxini kiriting");

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i / 10 + 1}kg = ${a * (i / 10 + 1)} so'm`);
// }

/* 15-misol*/

// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting (a<b) a soni b sonidan kichik bolsisn");
// let m = b - a + 1; // // m bu a dan b gacha bo'lgan raqamlar soni

// console.log(((Number(a) + Number(b)) / 2) * m);

/* 16-misol*/

// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting (a<b)  a soni b sonidan kichik bolsisn");
// let n = 1;

// for (let i = a; i <= b; i++) {
//   n *= i;
// }

// console.log(`ko'paytmasi ${n} ga teng`);

/* 17-misol*/

// let a = prompt("a sonini kiriting");
// let b = prompt("b sonini kiriting (a<b) a soni b sonidan kichik bolsisn");
// let n = 1;

// for (let i = a; i <= b; i++) {
//   n += i * i;
// }

// console.log(`kvadratlarining yig'indisi ${n - 1} ga teng`);

/* 18-misol*/

// let n = prompt("n sonini kiriting (n>0 n soni 0 lad katta bolsin)");
// let s = 0;

// for (let i = 1; i <= n; i++) {
//   s += 1 / i;
// }

// console.log(`S = ${s}`);

/* 19-misol*/

// let n = prompt("n sonini kiriting (n>0 n soni 0 lad katta bolsin)");
// let s = 1;

// for (let i = 1; i <= n; i++) {
//   s += i * i;
// }

// console.log(`S = ${s - 2}`);

/* 20-misol*/

// let n = prompt("n sonini kiriting (n>0 n soni 0 dan katta bolsin )");
// let s = 1;

// for (let i = 1; i <= n; i++) {
//   s *= 1 + i / 10;
// }

// console.log(`S = ${s}`);
