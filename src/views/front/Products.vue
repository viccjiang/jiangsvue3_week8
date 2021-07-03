<template>
  <div class="products container">
    <h1>產品列表</h1>
    <!-- <Card></Card> -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">圖片</th>
          <th scope="col">品項</th>
          <th scope="col">特價</th>
          <th scope="col">原價</th>
          <th scope="col">特色</th>
          <th scope="col">詳情</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td><img :src="item.imageUrl" class="card-img-top rounded-0" alt="..." /></td>
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.description }}</td>
          <td><router-link :to="`/product/${item.id}`">連結</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

//
<script>
export default {
  data() {
    return {
      products: [],
    };
  },

  mounted() {
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products`;
    this.$http.get(url).then((res) => {
      this.products = res.data.products;
      console.log(this.products);
    });
  },
};
</script>
