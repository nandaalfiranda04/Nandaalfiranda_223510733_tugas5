<template>
  <div class="q-pa-md row items-start q-gutter-md">

    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-img
          class="full-width"
          src="https://cdn.quasar.dev/img/mountains.jpg"
        />
        <q-card-actions vertical class="justify-around q-px-md">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="accent" icon="bookmark" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      lorem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
    };
  }
};
</script>

<style scoped>
.full-width {
  width: 100%;
  height: auto;
}
.my-card {
  width: 100%;
}
</style>
