let r = Number(prompt("Nhập bán kính hình cầu:"));
let pi = 3.14;

let v = (4 / 3) * pi * r * r * r;
document.writeln("Thể tích hình cầu: " + v.toFixed(2) + "<br>");

let s = 4 * pi * r * r;
document.writeln("Diện tích bề mặt: " + s.toFixed(2) + "<br>");

let c = 2 * pi * r;
document.writeln("Chu vi lớn nhất: " + c.toFixed(2) + "<br>");
