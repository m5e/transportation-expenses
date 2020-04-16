<template>
  <div>
    <section>
      <div class="hero first is-primary is-large">
        <div class="hero-body">
          <div class="hero-container">
            <h1 class="subtitle application-name">
              Transportation Expenses Application
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="hero second is-primary is-large">
        <div class="hero-body">
          <div class="hero-container"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="hero third is-primary is-large">
        <div class="hero-body">
          <div class="hero-container"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="hero fourth is-primary is-large">
        <div class="hero-body">
          <div class="hero-container"></div>
        </div>
      </div>
    </section>
  </div>
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
.application-name {
  margin: 0% 0% 0% 0%;
  font-family: "Kaushan-Script", cursive;
}
.first {
  background-image: linear-gradient(
      rgba(90, 127, 182, 0.63),
      rgba(12, 94, 66, 0.767)
    ),
    url("../images/image.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.second {
  background-image: linear-gradient(
      rgba(90, 127, 182, 0.63),
      rgba(12, 94, 66, 0.767)
    ),
    url("../images/image2.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.third {
  background-image: linear-gradient(
      rgba(90, 127, 182, 0.63),
      rgba(12, 94, 66, 0.767)
    ),
    url("../images/image3.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
.fourth {
  background-image: linear-gradient(
      rgba(90, 127, 182, 0.63),
      rgba(12, 94, 66, 0.767)
    ),
    url("../images/image4.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
