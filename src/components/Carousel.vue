<template>
  <div class="q-pa-md">
    <q-option-group
      v-model="controlType"
      :options="controlTypeOptions"
      color="purple"
      inline
      class="q-mb-md"
    />

    <q-carousel
      v-model="slide"
      swipeable
      animated
      :control-type="controlType"
      control-color="purple"
      navigation
      padding
      arrows
      height="300px"
      class="text-purple rounded-borders"
    >
      <q-carousel-slide v-for="(slideItem, index) in slides" :key="index" :name="slideItem.name" class="column no-wrap flex-center">
        <img :src="slideItem.img" alt="Carousel Image" class="full-width">
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Carousel',
  setup() {
    const controlType = ref('flat');
    const controlTypeOptions = [
      { value: 'regular', label: 'regular' },
      { value: 'unelevated', label: 'unelevated' },
      { value: 'flat', label: 'flat (default)' },
      { value: 'outline', label: 'outline' },
      { value: 'push', label: 'push' }
    ];
    const slide = ref('style');

    const slides = ref([
      {
        name: "style",
        img: "https://blog.bookingtogo.com/wp-content/uploads/2020/12/pura-ulun-danu-bratan-bali-bedugul-scaled.jpg"
      },
      {
        name: "tv",
        img: "https://www.hargatiket.net/wp-content/uploads/2019/02/Tempat-Wisata-di-Bandung.jpg"
      },
      {
        name: "layers",
        img: "https://3.bp.blogspot.com/-xxNr1LwJJOA/VkxEWKDTTeI/AAAAAAAAAjg/HMtVXiQZ734/s1600/Tempat-Wisata-Papua-Raja-Ampat-Yang-Eksotis.jpg"
      },
      {
        name: "map",
        img: "https://1.bp.blogspot.com/-YdqYw7vC9NM/XkVITEdsH6I/AAAAAAAAGGQ/iqVz_N8hZFIMgay7fulBX_uXD5E6XRQiwCNcBGAsYHQ/s1600/1903994.jpg"
      }
    ]);

    return {
      controlType,
      controlTypeOptions,
      slide,
      slides
    }
  }
}
</script>

<style scoped>
.full-width {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
