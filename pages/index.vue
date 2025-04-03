<template>
  <div class="bg-gray-100 min-h-screen font-sans">
    <!-- Hero Section -->
    <section class="relative text-black py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <!-- Hero Text -->
          <div class="animate-fade-in">
            <h1
              class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
            >
              Selamat Datang di Website DPRD Kota Tasikmalaya
            </h1>
            <p class="text-lg sm:text-xl mb-6 leading-relaxed">
              Menyediakan informasi terkini tentang kegiatan legislatif, berita,
              dan pelayanan masyarakat.
            </p>
            <NuxtLink
              to="/berita"
              class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Lihat Berita Terbaru
            </NuxtLink>
          </div>

          <!-- Hero Image -->
          <div class="relative">
            <img
              :src="
                heroBerita?.image ||
                'https://via.placeholder.com/600x400?text=Hero+Image'
              "
              :alt="heroBerita?.title || 'Kegiatan DPRD'"
              class="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
            />
            <div
              class="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              <p class="text-sm font-semibold">
                {{ heroBerita?.title || "Kunjungan Kerja Komisi IV" }} -
                {{ formatDate(heroBerita?.date) || "11 November 2024" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative text-white py-16">
      <div class="overflow-hidden relative w-full">
        <div
          ref="carousel"
          class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            class="min-w-full flex-shrink-0"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Berita Terbaru Section -->
    <section class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
        Berita Terbaru
      </h2>

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
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(berita, index) in displayedBerita"
          :key="index"
          class="td-module-loop bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div class="td-image-container relative">
            <a :href="berita?.link || '#'" target="_blank">
              <img
                :src="berita?.image || 'https://via.placeholder.com/300x200'"
                :alt="berita?.title || 'Berita DPRD'"
                class="td-module-thumb w-full h-48 object-cover"
              />
            </a>
            <div class="td-category-pos-image absolute top-4 left-4">
              <span
                class="text-xs font-semibold text-white bg-blue-600 px-2 py-1 rounded"
              >
                {{ berita?.category || "Kategori Tidak Diketahui" }}
              </span>
            </div>
          </div>
          <div class="td-module-container p-4">
            <h3
              class="entry-title td-module-title text-lg font-semibold text-gray-900 hover:text-blue-600"
            >
              <a :href="berita?.link || '#'" target="_blank">
                {{ berita?.title || "Judul Tidak Tersedia" }}
              </a>
            </h3>
            <div
              class="td-module-meta-info flex items-center gap-2 text-sm text-gray-600 mt-2"
            >
              <span class="td-author-date">
                <span class="td-post-date">{{
                  formatDate(berita?.date) || "Tanggal tidak tersedia"
                }}</span>
              </span>
            </div>
            <div class="td-editor-date mt-2">
              <p class="text-gray-700 line-clamp-3">
                {{ berita?.excerpt || "Deskripsi tidak tersedia" }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div
        v-if="beritaList.length > displayedBerita.length"
        class="mt-8 text-center"
      >
        <button
          @click="loadMore"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Muat Lebih Banyak
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useFetch } from "#imports";

useHead({
  title: "DPRD Kota Tasikmalaya - Website Resmi",
});

const isMenuOpen = ref(false);
const beritaList = ref([]);
const itemsPerPage = ref(6); // Jumlah berita per halaman
const currentPage = ref(1); // Halaman saat ini

const { data: berita, pending, error } = useFetch("/api/berita");

const images = [
  {
    src: "https://dprd-tasikmalayakota.go.id/wp-content/uploads/2024/11/Pimpinan-DPRD-Kota-Tasik-2024.jpg",
    alt: "Pimpinan DPRD",
  },
  {
    src: "https://dprd-tasikmalayakota.go.id/wp-content/uploads/2024/11/Komisi1-DPRD-Kota-Tasik-2024.jpg",
    alt: "Komisi I DPRD",
  },
  {
    src: "https://dprd-tasikmalayakota.go.id/wp-content/uploads/2024/11/Komisi2-DPRD-Kota-Tasik-2024.jpg",
    alt: "Komisi II DPRD",
  },
  {
    src: "https://dprd-tasikmalayakota.go.id/wp-content/uploads/2024/11/Komisi3-DPRD-Kota-Tasik-2024.jpg",
    alt: "Komisi III DPRD",
  },
  {
    src: "https://dprd-tasikmalayakota.go.id/wp-content/uploads/2024/11/Komisi4-DPRD-Kota-Tasik-2024.jpg",
    alt: "Komisi IV DPRD",
  },
  {
    src: "https://dprd-tasikmalayakota.go.id/wp-content/uploads/2024/11/BANGGAR-DPRD-Kota-Tasik-2024.jpg",
    alt: "BANGGAR DPRD",
  },
  {
    src: "https://dprd-tasikmalayakota.go.id/wp-content/uploads/2024/11/BAPEMPEDA.jpg",
    alt: "BAPEMPEDA DPRD",
  },
];

const currentIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 3000);
});

// Proses data berita setelah diambil
onMounted(() => {
  if (berita.value && berita.value.berita) {
    beritaList.value = berita.value.berita;
  } else if (berita.value && Array.isArray(berita.value)) {
    beritaList.value = berita.value;
  } else {
    // Fallback data dummy jika API gagal
    beritaList.value = [
      {
        title: "Pembahasan APBD Tahun 2025 oleh Banggar",
        link: "https://dprd-tasikmalayakota.go.id/pembahasan-apbd-tahun-2025-oleh-banggar-bersama-disdik-disdukcapil-serta-diskominfo/",
        category: "Kegiatan",
        image: "https://via.placeholder.com/300x200",
        date: "2024-11-11",
        excerpt:
          "Rapat pembahasan APBD Tahun 2025 bersama Disdik, Disdukcapil, dan Diskominfo...",
      },
      {
        title: "Kunjungan Kerja Komisi IV",
        link: "#",
        category: "Uncategorized",
        image: "https://via.placeholder.com/300x200",
        date: "2024-11-10",
        excerpt:
          "Kunjungan kerja Komisi IV ke wilayah Tasikmalaya untuk evaluasi proyek...",
      },
      {
        title: "Rapat Paripurna Penetapan APBD 2025",
        link: "#",
        category: "Kegiatan",
        image: "https://via.placeholder.com/300x200",
        date: "2024-11-09",
        excerpt:
          "Rapat paripurna untuk penetapan APBD Tahun 2025 telah dilaksanakan...",
      },
    ];
  }
});

// Computed property untuk menampilkan berita berdasarkan halaman
const displayedBerita = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return beritaList.value.slice(0, end);
});

// Computed property untuk berita utama di hero section
const heroBerita = computed(() => {
  return beritaList.value.length > 0 ? beritaList.value[0] : null;
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const loadMore = () => {
  currentPage.value++;
};

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
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
