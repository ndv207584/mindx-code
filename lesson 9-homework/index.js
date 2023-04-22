// Math.pow(x,y)
// x là cơ số
// y là số mũ

//Bài 1
let num = [3, 4, 5, 6, 4, 5, 6, 7, 7, 77];
let binhphuong = [];
for(let i = 0; i < num.length; i++) {
    binhphuong.push(num[i] ** 2);
}
console.log("Bình phương của từng số là:", binhphuong);


//Bài 2 - em chưa làm được ạ =((
let num2 = [3, 5, 6, 6, 7, 8, 8, 8, 9, 9, 33];
for (let i = 0; i < num2.length; i++) {
    let flag = 0;
    if (num2[i] < 2) {
        flag=1;
        break;
    } else {
        for (let j = 2; j < num2[i]; j++) {
            if  (num2[i] % j == 0) {
                flag = 1;
                break;
            }
            flag = 0;
        }
    }
    if(num2[i] > 1 && flag === 0) {
        console.log(num2[i]);
    }
}



//Bài 3
let GioHang = [];
let qua1 = {
    name: "Táo",
    price: "$1",
    color: "red",
    madein: "Việt Nam",
    expiry: "1/5/2023",
    distribution_unit: {
        company: "MidX",
        address: "Hà Nội"
    },
};

let qua2 = {
    name: "Nho",
    price: "$2",
    color: "purple",
    madein: "Việt Nam",
    expiry: "2/5/2023",
    distribution_unit: {
        company: "MidX",
        address: "Hà Nội"
    },
};

let qua3 = {
    name: "Ổi",
    price: "$3",
    color: "green",
    madein: "Việt Nam",
    expiry: "3/5/2023",
    distribution_unit: {
        company: "MidX",
        address: "Hà Nội"
    },
};

GioHang.push(qua1, qua2, qua3);
for(let i = 0; i < GioHang.length; i++) {
    console.log("STT:", i+1);
    console.log("Tên sản phẩm:", GioHang[i].name);
    console.log("Giá:", GioHang[i].price);
    console.log("Nơi sản xuất:", GioHang[i].madein);
    console.log("Ngày hết hạn:", GioHang[i].expiry);
    console.log("Đơn vị phân phối:", GioHang[i].distribution_unit.company + "-" +  GioHang[i].distribution_unit.address);
}    

let index = Number(prompt("Nhập STT có chỗ cần sửa"));
for (let i = 0; i < GioHang.length; i++) {
        if(index = i + 1) {
            let suangayhethan = prompt("Sửa ngày hết hạn");
            GioHang[i].expiry = suangayhethan;
            console.log(`Ngày hết hạn mới của ${GioHang[i].name} là:`, GioHang[i].expiry);
        }
}