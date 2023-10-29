// --------B2: Tạo lớp đối tượng đẻ lưu trữ dữ liệu----------
// Lưu ý tạo biến trùng với id
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
    
    // Tính điểm TB
    this.tinhDiemTrungBinh = function (){
        diemTb = (this.txtDiemHoa * 1 + this.txtDiemLy * 1 + this.txtDiemToan * 1 ) / 3
        return diemTb;
        
    }
}

