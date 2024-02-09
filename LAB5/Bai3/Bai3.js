function doanso(){
    var songaunhien = Math.floor(Math.random() * 2);
    var sonhap = parseInt(prompt("Hãy đoán xem kết quả là 0 hay 1: "));
    while (sonhap !== 0 && sonhap !== 1){
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