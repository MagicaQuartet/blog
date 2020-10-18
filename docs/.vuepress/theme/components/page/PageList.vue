<template>
  <div class="page page-list theme-default-content">
    <PageListItem
      v-for="page in pageList"
      :key="page.frontmatter.title"
      :page="page">
    </PageListItem>
  </div>
</template>

<script>
import PageListItem from "@theme/components/page/PageListItem.vue";

export default {
  name: "PageList",

  components: {
    PageListItem
  },

  props: ['pageList'],
};
</script>

<style lang="stylus" scoped>
.page-list
  display flex
  flex-direction column
</style>
