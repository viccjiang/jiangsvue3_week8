<template>
  <div
    style="height: 100vh;
    background-image: url(https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=100);
          background-size: cover;
          background-position:top center;
          "
  >
    <div class="container">
      <form class="row justify-content-center" @submit.prevent="signIn">
        <!-- @submit.prevent 事件觸發 -->
        <div class="col-md-6 py-5 my-5">
          <h1 class="h3 mb-3  font-weight-normal">請先登入</h1>
          <div class="mb-2">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control rounded-pill  shadow-sm mt-2 py-2 px-5"
              placeholder="Email address"
              v-model="user.username"
              required
              autofocus
            />
          </div>
          <div class="mb-2">
            <label for="inputPassword" class="sr-only">Password</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control rounded-pill shadow-sm mt-2 py-2 px-5"
              v-model="user.password"
              placeholder="Password"
              required
            />
          </div>

          <!-- <div class="text-end mt-4">
            <button class="btn btn-lg btn-secondary btn-block" type="submit">登入</button>
          </div> -->
          <div class="text-end mt-4">
            <button
              class="btn btn-lg btn-outline-light rounded-pill shadow-sm mt-2 py-2 px-5 "
              type="submit"
            >
              登入
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIn() {
      // 環境變數
      const api = `${process.env.VUE_APP_API}admin/signin`;
      // 送出 api
      this.$http.post(api, this.user).then((response) => {
        // console.log(response.data);
        if (response.data.success) {
          // const token = response.data.token;
          // const expired = response.data.expired;
          const { token, expired } = response.data;
          // console.log(token, expired);
          // 存取 token 以及到期日
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          // 登入後直接進入 admin 後台的管理產品列表
          this.$router.push('/admin/products');
        } else {
          this.user.username = '';
          this.user.password = '';
          this.$swal({
            title: '輸入資料有誤，請重新輸入',
            icon: 'error',
          });
        }
      });
    },
  },
};
</script>
