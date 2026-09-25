// rumus
const conversions = {
    'c-ke-f': (n) => (n * 9/5) + 32,
    'c-ke-r': (n) => n * 4/5,
    'f-ke-c': (n) => (n - 32) * 5/9,
    'f-ke-r': (n) => (n - 32) * 4/9,
    'r-ke-c': (n) => n * 5/4,
    'r-ke-f': (n) => (n * 9/4) + 32
};

// satuan buat output si konversi
const satuan = {
    'c-ke-f': ['°C', '°F'], 
    'c-ke-r': ['°C', '°R'],
    'f-ke-c': ['°F', '°C'], 
    'f-ke-r': ['°F', '°R'],
    'r-ke-c': ['°R', '°C'], 
    'r-ke-f': ['°R', '°F']
};

// menangani event submit form
document.getElementById('formSuhu').addEventListener('submit', function(event) {
    event.preventDefault();

    // ambil input suhu
    const suhu = parseFloat(document.getElementById('suhuInput').value);
    // ambil tipe konversi
    const tipe = document.getElementById('tipeKonversi').value;

    // validasi input suhu
    if (isNaN(suhu)) {
        document.getElementById('hasil').innerText = 'Masukkan nilai suhu yang valid.';
        return;
    }
    // handle konversi suhu
    const hasil = conversions[tipe](suhu);

    // ambil satuan dari tipe konversi
    const [dari, ke] = satuan[tipe];
    document.getElementById('hasil').innerText =`${suhu}${dari} = ${hasil.toFixed(2)}${ke}`; //tofixed buat desimal

});