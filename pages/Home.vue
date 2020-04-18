<template>
  <div>
    <div class="hero home-background-image is-fullheight">
      <div class="hero-body">
        <div class="hero-container">
          <h1 class="subtitle has-text-light application-name">
            Transportation Expenses Application
          </h1>
        </div>
      </div>
      <div class="hero is-fullheight">
        <div class="hero-body">
          <div class="hero-container"></div>
        </div>
      </div>
      <div class="hero">
        <div class="hero-body">
          <div class="hero-container">
            <section class="fadein">
              <h2>情報設計</h2>
              <p>何かしらの説明文。何かしらの説明文。何かしらの説明文。</p>
            </section>
            <section class="fadein">
              <h2>サイトマップ</h2>
              <p>何かしらの説明文。何かしらの説明文。何かしらの説明文。</p>
            </section>
            <section class="fadein">
              <h2>ワイヤーフレーム</h2>
              <p>何かしらの説明文。何かしらの説明文。何かしらの説明文。</p>
            </section>
          </div>
        </div>
      </div>
    </div>
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
    // スクロールイベント
    handleScroll() {
      const firstElement = document.getElementsByClassName("first");
      if (firstElement.length !== 1) return;

      const currentScrollY =
        DEFALT_SCROLL_TOP - firstElement[0].getBoundingClientRect().y;
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
  margin: 50% 0% 0% 0%;
  font-family: "Kaushan-Script", cursive;
}

.home-background-image {
  background-image: linear-gradient(
      rgba(90, 127, 182, 0.63),
      rgba(12, 94, 66, 0.767)
    ),
    url("../images/image.jpg");
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
