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
          Pimpinan DPRD Kota Tasikmalaya
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
          <span class="text-blue-200">Pimpinan DPRD</span>
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
                  Visi & visi-misi
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
                  class="block py-2 px-4 bg-blue-50 text-blue-900 font-medium rounded-lg"
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
              Pimpinan DPRD Kota Tasikmalaya Periode 2024-2029
            </h2>

            <!-- Deskripsi Singkat -->
            <p class="text-gray-700 mb-6 leading-relaxed">
              Pimpinan DPRD Kota Tasikmalaya terdiri dari satu Ketua dan tiga
              Wakil Ketua yang dipilih dari anggota DPRD berdasarkan hasil
              Pemilu Legislatif 2024. Mereka bertugas memimpin rapat,
              mengkoordinasikan alat kelengkapan DPRD, dan mewakili DPRD dalam
              hubungan dengan lembaga lain. Berikut adalah profil pimpinan DPRD
              periode 2024-2029.
            </p>

            <!-- Daftar Pimpinan -->
            <section class="mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">
                Daftar Pimpinan
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Ketua -->
                <div class="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
                  <img
                    src="https://dprd-tasikmalayakota.go.id/wp-content/uploads/2020/07/ASLIM-294x420.jpg"
                    alt="H. Aslim, SH., M.Si"
                    class="w-32 h-32 rounded-full object-cover object-top mx-auto mb-4"
                  />
                  <h4 class="font-semibold text-blue-900">
                    H. Aslim, SH., M.Si
                  </h4>
                  <p class="text-sm text-gray-700">Ketua DPRD</p>
                  <p class="text-sm text-gray-600 mt-2">Partai Gerindra</p>
                </div>
                <!-- Wakil Ketua 1 -->
                <div class="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
                  <img
                    src="https://images.lezen.id/infopemilu.kpu.go.id/4/7/b/1691554721_f6300f44-cae4-4821-911c-ab6075ed6b8c.webp"
                    alt="H. Hilman Wiranata, S.Pd., M.Si"
                    class="w-32 h-32 rounded-full object-cover object-top mx-auto mb-4"
                  />
                  <h4 class="font-semibold text-blue-900">
                    H. Hilman Wiranata, S.Pd., M.Si
                  </h4>
                  <p class="text-sm text-gray-700">Wakil Ketua I</p>
                  <p class="text-sm text-gray-600 mt-2">Partai Golkar</p>
                </div>
                <!-- Wakil Ketua 2 -->
                <div class="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
                  <img
                    src="https://images.goodkind.id/dct/berkas-silon/calon/67400/pas_foto/1683287043_a8f22388-b560-48d4-93d4-c44898c7f4b8.jpeg"
                    alt="H. Heri Ahmadi, S.Pd.I"
                    class="w-32 h-32 rounded-full object-cover object-top mx-auto mb-4"
                  />
                  <h4 class="font-semibold text-blue-900">
                    H. Heri Ahmadi, S.Pd.I
                  </h4>
                  <p class="text-sm text-gray-700">Wakil Ketua II</p>
                  <p class="text-sm text-gray-600 mt-2">
                    Partai Kebangkitan Bangsa
                  </p>
                </div>
                <!-- Wakil Ketua 3 -->
                <div class="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
                  <img
                    src="https://dprd-tasikmalayakota.go.id/wp-content/uploads/2020/07/WAHID-294x420.jpg"
                    alt="H. Wahid, S.Pd"
                    class="w-32 h-32 rounded-full object-cover object-top mx-auto mb-4"
                  />
                  <h4 class="font-semibold text-blue-900">H. Wahid, S.Pd</h4>
                  <p class="text-sm text-gray-700">Wakil Ketua III</p>
                  <p class="text-sm text-gray-600 mt-2">
                    Partai Persatuan Pembangunan
                  </p>
                </div>
              </div>
            </section>

            <!-- Tugas dan Wewenang -->
            <section class="mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">
                Tugas dan Wewenang
              </h3>
              <ul class="space-y-6">
                <li class="flex items-start gap-4">
                  <div class="bg-blue-100 rounded-full p-3 shrink-0">
                    <svg
                      class="w-6 h-6 text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700">
                      Memimpin rapat DPRD dan menyimpulkan hasil rapat untuk
                      pengambilan keputusan.
                    </p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="bg-blue-100 rounded-full p-3 shrink-0">
                    <svg
                      class="w-6 h-6 text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700">
                      Melakukan koordinasi untuk menyinergikan agenda dan
                      kegiatan alat kelengkapan DPRD.
                    </p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="bg-blue-100 rounded-full p-3 shrink-0">
                    <svg
                      class="w-6 h-6 text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700">
                      Mewakili DPRD dalam hubungan dengan lembaga atau instansi
                      lain, baik di dalam maupun luar daerah.
                    </p>
                  </div>
                </li>
                <li class="flex items-start gap-4">
                  <div class="bg-blue-100 rounded-full p-3 shrink-0">
                    <svg
                      class="w-6 h-6 text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-gray-700">
                      Menyelenggarakan konsultasi dengan Wali Kota dan pimpinan
                      instansi vertikal lainnya.
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
      title: "Pimpinan DPRD Kota Tasikmalaya",
    };
  },
};
</script>
