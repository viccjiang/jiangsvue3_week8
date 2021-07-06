<template>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import Navbar from '../../components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      check: false,
    };
  },

  created() {
    // console.log(this.$router);
    // 先取出 token 方法是 replace
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    // 在 header 夾帶 token
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    // 檢查用戶是否仍持續登入，驗證的API
    this.$http.post(api).then((res) => {
      console.log('user/check', res);
      if (res.data.success) {
        this.check = true;
      } else {
        this.$router.push('/login');
      }
    });
  },
};
</script>
