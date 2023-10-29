// tạo lớp đối tượng sinh viên
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

    this.tinhDiemTrungBinh = function(){
        diemTrungBinh = (this.txtDiemHoa * 1 + this.txtDiemLy *1 + this.txtDiemToan*1) / 3;
        return diemTrungBinh;
    }
}