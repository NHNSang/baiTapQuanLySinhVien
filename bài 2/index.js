// tạo mãng lấy các input
var arrIdInput = [
    'txtMaSV',
    'txtTenSV',
    'txtEmail',
    'txtPass',
    'txtNgaySinh',
    'khSV',
    'txtDiemToan',
    'txtDiemLy',
    'txtDiemHoa',
];
console.log(arrIdInput)

// Tạo mãng để lưu trữ các dữ liệu
var arrSinhVien = [];


// -----Lấy dữ liệu từ id input ---------
function getValueUser(){
    // Ngăn chặn reload lại trang
    event.preventDefault();

    // Tạo biến sinh viên
    var sinhVien = new SinhVien();
    console.log(sinhVien)

    // Chạy vòng lặp để gọi tới các thẻ của id input
    for(var i = 0 ; i < arrIdInput.length ; i++){
        var valueIdInput = document.getElementById(arrIdInput[i]).value;

        // Lưu trữ dữ liệu
        sinhVien[arrIdInput[i]] = valueIdInput;
    }
    console.log(sinhVien)

    // Đẩy dữ liệu bằng push
    arrSinhVien.push(sinhVien);
    // Lưu vào localstorage
    saveLocalStore("arrSinhVien",arrSinhVien);
    randerDisplay()

    // gọi tới id để clear
    document.getElementById("formQLSV").reset();
}

// -----Rander dữ liệu lên giao diện ---------

// Rander dữ liệU
function randerDisplay(arr){
    if(!arr){
        arr = arrSinhVien
    }
    // Tạo biến để rander
    var content = '';
    for(var z = 0; z < arr.length; z++){
        // tạo lớp đối tượng để lấy từ local
        var sinhVien = new SinhVien();
        var valueSinhVien = arr[z];
        // Coppy để ra phương thức
        Object.assign(sinhVien,valueSinhVien);
        content += `
        <tr>
            <td>${sinhVien.txtMaSV}</td>
            <td>${sinhVien.txtTenSV}</td>
            <td>${sinhVien.txtEmail}</td>
            <td>${sinhVien.txtNgaySinh}</td>
            <td>${sinhVien.khSV}</td>
            <td>${sinhVien.tinhDiemTrungBinh()}</td>
            <td>
            <button onclick="deleteUser('${sinhVien.txtMaSV}')"  class="btn btn-danger">Delete</button>
            <button class="btn btn-dark">Repair</button>
            </td>
        </tr>
        `
    }
    document.getElementById("tbodySinhVien").innerHTML = content;
}

// -----Tạo tính năng xoá ---------
function deleteUser(maSV){
    var index = -1;
    for(var i = 0; i <arrSinhVien.length;i++){
        var sinhVien = arrSinhVien[i];
        if(sinhVien.txtMaSV == maSV){
            index = i
        }
    }
    if(index != -1){
        arrSinhVien.splice(index,1);
        saveLocalStore("arrSinhVien",arrSinhVien);

        randerDisplay()
    }
}
// ----------------------------------
// Lưu trử locolStorage saveLocalStore

// ép kiểu JSON.stringify
// lưu xún local localStorage.setItem("...";...)
// truy suất local localStorage.getItem("...";...)
// Chuyển dữ liệu JSON.parse

// Xoá localStorage.removeItem

// -----Chức năng lưu trữ xún localStorage-------
function saveLocalStore(key,value){
    // Chuyển dữ liệu object, array về chuỗi JSON
    var valueString = JSON.stringify(value);
    localStorage.setItem(key,valueString)
}

// -----Chức năng lấy dữ liệu localStorage-------
function getLocalStore(key){
    var arrLocal = JSON.parse(localStorage.getItem(key));
    // Lưu ý có 2 trường hợp: 1)Có dữ liệ 2)Dữ liệu null
    if(arrLocal){
        arrSinhVien = arrLocal;
        randerDisplay()
    }
}
getLocalStore('arrSinhVien')