let a = Number(prompt("nhap so a vao phuong trinh : "));
let b = Number(prompt("nhap so b vao phuong trinh : "));
let c = Number(prompt("nhap so c vao phuong trinh : "));

let delta = Math.abs((b * b) - 4 * (a * c));
console.log(delta);

let x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
console.log(x1.toFixed(2));
let x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
console.log(x2.toFixed(2));

