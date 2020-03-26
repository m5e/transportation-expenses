<template>
  <section class="home-container">
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="hero-container">
          <h5 class="subtitle">
            Transportation Expenses Application
            <AppLogo />
          </h5>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from "../components/AppLogo.vue";

export default {
  components: { AppLogo },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
h5 {
  margin: 0% 0% 0% 0%;
}
</style>
