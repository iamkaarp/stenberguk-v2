<template>
  <div>
    <Sidebar />
    <Main />
    <Resume />
    <Contact />
  </div>
</template>

<script>
import Sidebar from './components/sidebar/index.vue';
import Main from './components/main/index.vue';
import Resume from './components/main/resume.vue';
import Contact from './components/main/contact.vue';

export default {
  components: {
    Sidebar,
    Main,
    Resume,
    Contact,
  },
};
</script>

<style>
</style>
