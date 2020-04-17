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
      <div class="hero has-background-light is-fullheight">
        <div class="hero-body">
          <div class="hero-container introduction">
            <strong>test</strong>
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
      <div class="hero third is-primary is-fullheight">
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

      const introductorySentence = document.getElementsByClassName(
        "introduction"
      );
      if (introductorySentence.length !== 1) return;

      const currentScrollY =
        DEFALT_SCROLL_TOP - firstElement[0].getBoundingClientRect().y;

      // 導入文の表示切り替え
      if (currentScrollY > 400) {
        introductorySentence[0].classList.add("introduction-active");
      } else {
        introductorySentence[0].classList.remove("introduction-active");
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
.introduction-active {
  animation: fadeIn 2s ease 0s 1 normal;
  -webkit-animation: fadeIn 2s ease 0s 1 normal;
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
</style>
