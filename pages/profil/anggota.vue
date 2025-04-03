<template>
    <div class="bg-gray-100 min-h-screen font-sans">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Anggota DPRD Kota Tasikmalaya
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
            <span class="text-blue-200">Anggota DPRD</span>
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
                    class="block py-2 px-4 bg-blue-50 text-blue-900 font-medium rounded-lg"
                  >
                    Anggota DPRD
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/profil/fraksi"
                    class="block py-2 px-4 hover:bg-gray-50 rounded-lg transition"
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
                Daftar Anggota DPRD Kota Tasikmalaya Periode 2024-2029
              </h2>
  
              <!-- Deskripsi Singkat -->
              <p class="text-gray-700 mb-6 leading-relaxed">
                Berikut adalah daftar anggota DPRD Kota Tasikmalaya periode 2024-2029 yang dilantik pada 3 September 2024. Total anggota terpilih sebanyak 45 orang, namun hanya 44 yang dilantik karena satu anggota dari Partai Gerindra, dr. Wahyu Sumawidjaja, meninggal dunia sebelum pelantikan. Anggota DPRD ini mewakili 4 daerah pemilihan (dapil) di Kota Tasikmalaya.
              </p>
  
              <!-- Tabel Anggota -->
              <section class="mt-8">
                <h3 class="text-xl font-semibold text-blue-900 mb-4">Daftar Anggota</h3>
                <div class="overflow-x-auto">
                  <table class="w-full border border-gray-200 rounded-lg">
                    <thead class="bg-blue-50">
                      <tr>
                        <th class="py-3 px-4 text-left font-semibold text-blue-900">No</th>
                        <th class="py-3 px-4 text-left font-semibold text-blue-900">Nama</th>
                        <th class="py-3 px-4 text-left font-semibold text-blue-900">Partai</th>
                        <th class="py-3 px-4 text-left font-semibold text-blue-900">Dapil</th>
                      </tr>
                    </thead>
                    <tbody class="text-gray-700">
                      <!-- Dapil I: Cihideung, Tawang, Bungursari (12 kursi) -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-3 px-4 border-b">1</td>
                        <td class="py-3 px-4 border-b">H. Aslim, SH., M.Si</td>
                        <td class="py-3 px-4 border-b">Gerindra</td>
                        <td class="py-3 px-4 border-b">Tasikmalaya I</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-3 px-4 border-b">2</td>
                        <td class="py-3 px-4 border-b">H. Hilman Wiranata, S.Pd., M.Si</td>
                        <td class="py-3 px-4 border-b">Golkar</td>
                        <td class="py-3 px-4 border-b">Tasikmalaya I</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-3 px-4 border-b">3</td>
                        <td class="py-3 px-4 border-b">Dede Sudrajat, S.Pd</td>
                        <td class="py-3 px-4 border-b">PPP</td>
                        <td class="py-3 px-4 border-b">Tasikmalaya I</td>
                      </tr>
                      <!-- Tambahkan anggota lain untuk Dapil I sesuai data -->
  
                      <!-- Dapil II: Indihiang, Cipedes (9 kursi) -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-3 px-4 border-b">13</td>
                        <td class="py-3 px-4 border-b">H. Heri Ahmadi, S.Pd.I</td>
                        <td class="py-3 px-4 border-b">PKB</td>
                        <td class="py-3 px-4 border-b">Tasikmalaya II</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-3 px-4 border-b">14</td>
                        <td class="py-3 px-4 border-b">Asep Hidayat, S.T</td>
                        <td class="py-3 px-4 border-b">Gerindra</td>
                        <td class="py-3 px-4 border-b">Tasikmalaya II</td>
                      </tr>
                      <!-- Tambahkan anggota lain untuk Dapil II sesuai data -->
  
                      <!-- Dapil III: Cibeureum, Tamansari, Purbaratu (12 kursi) -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-3 px-4 border-b">22</td>
                        <td class="py-3 px-4 border-b">H. Wahid, S.Pd</td>
                        <td class="py-3 px-4 border-b">PPP</td>
                        <td class="py-3 px-4 border-b">Tasikmalaya III</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-3 px-4 border-b">23</td>
                        <td class="py-3 px-4 border-b">Rina Marlina, S.E</td>
                        <td class="py-3 px-4 border-b">PKS</td>
                        <td class="py-3 px-4 border-b">Tasikmalaya III</td>
                      </tr>
                      <!-- Tambahkan anggota lain untuk Dapil III sesuai data -->
  
                      <!-- Dapil IV: Mangkubumi, Kawalu (12 kursi) -->
                      <tr class="hover:bg-gray-50">
                        <td class="py-3 px-4 border-b">34</td>
                        <td class="py-3 px-4 border-b">Ahmad Junaedi Skhan</td>
                        <td class="py-3 px-4 border-b">PKB</td>
                        <td class="py-3 px-4 border-b">Tasikmalaya IV</td>
                      </tr>
                      <tr class="hover:bg-gray-50">
                        <td class="py-3 px-4 border-b">35</td>
                        <td class="py-3 px-4 border-b">Siti Rohmah, S.Pd</td>
                        <td class="py-3 px-4 border-b">Gerindra</td>
                        <td class="py-3 px-4 border-b">Tasikmalaya IV</td>
                      </tr>
                      <!-- Tambahkan anggota lain untuk Dapil IV sesuai data -->
                    </tbody>
                  </table>
                </div>
                <p class="text-sm text-gray-600 mt-4">
                  Catatan: Daftar ini mencakup 44 anggota yang dilantik. Satu anggota terpilih, dr. Wahyu Sumawidjaja (Gerindra), meninggal sebelum pelantikan.
                </p>
              </section>
  
              <!-- Distribusi Kursi -->
              <section class="mt-8">
                <h3 class="text-xl font-semibold text-blue-900 mb-4">Distribusi Kursi per Partai</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-900">Gerindra</h4>
                    <p class="text-gray-700">10 kursi</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-900">PPP</h4>
                    <p class="text-gray-700">7 kursi</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-900">PKS</h4>
                    <p class="text-gray-700">5 kursi</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-900">PKB</h4>
                    <p class="text-gray-700">5 kursi</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-900">Golkar</h4>
                    <p class="text-gray-700">5 kursi</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-900">PDI Perjuangan</h4>
                    <p class="text-gray-700">4 kursi</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-900">PAN</h4>
                    <p class="text-gray-700">4 kursi</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-900">Demokrat</h4>
                    <p class="text-gray-700">3 kursi</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-900">NasDem</h4>
                    <p class="text-gray-700">1 kursi</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-blue-900">PBB</h4>
                    <p class="text-gray-700">1 kursi</p>
                  </div>
                </div>
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
        title: 'Anggota DPRD Kota Tasikmalaya',
      }
    }
  }
  </script>