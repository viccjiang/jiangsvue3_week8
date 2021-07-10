<template>
  <div class="home ">
    <nav class="navbar navbar-expand-lg  navbar-light bg-light p-3 ">
      <div class="container  ">
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
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/">首頁</router-link>
            <router-link class="nav-link" to="/about">關於我們</router-link>
            <router-link class="nav-link" to="/products">產品列表</router-link>
            <router-link class="nav-link" to="/cart">購物車</router-link>
            <router-link class="nav-link" to="/admin">後台管理頁面</router-link>
          </div>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>
