/* 
    - Algorithms: Giải thuật
    - Input -> Process -> Output
    - Xác định output => xác định input
    - Tìm lời giải (Tìm cách đơn giản nhất)
    - Tối ưu
*/

// Viết chương trình tính tuổi cho 1 người. Người dùng sẽ nhập năm sinh và chương trình sẽ xuất ra tuổi của người đó

/* 
    output: số tuổi
    input: năm sinh
*/
// Function là hàm nhóm 1 đống code chỉ dùng để thực hiện 1 chức năng duy nhất, tính chất  duy nhất cần sử dụng là reusable

function calculaterAge(yearOfBirth) {
    if(yearOfBirth >= 2023) {
        console.log("M chơi đồ à.");
    } else {
        console.log(2023 - yearOfBirth);
    }
}
calculaterAge(1998);
calculaterAge(2000);
calculaterAge(2001);
calculaterAge(2002);


// chung nhau thì dùng mảng
// [3,5,76,8,9,8,8]

function totalOfCompany(benefitOfEmployee) {
    let sum = 0;
    for(let i = 0; i < benefitOfEmployee.length; i++) {
        sum += benefitOfEmployee[i];
    }
    return sum; // ko có return thì giá trị lúc ra sẽ là undefined
}
let ACompany = totalOfCompany([2,3,45,9,19]);
let BCompany = totalOfCompany([2,3,-10]);
console.log(ACompany);
console.log(BCompany);


/* 
    input: money, numberOfProduct
    output: product

    List:
    - pepsi: $2
    - cocacola: $2
    - revine: $1
    - nutri boost: $2
    - dr.thanh: $1
    - KHONG DO(MTP): $3
*/

//let total = 10;
function vendingMachine(money, numberOfProduct) {
    switch (numberOfProduct) {
        case 1:
            console.log("Pepsi");
            return  2;
        case 2:
            console.log("Cocacola");
            return  2;
        case 3:
            console.log("Revine");
            return  1;
        case 4:
            console.log("Nutri Boost");
            return  2;
        case 5:
            console.log("KHONG DO(MTP)");
            return  1;
        case 6:
            console.log("Dr.Thanh");
            return  3;
        default:
            return 0;
    }
}

let total = prompt("Please insert money:");
if(isNaN(total)) {
    console.log("Có làm mới có ăn.");
} else if(!isNaN(total) && total > 0 && parseInt(total) === total) {
    while (total > 0) {
        let numberOfProduct = prompt("Please number of product");
        console.log("Nhập lựa chọn của bạn:");
        total = total - vendingMachine(numberOfProduct);
        if (total < 0) {
            console.log("Không đủ tiền mua");
            total;
        }
    }
} 




// let i = 10;
//while(điều kiện dừng: i > 0) {
//  console.log(i);
//  i = 0;
//}


//let fund = vendingMachine(10,1);
//console.log(fund);
