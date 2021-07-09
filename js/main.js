// Bài tập 1 
document.getElementById("traCuu").addEventListener("click", traCuu)

function traCuu() {
    var diemChuanIn = document.getElementById("diemChuan").value
    var diemChuan = parseInt(diemChuanIn)

    var mon1In = document.getElementById("mon1").value
    var mon1 = parseInt(mon1In)
    var mon2In = document.getElementById("mon2").value
    var mon2 = parseInt(mon2In)
    var mon3In = document.getElementById("mon3").value
    var mon3 = parseInt(mon3In)

    // Trường hợp 3 môn đều điểm liệt
    if (mon1 == 0 || mon2 == 0 || mon3 == 0) {
        var divKQ = document.getElementById("result")
        divKQ.style.display = "block"

        var spanKQ = document.getElementById("thongBao")
        spanKQ.innerHTML = "Bạn không đạt vì có 1 môn bị điểm liệt!"
    }
    else {
        var uuTien = diemUuTien()
        var tong = mon1 + mon2 + mon3 + uuTien
        // Xuất điểm tổng kết (Đậu)
        if (tong >= diemChuan) {
            var divKQ = document.getElementById("result")
            divKQ.style.display = "block"

            var spanKQ = document.getElementById("thongBao")
            spanKQ.innerHTML = "Chúc mừng bạn đã trúng tuyển với tổng điểm là: " + tong
        }
        // Rớt và tính số điểm thiếu
        else {
            var divKQ = document.getElementById("result")
            divKQ.style.display = "block"

            var spanKQ = document.getElementById("thongBao")
            spanKQ.innerHTML = "Rất tiếc, bạn đã rớt"
        }
    }
}

// Xét điểm Ưu Tiên
function diemUuTien() {
    var uuTien = khuVuc() + doiTuong()
    return uuTien
}

// Xét khu vực
function khuVuc() {
    var a = document.getElementById("kvA").checked
    var b = document.getElementById("kvB").checked
    var c = document.getElementById("kvC").checked
    var x = document.getElementById("kvX").checked

    if (a) {
        return 2
    }
    else if (b) {
        return 1
    }
    else if (c) {
        return 0.5
    }
    else if (x) {
        return 0
    }
}

// Xét đối tượng
function doiTuong() {
    var d = document.getElementById("dt0").checked
    var e = document.getElementById("dt1").checked
    var f = document.getElementById("dt2").checked
    var g = document.getElementById("dt3").checked

    if (e) {
        return 2.5
    }
    else if (f) {
        return 1.5
    }
    else if (g) {
        return 1
    }
    else if (d) {
        return 0
    }
}

// ================================================
// Bài tập 2
document.getElementById("tinh").addEventListener("click", tinh)

function tinh() {
    var hoTen = document.getElementById("name").value
    var soTien = tienDien()
    var divTien = document.getElementById("tien")
    divTien.style.display = "block"

    var p = "Số tiền điện của khách hàng " + hoTen + " là: " + soTien + "VND"

    var spanHoaDon = document.getElementById("hoaDon")
    spanHoaDon.innerHTML = p
}

function tienDien() {
    var dtt = parseInt(document.getElementById("kW").value)

    if (dtt <= 50) {
        return dtt * 500
    }
    else if (dtt > 50 && dtt <= 100) {
        return 50 * 500 + (dtt - 50) * 650
    }
    else if (dtt > 100 && dtt <= 200) {
        return 50 * 500 + 50 * 650 + (dtt - 100) * 850;
    }
    else if (dtt > 200 && dtt <= 350) {
        return 50 * 500 + 50 * 650 + 100 * 850 + (dtt - 200) * 1100;
    }
    else {
        return 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (dtt - 350) * 1300;
    }
}

// ================================================
// Bài tập 3
document.getElementById("thuNhap").addEventListener("click", thuNhap)

function thuNhap() {
    var name = document.getElementById("name").value
    var thue = thueCaNhan()

    var divThue = document.getElementById("thue")
    divThue.style.display = "block"

    var p = "Thuế thu nhập cá nhân của công dân " + name + " là: " + thue + " VNĐ";
    var spanThue = document.getElementById("thueCaNhan")
    spanThue.innerHTML = p
}

function thueCaNhan() {
    var thuNhap = thuNhapChiuThue()

    if (thuNhap <= 60000000) {
        return thuNhap * 0.05;
    }
    else if (thuNhap > 60000000 && thuNhap <= 120000000) {
        return thuNhap * 0.1;
    }
    else if (thuNhap > 120000000 && thuNhap <= 210000000) {
        return thuNhap * 0.15;
    }
    else if (thuNhap > 210000000 && thuNhap <= 384000000) {
        return thuNhap * 0.20;
    }
    else if (thuNhap > 384000000 && thuNhap <= 624000000) {
        return thuNhap * 0.25;
    }
    else if (thuNhap > 624000000 && thuNhap <= 960000000) {
        return thuNhap * 0.30;
    }
    else {
        return thuNhap * 0.35;
    }
}

function thuNhapChiuThue() {
    var thuNhap = parseInt(document.getElementById("money").value)
    var soNguoi = parseInt(document.getElementById("people").value)

    return thuNhap - 4000000 - (soNguoi * 1600000)
}

// ================================================
// Bài tập 4
document.getElementById("btn").addEventListener("click", tienCap)

function tienCap() {
    var khachHang = document.getElementById("maKhachHang").value
    var tienCap = tinhTien()
    var divTien = document.getElementById("div")
    divTien.style.display = "block"
    var p = "Số tiền điện cáp của mã khách hàng " + khachHang + " là: " + tienCap + "$ ";
    var spanTien = document.getElementById("tienCap")
    spanTien.innerHTML = p
}

function tinhTien() {
    var dan = document.getElementById("nhaDan").checked
    var dN = document.getElementById("doanhNghiep").checked
    var chanel = document.getElementById("chanel").value
    var connect = document.getElementById("connect").value

    var fee = 0

    if (dan) {
        return 4.5 + 20.5 + (7.5 * chanel)
    }
    else if (dN) {
        fee = 15 + (50 * chanel)
        if (connect <= 10) {
            return fee + 75
        }
        else if (connect > 10) {
            return fee + 75 + ((connect - 10) * 12.5)
        }
    }
}