<style></style>
<!-- Card List Section -->
<template>
  <section class="bg-gray-900 py-7 px-12">
    <VerticalNav1 />
    <h1
      class="md:text-3xl text-xl font-mono text-white flex justify-center items-center mx-auto uppercase p-1"
    >
      Messianic Gospel Artists.
    </h1>
    <div
      class="flex justify-center items-center mx-auto sm:max-w-6xl max-w-3xl flex-col my-2"
    >
      <img
        src="../assets/images/waina-mumesiah.jpg"
        class="rounded-full h-24 w-24"
        alt=""
      />
      <!-- Title -->
      <p class="text-lg mb-4 font-bold leading-relaxed text-gray-300">
        <!-- Post Title -->
        Wainaina Mumessiah
      </p>
      <small class="font-medium font-mono text-white p-3 text-lg">
        Caffé latte and flat white are definitely the most ordered espresso based drinks
        in cafés around the world but what are they really? Have you ever wondered the
        difference between caffé latte vs. flat white? Let's see what makes caffé latte
        and flat white different from each other!
      </small>
      <a
        href="https://www.youtube.com/channel/UCusr9FtV7oVAKgMzRD1KjLA"
        class="outline-none no-underline text-white font-mono after:text-red-700 flex flex-row items-center justify-center"
      >
        <span
          ><!-- <font-awesome-icon
            icon="fa-solid fa-youtube"
            class="h-7 w-7 text-red-600 p-1"
        /> --></span
        >
        <span class="text-white"> Youtube channel</span>
      </a>
    </div>
    <!-- Card Grid -->
    <div
      class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <section v-for="(post, index) in posts">
        <!-- Card Item -->
        <div
          class="my-8 rounded shadow-lg shadow-white bg-gray-800 duration-300 hover:-translate-y-1 min-h-screen"
        >
          <!-- Clickable Area -->
          <a href="#" class="cursor-pointer">
            <figure>
              <!-- Image -->
              <img :src="post.image" class="rounded-t h-72 w-full object-cover" />
              <!--  <video :src="post.video" class="rounded-t h-72 w-full object-cover"></video> -->

              <figcaption class="p-4">
                <!-- Title -->
                <p
                  class="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300"
                  x-text="post.title"
                >
                  <!-- Post Title -->
                  {{ post.title }}
                </p>

                <!-- Description -->
                <small class="leading-5 text-gray-500 dark:text-gray-400">
                  <!-- Post Description -->
                  {{ post.description }}
                </small>
              </figcaption>
            </figure>
          </a>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import VerticalNav1 from "../components/verticalNav.vue";
export default {
  setup() {
    const posts = ref([
      {
        image: "https://i3.ytimg.com/vi/McyJfewuSVA/hqdefault.jpg",
        title: "5 Easy Tips That Will Make Your Latte Art Flourish",
        description:
          "Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
      },
      {
        image: "https://i3.ytimg.com/vi/4qOGPd9c7ks/hqdefault.jpg",
        title: "Coffee Roasting Basics: Developing Flavour by Roasting",
        description:
          "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
      },
      {
        image: "https://i3.ytimg.com/vi/UqC5-RtmK4E/maxresdefault.jpg",
        title: "Latte vs. Flat White - What is the Difference?",
        description:
          "I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?",
      },
      {
        image: "https://i3.ytimg.com/vi/Alfu5dpRzQI/hqdefault.jpg",
        title: "Creating the Perfect Espresso Recipe",
        description:
          "Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!",
      },
      {
        image: "https://i3.ytimg.com/vi/LK0j7q45CAA/hqdefault.jpg",
        title: "5 Easy Tips That Will Make Your Latte Art Flourish",
        description:
          "Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!",
      },
      {
        image: "https://i3.ytimg.com/vi/glWEV-ZhNbU/hqdefault.jpg",
        title: "Coffee Roasting Basics: Developing Flavour by Roasting",
        description:
          "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
      },
    ]);
    return { posts };
  },
  components: { VerticalNav1 },
};
</script>
