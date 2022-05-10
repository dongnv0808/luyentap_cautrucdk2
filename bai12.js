function tinhToan(){
    let tienVay = document.getElementById('tienVay').value;
    tienVay = parseInt(tienVay);
    let laiSuat = document.getElementById('laiSuat').value;
    laiSuat = parseInt(laiSuat);
    let kyHan = document.getElementById('kyHan').value;
    kyHan = parseInt(kyHan);

    laiSuatThang = tienVay * (laiSuat/100) / kyHan;
    document.getElementById('SotienVay').innerHTML = `So tien vay: ${tienVay} VNĐ`;
    document.getElementById('soThangChoVay').innerHTML = `Ky han: ${kyHan} tháng`;
    document.getElementById('laiSuatHangThang').innerHTML = `Lai suat moi thang ${laiSuatThang} VNĐ`;
}