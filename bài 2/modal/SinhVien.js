// Tạo lớp đối tượng
function SinhVien (){
    this.txtMaSV = '';
    this.txtTenSV = '';
    this.txtEmail = '';
    this.txtPass = '';
    this.txtNgaySinh = '';
    this.khSV = '';
    this.txtDiemToan = '';
    this.txtDiemLy = '';
    this.txtDiemHoa = '';

    // Hàm tính điểm trung bình 
    this.diemTrungBinhCong =  function(){
        var congThuctinhDiemTb = (this.txtDiemHoa * 1 + this.txtDiemLy * 1 + this.txtDiemToan * 1) / 3
        return congThuctinhDiemTb
    }
}