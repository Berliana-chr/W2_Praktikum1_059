function hitungUsia(tahunLahir) {
    const tahunSekarang = new Date().getFullYear();
    const usia = tahunSekarang - tahunLahir;
    return usia;
}

// menangani event submit form
document.getElementById('formUsia').addEventListener('submit', function(event) {
    event.preventDefault();

    // ambil input tahun lahir
    const InputTahunLahir = document.getElementById('tahunLahir').value;

    // konversi input jd tipe data number
    const tahunLahir = parseInt(InputTahunLahir, 10);

    // validasi input
    if (isNaN(tahunLahir) || tahunLahir <= 0) {
        document.getElementById('hasil').innerText = 'Masukkan tahun lahir yang valid.';
        return;
    }

    // manggil fungsi hitungUsia
    const usia = hitungUsia(tahunLahir);

    // validasi usia
    if (usia<0){
        document.getElementById('hasil').innerText = 'Tahun lahir tidak boleh lebih besar dari tahun sekarang!';
    } else {
        document.getElementById('hasil').innerText = `Usia Anda adalah ${usia} tahun.`;

    }
    
});