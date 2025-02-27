let num = Number(prompt("nhap vao so tien ban muon chuyen doi : "));
let num_after = num.toLocaleString("vi", { style: "currency", currency: "VND" });

alert("tien sau khi chuyen doi la : " + num_after);
