<template>
  <!-- component -->
  <div class="w-full min-h-screen flex items-center justify-center bg-black">
    <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
      <div class="w-full text-4xl md:text-7xl font-bold">
        <h1 class="w-full md:w-2/3">How can we help you?. get in touch</h1>
      </div>
      <div class="flex mt-8 flex-col md:flex-row md:justify-between">
        <p class="w-full md:w-2/3 text-gray-200">
          All song are scriptural inspiration Praising Elohim The creator of Heaven And
          Earth.
        </p>
        <div class="w-44 pt-6 md:pt-0">
          <a
            class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
            ><button>Contact us</button></a
          >
        </div>
      </div>
      <div class="flex flex-col">
        <div class="flex mt-24 mb-10 flex-row justify-between">
          <div class="">
            <h3 class="italic uppercase font-mono font-extrabold text-white">
              Franc_Pro
            </h3>
          </div>
          <a
            class="hidden lg:block cursor-pointer text-gray-400 hover:text-white uppercase"
            >About</a
          >
          <a
            class="hidden lg:block cursor-pointer text-gray-400 hover:text-white uppercase"
            >Services</a
          >
          <a
            class="hidden lg:block cursor-pointer text-gray-400 hover:text-white uppercase"
            >Songs</a
          >
          <a
            class="hidden lg:block cursor-pointer text-gray-400 hover:text-white uppercase"
            >login</a
          >
          <div class="flex flex-row space-x-8 items-center justify-between">
            <a href="#">
              <!-- Facebook -->
              <font-awesome-icon :icon="['fas', 'facebook']" class="text-white h-6 w-6" />
            </a>
            <a href="#">
              <!-- Github -->
              <font-awesome-icon :icon="['fas', 'github']" class="text-white h-6 w-6" />
            </a>
            <a href="#">
              <!-- Twitter -->
              <font-awesome-icon icon="fa-solid fa-twitter" class="text-white h-6 w-6" />
              <font-awesome-icon icon="{twitter}" />
            </a>
            <a href="#">
              <!-- Twitter -->
              <font-awesome-icon
                :icon="['fas', 'linkedin-in']"
                class="text-white h-6 w-6"
              />
            </a>
          </div>
        </div>
        <hr class="border-gray-600" />
        <p class="w-full text-center my-1 text-gray-300">
          Copyright © 2022 Ephesus Sardis.Kenya
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
