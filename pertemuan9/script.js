//1. Fungsi untuk Memuat Data dari Session Storage dan Menampilkannya
function displayGuest(){
    const guestListUI = document.getElementById('guestList');
    guestListUI.innerHTML = '';      //Reset Tampilan List


//Mengambil Data dari Session Storage, jika Kosong buat Array baru
let guests = JSON.parse(sessionStorage.getItem('guests')) || [];

guests.forEach((guest) => {
    let li = document.createElement('li');
    li.textContent = guest;
    guestListUI.appendChild(li);        //appendChild: menambah elemen
    });
}



//2. Fungsi untuk Menambah Data
function addGuest(){
    const input = document.getElementById('guestInput');
    const guestName = input.value;
    if (guestName === ''){
        alert ('Nama tidak boleh kosong!');
        return;
    }


//Ambil Data Lama
let guests = JSON.parse(sessionStorage.getItem ('guests')) || [];


//Tambah Data Baru ke Array
guests.push(guestName);


//Simpan kembali ke Storage dalam bentuk String
sessionStorage.setItem('guests', JSON.stringify(guests));


//Bersihkan Input dan Perbarui Tampilan
input.value = '';
displayGuest();
}



//3. Fungsi untuk Menghapus semua Data
function clearList() {
    if(confirm("Hapus semua data tamu di sesi ini?")) {
        sessionStorage.removeItem('guests');
        displayGuest();
    }
}



//Jalankan Fungsi Display saat Halaman pertama kali Dimuat
window.onload = displayGuest;
