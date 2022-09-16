<style></style>
<!-- Card List Section -->
<template>
  <section class="bg-gray-100 dark:bg-gray-900 py-10 px-12">
    <!-- Card Grid -->
    <div
      class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <section>
        <!-- Card Item -->
        <div
          class="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1"
          v-for="(post, index) in posts"
        >
          <!-- Clickable Area -->
          <a href="#" class="cursor-pointer">
            <figure>
              <!-- Image -->
              <img
                :src="post.image"
                class="rounded-t h-72 w-full object-cover"
              />

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
export default {
  setup() {
    const { ref } = require('vue')

    const posts = ref([
      {
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
        title: '5 Easy Tips That Will Make Your Latte Art Flourish',
        description:
          'Latte art is quite often the most attractive thing for a new barista, and latte art is an excellent gateway to the exciting world of coffee. Latte art easy to start with, but to master latte art patterns, you need a lot practice and determination. Here are my tips that helped me to improve my latte art a few years ago!',
      },
      {
        image: 'https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed',
        title: 'Coffee Roasting Basics: Developing Flavour by Roasting',
        description:
          "Caffé latte and flat white are definitely the most ordered espresso based drinks in cafés around the world but what are they really? Have you ever wondered the difference between caffé latte vs. flat white? Let's see what makes caffé latte and flat white different from each other!",
      },
      {
        image: 'https://images.unsplash.com/photo-1445077100181-a33e9ac94db0',
        title: 'Latte vs. Flat White - What is the Difference?',
        description:
          'I bet roasting is the thing that every barista wants to know about! We can develop flavour by roasting coffee. How can we achieve the best tasting coffee? What actually happens when roasting?',
      },
      {
        image: 'https://images.unsplash.com/photo-1459257868276-5e65389e2722',
        title: 'Creating the Perfect Espresso Recipe',
        description:
          'Espresso recipes are important in cafés in terms of consistency and flavour. How and why are the espresso recipes made and what are the things you should consider when making a recipe for espresso? Let’s dig deeper into the world of espresso!',
      },
    ])

    return { posts }
  },
}
</script>
