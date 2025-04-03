<template>
  <header
    class="bg-gradient-to-r from-gray-100 to-white text-black py-4 shadow-lg"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Navigation Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Logo and Title -->
        <div class="flex items-center mb-4 md:mb-0">
          <img
            src="@/assets/img/logo.png"
            alt="Logo DPRD"
            class="mr-3 h-14 w-14"
          />
          <div>
            <h1 class="text-xl sm:text-2xl font-bold">DPRD Kota Tasikmalaya</h1>
            <p class="text-xs sm:text-sm text-gray-800">
              Dewan Perwakilan Rakyat Daerah
            </p>
          </div>
        </div>

        <!-- Main Navigation -->
        <nav class="hidden md:flex items-center">
          <ul class="flex flex-wrap space-x-1 md:space-x-6">
            <li class="relative group">
              <NuxtLink
                to="/"
                class="px-3 py-2 block hover:bg-blue-600 hover:text-white rounded-md transition duration-300 ease-in-out"
              >
                Beranda
              </NuxtLink>
            </li>
            <li class="relative group">
              <button
                class="px-3 py-2 flex items-center hover:bg-blue-600 hover:text-white rounded-md transition duration-300 ease-in-out"
                @click="toggleProfilMenu"
              >
                Profil
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 ml-1 transform transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white text-gray-700 z-10 transform transition-all duration-300 ease-in-out"
                :class="
                  isProfilMenuOpen
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                "
              >
                <div class="py-1 rounded-md bg-white shadow-xs">
                  <NuxtLink
                    to="/profil/sejarah"
                    class="block px-4 py-2 text-sm hover:bg-gray-100 transition duration-200"
                    @click="closeProfilMenu"
                  >
                    Sejarah
                  </NuxtLink>
                  <NuxtLink
                    to="/profil/visi-misi"
                    class="block px-4 py-2 text-sm hover:bg-gray-100 transition duration-200"
                    @click="closeProfilMenu"
                  >
                    Visi & Misi
                  </NuxtLink>
                  <NuxtLink
                    to="/profil/struktur"
                    class="block px-4 py-2 text-sm hover:bg-gray-100 transition duration-200"
                    @click="closeProfilMenu"
                  >
                    Struktur Organisasi
                  </NuxtLink>
                  <NuxtLink
                    to="/profil/pimpinan"
                    class="block px-4 py-2 text-sm hover:bg-gray-100 transition duration-200"
                    @click="closeProfilMenu"
                  >
                    Pimpinan DPRD
                  </NuxtLink>
                  <NuxtLink
                    to="/profil/anggota"
                    class="block px-4 py-2 text-sm hover:bg-gray-100 transition duration-200"
                    @click="closeProfilMenu"
                  >
                    Anggota DPRD
                  </NuxtLink>
                  <NuxtLink
                    to="/profil/fraksi"
                    class="block px-4 py-2 text-sm hover:bg-gray-100 transition duration-200"
                    @click="closeProfilMenu"
                  >
                    Fraksi
                  </NuxtLink>
                </div>
              </div>
            </li>
            <li class="relative group">
              <NuxtLink
                to="/berita"
                class="px-3 py-2 block hover:bg-blue-600 hover:text-white rounded-md transition duration-300 ease-in-out"
              >
                Berita
              </NuxtLink>
            </li>
            <li class="relative group">
              <NuxtLink
                to="/kontak"
                class="px-3 py-2 block hover:bg-blue-600 hover:text-white rounded-md transition duration-300 ease-in-out"
              >
                Kontak
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-white focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16m-7 6h7'
              "
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden bg-blue-800 rounded-lg mt-2 shadow-lg transition-all duration-300 ease-in-out"
      >
        <nav class="flex flex-col space-y-2 p-4">
          <NuxtLink
            to="/"
            class="px-3 py-2 block hover:bg-blue-600 hover:text-white rounded-md transition duration-200"
            @click="toggleMobileMenu"
          >
            Beranda
          </NuxtLink>
          <div class="relative">
            <button
              class="px-3 py-2 flex items-center w-full text-left hover:bg-blue-600 hover:text-white rounded-md transition duration-200"
              @click="toggleProfilMenu"
            >
              Profil
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1 transform transition-transform duration-300"
                :class="isProfilMenuOpen ? 'rotate-180' : ''"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              v-if="isProfilMenuOpen"
              class="mt-2 w-full rounded-md shadow-lg bg-white text-gray-700 transition-all duration-300 ease-in-out"
            >
              <div class="py-1 rounded-md bg-white shadow-xs">
                <NuxtLink
                  to="/profil/sejarah"
                  class="block px-4 py-2 text-sm hover:bg-gray-100 transition duration-200"
                  @click="toggleMobileMenu"
                >
                  Sejarah
                </NuxtLink>
                <NuxtLink
                  to="/profil/visi-misi"
                  class="block px-4 py-2 text-sm hover:bg-gray-100 transition duration-200"
                  @click="toggleMobileMenu"
                >
                  Visi & Misi
                </NuxtLink>
                <NuxtLink
                  to="/profil/struktur"
                  class="block px-4 py-2 text-sm hover:bg-gray-100 transition duration-200"
                  @click="toggleMobileMenu"
                >
                  Struktur Organisasi
                </NuxtLink>
              </div>
            </div>
          </div>
          <NuxtLink
            to="/berita"
            class="px-3 py-2 block hover:bg-blue-600 hover:text-white rounded-md transition duration-200"
            @click="toggleMobileMenu"
          >
            Berita
          </NuxtLink>
          <NuxtLink
            to="/kontak"
            class="px-3 py-2 block hover:bg-blue-600 hover:text-white rounded-md transition duration-200"
            @click="toggleMobileMenu"
          >
            Kontak
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);
const isProfilMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    isProfilMenuOpen.value = false; // Tutup dropdown Profil saat menu mobile dibuka
  }
};

const toggleProfilMenu = () => {
  isProfilMenuOpen.value = !isProfilMenuOpen.value;
};

const closeProfilMenu = () => {
  isProfilMenuOpen.value = false;
};
</script>

<style scoped>
/* Efek hover untuk dropdown di desktop */
.group:hover .group-hover\:block {
  display: block;
}

/* Efek transisi untuk dropdown */
.transition-all {
  transition: all 0.3s ease-in-out;
}

/* Pastikan dropdown di mobile memiliki z-index tinggi */
.z-10 {
  z-index: 10;
}
</style>
