<template>
  <div>
    <div class="hero home-background-image is-fullheight">
      <div class="hero-body">
        <div class="hero-container">
          <h1 class="subtitle application-name">
            Transportation Expenses Application
          </h1>
        </div>
      </div>
      <div class="hero is-fullheight">
        <div class="hero-body">
          <div class="hero-container"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Top coordinate at initial display
const DEFALT_SCROLL_TOP = 52;

export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // Scroll event
    handleScroll() {
      const firstElement = document.getElementsByClassName("first");
      if (firstElement.length !== 1) return;

      const currentScrollY =
        DEFALT_SCROLL_TOP - firstElement[0].getBoundingClientRect().y;
    }
  },
  // Remove event listener
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.application-name {
  margin: 50% 0% 0% 0%;
  font-family: "Kaushan-Script", cursive;
}

.home-background-image {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.fadein {
  opacity: 0.1;
  transform: translate(0, 50px);
  transition: all 500ms;
}

.fadein.scrollin {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
