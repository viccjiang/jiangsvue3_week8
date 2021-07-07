<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">RE：HOUSE 後台管理</a>
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
          <router-link class="nav-link" to="/admin/products">管理產品列表</router-link> |
          <router-link class="nav-link" to="/admin/orders">管理訂單列表</router-link> |
          <router-link class="nav-link" to="/">回到前台頁面</router-link>
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      // 環境變數
      const api = `${process.env.VUE_APP_API}logout`;
      // 送出 api
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          // console.log(response);
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>
