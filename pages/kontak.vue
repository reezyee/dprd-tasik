<template>
  <div class="bg-gray-100 min-h-screen font-sans">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
          Kontak DPRD Kota Tasikmalaya
        </h1>
        <nav class="flex items-center text-sm sm:text-base gap-2">
          <NuxtLink to="/" class="hover:underline hover:text-blue-200 transition">
            Beranda
          </NuxtLink>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
          <span class="text-blue-200">Kontak</span>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div class="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Informasi Kontak
          </h2>
          <div class="space-y-4">
            <p class="text-lg text-gray-600 flex items-center gap-2">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Alamat: Jl. RE. Martadinata No. 334, Kota Tasikmalaya, Kode Pos 46151, Jawa Barat, Indonesia
            </p>
            <p class="text-lg text-gray-600 flex items-center gap-2">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email: info@dprd-tasikmalayakota.go.id
            </p>
            <p class="text-lg text-gray-600 flex items-center gap-2">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Telepon: (0265) 313094
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Kirim Pesan
          </h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Nama</label>
              <input
                type="text"
                id="name"
                v-model="form.name"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="form.email"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan email Anda"
                required
              />
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">Subjek</label>
              <input
                type="text"
                id="subject"
                v-model="form.subject"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan subjek pesan"
                required
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Pesan</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Tulis pesan Anda di sini"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex justify-center items-center"
                :disabled="isSubmitting"
              >
                <span v-if="isSubmitting" class="flex items-center">
                  <svg
                    class="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Mengirim...
                </span>
                <span v-else>Kirim Pesan</span>
              </button>
            </div>
            <div v-if="successMessage" class="text-green-600 text-center mt-4">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="text-red-600 text-center mt-4">
              {{ errorMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Kontak DPRD Kota Tasikmalaya',
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message,
      },
    })

    if (response.success) {
      successMessage.value = 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.'
      form.value = { name: '', email: '', subject: '', message: '' } // Reset form
    } else {
      errorMessage.value = 'Gagal mengirim pesan. Silakan coba lagi.'
    }
  } catch (error) {
    errorMessage.value = 'Terjadi kesalahan. Silakan coba lagi nanti.'
    console.error('Error sending email:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>