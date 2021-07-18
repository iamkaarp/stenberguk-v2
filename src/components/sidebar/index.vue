<template>
  <div
    id="sidebar"
  >
    <div
      ref="menu__toggler"
      class="menu__toggler"
      @click="toggleMenu"
    >
      <span />
    </div>
    <div
      ref="menu"
      class="menu"
    >
      <p
        class="cursor-pointer"
        @click="scrollTo('main')"
      >
        Welcome
      </p>
      <p
        class="cursor-pointer"
        @click="scrollTo('resume')"
      >
        Timeline
      </p>
      <p
        class="cursor-pointer"
        @click="scrollTo('contact')"
      >
        Contact
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const menu__toggler = ref(null);
    const menu = ref(null);

    const toggleMenu = () => {
      menu__toggler.value.classList.toggle('active');
      menu.value.classList.toggle('active');
    };

    const scrollTo = (page) => {
      const bodyRect = document.body.getBoundingClientRect();
      const elem = document.getElementById(page).getBoundingClientRect();
      const position = elem.top - bodyRect.top;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    };

    return { menu, menu__toggler, toggleMenu, scrollTo };
  },
};
</script>

<style>

</style>