# 🚀 Prototipe Website DocTime

Ini adalah prototipe website statis untuk "DocTime", sebuah layanan konsultasi kesehatan online. Proyek ini dibuat berdasarkan desain UI yang diberikan dan mencakup alur autentikasi pengguna (login dan sign up) serta beberapa halaman utama aplikasi.

Proyek ini menggunakan HTML, CSS, dan JavaScript murni, dengan fokus pada validasi formulir sisi klien (client-side) dan navigasi antar halaman.

## ✨ Fitur Utama

* **Struktur File Terpisah:** Kode diorganisir dengan memisahkan file HTML (struktur), CSS (gaya), dan JavaScript (logika).
* **Popup Login:** Fitur login ditampilkan sebagai popup modal di halaman utama (`index.html`) tanpa perlu pindah halaman.
* **Halaman Pendaftaran:** Halaman `signup.html` terpisah untuk mendaftarkan pengguna baru.
* **Validasi Formulir:** Formulir login dan pendaftaran memiliki validasi:
    * Semua kolom wajib diisi.
    * Kolom email harus menggunakan domain `@gmail.com`.
* **Alur Pengguna:**
    * Pengguna baru mendaftar di `signup.html`.
    * Setelah berhasil, pesan sukses akan muncul.
    * Pengguna otomatis diarahkan kembali ke `index.html` untuk login.
    * Pengguna login menggunakan popup di `index.html`.
    * Setelah berhasil, pengguna diarahkan ke `home.html`.
* **Navigasi Multi-Halaman:** Pengguna dapat bernavigasi dari `home.html` ke halaman `chat.html` dan `schedule.html`.

## 📁 Struktur File

Proyek ini diorganisir dengan struktur folder sebagai berikut:

## 📖 Gambaran Halaman

### `index.html` (Loading Page)

* Ini adalah halaman pertama yang dilihat pengguna.
* Menampilkan tombol "Login" yang memicu popup modal dan tombol "Daftar" yang mengarahkan ke `signup.html`.

### `signup.html` (Sign Up Page)

* Berisi formulir pendaftaran (Nama, Email, Password).
* Logika JavaScript (`script.js`) akan memvalidasi input saat tombol "Create Account" diklik.
* Jika valid, formulir akan disembunyikan, pesan sukses akan ditampilkan, dan pengguna akan diarahkan kembali ke `index.html` setelah 2 detik.

### `home.html` (Home Page)

* Halaman "beranda" yang diakses setelah pengguna berhasil login.
* Berisi navigasi utama ke fitur-fitur lain seperti "Chat" dan "Schedule".

### `chat.html` (Chat Dokter Page)

* Halaman statis yang mewakili antarmuka untuk fitur chat dengan dokter.

### `schedule.html` (Schedule Page)

* Halaman statis yang mewakili antarmuka untuk membuat jadwal dokter.

## 🛠️ File Pendukung

### `css/style.css`

* Berisi semua aturan styling untuk setiap halaman.
* Mengatur tata letak (layout), warna, font, dan latar belakang gradien yang konsisten di seluruh situs.

### `js/script.js`

* Berisi semua logika interaktif.
* Menggunakan `DOMContentLoaded` untuk memastikan skrip berjalan setelah halaman dimuat.
* Mengelola *event listener* untuk tombol login, popup, dan pengiriman formulir.
* Menangani semua logika validasi formulir dan pengalihan halaman (`window.location.href`).

## 🚀 Cara Menggunakan

1.  **Struktur Folder:** Pastikan semua file dan folder diletakkan persis seperti pada bagian **Struktur File**.
2.  **Buka Halaman:** Buka file `index.html` di browser web pilihan Anda (misalnya Chrome, Firefox).
3.  **Placeholder Gambar:** Ganti semua URL `https://placehold.co/...` di file HTML dengan path ke gambar lokal Anda.
4.  **Uji Alur Pendaftaran:**
    * Klik "Daftar" di `index.html`.
    * Isi formulir di `signup.html` (pastikan email diakhiri `@gmail.com`).
    * Klik "Create Account". Anda akan melihat pesan sukses dan diarahkan kembali.
5.  **Uji Alur Login:**
    * Klik "Login" di `index.html`.
    * Isi formulir di popup.
    * Klik "Login". Anda akan diarahkan ke `home.html`.

## 💻 Teknologi yang Digunakan

* HTML
* CSS
* JavaScript (Murni)
