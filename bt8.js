let d1 = new Date(prompt("nhap ngay thu 1 : "));
let d2 = new Date(prompt("nhap ngay thu 2 : "));

let d = (d2 - d1) / 3600 / 24 / 1000;
console.log("so ngay cach nhau la : ", Math.abs(d) + " ngay");
// 2025-02-25
// 2025-02-27