<template>
  <main>
    <Login1 />
    <VerticalNav1 />
    <div class="text-black">{{ store.count }}</div>
    <div class="text-black">{{ store.doubleCounter }}</div>
  </main>
</template>

<script>
import { useStore } from "~~/store/storeA";
import Login1 from "~~/components/Login.vue";
import VerticalNav1 from "~~/components/verticalNav.vue";

export default {
  components: { Login1, VerticalNav1 },
  setup() {
    const store = useStore();
    console.log(store);
    return { store };
  },
};
</script>

<style></style>
