let r = Number(prompt(" nhap ban kinh vao day : "));
let h = Number(prompt(" nhap chieu cao vao day : "));
let pi = 3.14;

let s_xq = 2 * pi * r * h;
document.writeln(" S xung quanh la : " + s_xq.toFixed(2) + "<br>");
let s_tp = (2 * pi * r * h) + (2 * pi * r * r);
document.writeln(" S toan phan la : " + s_tp.toFixed(2) + "<br>");
let v = pi * r * r * h;
document.writeln(" V hinh tru la : " + v.toFixed(2) + "<br>");
let c = 2 * pi * r;
document.writeln(" C day la : " + c.toFixed(2) + "<br>");

