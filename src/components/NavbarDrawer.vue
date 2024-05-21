<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card bg-secondary text-white">
      <q-img src="https://i.pinimg.com/originals/70/eb/f8/70ebf816a92f462c0ce5896195a721db.jpg" class="full-width">
        <q-img-placeholder>
          <q-icon name="person" size="64px" />
        </q-img-placeholder>
      </q-img>
      <q-card-section>
        <div class="text-h6 text-bold">Nanda Alfiranda</div>
        <div class="text-subtitle2">Mahasiswa</div>
      </q-card-section>
      <q-card-section>
        223510733 dari kelas A Teknik Informatika angkatan 2022 di Universitas Islam Riau
      </q-card-section>
      <q-separator dark />
      <q-card-actions vertical>
        <q-btn flat class="q-mb-sm q-btn-hover">Profil</q-btn>
        <q-btn flat class="q-btn-hover">Pengaturan</q-btn>
      </q-card-actions>
    </q-card>
    <!-- Tambahkan lebih banyak kartu jika diperlukan -->
  </div>
</template>

<script>
export default {
  name: 'NavbarDrawer'
};
</script>

<style scoped>
.my-card {
  max-width: 400px;
  margin: auto;
}

.full-width {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.text-bold {
  font-weight: bold;
}

.q-btn-hover:hover {
  background-color: var(--q-color-primary);
  color: white;
  transition: background-color 0.3s, color 0.3s;
}
</style>
