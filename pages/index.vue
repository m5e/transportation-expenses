<template>
  <section class="index-background">
    <div>
      <nav class="navbar" role="navigation">
        <div class="container index-navbar-unpinned">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>
            <a
              role="button"
              class="navbar-burger"
              :class="{ 'is-active': isShowSideMenu }"
              aria-label="menu"
              aria-expanded="false"
              @click="showSideMenu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">作成中</span>
                <span class="tag is-info">1.0.0</span>
              </div>
            </div>
          </div>

          <div class="navbar-menu" :class="{ 'is-active': isShowSideMenu }">
            <div class="navbar-start">
              <a
                class="navbar-item"
                :class="{ 'is-active': selected === 'Home' }"
              >
                <span @click="refreshSelectedPage">Home</span>
              </a>
              <a
                class="navbar-item"
                :class="{ 'is-active': selected === 'Request' }"
              >
                <span @click="refreshSelectedPage">Request</span>
              </a>
              <a
                class="navbar-item"
                :class="{ 'is-active': selected === 'List' }"
              >
                <span @click="refreshSelectedPage">List</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Home v-if="selected === 'Home'"></Home>
      <Request v-else-if="selected === 'Request'"></Request>
      <List v-else-if="selected === 'List'"></List>
    </div>
  </section>
</template>

<script>
import Home from "./Home.vue";
import Request from "./Request.vue";
import List from "./List.vue";

export default {
  components: { Home, Request, List },
  data() {
    return {
      selected: "Home",
      isShowSideMenu: false,
      resultData: []
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleBackgroundImage);
    this.switchFixedClass();
  },
  methods: {
    switchFixedClass() {
      const containerElement = document.getElementsByClassName("container")[0];
      if (this.selected === "Home") {
        containerElement.classList.add("container-fixed");
      } else {
        containerElement.classList.remove("container-fixed");
      }
    },

    refreshSelectedPage() {
      this.selected = event.target.innerText;

      const containerElement = document.getElementsByClassName("container")[0];
      if (this.selected === "Home") {
        this.handleBackgroundImage();
      }

      this.switchFixedClass();
    },

    showSideMenu() {
      this.isShowSideMenu = !this.isShowSideMenu;
    },
    handleBackgroundImage() {
      if (this.selected !== "Home") return;

      const containerElement = document.getElementsByClassName("container")[0];

      const currentPageYOffset = window.pageYOffset;

      if (
        currentPageYOffset <= 100 &&
        !containerElement.classList.contains("index-navbar-unpinned")
      ) {
        containerElement.classList.add("index-navbar-unpinning");

        window.setTimeout(() => {
          containerElement.classList.remove("index-navbar-pinned");
          containerElement.classList.remove("index-navbar-unpinning");
          containerElement.classList.add("index-navbar-unpinned");

          // 処理途中でスクロールされていたら再度実行する
          if (window.pageYOffset !== currentPageYOffset) {
            this.handleBackgroundImage();
          }
        }, 400);
      } else if (
        100 < currentPageYOffset &&
        !containerElement.classList.contains("index-navbar-pinned")
      ) {
        containerElement.classList.add("index-navbar-pinning");

        window.setTimeout(() => {
          containerElement.classList.remove("index-navbar-unpinned");
          containerElement.classList.remove("index-navbar-pinning");
          containerElement.classList.add("index-navbar-pinned");

          // 処理途中でスクロールされていたら再度実行する
          if (window.pageYOffset !== currentPageYOffset) {
            this.handleBackgroundImage();
          }
        }, 400);
      }
    }
  },
  // イベントリスナの削除
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleBackgroundImage);
  }
};
</script>

<style>
label {
  margin-top: 15%;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

div.control {
  margin-left: 1%;
  margin-right: 3%;
  margin-top: auto;
  margin-bottom: auto;
}

@media screen and (max-width: 1023px) {
  .container {
    position: fixed;
  }
}

@media screen and (min-width: 1024px) {
  div.control {
    margin: auto;
  }

  .container {
    max-width: unset;
  }

  .container-fixed {
    position: fixed;
  }

  .navbar {
    background-color: rgba(90, 127, 182, 0);
  }

  .navbar-item.is-active span {
    font-weight: bold;
  }
}

.index-background {
  background-color: rgba(90, 127, 182, 0.4);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.index-navbar-pinning {
  background-color: rgba(90, 127, 182, 0.63);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translate(0, 10px);
  transition: all 500ms;
}

.index-navbar-unpinning {
  background-color: rgba(90, 127, 182, 0.63);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translate(0, 10px);
  transition: all 500ms;
}

.index-navbar-pinned {
  background-color: rgba(90, 127, 182, 0.63);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
