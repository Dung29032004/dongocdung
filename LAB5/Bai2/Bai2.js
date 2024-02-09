function ham(x){
    if (x % 2 == 0) {
        alert("Số chẵn");
    }else{
        alert("Số lẻ");
    }
}
var x = prompt("Nhập số: ");
        x = parseInt(x);
        ham(x);