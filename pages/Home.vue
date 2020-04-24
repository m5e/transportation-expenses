<template>
  <div>
    <div class="hero home-background-image is-fullheight">
      <section>
        <div class="hero-body">
          <div class="hero-container">
            <h1 class="subtitle application-name">Transportation Expenses Application</h1>
          </div>
        </div>
      </section>
    </div>
    <div class="hero home-background-image is-fullheight" />
    <div class="hero home-background-image is-fullheight">
      <section>
        <h2 class="title">Programming language</h2>
        <div class="hero-body fadein-content">
          <div class="hero-container">
            <p class="content">javascript</p>
            <p class="content">bulma</p>
            <p class="content">Nuxt.js</p>
          </div>
          <div class="hero-container image-pc-right">
            <img src="../images/image-pc.jpg" />
          </div>
        </div>
      </section>
    </div>
    <div class="hero home-background-image is-fullheight">
      <section>
        <h2 class="title">linter</h2>
        <div class="hero-body fadein-content2">
          <div class="hero-container image-pc-left">
            <img src="../images/image-template.jpg" />
          </div>
          <div class="hero-container content-style">
            <p class="content">eslint</p>
          </div>
        </div>
      </section>
    </div>
    <div class="hero home-background-image is-fullheight">
      <section>
        <h2 class="title">other</h2>
        <div class="hero-body fadein-content3">
          <div class="hero-container image-pc-right">
            <img src="../images/image-other.jpg" />
          </div>
          <div class="hero-container">
            <p class="content">animate.css</p>
            <p class="content">material-design-icons</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
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
      const observer = new IntersectionObserver(entries => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("scrollin");
        }
      });

      observer.observe(document.querySelector(".fadein-content"));
      observer.observe(document.querySelector(".fadein-content2"));
      observer.observe(document.querySelector(".fadein-content3"));
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
  font-weight: 300;
  font-size: 42px;
  color: #157555;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.home-background-image {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.content {
  font-size: 2rem;
}

.content-style {
  position: absolute;
  top: 15%;
  left: 60%;
}

@media screen and (max-width: 700px) {
  div.image-pc-right {
    top: 95%;
  }
}

.image-pc-right {
  position: absolute;
  left: 50%;
  top: 15%;
  width: 45%;
}

.image-pc-left {
  position: absolute;
  top: 15%;
  width: 45%;
}

.fadein-content,
.fadein-content2,
.fadein-content3 {
  opacity: 0.1;
  transform: translate(0, 50px);
  transition: all 600ms;
}

.fadein-content.scrollin,
.fadein-content2.scrollin,
.fadein-content3.scrollin {
  opacity: 1;
  transform: translate(0, 0);
}

.title {
  font-family: "Kaushan-Script", cursive;
  margin-left: 3%;
}
</style>
