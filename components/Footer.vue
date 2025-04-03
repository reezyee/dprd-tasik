<template>
  <!-- Footer Section -->
  <footer class="bg-blue-900 text-white py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Alamat -->
        <div>
          <h3 class="text-xl font-semibold mb-4 tracking-tight">
            DPRD Kota Tasikmalaya
          </h3>
          <p class="text-sm leading-relaxed">
            Jl. RE. Martadinata No. 334, Kota Tasikmalaya, Kode Pos 46151, Jawa
            Barat, Indonesia
          </p>
          <p class="text-sm mt-2 leading-relaxed">
            Telp: (0265) 313094 | Faks: (0265) 313093 – 313094
          </p>
          <p class="text-sm mt-2 leading-relaxed">
            Email:
            <a
              href="mailto:info@dprd-tasikmalayakota.go.id"
              class="hover:underline hover:text-blue-300 transition duration-200"
              >info@dprd-tasikmalayakota.go.id</a
            >
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-semibold mb-4 tracking-tight">
            Tautan Cepat
          </h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/profil/sejarah"
                class="text-sm hover:text-blue-300 transition duration-200"
              >
                Sejarah DPRD
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/berita"
                class="text-sm hover:text-blue-300 transition duration-200"
              >
                Berita
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/profil/pimpinan"
                class="text-sm hover:text-blue-300 transition duration-200"
              >
                Pimpinan DPRD
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/kontak"
                class="text-sm hover:text-blue-300 transition duration-200"
              >
                Kontak
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="text-xl font-semibold mb-4 tracking-tight">Ikuti Kami</h3>
          <div class="flex space-x-4">
            <!-- Facebook -->
            <a
              href="https://www.facebook.com/dprd.tasikmalayakota"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-300 transition duration-200"
              aria-label="Facebook DPRD Kota Tasikmalaya"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                />
              </svg>
            </a>
            <!-- Twitter -->
            <a
              href="https://twitter.com/dprd_tasik"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-300 transition duration-200"
              aria-label="Twitter DPRD Kota Tasikmalaya"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                />
              </svg>
            </a>
            <!-- Instagram -->
            <a
              href="https://www.instagram.com/dprd.tasikmalayakota"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white hover:text-blue-300 transition duration-200"
              aria-label="Instagram DPRD Kota Tasikmalaya"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.265.069 1.645.069 4.849s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.265.058-1.645.069-4.849.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.265-.069-1.645-.069-4.849s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-1.405.064-2.813.363-3.986 1.536C2.014 2.661 1.715 4.069 1.651 5.474c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.064 1.405.363 2.813 1.536 3.986 1.173 1.173 2.581 1.472 3.986 1.536 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.405-.064 2.813-.363 3.986-1.536 1.173-1.173 1.472-2.581 1.536-3.986.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.064-1.405-.363-2.813-1.536-3.986C21.336.526 19.928.227 18.523.163c-1.28-.058-1.688-.072-4.947-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-10 pt-6 border-t border-blue-800 text-center text-sm">
        &copy; {{ currentYear }} DPRD Kota Tasikmalaya. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

// Mendapatkan tahun saat ini secara dinamis
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
footer {
  background: linear-gradient(90deg, #1e3a8a 0%, #1e40af 100%);
}

h3 {
  font-family: "Inter", sans-serif;
  font-weight: 600;
}

a {
  transition: color 0.3s ease;
}

.text-sm {
  line-height: 1.6;
}
</style>
