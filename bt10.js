let check = Number(prompt("nhap so ban muon kiem tra xem co phai so chinh phuong khong : ?? "));
let n = check < 0 ? console.log(check + " khong phai so chinh phuong") : Math.sqrt(check) % 1 === 0 ? console.log(check + " la so chinh phuong") : console.log(check + " khong phai so chinh phuong");
