<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">RE:HOUSE 後台管理</a>
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
            ><router-link to="/admin/products">管理產品列表</router-link> |</a
          >
          <a class="nav-link" href="#"
            ><router-link to="/admin/orders">管理訂單列表</router-link></a
          >
          <a class="nav-link" href="#"><router-link to="/products">回到前台頁面</router-link></a>
        </div>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      check: false,
    };
  },
  created() {
    console.log(this.$router);
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api).then((response) => {
      console.log('user/check', response);
      if (response.data.success) {
        this.check = true;
      } else {
        this.$router.push('/login');
      }
    });
  },
};
</script>
