function checkMin(num1, num2, num3) {
    let min;
    if (num1 < num2) {
        if (num1 < num3) {
            min = num1;
        } else {
            min = num3;
        }
    } else if (num2 < num3) {
        min = num2;
    } else {
        min = num3;
    }
    return min;
}

let number1 = parseInt(prompt('Nhap vao so thu 1'));
let number2 = parseInt(prompt('Nhap vao so thu 2'));
let number3 = parseInt(prompt('Nhap vao so thu 3'));
let result = checkMin(number1, number2, number3);
alert('Gia tri nho nhat la: ' + result);