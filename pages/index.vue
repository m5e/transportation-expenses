<template>
  <section>
    <div>
      <nav class="navbar" role="navigation">
        <div class="container">
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
                <span @click="switchPage">Home</span>
              </a>
              <a
                class="navbar-item"
                :class="{ 'is-active': selected === 'Request' }"
              >
                <span @click="switchPage">Request</span>
              </a>
              <a
                class="navbar-item"
                :class="{ 'is-active': selected === 'List' }"
              >
                <span @click="switchPage">List</span>
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
  mounted() {},
  methods: {
    switchPage() {
      this.selected = event.target.innerText;
    },

    showSideMenu() {
      this.isShowSideMenu = !this.isShowSideMenu;
    }
  }
};
</script>

<style>
label {
  margin-top: 15%;
}
.container {
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
@media screen and (min-width: 1024px) {
  div.control {
    margin: auto;
  }
}
</style>
