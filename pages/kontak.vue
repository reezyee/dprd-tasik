<template>
  <div class="bg-gray-50 min-h-screen font-sans">
    <!-- Hero Section -->
    <section
      class="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 overflow-hidden"
    >
      <div class="absolute inset-0 bg-pattern opacity-10"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1
          class="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 tracking-tight animate-fade-in-down"
        >
          Hubungi DPRD Kota Tasikmalaya
        </h1>
        <nav class="flex items-center text-sm sm:text-base gap-2">
          <NuxtLink
            to="/"
            class="hover:underline hover:text-blue-200 transition"
          >
            Beranda
          </NuxtLink>
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
          <span class="text-blue-200">Kontak</span>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div
          class="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
        >
          <h2 class="text-3xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Informasi Kontak
          </h2>
          <div class="space-y-6">
            <div class="flex items-start gap-4 group">
              <svg
                class="w-8 h-8 text-blue-600 group-hover:text-blue-800 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <p class="text-lg font-semibold text-gray-700">Alamat</p>
                <p class="text-gray-600">
                  Jl. RE. Martadinata No. 334, Kota Tasikmalaya, Kode Pos 46151,
                  Jawa Barat, Indonesia
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4 group">
              <svg
                class="w-8 h-8 text-blue-600 group-hover:text-blue-800 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p class="text-lg font-semibold text-gray-700">Email</p>
                <a
                  href="mailto:info@dprd-tasikmalayakota.go.id"
                  class="text-blue-600 hover:underline"
                >
                  info@dprd-tasikmalayakota.go.id
                </a>
              </div>
            </div>
            <div class="flex items-start gap-4 group">
              <svg
                class="w-8 h-8 text-blue-600 group-hover:text-blue-800 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <p class="text-lg font-semibold text-gray-700">Telepon</p>
                <a
                  href="tel:+62265313094"
                  class="text-blue-600 hover:underline"
                >
                  (0265) 313094
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Map Section -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Lokasi Kami
          </h2>
          <div class="relative w-full h-80 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.692!2d108.220183!3d-7.327298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f5d5f5a5a5a5b%3A0x5a5a5a5a5a5a5a5a!2sJl.%20RE.%20Martadinata%20No.%20334%2C%20Kota%20Tasikmalaya%2C%20Jawa%20Barat%2046151%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1698771234567!5m2!1sen!2sid"
              class="absolute inset-0 w-full h-full border-0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a
            href="https://www.google.com/maps/place/Jl.+RE.+Martadinata+No.+334,+Kota+Tasikmalaya,+Jawa+Barat+46151,+Indonesia"
            target="_blank"
            class="mt-4 inline-block text-blue-600 hover:underline font-semibold"
          >
            Lihat di Google Maps
          </a>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold text-gray-800 mb-4">
          Ingin Tahu Lebih Banyak?
        </h3>
        <p class="text-gray-600 mb-6">
          Kunjungi halaman beranda kami untuk informasi lebih lanjut tentang
          DPRD Kota Tasikmalaya.
        </p>
        <NuxtLink
          to="/"
          class="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Kembali ke Beranda
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

useHead({
  title: "Kontak DPRD Kota Tasikmalaya",
});
</script>

<style scoped>
/* Background pattern for hero section */
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='40'/%3E%3Ccircle cx='50' cy='50' r='30'/%3E%3C/g%3E%3C/svg%3E");
}
</style>
