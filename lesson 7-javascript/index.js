var a = 9;
var b = 4;
var c = a % b;
var m = Math.round(c);
console.log("Phần nguyên: ",m); // 2,25(float) --> 2(int)
console.log("Phần dư: ", a % b);


// 3 loại biến

// let
// var
// consct

// Tên biến

// - chữ cái đầu tiên phải là kí tự và ko đc là số
// - ko dấu cách, ko tiếng Việt, ko ký tự đặc biệt (tuy nhiên có 1 số ký tự đặc biệt đc sử dụng là: _, $)

// var firstname = "Mindx" // camel case

// const PI = 3;
// PI = 6; // error


// console.log(x); //Bước 1
// var x = 1; 


// var x;
// console.log(x); // ==>hosting
// x = 1; 

// console.log(y);
// var y = 1; //underfined


// var a = "Hello";
// console.log(typeof(a));

// let a = 8;
// let b = 4;
// b = b + 1;
// console.log("Giá trị a: ", a);
// console.log("Giá trị b: ", b);
// console.log("Tổng là: ", a+b);
// console.log("Trừ là: ", a-b);
// console.log("Nhân là: ", a*b);
// console.log("Chia là: ", a/b);

// console.log("Tăng 1 đơn vị: ", ++b);// Cộng xong mới gán
// console.log("Tăng 1 đơn vị: ", b++); // Gán xong mới cộng

// console.log("Giảm 1 đơn vị: ", --a);// Trừ xong mới gán
// console.log("Giảm 1 đơn vị: ", a--); // Gán xong mới trừ


// let x = 3;
// let y = 3;
// x = y; // Gán y cho x
// x += 3; //x = y + 1
// x **= 3; // x = x^y // thực hiện phép tính trc và gán sau
// console.log(x);

// var a = "Hello";
// var b = "World";
// console.log(a + " " + b);

// var a = 2;
// var b = 2;
// a == b //true
// a != b // false
// a===b //true

// a > b // true
// a < b // false
// a >= b // true
// a <= b // true

// const x = true
// const y = false

// console.log(x && y) // false

// true&&true --> true
// true&&false --> false
// false&&false --> false
// false&&true --> false

// true||true -->true
// true||false --> true
// false||false --> false
// false||true --> true

// !true --> false
// !false --> true