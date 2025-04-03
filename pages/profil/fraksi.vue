<template>
    <div class="bg-gray-100 min-h-screen font-sans">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Fraksi DPRD Kota Tasikmalaya
          </h1>
          <nav class="flex items-center text-sm sm:text-base gap-2">
            <NuxtLink to="/" class="hover:underline hover:text-blue-200 transition">Beranda</NuxtLink>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <NuxtLink to="#" class="hover:underline hover:text-blue-200 transition">Profil</NuxtLink>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <span class="text-blue-200">Fraksi</span>
          </nav>
        </div>
      </section>
  
      <!-- Main Content -->
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <!-- Sidebar Navigation -->
          <aside class="lg:sticky lg:top-6">
            <div class="bg-white rounded-xl shadow-md p-6">
              <h3 class="text-lg font-semibold text-blue-900 border-b border-gray-200 pb-3 mb-4">
                Profil DPRD
              </h3>
              <ul class="space-y-2">
                <li>
                  <NuxtLink
                    to="/profil/sejarah"
                    class="block py-2 px-4 hover:bg-gray-50 rounded-lg transition"
                  >
                    Sejarah
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/profil/visi-misi"
                    class="block py-2 px-4 hover:bg-gray-50 rounded-lg transition"
                  >
                    Visi & Misi
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/profil/struktur"
                    class="block py-2 px-4 hover:bg-gray-50 rounded-lg transition"
                  >
                    Struktur Organisasi
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/profil/pimpinan"
                    class="block py-2 px-4 hover:bg-gray-50 rounded-lg transition"
                  >
                    Pimpinan DPRD
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/profil/anggota"
                    class="block py-2 px-4 hover:bg-gray-50 rounded-lg transition"
                  >
                    Anggota DPRD
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/profil/fraksi"
                    class="block py-2 px-4 bg-blue-50 text-blue-900 font-medium rounded-lg"
                  >
                    Fraksi
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </aside>
  
          <!-- Main Content -->
          <main class="lg:col-span-3">
            <article class="bg-white rounded-xl shadow-md p-6 sm:p-8">
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Fraksi DPRD Kota Tasikmalaya Periode 2024-2029
              </h2>
  
              <!-- Deskripsi Singkat -->
              <p class="text-gray-700 mb-6 leading-relaxed">
                Fraksi DPRD Kota Tasikmalaya periode 2024-2029 dibentuk berdasarkan hasil Pemilu Legislatif 2024 dan diumumkan dalam Rapat Paripurna pada 27 September 2024. Fraksi merupakan wadah bagi anggota DPRD untuk mengoordinasikan sikap politik dan menyusun program kerja sesuai visi partai masing-masing. Berikut adalah daftar fraksi yang terbentuk dari 10 partai politik yang memperoleh kursi di DPRD Kota Tasikmalaya.
              </p>
  
              <!-- Daftar Fraksi -->
              <section class="mt-8">
                <h3 class="text-xl font-semibold text-blue-900 mb-4">Daftar Fraksi</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <!-- Fraksi Gerindra -->
                  <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                    <h4 class="font-semibold text-blue-900 mb-2">Fraksi Gerindra</h4>
                    <p class="text-gray-700">Jumlah Anggota: 10</p>
                    <p class="text-sm text-gray-600 mt-2">Ketua: H. Aslim, SH., M.Si</p>
                    <p class="text-sm text-gray-600">Sekretaris: Asep Hidayat, S.T</p>
                  </div>
                  <!-- Fraksi PPP -->
                  <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                    <h4 class="font-semibold text-blue-900 mb-2">Fraksi PPP</h4>
                    <p class="text-gray-700">Jumlah Anggota: 7</p>
                    <p class="text-sm text-gray-600 mt-2">Ketua: H. Wahid, S.Pd</p>
                    <p class="text-sm text-gray-600">Sekretaris: Dede Sudrajat, S.Pd</p>
                  </div>
                  <!-- Fraksi PKS -->
                  <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                    <h4 class="font-semibold text-blue-900 mb-2">Fraksi PKS</h4>
                    <p class="text-gray-700">Jumlah Anggota: 5</p>
                    <p class="text-sm text-gray-600 mt-2">Ketua: Rina Marlina, S.E</p>
                    <p class="text-sm text-gray-600">Sekretaris: [Belum Ditetapkan]</p>
                  </div>
                  <!-- Fraksi PKB -->
                  <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                    <h4 class="font-semibold text-blue-900 mb-2">Fraksi PKB</h4>
                    <p class="text-gray-700">Jumlah Anggota: 5</p>
                    <p class="text-sm text-gray-600 mt-2">Ketua: H. Heri Ahmadi, S.Pd.I</p>
                    <p class="text-sm text-gray-600">Sekretaris: Ahmad Junaedi Skhan</p>
                  </div>
                  <!-- Fraksi Golkar -->
                  <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                    <h4 class="font-semibold text-blue-900 mb-2">Fraksi Golkar</h4>
                    <p class="text-gray-700">Jumlah Anggota: 5</p>
                    <p class="text-sm text-gray-600 mt-2">Ketua: H. Hilman Wiranata, S.Pd., M.Si</p>
                    <p class="text-sm text-gray-600">Sekretaris: [Belum Ditetapkan]</p>
                  </div>
                  <!-- Fraksi PDI Perjuangan -->
                  <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                    <h4 class="font-semibold text-blue-900 mb-2">Fraksi PDI Perjuangan</h4>
                    <p class="text-gray-700">Jumlah Anggota: 4</p>
                    <p class="text-sm text-gray-600 mt-2">Ketua: [Belum Ditetapkan]</p>
                    <p class="text-sm text-gray-600">Sekretaris: [Belum Ditetapkan]</p>
                  </div>
                  <!-- Fraksi PAN -->
                  <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                    <h4 class="font-semibold text-blue-900 mb-2">Fraksi PAN</h4>
                    <p class="text-gray-700">Jumlah Anggota: 4</p>
                    <p class="text-sm text-gray-600 mt-2">Ketua: [Belum Ditetapkan]</p>
                    <p class="text-sm text-gray-600">Sekretaris: [Belum Ditetapkan]</p>
                  </div>
                  <!-- Fraksi Demokrat -->
                  <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                    <h4 class="font-semibold text-blue-900 mb-2">Fraksi Demokrat</h4>
                    <p class="text-gray-700">Jumlah Anggota: 3</p>
                    <p class="text-sm text-gray-600 mt-2">Ketua: [Belum Ditetapkan]</p>
                    <p class="text-sm text-gray-600">Sekretaris: [Belum Ditetapkan]</p>
                  </div>
                  <!-- Fraksi Gabungan NasDem-PBB -->
                  <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                    <h4 class="font-semibold text-blue-900 mb-2">Fraksi Gabungan NasDem-PBB</h4>
                    <p class="text-gray-700">Jumlah Anggota: 2</p>
                    <p class="text-sm text-gray-600 mt-2">Ketua: [Belum Ditetapkan]</p>
                    <p class="text-sm text-gray-600">Sekretaris: [Belum Ditetapkan]</p>
                  </div>
                </div>
                <p class="text-sm text-gray-600 mt-4">
                  Catatan: Nama pengurus fraksi yang belum ditetapkan akan diperbarui sesuai pengumuman resmi DPRD Kota Tasikmalaya.
                </p>
              </section>
  
              <!-- Penjelasan Fraksi -->
              <section class="mt-8">
                <h3 class="text-xl font-semibold text-blue-900 mb-4">Penjelasan Fraksi</h3>
                <ul class="space-y-6">
                  <li class="flex items-start gap-4">
                    <div class="bg-blue-100 rounded-full p-3 shrink-0">
                      <svg class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-gray-700">
                        Fraksi dibentuk untuk mengoptimalkan pelaksanaan tugas dan wewenang DPRD, termasuk legislasi, pengawasan, dan penganggaran.
                      </p>
                    </div>
                  </li>
                  <li class="flex items-start gap-4">
                    <div class="bg-blue-100 rounded-full p-3 shrink-0">
                      <svg class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-gray-700">
                        Setiap anggota DPRD wajib bergabung dalam satu fraksi, kecuali untuk partai dengan kursi kurang dari jumlah komisi (4), yang dapat membentuk fraksi gabungan.
                      </p>
                    </div>
                  </li>
                  <li class="flex items-start gap-4">
                    <div class="bg-blue-100 rounded-full p-3 shrink-0">
                      <svg class="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p class="text-gray-700">
                        Fraksi bertugas menyusun program kerja, mengoordinasikan aspirasi politik, dan mendukung fungsi DPRD dalam mewakili rakyat.
                      </p>
                    </div>
                  </li>
                </ul>
              </section>
            </article>
          </main>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    head() {
      return {
        title: 'Fraksi DPRD Kota Tasikmalaya',
      }
    }
  }
  </script>