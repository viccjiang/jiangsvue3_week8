<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="pages.has_pre ? '' : 'disabled'">
        <a class="page-link" href="#" @click.prevent="$emit('emit-pages', pages.current_page - 1)">
          <span>&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="(item, key) in pages.total_pages"
        :key="key"
        :class="item === pages.current_page ? 'active' : ''"
      >
        <a class="page-link" href="#" @click.prevent="$emit('emit-pages', item)"> {{ item }}</a>
      </li>
      <li class="page-item" :class="pages.has_next ? '' : 'disabled'">
        <a class="page-link" href="#" @click.prevent="$emit('emit-pages', pages.current_page + 1)">
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages'],
  methods: {
    updatePage(page) {
      // 切換頁面事件的名稱（自訂事件名稱），把頁碼帶進去
      this.$emit('emit-pages', page);
    },
  },
};
</script>
