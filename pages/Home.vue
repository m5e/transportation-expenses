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
          <div class="bulma-panel">
            <div class="notification is-primary">
              <p class="subtitle">bulma</p>
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
    this.swichDisplaySection;
  },
  methods: {
    // スクロールイベント
    handleScroll() {
      this.swichDisplaySection("javascript-panel");
      this.swichDisplaySection("bulma-panel");
      this.swichDisplaySection("nuxt-panel");
    },
    // セクションの表示切替
    swichDisplaySection(panel) {
      const firstElement = document.getElementsByClassName("first");
      if (firstElement.length !== 1) return;

      const currentScrollY =
        DEFALT_SCROLL_TOP - firstElement[0].getBoundingClientRect().y;

      const panelElement = document.getElementsByClassName(`${panel}`);
      if (panelElement.length !== 1) return;

      if (
        panel === "javascript-panel" &&
        200 < currentScrollY &&
        currentScrollY <= 500
      ) {
        panelElement[0].classList.add("fade");
      } else if (
        panel === "bulma-panel" &&
        500 < currentScrollY &&
        currentScrollY <= 800
      ) {
        panelElement[0].classList.add("fade");
      } else if (panel === "nuxt-panel" && 800 < currentScrollY) {
        panelElement[0].classList.add("fade");
      } else if (currentScrollY < 200) {
        if (panelElement[0].classList.contains("fade"))
          panelElement[0].classList.remove("fade");
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

.bulma-panel {
  padding-top: 15%;
  padding-left: 60%;
  opacity: 0;
}

.nuxt-panel {
  width: 40%;
  padding-top: 15%;
  opacity: 0;
}

.fade {
  animation: fadeIn 0.2s ease 0.3s 1 normal;
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
