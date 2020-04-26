<template>
  <section class="index-background">
    <div>
      <nav class="navbar" role="navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="https://bulma.io/images/made-with-bulma--black.png" width="112" height="28" />
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
                <span class="tag is-primary">1.0.0</span>
              </div>
            </div>
          </div>

          <div class="navbar-menu" :class="{ 'is-active': isShowSideMenu }">
            <div class="navbar-start">
              <a class="navbar-item" :class="{ 'is-active': selected === 'Home' }">
                <span @click="refreshSelectedPage">Home</span>
              </a>
              <a class="navbar-item" :class="{ 'is-active': selected === 'Request' }">
                <span @click="refreshSelectedPage">Request</span>
              </a>
              <a class="navbar-item" :class="{ 'is-active': selected === 'List' }">
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
    window.addEventListener("scroll", this.handleNavBackgroundImage);
  },
  methods: {
    // Page switching
    refreshSelectedPage() {
      this.selected = event.target.innerText;
    },

    showSideMenu() {
      this.isShowSideMenu = !this.isShowSideMenu;
    },

    // Switching the background of the navigation bar
    handleNavBackgroundImage() {
      const containerElement = document.getElementsByClassName("container")[0];
      const currentPageYOffset = window.pageYOffset;
      if (currentPageYOffset <= 100) {
        containerElement.classList.add("index-navbar-pinning");

        window.setTimeout(() => {
          containerElement.classList.remove("index-navbar-pinned");
          containerElement.classList.remove("index-navbar-pinning");

          // If scrolled during processing, try again
          if (window.pageYOffset !== currentPageYOffset) {
            this.handleNavBackgroundImage();
          }
        }, 400);
      } else if (
        100 < currentPageYOffset &&
        !containerElement.classList.contains("index-navbar-pinned")
      ) {
        containerElement.classList.add("index-navbar-pinning");

        window.setTimeout(() => {
          containerElement.classList.remove("index-navbar-pinning");
          containerElement.classList.add("index-navbar-pinned");

          // If scrolled during processing, try again
          if (window.pageYOffset !== currentPageYOffset) {
            this.handleNavBackgroundImage();
          }
        }, 400);
      }
    }
  },

  // Remove event listener
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleNavBackgroundImage);
  }
};
</script>

<style>
label {
  margin-top: 15%;
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

.container {
  max-width: unset;
  position: fixed;
}

.navbar {
  background-color: rgba(52, 167, 128, 0);
}

.index-background {
  background-image: linear-gradient(
      rgba(197, 201, 206, 0.685),
      rgba(163, 173, 182, 0.795)
    ),
    url("../images/image.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.index-navbar-pinning {
  background-color: rgba(52, 167, 128, 0.6);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  transform: translate(0, 10px);
  transition: all 500ms;
}

.index-navbar-pinned {
  background-color: rgba(52, 167, 128, 0.6);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

/** PC */
@media screen and (min-width: 1024px) {
  div.control {
    margin: auto;
  }

  .navbar-item.is-active span {
    font-weight: bold;
  }
}
</style>
