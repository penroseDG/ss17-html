// Sử dụng Math.abs() gía trị tuyệt đối làm tròn thành số nguyên 
console.log(Math.abs(-5.5)); // Kết quả: 5.5 (trả về giá trị tuyệt đối, bỏ dấu âm)
console.log(Math.abs(10));   // Kết quả: 10 (giữ nguyên vì số đã dương)

// Sử dụng Math.ceil() làm tròn lên 
console.log(Math.ceil(4.4)); // Kết quả: 5 (làm tròn lên số nguyên gần nhất)
console.log(Math.ceil(5.8)); // Kết quả: 6 (làm tròn lên số nguyên gần nhất)

// Sử dụng Math.floor() làm tròn xuống 
console.log(Math.floor(5.7)); // Kết quả: 5 (làm tròn xuống số nguyên nhỏ hơn hoặc bằng)
console.log(Math.floor(6.1)); // Kết quả: 6 (làm tròn xuống số nguyên nhỏ hơn hoặc bằng)

// Sử dụng Math.round() làm tròn số trên 5 thì tăng lên 1 đơn vị còn dưới 5 thì làm tròn xuống số nguyên bằng nó 
console.log(Math.round(10.1)); // Kết quả: 10 (làm tròn xuống bằng 10 vì nó gần nhất hoặc bằng )
console.log(Math.round(20.6)); // Kết quả: 21 (làm tròn lên vì 0.6 gần 21 hơn)
