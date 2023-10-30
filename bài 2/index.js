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

// Tạo mãng lấy các id Span 
var arrIdSpan = [
    'spanMaSV',
    'spanTenSV',
    'spanEmailSV',
    'spanMatKhau',
    'spanNgaySinh',
    'spanKhoaHoc',
    'spanToan',
    'spanLy',
    'spanHoa',
]


// Tạo mãng để lưu trữ các dữ liệu
var arrSinhVien = [];


// -----Lấy dữ liệu từ id input ---------
function getValueUser(){
    // Ngăn chặn reload lại trang
    event.preventDefault();

    // Tạo biến sinh viên
    var sinhVien = new SinhVien();
    console.log(sinhVien)

    // Tạo biến để kiểm tra Validation
    var isValid = true;

    // Chạy vòng lặp để gọi tới các thẻ của id input
    for(var i = 0 ; i < arrIdInput.length ; i++){
        var valueIdInput = document.getElementById(arrIdInput[i]).value;

        // Lưu trữ dữ liệu
        sinhVien[arrIdInput[i]] = valueIdInput;

        // ------Validation-----
        // Kiểm tra dữ liệu đầu vào từ người dùng nếu ko nhập sẽ hiện thông báo
        // isValid = isValid && checkEmptyValue(valueIdInput,arrIdSpan[i])

        // Kiểm tra dữ liệu email
        // if(arrIdInput[i] == 'txtEmail'){
        //     checkEmailValue(valueIdInput,arrIdSpan[i])
        // }

        // Kiểm tra dữ liệu mật khâu
        // if(arrIdInput[i]="txtPass"){
        //     isValid = checkMinMaxVulua(valueIdInput,arrIdSpan[i],6,10)
        // }

        if(arrIdInput[i] == "txtEmail"){
            isValid &= checkEmptyValue(valueIdInput,arrIdSpan[i]) && checkEmailValue(valueIdInput,arrIdSpan[i]);
        }
        else if(arrIdInput[i] == "txtPass"){
            isValid &= checkEmptyValue(valueIdInput,arrIdSpan[i]) && checkMinMaxVulua(valueIdInput,arrIdSpan[i],6,10);
        }
        else{
            isValid = checkEmptyValue(valueIdInput,arrIdSpan[i])
        }
    }
    console.log(sinhVien)
    if(isValid){
    // Đẩy dữ liệu bằng push
    arrSinhVien.push(sinhVien);
    // Lưu vào localstorage
    saveLocalStore("arrSinhVien",arrSinhVien);
    randerDisplay()

    // gọi tới id để clear
    document.getElementById("formQLSV").reset();
    }
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
        var sinhVien = new SinhVien();
        var valueSinhVien = arr[z];
        Object.assign(sinhVien,valueSinhVien),
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
            <button onclick="getInforUser('${sinhVien.txtMaSV}')" class="btn btn-dark">Edit</button>
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

// ---Lấy dữ liệu cũ nếu sai thì cho người dùng sửa (Chức năng edit)----
function getInforUser(maSV){
    var sinhVien ={};
    for(var i = 0; i < arrSinhVien.length ; i++){
        if(arrSinhVien[i].txtMaSV == maSV){
            sinhVien = arrSinhVien[i];
        }
        
    }
    console.log(sinhVien)
    for(var z = 0; z < arrIdInput.length ; z++){
        document.getElementById(arrIdInput[z]).value = sinhVien[arrIdInput[z]];
    }

}







// ---------Tạo localStorage------------------
// B1: Lưu dữ liệu
function saveLocalStore(key,value){
    var valueString = JSON.stringify(value);
    localStorage.setItem(key,valueString);
}
// B2: Đưa dữ liệu lên giao diện
function getLocalStore(key){
    var arrLocal = JSON.parse(localStorage.getItem(key));
    if(arrLocal){
        arrSinhVien = arrLocal;
        randerDisplay()
    }
}
getLocalStore('arrSinhVien');