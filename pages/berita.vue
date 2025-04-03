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
          Berita DPRD Kota Tasikmalaya
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
          <span class="text-blue-200">Berita</span>
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
              Kategori Berita
            </h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/berita/kategori/terbaru"
                  class="block py-2 px-4 hover:bg-gray-50 rounded-lg transition"
                >
                  Terbaru
                </NuxtLink>
              </li>
            </ul>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="lg:col-span-3">
          <article class="bg-white rounded-xl shadow-md p-6 sm:p-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Berita Terbaru
            </h2>

            <!-- Berita List -->
            <div v-if="pending" class="text-center text-gray-600">
              Memuat berita...
            </div>
            <div v-else-if="error" class="text-center text-red-600">
              {{ error.message || error }}
            </div>
            <div
              v-else-if="beritaList.length === 0"
              class="text-center text-gray-600"
            >
              Tidak ada berita yang ditemukan untuk saat ini.
              <button
                @click="refreshData"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg mt-4"
              >
                Muat Ulang Berita
              </button>
            </div>
            <div v-else class="space-y-8">
              <div
                v-for="(berita, index) in beritaList"
                :key="index"
                class="td-module-loop flex flex-col sm:flex-row gap-4 border-b border-gray-200 pb-6"
              >
                <!-- Gambar -->
                <div class="td-image-container w-full sm:w-1/3">
                  <a :href="berita.link" target="_blank">
                    <img
                      :src="
                        berita.image || 'https://via.placeholder.com/300x200'
                      "
                      :alt="berita.title"
                      class="td-module-thumb w-full h-48 object-cover rounded-lg"
                    />
                  </a>
                  <div class="td-category-pos-image mt-2">
                    <span
                      class="text-xs font-semibold text-white bg-blue-600 px-2 py-1 rounded"
                    >
                      {{ berita.category }}
                    </span>
                  </div>
                </div>

                <!-- Konten -->
                <div class="td-module-container w-full sm:w-2/3">
                  <h3
                    class="entry-title td-module-title text-lg font-semibold text-gray-900 hover:text-blue-600"
                  >
                    <a :href="berita.link" target="_blank">
                      {{ berita.title }}
                    </a>
                  </h3>
                  <div
                    class="td-module-meta-info flex items-center gap-2 text-sm text-gray-600 mt-2"
                  >
                    <span class="td-author-date">
                      <span class="td-post-date">{{
                        formatDate(berita.date)
                      }}</span>
                    </span>
                  </div>
                  <div class="td-editor-date mt-2">
                    <p class="text-gray-700 line-clamp-3">
                      {{ berita.excerpt || "Deskripsi tidak tersedia" }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { useFetch } from "#imports";

useHead({
  title: "Berita DPRD Kota Tasikmalaya",
});

const beritaList = ref([]);
const { data: berita, pending, error, refresh } = useFetch("/api/berita");

// Gunakan watchEffect agar beritaList diperbarui otomatis ketika `berita` berubah
watchEffect(() => {
  if (berita.value?.berita) {
    beritaList.value = berita.value.berita;
  } else if (Array.isArray(berita.value)) {
    beritaList.value = berita.value;
  }
});

const formatDate = (dateString) => {
  if (!dateString || dateString === "Tidak ada tanggal")
    return "Tanggal tidak tersedia";
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// Tambahkan fungsi refresh agar data bisa diperbarui tanpa reload
const refreshData = () => {
  refresh();
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
