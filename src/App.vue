<template>
  <q-layout view="hHh lpR fFf">
    <!-- Navbar -->
    <Navbar @toggleLeftDrawer="toggleLeftDrawer" />

    <!-- Left Drawer -->
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <NavbarDrawer />
    </q-drawer>

    <!-- Right Drawer -->
    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="(slide, index) in slides" :key="index" class="my-card">
      <img :src="slide.img" />
      <q-card-section>
        <div class="text-h6">{{ slide.name }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ slide.lorem }}
      </q-card-section>
    </q-card>
  </div>
    </q-drawer>

    <!-- Page Content -->
    <q-page-container>
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <Carousel :slides="slides" />
          <Card />
        </div>
      </div>
    </q-page-container>

    <!-- Footer -->
    <Footer />
  </q-layout>
  
</template>

<script>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import NavbarDrawer from './components/NavbarDrawer.vue';
import Carousel from './components/Carousel.vue';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    NavbarDrawer,
    Carousel,
    Card,
    Footer
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    const slides = ref([
      {
        name: "Jepang",
        lorem: "Jepang dengan segala keindahan dan keajaibannya kerap menjadi negara destinasi wisata banyak orang. Ragam pengalaman menyenangkan yang bisa didapat di Negeri Sakura ini membuat banyak orang tidak ragu untuk kembali berkunjung.",
        img: "https://www.aca.co.id/cmsprd/uploads/C_5DestinasiWisataKeluargadiJepang%201544584225.jpg"
      },
      {
        name: "Singapura",
        lorem: "Singapura merupakan negara yang bertetangga dengan Indonesia. Singapura juga termasuk salah satu negara dengan Destinasi Wisata nya yang wajib dikunjungi. Jaraknya yang sangat dekat dengan Indonesia membuat wisatawan Indonesia banyak yang berlibur kesana.",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmRdV-sKhnZtJ4CYgpUO67DxCKIRIRe09FjDhl1fZ2Km8iz0XCWtfrOnaQJdpSxaVB4Grn2W5B4wIz0kx1saCp5QNRPFJtED2UzMY2pv3okeGwrJxDHkJvCxTmHH4urS5Cq9Fbz4-BPWI/s1600/singapore.jpg"
      },
      {
        name: "Moskow",
        lorem: "Berwisata ke Moskow belum lengkap rasanya tanpa mengunjungi katedral unik dan mengesankan ini. Terletak di Lapangan Merah yang mengesankan, Katedral St. Basil adalah salah satu tempat terbaik untuk dikunjungi di Moskow dan simbol budaya populer Rusia.",
        img: "https://blog.dookinternational.com/wp-content/uploads/2016/11/Moscow-Kremlin-2.jpg"
      },
      {
        name: "Paris",
        lorem: "Menara Eiffel adalah bangunan paling ikonis di Paris sekaligus salah satu destinasi wisata yang paling ramai dikunjungi di dunia.   Tujuh juta orang mengunjungi menara ini setiap tahun dan menaiki liftnya hingga ke puncak menara. Tempat Wisata Terbaik Dunia, Ini Sejarah Menara Eiffel Paris yang Cocok untuk  Liburan Pasangan Romantis",
        img: "https://wisatamuda.com/wp-content/uploads/2019/09/1-Menara-Eiffel-Gambar-Foto-Tempat-Wisata-Terkenal-di-Paris-Perancis.jpg"
      }
    ]);

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    };

    return {
      leftDrawerOpen,
      rightDrawerOpen,
      slides,
      toggleLeftDrawer,
      toggleRightDrawer,
    };
  }
};
</script>

<style scoped>
.q-header {
  text-align: center;
}
</style>
