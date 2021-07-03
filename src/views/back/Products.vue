<template>
  <div class="products container">
    <h1>產品列表</h1>
    <!-- <Card></Card> -->
    <table class="table">
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">特價</th>
          <th scope="col">原價</th>
          <th scope="col">特色</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- <table>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.price }}</td>
        <td><router-link :to="`/product/${item.id}`">連結</router-link></td>
      </tr>
    </tbody>
  </table> -->
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
    console.log(url);
    this.$http.get(url).then((res) => {
      this.products = res.data.products;
      console.log(this.products);
    });
  },
};
</script>
