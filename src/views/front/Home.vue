<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <a class="nav-link active" aria-current="page" href="#"
            ><router-link to="/">首頁</router-link> |</a
          >
          <a class="nav-link" href="#"><router-link to="/about">關於我們</router-link> |</a>
          <a class="nav-link" href="#"><router-link to="/products">產品列表</router-link> |</a>
          <a class="nav-link" href="#"><router-link to="/cart">購物車</router-link> |</a>
          <a class="nav-link" href="#"
            ><router-link to="/admin/products">後台管理頁面</router-link></a
          >
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<style lang="scss" scoped>
#nav {
  text-align: center;
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
