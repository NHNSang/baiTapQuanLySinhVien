// xác định một số bước cần làm
// mảng chứa id của tất cả input cần lấy dữ liệu
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
];
// B3: Tạo một mảng lưu trữ thông tin người dùng
var arrSinhVien = [];
// B1: Tạo một hàm lấy dữ liệu từ người dùng
function getValueUser() {
  // var sinhVien = {}
  // sinhVien.maSv = txtMaSV
  // var txtMaSV = document.getElementById('txtMaSV').value;
  // var txtTenSV = document.getElementById('txtTenSV').value;
  // B2: Tạo một đối tượng dùng để lưu trữ thông tin sinh viên
  var sinhVien = new SinhVien();
  // chạy vòng lặp
  var isValid = true; // 0
  for (var i = 0; i < arrIdInput.length; i++) {
    var valueInput = document.getElementById(arrIdInput[i]).value;

    // gọi checkEmptyValue và thêm các dữ liệu vào để kiểm tra
    // sử dụng isValid để hứng các dữ liệu tới từ checkEmptyValue

    // trả về 0 hoặc 1  true && false ==> false
    // isValid = isValid && checkEmptyValue(valueInput, arrIdSpan[i]);
    // if (arrIdInput[i] == 'txtEmail') {
    //   // chỉ kiểm tra với input email
    //   checkEmailValue(valueInput, arrIdSpan[i]);
    // }
    // kiểm tra input mật khẩu về độ dài
    // if (arrIdInput[i] == 'txtPass') {
    //   isValid = checkMinMaxValue(valueInput, arrIdSpan[i], 6, 10);
    // }

    // Validation
    // email : kiểm tra rỗng và kiểm tra xem có phải email hay không
    // password : kiểm tra rỗng và kiểm tra độ dài ký tự
    // debugger;
    if (arrIdInput[i] == 'txtEmail') {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkEmailValue(valueInput, arrIdSpan[i]);
    } else if (arrIdInput[i] == 'txtPass') {
      isValid &=
        checkEmptyValue(valueInput, arrIdSpan[i]) &&
        checkMinMaxValue(valueInput, arrIdSpan[i], 6, 10);
    } else {
      isValid &= checkEmptyValue(valueInput, arrIdSpan[i]);
    }
    // sinhVien.txtMaSV
    sinhVien[arrIdInput[i]] = valueInput;
    // sinhVien[arrIdInput[0]]; // txtMaSV

    // Kiểm tra dữ liệu đầu vào từ người dùng
  }
  // i = 0,arrIdInput[i] = "txtMaSV", valueInput = document.getElementById("txtMaSV").value = SE140604, sinhVien[arrIdInput[i]] = valueInput
  // i = 1,arrIdInput[i] = "txtTenSV", valueInput = document.getElementById("txtTenSV").value = Lý Hải, sinhVien["txtTenSV"] = valueInput
  // isValid = 0 ==> false
  console.log(isValid);
  if (isValid) {
    // console.log(sinhVien);
    // // gọi tới mảng và dùng phương thức push để đưa dữ liệu sinh viên vào mảng lưu trữ
    // arrSinhVien.push(sinhVien);
    // saveLocalStore('arrSinhVien', arrSinhVien);
    // console.log(arrSinhVien);
    // // console.log(content);
    // renderDisplay();
    // // gọi tới form để xử lí reset value thông qua phương thức reset
    // document.getElementById('formQLSV').reset();
    return sinhVien;
  }
}

function addUser() {
  // preventDefault giúp ngăn chặn sự kiện reload lại trang
  event.preventDefault();
  var sinhVien = getValueUser();
  if (sinhVien) {
    arrSinhVien.push(sinhVien);
    // debugger;
    saveLocalStore('arrSinhVien', arrSinhVien);
    renderDisplay();
    document.getElementById('formQLSV').reset();
  }
}

function renderDisplay(arr) {
  // kiểm tra nếu như khi gọi hàm mà không truyền tham số thì lúc đó sẽ lấy cái mảng arrSinhVien ra sử dụng
  console.log(arr);
  // arr = undefined // false
  if (!arr) {
    arr = arrSinhVien;
  }

  // biến content giúp lưu trữ các chuỗi html khi chạy vòng lặp
  var content = '';
  // dùng vòng lặp đưa tất cả dữ liệu sinh viên đang có trong mảng lên giao diện
  for (var z = 0; z < arr.length; z++) {
    // khởi tạo một đối tượng để giúp các đối tượng được lấy từ local lên sẽ có phương thức
    var sinhVien = new SinhVien(); // name : Long
    var valueSinhVien = arr[z]; // name:"Long"
    // sử dụng object.assign để copy dữ liệu từ một đối tượng cũ cho một đối tượng mới, nhận vào 2 giá trị, giá trị đầu là đối tượng nhận, giá trị thứ 2 là đối tượng cho
    Object.assign(sinhVien, valueSinhVien);
    console.log(sinhVien);
    content += `
    <tr>
      <td>${sinhVien.txtMaSV}</td>
      <td>${sinhVien.txtTenSV}</td>
      <td>${sinhVien.txtEmail}</td>
      <td>${sinhVien.txtNgaySinh}</td>
      <td>${sinhVien.khSV}</td>
      <td>${sinhVien.tinhDiemTrungBinh()}</td>
      <td>
        <button onclick="deleteUser('${
          sinhVien.txtMaSV
        }')" class="btn btn-danger">Xoá</button>
        <button onclick="getInfoUser('${
          sinhVien.txtMaSV
        }')" class="btn btn-dark">Sửa</button>
      </td>
    </tr>
    `;
  }
  document.getElementById('tbodySinhVien').innerHTML = content;
}

// ---------------- Chức năng xoá sinh viên -------------------------
function deleteUser(maSV) {
  console.log('Tôi là xoá');
  console.log(maSV);
  var index = -1;
  for (var i = 0; i < arrSinhVien.length; i++) {
    var sinhVien = arrSinhVien[i];
    if (sinhVien.txtMaSV == maSV) {
      console.log(i);
      index = i;
    }
  }
  if (index != -1) {
    arrSinhVien.splice(index, 1);
    saveLocalStore('arrSinhVien', arrSinhVien);
    // gọi lại hàm render giao diện để update dữ liệu mới lên giao diện
    renderDisplay();
    console.log(arrSinhVien);
  }
  // arrSinhVien.splice()
}

// ------------- Chức năng edit sinh viên
function getInfoUser(maSV) {
  console.log(maSV);
  var sinhVien = {};
  for (var i = 0; i < arrSinhVien.length; i++) {
    if (arrSinhVien[i].txtMaSV == maSV) {
      sinhVien = arrSinhVien[i];
    }
  }
  console.log(sinhVien);
  // dùng dữ liệu đã lấy được và truyền lên inputs
  for (var z = 0; z < arrIdInput.length; z++) {
    // txtEmail
    document.getElementById(arrIdInput[z]).value = sinhVien[arrIdInput[z]];
    // set input mã sinh viên chỉ được đọc
    if (arrIdInput[z] == 'txtMaSV') {
      document.getElementById(arrIdInput[z]).readOnly = true;
    }
  }
}

function editValueUser() {
  var sinhVien = getValueUser();
  // 1 có dữ liệu sinh viên, 2 undifined
  // tìm tới vị trí của phần tử đang có dữ liệu cũ trong mảng và thay thế
  var index = -1;
  for (var i = 0; i < arrSinhVien.length; i++) {
    if (sinhVien.txtMaSV == arrSinhVien[i].txtMaSV) {
      index = i;
    }
  }
  document.getElementById('txtMaSV').readOnly = false;
  document.getElementById('formQLSV').reset();
  // CRUD ==> Create, Read, Update, Delete
  console.log(index);
  arrSinhVien[index] = sinhVien;
  saveLocalStore('arrSinhVien', arrSinhVien);
  renderDisplay();
}

document.querySelector('.btn-info').onclick = editValueUser;

// ----------------- Chức năng lưu dữ liệu xuống localStorage
function saveLocalStore(key, value) {
  // chuyển dữ liệu object, array về chuỗi JSON
  var valueString = JSON.stringify(value);
  localStorage.setItem(key, valueString);
}

// ----------------- Chức năng lấy dữ liệu từ localStorage
function getLocalStore(key) {
  var arrLocal = JSON.parse(localStorage.getItem(key));
  console.log(arrLocal);
  // có trường hợp xảy ra // có dữ liệu --- dữ liệu null
  if (arrLocal) {
    arrSinhVien = arrLocal;
    console.log(arrSinhVien);
    renderDisplay();
  }
}
getLocalStore('arrSinhVien');

// document.querySelector('.form-group button.btn-success').onclick = getValueUser;
// B4: Dùng mảng đang chứa các sinh viên, chạy vòng lặp và đưa tất cả thông tin sinh viên lên giao diện

// if ({}) {
//   console.log('Truthy');
// }

// Hướng dẫn sử dụng localstorage
// var arrSinhVien = [
//   {
//     name: 'Nghĩa',
//     tuoi: 12,
//   },
//   {
//     name: 'Đông',
//     tuoi: 13,
//   },
// ];

// console.log(typeof arrSinhVien);

// Lưu trữ dữ liệu xuống localStorage (setItem)
// setItem nhận vào 2 giá trị, thứ nhất là key dữ liệu giúp định danh dữ liệu, thứ 2 là dữ liệu cần lưu trữ
// var arrJson = JSON.stringify(arrSinhVien);
// console.log(typeof arrJson);
// localStorage.setItem('arrSinhVien', arrJson);
// localStorage.setItem('soDienThoai', '09678321');
// localStorage.setItem('tienLuong', 300000);

// // Truy xuất dữ liệu dưới localStorage (getItem)
// var tienLuong = localStorage.getItem('tienLuong');
// console.log(typeof tienLuong);
// var newArr = localStorage.getItem('arrSinhVien');
// var superArr = JSON.parse(newArr);
// console.log(superArr);

// // Xoá dữ liệu dưới localStorage (removeItem)
// localStorage.removeItem('soDienThoai');
