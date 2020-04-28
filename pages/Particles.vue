<template>
  <div>
    <div class="hero is-fullheight">
      <vue-particles
        color="#E0FFFF"
        :particleOpacity="1"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#E0FFFF"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="1"
        :linesDistance="170"
        :moveSpeed="4"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
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

<style scoped></style>
