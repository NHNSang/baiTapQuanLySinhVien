// ---------Cách 1 lấy dữ liêu từ người dùng-----------
// function getValueForm (){
//     // Tạo object để lưu trữ sinh viên
//     var sinhVien = {
//         // tạo hàm tính điểm trung bình
//         diemTrungBinh: function (){
//             var tinhDiemTurngBinh = (this.diemToan + this.diemHoa + this.diemLy) / 3;
//             return tinhDiemTurngBinh;
//         }
//     }

//     // link với các thẻ input
//     sinhVien.maSV = document.getElementById("txtMaSV").value;
//     sinhVien.tenSV = document.getElementById("txtTenSV").value;
//     sinhVien.emailSV = document.getElementById("txtEmail").value;
//     sinhVien.mayKhauSV = document.getElementById("txtPass").value;
//     sinhVien.namSinh = document.getElementById("txtNgaySinh").value;
//     sinhVien.khoaSv = document.getElementById("khSV").value;
//     sinhVien.diemToan = document.getElementById("txtDiemToan").value*1;
//     sinhVien.diemLy = document.getElementById("txtDiemLy").value*1;
//     sinhVien.diemHoa = document.getElementById("txtDiemHoa").value*1;
//     console.log(sinhVien)

// }

// --------Cách 2 ----------
// Để lấy dữ liệu nhanh hơn thì mình sẽ kết hợp mãng và chạy vòng lặp để lấy id của các input, làm cách này sẽ đở mất thời gian hơn các trên, vì cách trên chỉ mới 6 input giả sử như 10+ input thì việt dom tới các id là rất lâu

// --------B1: Gọi mãng chưa id----------
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
// --------B5: Tạo mãng để lưu trữ thông tin người dung----------
var arrSinhVien = [];


// --------B2: Tạo lớp đối tượng đẻ lưu trữ dữ liệu----------

// --------B3: Tạo đôi tượng từ lóp đối tượng----------
function getValueUser (){
    // Ngăn sự kiện reload lại trang
    event.preventDefault();

    // Tạo biến 
    var sinhVien = new SinhVien();
    console.log(sinhVien);

    // --------B4: Chạy vòng lặp----------
    // Chạy vòng lặp dữ liêu arrIdInput để lấy dữ liệu khi người dùng nhặp vào
    for (var i = 0; i < arrIdInput.length; i++){
        // Lấy dữ liệu khi người dùng nhập
        var valueIdInput = document.getElementById(arrIdInput[i]).value;
        console.log(valueIdInput);

        // Lưu trữ dữ liệu 
        sinhVien[arrIdInput[i]] = valueIdInput;
    }
    console.log(sinhVien)

    // tiếp tục b5 gọi tới mãng và dùng phương thức push để đưa dữ liẹu sinh vien vào trong mãng lưu trữ
    arrSinhVien.push(sinhVien); 
    console.log(arrSinhVien);
    
    randerDisplay()

    // Gọi tới id form để clear
    document.getElementById("formQLSV").reset();
}

// Hàm randerdisplay
function randerDisplay(arr){
    // Để tối ưu cho hàm thì 
    if(!arr){
        arr = arrSinhVien
    }
        // --------B6: rander lên giao diện----------
        var content = '';
        for (var z = 0 ; z < arr.length ; z++){
            // tạo biến dể đưa dữ liệu lên giao diệnn
            var valueSinhVien = arr[z]; 
            content += `
            <tr>
                <td>${valueSinhVien.txtMaSV}</td>
                <td>${valueSinhVien.txtTenSV}</td>
                <td>${valueSinhVien.txtEmail}</td>
                <td>${valueSinhVien.txtNgaySinh}</td>
                <td>${valueSinhVien.khSV}</td>
                <td>${valueSinhVien.tinhDiemTrungBinh()}</td>
                <td>
                    <button onclick="deleteUser('${valueSinhVien.txtMaSV}')" class="btn btn-danger">Xoá</button>
                    <button class="btn btn-dark">Sửa</button>
                </td>

            </tr> 
            `
        }
        console.log(content)
        document.getElementById("tbodySinhVien").innerHTML = content;
}

// Chức năng xoá sinh viên
function deleteUser (maSV){
    var index = -1;
    for(var i = 0 ; i < arrSinhVien.length ; i++){
        var sinhVien =  arrSinhVien[i];
        if(sinhVien.txtMaSV == maSV){
            index = i
        }
    }
    if(index != -1){
        arrSinhVien.splice(index,1);
        randerDisplay()
    }
}

document.querySelector(".form-group button.btn-success").onclick = getValueUser;

