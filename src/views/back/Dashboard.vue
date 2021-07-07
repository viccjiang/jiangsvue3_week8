<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '../../components/ToastMessages.vue';
import Navbar from '../../components/Navbar.vue';

export default {
  components: {
    Navbar,
    ToastMessages,
  },
  data() {
    return {
      check: false,
    };
  },
  provide() {
    return {
      emitter,
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
