<template>
  <q-header elevated class="bg-secondary text-white">
    <q-toolbar>
      <q-btn flat round icon="menu" @click="$emit('toggleLeftDrawer')" />
      <q-toolbar-title>
        TRIVILING
      </q-toolbar-title>
      <q-btn flat round icon="search" />
      <q-btn flat round icon="notifications" />
      <q-btn flat round icon="account_circle" />
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
