<template>
  <main>
    <slot />
    <Footer1 />
  </main>
</template>

<script>
import Footer1 from "~~/components/Footer.vue";

export default { components: { Footer1 } };
</script>

<style></style>
