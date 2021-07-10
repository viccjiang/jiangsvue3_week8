<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div
                  style="height: 100px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              </td>
              <td>
                <a href="#" class="text-dark">{{ item.title }}</a>
              </td>
              <td>
                <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                <del class="h6" v-if="item.price"
                  >原價 NT$ {{ $filters.currency(item.origin_price) }} 元</del
                >
                <div class="h5" v-if="item.price">
                  現在只要 NT$ {{ $filters.currency(item.price) }} 元
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="getProduct(item.id)"
                  >
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    :disabled="this.status.loadingItem === item.id"
                    @click="addCart(item.id)"
                  >
                    <div
                      v-if="this.status.loadingItem === item.id"
                      class="spinner-border text-danger spinner-border-sm"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      product: {},
      pagination: {},
      status: {
        loadingItem: '', // 對應品項 id
      },
    };
  },
  components: {
    Pagination,
  },

  provide() {
    return {
      emitter,
    };
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        console.log('products:', response);
        this.isLoading = false;
        if (response.data.success) {
          console.log(response.data);
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        }
      });
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = '';
        console.log(res);
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
