<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">RE:HOUSE</a>
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
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          ><router-link class="nav-link" to="/">首頁</router-link> | ><router-link
            class="nav-link"
            to="/about"
            >關於我們</router-link
          >
          | ><router-link class="nav-link" to="/products">產品列表</router-link> | ><router-link
            class="nav-link"
            to="/cart"
            >購物車</router-link
          >
          | ><router-link class="nav-link" to="/admin/products">後台管理頁面</router-link>
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<style lang="scss"></style>
