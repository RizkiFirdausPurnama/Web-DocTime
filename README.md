# 🚀 Prototipe Website DocTime

> Ini adalah prototipe website statis untuk "DocTime", sebuah layanan konsultasi kesehatan online. Proyek ini dibuat berdasarkan desain UI yang diberikan dan mencakup alur autentikasi pengguna (login dan sign up) serta beberapa halaman utama aplikasi.

Proyek ini menggunakan **HTML**, **CSS**, dan **JavaScript** murni, dengan fokus pada validasi formulir sisi klien (*client-side*) dan navigasi antar halaman.

## ✨ Fitur Utama

* **📂 Struktur File Terpisah**: Kode diorganisir dengan memisahkan file HTML (struktur), CSS (gaya), dan JavaScript (logika).
* **🖥️ Popup Login**: Fitur login ditampilkan sebagai *popup modal* di halaman utama (`index.html`) tanpa perlu pindah halaman.
* **📝 Halaman Pendaftaran**: Halaman `signup.html` terpisah untuk mendaftarkan pengguna baru.
* **✔️ Validasi Formulir**: Formulir login dan pendaftaran memiliki validasi:
  * Semua kolom wajib diisi.
  * Kolom email harus menggunakan domain `@gmail.com`.
* **👤 Alur Pengguna**:
  1. Pengguna baru mendaftar di `signup.html`.
  2. Setelah berhasil, pesan sukses akan muncul.
  3. Pengguna otomatis diarahkan kembali ke `index.html` untuk login.
  4. Pengguna login menggunakan popup di `index.html`.
  5. Setelah berhasil, pengguna diarahkan ke `home.html`.
* **🗺️ Navigasi Multi-Halaman**: Pengguna dapat bernavigasi dari `home.html` ke halaman `chat.html` dan `schedule.html`.

## 📁 Struktur File

Proyek ini diorganisir dengan struktur folder sebagai berikut:

## 📖 Gambaran Halaman

1. **`index.html` (Loading Page)**
   * Ini adalah halaman pertama yang dilihat pengguna.
   * Menampilkan tombol "Login" yang memicu popup modal dan tombol "Daftar" yang mengarahkan ke `signup.html`.

2. **`signup.html` (Sign Up Page)**
   * Berisi formulir pendaftaran (Nama, Email, Password).
   * Logika JavaScript (`script.js`) akan memvalidasi input saat tombol "Create Account" diklik.
   * Jika valid, formulir akan disembunyikan, pesan sukses akan ditampilkan, dan pengguna akan diarahkan kembali ke `index.html` setelah 2 detik.

3. **`home.html` (Home Page)**
   * Halaman "beranda" yang diakses setelah pengguna berhasil login.
   * Berisi navigasi utama ke fitur-fitur lain seperti "Chat" dan "Schedule".

4. **`chat.html` (Chat Dokter Page)**
   * Halaman statis yang mewakili antarmuka untuk fitur chat dengan dokter.

5. **`schedule.html` (Schedule Page)**
   * Halaman statis yang mewakili antarmuka untuk membuat jadwal dokter.

## 🛠️ File Pendukung

* **`css/style.css`**
  * Berisi semua aturan styling untuk setiap halaman.
  * Mengatur tata letak (*layout*), warna, font, dan latar belakang gradien yang konsisten di seluruh situs.
* **`js/script.js`**
  * Berisi semua logika interaktif.
  * Menggunakan `DOMContentLoaded` untuk memastikan skrip berjalan setelah halaman dimuat.
  * Mengelola *event listener* untuk tombol login, popup, dan pengiriman formulir.
  * Menangani semua logika validasi formulir dan pengalihan halaman (`window.location.href`).

## 🚀 Cara Menggunakan

1. **Struktur Folder**: Pastikan semua file dan folder diletakkan persis seperti pada bagian **Struktur File**.
2. **Buka Halaman**: Buka file `index.html` di browser web pilihan Anda (misalnya Chrome, Firefox).
3. **Placeholder Gambar**: Ganti semua URL `https://placehold.co/...` di file HTML dengan path ke gambar lokal Anda.
4. **Uji Alur Pendaftaran**:
   * Klik "Daftar" di `index.html`.
   * Isi formulir di `signup.html` (pastikan email diakhiri `@gmail.com`).
   * Klik "Create Account". Anda akan melihat pesan sukses dan diarahkan kembali.
5. **Uji Alur Login**:
   * Klik "Login" di `index.html`.
   * Isi formulir di popup.
   * Klik "Login". Anda akan diarahkan ke `home.html`.

## 💻 Teknologi yang Digunakan

* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
