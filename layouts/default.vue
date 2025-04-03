<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Header />
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot />
    </main>
    <Footer />
  </div>
</template>
