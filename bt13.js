let principal = Number(prompt("Nhap so tien goc vao day : "));
let months = Number(prompt("Nhap so thang gui vao day : "));
let rate = 4.3 / 100;
let interest = principal * (rate / 12) * months;
alert("so tien lai gui sau : " + months + " la : " + interest.toLocaleString("vi", { style: "currency", currency: "VND" }));
