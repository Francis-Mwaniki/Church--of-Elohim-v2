<style></style>
<!-- Card List Section -->
<template>
  <section class="bg-gray-900 py-7 px-12">
    <VerticalNav1 />
    <h1
      class="md:text-3xl text-xl font-mono text-white flex justify-center items-center mx-auto uppercase p-1"
    >
      Messianic Gospel Artist.
    </h1>
    <Artist2 />
    <!-- Card Grid 1 -->
    <div
      class="mx-auto flex md:flex-row gap-2 flex-wrap flex-col justify-center items-center my-auto"
    >
      <div
        v-for="vid in vidId2"
        class="max-w-md max-h-screen sm:max-h-full m-1 rounded-md"
      >
        <iframe
          class="w-auto md:w-full"
          id="ytplayer"
          type="text/html"
          height="280px"
          :src="`https://www.youtube.com/embed/${vid.videoId}?autoplay=1`"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import VerticalNav1 from "../components/verticalNav.vue";
import Artist2 from "../components/Artist2.vue";
export default {
  setup() {
    const posts = ref([]);
    const vidId = ref([]);
    const vidId2 = ref([]);

    return { posts, vidId2, vidId };
  },
  methods: {
    async fetchAllYt() {
      await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCusr9FtV7oVAKgMzRD1KjLA&maxResults=10&key=AIzaSyAcV4XRVz4bWK4YMucLj6R89HSE9Yj4zzo"
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let videos = data.items;
          for (const video of videos) {
            let wholeVideo = video.id;
            let ytVideos = video.snippet;
            this.posts.push(ytVideos);
            this.vidId.push(wholeVideo);
          }
        });
    },
    async fetchAllYt2() {
      await fetch(
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCFb034q690fN9Ti_0ch-yAQ&maxResults=10&order=relevance&key=AIzaSyAcV4XRVz4bWK4YMucLj6R89HSE9Yj4zzo"
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          let videos = data.items;
          for (const video of videos) {
            let wholeVideo = video.id;
            let ytVideos = video.snippet;
            this.posts.push(ytVideos);
            this.vidId2.push(wholeVideo);
            console.log(this.vidId2);
          }
        });
    },
  },
  mounted() {
    this.fetchAllYt();
    this.fetchAllYt2();
  },
  components: { VerticalNav1, Artist2 },
};
</script>
