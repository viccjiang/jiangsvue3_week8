<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item "><router-link to="/products">產品列表</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        <li class="breadcrumb-item active" aria-current="page">產品細節</li>
      </ol>
    </nav>

    <!-- 模板 -->
    <div class="row align-items-center">
      <div class="col-md-7">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" alt="" class="img-fluid mb-3" />
            </div>
            <!-- <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1916&amp;q=80"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1916&amp;q=80"
                class="d-block w-100"
                alt="..."
              />
            </div> -->
          </div>
          <!-- <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a> -->
        </div>
      </div>
      <div class="col-md-5">
        <!-- <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item"><router-link to="/products">產品列表</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
            <li class="breadcrumb-item active" aria-current="page">產品細節</li>
          </ol>
        </nav> -->
        <article class="col mb-5">
          <h2>{{ product.title }}</h2>
          <div>{{ product.content }}</div>
          <div>{{ product.description }}</div>
        </article>
        <div class="h5 " v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6 " v-if="product.price"
          >原價 {{ $filters.currency(product.origin_price) }} 元</del
        >
        <div class="h5 text-danger mb-5" v-if="product.price">
          現在只要 {{ $filters.currency(product.price) }} 元
        </div>

        <div class="row align-items-center">
          <!-- <div class="input-group input-group-sm w-lg-50 pe-lg-2 mb-4">
            <button
              class="btn border link opacity-80"
              type="button"
              @click="removeQty"
              :class="{ disabled: this.qty <= 1 }"
            >
              <i
                class="bi bi-dash"
                data-cursor="cursor"
                :class="{ 'opacity-50': this.qty <= 1 }"
              ></i>
            </button>

            <input type="number" class="form-control text-center" v-model.number="qty" />

            <button class="btn border link opacity-80" type="button" @click="addQty">
              <i class="bi bi-plus" data-cursor="cursor"></i>
            </button>
          </div> -->
          <!-- <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                  <i class="fas fa-minus"> - </i>
                </button>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value="1"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                  <i class="fas fa-plus"> + </i>
                </button>
              </div>
            </div>
          </div> -->
          <div class="col-6">
            <button
              type="button"
              class="text-nowrap btn btn-secondary border rounded-0 w-100 py-2"
              @click.prevent="addToCart(product.id)"
            >
              加到購物車
            </button>

            <!-- 原版本加入購物車 -->
            <!-- <a
              href="#"
              class="text-nowrap btn btn-dark w-100 py-2"
              @click.prevent="addToCart(product.id)"
              >加到購物車</a
            > -->
          </div>
          <!-- <button type="button" class="btn btn-outline-danger" @click="addToCart(product.id)">
            加到購物車
          </button> -->
        </div>
      </div>
      <!-- 你可能也喜歡 -->
      <h2 class="mt-4">你可能也喜歡</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4 mb-4">
        <div class="col" v-for="item in randomProducts" :key="item">
          <div class="card h-100 ">
            <img
              :src="item.imageUrl"
              style="background-size: cover;
              background-position: center center"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
            </div>
            <div class="card-footer">
              <!-- 連結按鈕 待處理區塊 -->
              <!-- <small class="text-muted"> 來去看看 </small> -->
              <button
                type="button"
                class="text-nowrap btn btn-secondary border-0 rounded-0 w-100 py-2"
                @click.prevent="addToCart(item.id)"
              >
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 你可能也喜歡 end -->
    <!-- <ul>
        <li v-for="item in randomProducts" :key="item">
          <img :src="item.imageUrl" alt="" class="img-fluid mb-3" />
          {{ item.title }}
        </li>
      </ul>
    </div> -->
    <!-- 模板 end -->
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  data() {
    return {
      isLoading: false,
      product: {},
      products: [],
      randomProducts: [],
      id: '',
    };
  },

  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          this.product = response.data.product;
        }
        this.isLoading = false;
        this.getProducts();
      });
    },
    // 取得全部產品
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.products = res.data.products;
        this.getLookAlike();
      });
    },
    // 隨機取得同類別產品
    getLookAlike() {
      const { category } = this.product;
      const filterProducts = this.products.filter((item) => item.category === category);
      console.log('filterProducts:', filterProducts);
      // 如果 小於4 就用這個 length，否則就用 4
      const maxSize = filterProducts.length < 4 ? filterProducts.length : 4;
      const arrSet = new Set([]);
      console.log(arrSet.size);
      getRandomInt();
      for (let index = 0; arrSet.size < maxSize; index + 1) {
        const num = getRandomInt(filterProducts.length);
        arrSet.add(num);
        console.log(arrSet, num);
      }
      arrSet.forEach((i) => {
        this.randomProducts.push(filterProducts[i]);
      });
      console.log(this.randomProducts);
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false;
        this.$httpMessageState(response, '加入購物車');
        console.log(response.data);
        emitter.emit('update-cart'); // 更新購物車數量

        // this.$router.push('/cart');
      });
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>
