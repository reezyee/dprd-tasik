<template>
  <div class="bg-gray-100 min-h-screen font-sans">
    <!-- Hero Section -->
    <section
      class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16"
    >
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
        >
          Sejarah DPRD Kota Tasikmalaya
        </h1>
        <nav class="flex items-center text-sm sm:text-base gap-2">
          <NuxtLink
            to="/"
            class="hover:underline hover:text-blue-200 transition"
            >Beranda</NuxtLink
          >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <NuxtLink
            to="#"
            class="hover:underline hover:text-blue-200 transition"
            >Profil</NuxtLink
          >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span class="text-blue-200">Sejarah</span>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar Navigation -->
        <aside class="lg:sticky lg:top-6">
          <div class="bg-white rounded-xl shadow-md p-6">
            <h3
              class="text-lg font-semibold text-blue-900 border-b border-gray-200 pb-3 mb-4"
            >
              Profil DPRD
            </h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/profil/sejarah"
                  class="block py-2 px-4 bg-blue-50 text-blue-900 font-medium rounded-lg"
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
              Sejarah Singkat DPRD Kota Tasikmalaya
            </h2>

            <p class="text-gray-700 mb-6 leading-relaxed">
              DPRD Kota Tasikmalaya adalah lembaga legislatif daerah yang
              menjadi bagian dari pemerintahan Kota Tasikmalaya, Jawa Barat.
              Lembaga ini memiliki fungsi legislasi, pengawasan, dan
              penganggaran untuk mendukung pembangunan daerah dan kesejahteraan
              masyarakat.
            </p>

            <section class="mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">
                Pembentukan Kota Tasikmalaya
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="md:col-span-2">
                  <p class="text-gray-700 mb-4">
                    Kota Tasikmalaya resmi menjadi daerah otonom pada tanggal
                    <strong>17 Oktober 2001</strong> berdasarkan
                    <strong>Undang-Undang Nomor 10 Tahun 2001</strong>.
                    Sebelumnya, wilayah ini merupakan bagian dari Kabupaten
                    Tasikmalaya. Pemisahan ini dilakukan untuk meningkatkan
                    pelayanan publik dan pembangunan di wilayah perkotaan.
                  </p>
                  <p class="text-gray-700">
                    Bersamaan dengan itu, DPRD Kota Tasikmalaya dibentuk sebagai
                    lembaga legislatif pertama untuk menjalankan tugas-tugas
                    pemerintahan daerah yang baru berdiri.
                  </p>
                </div>
                <div>
                  <img
                    src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/ayotasik/images/post/articles/2019/12/16/3903/whatsapp_image_2019-12-16_at_11.32.20.jpeg"
                    alt="Gedung DPRD Kota Tasikmalaya"
                    class="rounded-lg shadow-md w-full h-auto"
                  />
                  <p class="text-sm text-gray-600 mt-2 text-center">
                    Gedung DPRD Kota Tasikmalaya pada masa awal
                  </p>
                </div>
              </div>
            </section>

            <section class="mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">
                Periode Awal DPRD (2001-2004)
              </h3>
              <p class="text-gray-700 mb-4">
                DPRD Kota Tasikmalaya periode pertama diisi oleh 30 anggota yang
                ditetapkan berdasarkan hasil Pemilu 1999. Periode ini menjadi
                tonggak awal pembentukan regulasi daerah, termasuk penyusunan
                Perda pertama untuk mendukung operasional pemerintahan kota.
              </p>
            </section>

            <section class="mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">
                Perkembangan DPRD
              </h3>
              <div class="overflow-x-auto">
                <table class="w-full border border-gray-200 rounded-lg">
                  <thead class="bg-blue-50">
                    <tr>
                      <th
                        class="py-3 px-4 text-left font-semibold text-blue-900"
                      >
                        Periode
                      </th>
                      <th
                        class="py-3 px-4 text-left font-semibold text-blue-900"
                      >
                        Tahun
                      </th>
                      <th
                        class="py-3 px-4 text-left font-semibold text-blue-900"
                      >
                        Jumlah Anggota
                      </th>
                      <th
                        class="py-3 px-4 text-left font-semibold text-blue-900"
                      >
                        Catatan
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-700">
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border-b">Periode I</td>
                      <td class="py-3 px-4 border-b">2001-2004</td>
                      <td class="py-3 px-4 border-b">30</td>
                      <td class="py-3 px-4 border-b">Pembentukan awal DPRD</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border-b">Periode II</td>
                      <td class="py-3 px-4 border-b">2004-2009</td>
                      <td class="py-3 px-4 border-b">35</td>
                      <td class="py-3 px-4 border-b">Hasil Pemilu 2004</td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border-b">Periode III</td>
                      <td class="py-3 px-4 border-b">2009-2014</td>
                      <td class="py-3 px-4 border-b">35</td>
                      <td class="py-3 px-4 border-b">
                        Fokus pembangunan infrastruktur
                      </td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border-b">Periode IV</td>
                      <td class="py-3 px-4 border-b">2014-2019</td>
                      <td class="py-3 px-4 border-b">35</td>
                      <td class="py-3 px-4 border-b">
                        Peningkatan pelayanan publik
                      </td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4 border-b">Periode V</td>
                      <td class="py-3 px-4 border-b">2019-2024</td>
                      <td class="py-3 px-4 border-b">35</td>
                      <td class="py-3 px-4 border-b">
                        Respons pandemi COVID-19
                      </td>
                    </tr>
                    <tr class="hover:bg-gray-50">
                      <td class="py-3 px-4">Periode VI</td>
                      <td class="py-3 px-4">2024-2029</td>
                      <td class="py-3 px-4">35</td>
                      <td class="py-3 px-4">Fokus pemulihan ekonomi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section class="mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">
                Capaian Penting
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                  <svg
                    class="w-6 h-6 text-blue-700 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 class="font-semibold text-blue-900">Perda RPJMD</h4>
                    <p class="text-sm text-gray-700">
                      Rencana Pembangunan Jangka Menengah Daerah.
                    </p>
                  </div>
                </div>
                <div class="bg-blue-50 p-4 rounded-lg flex items-start gap-3">
                  <svg
                    class="w-6 h-6 text-blue-700 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 class="font-semibold text-blue-900">Perda RTRW</h4>
                    <p class="text-sm text-gray-700">
                      Rencana Tata Ruang Wilayah.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section class="mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">
                Gedung DPRD
              </h3>
              <img
                src="https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/ayotasik/images/post/articles/2019/12/16/3903/whatsapp_image_2019-12-16_at_11.32.20.jpeg"
                alt="Gedung DPRD Kota Tasikmalaya"
                class="rounded-lg shadow-md w-full h-auto mb-4"
              />
              <p class="text-gray-700">
                Gedung DPRD terletak di Jalan Letnan Kolonel H. Ibrahim Adjie,
                Tasikmalaya. Gedung ini telah direnovasi beberapa kali untuk
                mendukung aktivitas legislatif.
              </p>
            </section>
          </article>

          <!-- Related Documents -->
          <div class="mt-8 bg-white rounded-xl shadow-md p-6">
            <h3 class="text-xl font-semibold text-blue-900 mb-4">
              Dokumen Terkait
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://peraturan.bpk.go.id/Download/33239/UU%20Nomor%2010%20Tahun%202001.pdf"
                class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition"
              >
                <svg
                  class="w-6 h-6 text-blue-600 mr-3 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p class="font-medium text-gray-900">UU No. 10 Tahun 2001</p>
                  <p class="text-sm text-gray-600">
                    Pembentukan Kota Tasikmalaya
                  </p>
                </div>
              </a>
              <a
                href="https://jdih.dprd-tasikmalayakota.go.id/pencarian?jenis_peraturan=28"
                class="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition"
              >
                <svg
                  class="w-6 h-6 text-blue-600 mr-3 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p class="font-medium text-gray-900">Tata Tertib DPRD 2020</p>
                  <p class="text-sm text-gray-600">Regulasi internal DPRD</p>
                </div>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Sejarah DPRD Kota Tasikmalaya",
    };
  },
};
</script>
