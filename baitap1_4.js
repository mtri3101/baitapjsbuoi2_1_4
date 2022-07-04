//Bài 1: Xuất 3 số theo thứ tự tăng dần
// Mô hình 3 khối
/*
input: số a, b, c
output: sắp xếp thứ tự tăng dần 
process: 
    1: a > b > c
    2: a > c > b
    3: b > a > c
    4: b > c > a
    5: c > a > b
    6: c > b > a
*/

var a = 50;
var b = 35;
var c = 42;
if (a > b > c) {
  console.log("Sắp xếp theo thứ tự tăng dần: " + a + ", " + b + ", " + c);
} else if (a > c > b) {
  console.log("Sắp xếp theo thứ tự tăng dần: " + a + ", " + c + ", " + b);
} else if (b > a > c) {
  console.log("Sắp xếp theo thứ tự tăng dần: " + b + ", " + a + ", " + c);
} else if (b > c > a) {
  console.log("Sắp xếp theo thứ tự tăng dần: " + b + ", " + c + ", " + a);
} else if (c > a > b) {
  console.log("Sắp xếp theo thứ tự tăng dần: " + c + ", " + a + ", " + b);
} else {
  console.log("Sắp xếp theo thứ tự tăng dần: " + c + ", " + b + ", " + a);
}

// Bài 2: Chào hỏi thành viên trong gia đình
/*
input: member = bố, mẹ, anh trai, em gái
output: xin chào bố, mẹ, anh trai, em gái
process: 
    1. if member = bố => xin chào bố
    2. if member = mẹ => xin chào mẹ
    3. if member = anh trai => xin chào anh trai
    4. if member = em gái => xin chào em gái
*/

var dad = "";
var mom = "";
var brother = "";
var sister = "";
var member = "sister";

if ((member = dad)) {
  console.log("Xin chào bố");
} else if ((member = mom)) {
  console.log("Xin chào mẹ");
} else if ((member = brother)) {
  console.log("Xin chào anh trai");
} else {
  console.log("Xin chào em gái");
}

// Bài 3: Có bao nhiêu số chẵn, bao nhiêu số lẻ
/*
input: number 1 , number 2 , number 3
output: count
process: 
    1.number % 2 = 0 => số chẵn // = 1 => số lẻ
    2. even = số chẵn, nếu số thứ 2, 3 là số chẵn => even++
    3. odd = số lẻ = 3 - even
*/
var number1 = 45;
var number2 = 15;
var number3 = 92;
var odd = 0;
var even = 0;

if (number1 % 2 == 0) {
  even++;
}
if (number2 % 2 == 0) {
  even++;
}
if (number3 % 2 == 0) {
  even++;
}
odd = 3 - even;
console.log("Có", even + " số chẵn");
console.log("Có", odd + " số lẻ");

//Bài 4: Dự đoán loại tam giác
/*
input: cạnh a, b, c
output: loại tam giác
process: 
    1: if a = b = c => tam giác đều
    2: if a = b != c || a = c != b || b = c != a => tam giác cân
    3: if a > b > c || a > c > b => if a^2 = b^2 + c^2 = > tam giác vuông
       if b > a > c || b > c > a => if b^2 = a^2 + c^2 = > tam giác vuông
       if c > a > b || c > b > a => if c^2 = b^2 + a^2 = > tam giác vuông
    4: Tam giác thường
*/

var a1 = 3;
var b1 = 3;
var c1 = 3;
if (a1 === b1 && a1 === c1) {
  console.log("Đây là tam giác đều");
} else if (
  (a1 === b1 && a1 !== c1) ||
  (a1 === c1 && a1 !== b1) ||
  (b1 === c1 && b1 !== a1)
) {
  console.log("Đây là tam giác cân");
} else if (
  Math.pow(a1, 2) === Math.pow(b1, 2) + Math.pow(c1, 2) ||
  Math.pow(b1, 2) === Math.pow(a1, 2) + Math.pow(c1, 2) ||
  Math.pow(c1, 2) === Math.pow(a1, 2) + Math.pow(b1, 2)
) {
  console.log("Đây là tam giác vuông");
} else {
  console.log("Đây là tam giác thường");
}

