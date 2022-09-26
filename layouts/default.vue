<template>
  <main>
    <LoadingBar1 />
    <slot />
    <Footer1 />
  </main>
</template>

<script>
import Footer1 from "~~/components/Footer.vue";
import LoadingBar1 from "~~/components/loadingBar.vue";
export default {
  components: { Footer1, LoadingBar1 },
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
  mounted() {},
};
</script>

<style></style>
