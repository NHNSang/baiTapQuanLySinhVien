console.log('Hello');
// Tạo hàm giúp xử lí lấy thông tin người dùng
function getValueForm() {
  console.log('Lôhe');
  // Xử lí bên trong hàm, lấy thông tin người dùng, lưu trữ thông tin một sinh viên vào bên trong một object
  var sinhVien = {
    tinhDiemTrungBinh: function () {
      var diemTrungBinh = (this.diemToan + this.diemVan) / 2;
      return diemTrungBinh;
    },

    // nếu trên 8 là giỏi, còn dưới 8 thì bth
    xepLoai: function () {
      var diemTrungBinh = this.tinhDiemTrungBinh();
      if (diemTrungBinh >= 8) {
        return 'Giỏi';
      } else {
        return 'Bình thường';
      }
    },
  };
  sinhVien.maSV = document.getElementById('txtMaSV').value;
  sinhVien.tenSinhVien = document.getElementById('txtTenSV').value;
  sinhVien.loaiSinhVien = document.getElementById('loaiSV').value;
  sinhVien.diemToan = document.getElementById('txtDiemToan').value * 1;
  sinhVien.diemVan = document.getElementById('txtDiemVan').value * 1;

  // dom tới các thẻ span để render lên giao diện các thông tin từ người dùng nhập
  document.getElementById('spanTenSV').innerHTML = sinhVien.tenSinhVien;
  document.getElementById('spanMaSV').innerHTML = sinhVien.maSV;
  document.getElementById('spanLoaiSV').innerHTML = sinhVien.loaiSinhVien;
  document.getElementById('spanDTB').innerHTML = sinhVien.tinhDiemTrungBinh(); // undifined
  document.getElementById('spanXepLoai').innerHTML = sinhVien.xepLoai();
}

// dom tới nút button và gán hàm vào sự kiện onclick
document.querySelector('.btn-success').onclick = getValueForm;
