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
          Visi & Misi DPRD Kota Tasikmalaya
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
          <span class="text-blue-200">Visi & Misi</span>
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
                  class="block py-2 px-4 bg-blue-50 text-blue-900 font-medium rounded-lg"
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
              Visi & Misi DPRD Kota Tasikmalaya
            </h2>

            <!-- Visi -->
            <section class="mb-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">Visi</h3>
              <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700">
                <p class="text-lg text-gray-800 italic leading-relaxed">
                  "Mewujudkan DPRD Kota Tasikmalaya yang Profesional, Responsif,
                  dan Berorientasi pada Kesejahteraan Masyarakat dalam Bingkai
                  Nilai Religius dan Budaya Lokal."
                </p>
              </div>
            </section>

            <!-- Misi -->
            <section class="mb-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">Misi</h3>
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
                      Meningkatkan kualitas legislasi daerah melalui penyusunan
                      peraturan daerah yang berpihak pada kepentingan masyarakat
                      dan mendukung pembangunan berkelanjutan.
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
                      Mengoptimalkan fungsi pengawasan terhadap pelaksanaan
                      anggaran dan kebijakan pemerintah daerah untuk memastikan
                      transparansi, akuntabilitas, dan efisiensi.
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
                      Menyerap dan menindaklanjuti aspirasi masyarakat secara
                      aktif melalui komunikasi yang efektif dan partisipasi
                      publik dalam pengambilan keputusan.
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
                      Membangun harmoni dan sinergi dengan pemerintah daerah
                      serta stakeholders lainnya untuk mewujudkan pembangunan
                      Kota Tasikmalaya yang maju, religius, dan berbudaya.
                    </p>
                  </div>
                </li>
              </ul>
            </section>

            <!-- Penjelasan Tambahan -->
            <section class="mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">
                Makna Visi & Misi
              </h3>
              <p class="text-gray-700 mb-4">
                Visi DPRD Kota Tasikmalaya mencerminkan komitmen untuk menjadi
                lembaga yang profesional dalam menjalankan tugas legislatif,
                responsif terhadap kebutuhan masyarakat, dan berorientasi pada
                kesejahteraan dengan tetap menjunjung tinggi nilai-nilai
                religius dan budaya lokal yang menjadi identitas Kota
                Tasikmalaya.
              </p>
              <p class="text-gray-700">
                Misi yang dirumuskan merupakan langkah konkret untuk mencapai
                visi tersebut, dengan fokus pada legislasi berkualitas,
                pengawasan yang ketat, partisipasi masyarakat, dan kerja sama
                yang harmonis dengan pemerintah daerah.
              </p>
            </section>

            <!-- Ilustrasi -->
            <section class="mt-8">
              <h3 class="text-xl font-semibold text-blue-900 mb-4">
                Ilustrasi Visi & Misi
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                  <h4 class="font-semibold text-blue-900 mb-2">Legislasi</h4>
                  <p class="text-sm text-gray-700">
                    Menyusun Perda yang mendukung pembangunan dan kesejahteraan.
                  </p>
                </div>
                <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                  <h4 class="font-semibold text-blue-900 mb-2">Pengawasan</h4>
                  <p class="text-sm text-gray-700">
                    Memastikan anggaran digunakan secara transparan dan efektif.
                  </p>
                </div>
                <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                  <h4 class="font-semibold text-blue-900 mb-2">Aspirasi</h4>
                  <p class="text-sm text-gray-700">
                    Menjembatani suara masyarakat ke dalam kebijakan daerah.
                  </p>
                </div>
                <div class="bg-blue-50 p-6 rounded-lg shadow-sm">
                  <h4 class="font-semibold text-blue-900 mb-2">Sinergi</h4>
                  <p class="text-sm text-gray-700">
                    Berkolaborasi untuk kemajuan Kota Tasikmalaya.
                  </p>
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
      title: "Visi & Misi DPRD Kota Tasikmalaya",
    };
  },
};
</script>
