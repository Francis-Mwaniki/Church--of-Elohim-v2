<template>
  <main class="flex md:flex-row flex-col flex-wrap">
    <div class="gap-y-3 mx-auto gap-1 m-2 rounded-lg" v-for="vid in videos">
      <iframe
        class="max-w-lg"
        width="400"
        height="290"
        :src="`https://www.youtube.com/embed/${vid.videoId}`"
        title="LATEST SABBATH SONG UPENDO TELE_BY EPHESUS"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        { videoId: "Cgj3yAsrlBo" },
        { videoId: "Zr9lUG-3_cc" },
        { videoId: "J05X_RK_D6g" },
        { videoId: "oE-iMg1SpPI" },
        { videoId: "lfGOgUWzQ5U" },
      ],
    };
  },
};
</script>

<style></style>
