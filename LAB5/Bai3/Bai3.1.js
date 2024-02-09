function doanso(){
    var songaunhien = Math.floor(Math.random() * 11);
    var sonhap = parseInt(prompt("Hãy đoán xem kết quả là số nào từ 0 đến 10: "));
    while (sonhap < 0 || sonhap > 10){
        sonhap = parseInt(prompt("Số nhập không hợp lệ. Hãy nhập lại: "));
    }
    if (sonhap === songaunhien){
        alert("Chúc mừng bạn đã đoán trúng.");
    }else{
        alert("Số bạn đoán đã sai. Hãy thử lại.");
        doanso();
    }
}
doanso();