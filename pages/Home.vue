<template>
  <section class="home-container">
    <div class="hero is-primary is-large">
      <div class="hero-body">
        <div class="hero-container">
          <h1 class="subtitle">Transportation Expenses Application</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap");

h1 {
  margin: 0% 0% 0% 0%;
  font-family: "Kaushan Script", cursive;
}
.hero {
  background-image: linear-gradient(
      rgba(89, 172, 154, 0.65),
      rgba(16, 90, 68, 0.65)
    ),
    url("../images/rome.jpg");
}
</style>
