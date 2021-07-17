<template>
  <div class="home ">
    <nav class="sticky-top navbar navbar-expand-lg  navbar-light bg-light p-3 ">
      <div class="container  ">
        <div>
          <router-link class="nav-link" to="/">
            <a class="navbar-brand" to="/"><img src="../../assets/logo.svg" width="100"/></a>
          </router-link>
        </div>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse justify-content-end collapse" id="navbarNavAltMarkup" style="">
          <div class="navbar-nav d-flex align-items-center">
            <li><router-link class="nav-link" to="/">首頁</router-link></li>
            <li><router-link class="nav-link" to="/about">關於我們</router-link></li>
            <li><router-link class="nav-link" to="/products">產品列表</router-link></li>

            <li class="position-relative">
              <router-link class="nav-link fs-5" to="/cart">
                <i class="bi bi-cart-fill"></i>
                <div
                  class="rounded-circle bg-danger text-light position-absolute py-1 px-2"
                  style="font-size: 6px;top: -5px;right: -5px;"
                  v-if="cart.carts"
                >
                  {{ cart.carts.length }}
                </div>
              </router-link>
            </li>
            <li>
              <router-link class="nav-link fs-5" to="/admin/products">
                <i class="bi bi-people-fill"></i
              ></router-link>
            </li>
          </div>
        </div>
      </div>
    </nav>

    <!-- 原始版本 -->
    <!-- <nav class="navbar navbar-expand-lg  navbar-light bg-light p-3 ">
      <div class="container   ">
        <div>
          <router-link class="nav-link" to="/">
            <a class="navbar-brand" to="/"><img src="../../assets/logo.svg" width="100"/></a>
          </router-link>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="navbarNavAltMarkup">
          <ul class="navbar-nav ">
            <li><router-link class="nav-link" to="/">首頁</router-link></li>
            <li><router-link class="nav-link" to="/about">關於我們</router-link></li>
            <li><router-link class="nav-link" to="/products">產品列表</router-link></li>

            <li>
              <router-link class="nav-link fs-2" to="/cart">
                <i class="bi bi-cart2"></i
              ></router-link>
            </li>

            <li>
              <router-link class="nav-link fs-2" to="/admin/products">
                <i class="bi bi-person"></i
              ></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->

    <router-view></router-view>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      cart: {},
      classList: {
        navbarTop: '',
        navbarInner: '',
      },
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        console.log('購物車:', res);
        this.cart = res.data.data;
      });
    },
  },
  mounted() {
    this.getCart();
    emitter.on('update-cart', () => {
      this.getCart();
    });
  },
};
</script>

<style scoped>
#navbar-top {
  transition: 0.5s background-color;
}
</style>
