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
          Struktur Organisasi DPRD Kota Tasikmalaya
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
          <span class="text-blue-200">Struktur Organisasi</span>
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
                  Visi & Misi
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/profil/struktur"
                  class="block py-2 px-4 bg-blue-50 text-blue-900 font-medium rounded-lg"
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
              Struktur Organisasi DPRD Kota Tasikmalaya
            </h2>

            <!-- Deskripsi Singkat -->
            <p class="text-gray-700 mb-6 leading-relaxed">
              Struktur organisasi DPRD Kota Tasikmalaya dirancang untuk
              mendukung pelaksanaan tugas dan fungsi legislatif, pengawasan,
              serta penganggaran. Struktur ini mencakup pimpinan, komisi,
              fraksi, dan badan-badan khusus yang bekerja secara sinergis untuk
              mewujudkan aspirasi masyarakat.
            </p>

            <!-- Diagram Struktur Organisasi -->
            <section class="mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">
                Diagram Struktur
              </h3>
              <div class="bg-gray-50 p-6 rounded-lg shadow-sm">
                <!-- Level 1: Pimpinan DPRD -->
                <div class="flex flex-col items-center mb-8">
                  <div
                    class="bg-blue-700 text-white p-4 rounded-lg w-full sm:w-64 text-center"
                  >
                    <h4 class="font-semibold">Pimpinan DPRD</h4>
                    <p class="text-sm">Ketua & Wakil Ketua</p>
                  </div>
                </div>

                <!-- Level 2: Badan dan Komisi -->
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  <div class="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 class="font-semibold text-blue-900">Komisi I</h4>
                    <p class="text-sm text-gray-700">Bidang Pemerintahan</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 class="font-semibold text-blue-900">Komisi II</h4>
                    <p class="text-sm text-gray-700">Bidang Ekonomi</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 class="font-semibold text-blue-900">Komisi III</h4>
                    <p class="text-sm text-gray-700">Bidang Pembangunan</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 class="font-semibold text-blue-900">Komisi IV</h4>
                    <p class="text-sm text-gray-700">Bidang Kesejahteraan</p>
                  </div>
                </div>

                <!-- Level 3: Badan Khusus -->
                <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div class="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 class="font-semibold text-blue-900">Badan Anggaran</h4>
                    <p class="text-sm text-gray-700">Pengelolaan APBD</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 class="font-semibold text-blue-900">Badan Legislasi</h4>
                    <p class="text-sm text-gray-700">Penyusunan Perda</p>
                  </div>
                  <div class="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 class="font-semibold text-blue-900">
                      Badan Kehormatan
                    </h4>
                    <p class="text-sm text-gray-700">Etika Anggota</p>
                  </div>
                </div>

                <!-- Fraksi -->
                <div class="mt-8">
                  <h4 class="font-semibold text-blue-900 mb-4 text-center">
                    Fraksi
                  </h4>
                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    <div class="bg-blue-50 p-4 rounded-lg text-center">
                      <p class="text-sm text-gray-700">Fraksi PDI Perjuangan</p>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg text-center">
                      <p class="text-sm text-gray-700">Fraksi Golkar</p>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg text-center">
                      <p class="text-sm text-gray-700">Fraksi Gerindra</p>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg text-center">
                      <p class="text-sm text-gray-700">Fraksi PKB</p>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg text-center">
                      <p class="text-sm text-gray-700">Fraksi PPP</p>
                    </div>
                    <div class="bg-blue-50 p-4 rounded-lg text-center">
                      <p class="text-sm text-gray-700">Fraksi Gabungan</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <!-- Penjelasan Struktur -->
            <section class="mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">
                Penjelasan Struktur
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
                    <h4 class="font-semibold text-gray-900">Pimpinan DPRD</h4>
                    <p class="text-gray-700">
                      Terdiri dari seorang Ketua dan dua Wakil Ketua yang
                      dipilih dari anggota DPRD untuk memimpin rapat dan
                      mengkoordinasikan tugas-tugas legislatif.
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
                    <h4 class="font-semibold text-gray-900">Komisi</h4>
                    <p class="text-gray-700">
                      Terdapat empat komisi yang masing-masing fokus pada bidang
                      pemerintahan, ekonomi, pembangunan, dan kesejahteraan
                      masyarakat.
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
                    <h4 class="font-semibold text-gray-900">Badan Khusus</h4>
                    <p class="text-gray-700">
                      Meliputi Badan Anggaran (Banggar), Badan Legislasi
                      (Baleg), dan Badan Kehormatan (BK) untuk mendukung fungsi
                      DPRD.
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
                    <h4 class="font-semibold text-gray-900">Fraksi</h4>
                    <p class="text-gray-700">
                      Kelompok anggota DPRD berdasarkan partai politik untuk
                      mengoordinasikan sikap dan aspirasi politik.
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
      title: "Struktur Organisasi DPRD Kota Tasikmalaya",
    };
  },
};
</script>
