<template>
  <div>
    <section>
      <div class="hero first is-primary is-fullheight">
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
      <div class="hero has-background-black-bis is-fullheight">
        <div class="hero-container">
          <div class="javascript-panel">
            <div class="notification is-warning">
              <p class="subtitle">javascript</p>
            </div>
          </div>
          <div class="vue-panel">
            <div class="notification is-primary">
              <p class="subtitle">Vue.js</p>
            </div>
          </div>
          <div class="nuxt-panel">
            <div class="notification is-info">
              <p class="subtitle">Nuxt.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="hero second is-primary is-fullheight">
        <div class="hero-body">
          <div class="hero-container"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="hero has-background-black-bis is-large">
        <div class="hero-body">
          <div class="hero-container"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="hero third is-primary is-fullheight">
        <div class="hero-body">
          <div class="hero-container"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="hero has-background-black-bis is-large">
        <div class="hero-body">
          <div class="hero-container"></div>
        </div>
      </div>
    </section>
    <section>
      <div class="hero fourth is-primary is-fullheight">
        <div class="hero-body">
          <div class="hero-container"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// 初期表示時の top 座標
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
    // コンテンツの表示タイミングを制御
    handleScroll() {
      const firstElement = document.getElementsByClassName("first");
      if (firstElement.length !== 1) return;

      const javascriptPanel = document.getElementsByClassName(
        "javascript-panel"
      );
      if (javascriptPanel.length !== 1) return;

      const currentScrollY =
        DEFALT_SCROLL_TOP - firstElement[0].getBoundingClientRect().y;

      // 導入文の表示切り替え
      if (currentScrollY > 200) {
        javascriptPanel[0].classList.add("javascript-panel-active");
      } else {
        javascriptPanel[0].classList.remove("javascript-panel-active");
      }

      const vuePanel = document.getElementsByClassName("vue-panel");
      if (vuePanel.length !== 1) return;

      if (currentScrollY > 500) {
        vuePanel[0].classList.add("vue-panel-active");
      } else {
        vuePanel[0].classList.remove("vue-panel-active");
      }

      const nuxtPanel = document.getElementsByClassName("nuxt-panel");
      if (nuxtPanel.length !== 1) return;

      if (currentScrollY > 800) {
        nuxtPanel[0].classList.add("nuxt-panel-active");
      } else {
        nuxtPanel[0].classList.remove("nuxt-panel-active");
      }
    }
  },
  // イベントリスナの削除
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.application-name {
  margin: 0% 0% 0% 0%;
  font-family: "Kaushan-Script", cursive;
}

.subtitle {
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

.javascript-panel {
  width: 40%;
  padding-top: 15%;
  opacity: 0;
}

.vue-panel {
  padding-top: 15%;
  padding-left: 60%;
  opacity: 0;
}

.nuxt-panel {
  width: 40%;
  padding-top: 15%;
  opacity: 0;
}

.javascript-panel-active,
.vue-panel-active,
.nuxt-panel-active {
  animation: fadeIn 2s ease 0s 1 normal;
  -webkit-animation: fadeIn 2s ease 0s 1 normal;
  opacity: 1;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
