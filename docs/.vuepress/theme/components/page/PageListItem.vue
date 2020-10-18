<template>
  <router-link :to="this.page.regularPath" class="page-list-item">
    <div class="title">{{ page.frontmatter.title }}</div>
    <div class="description">{{ page.frontmatter.shortDescription }}</div>
  </router-link>
</template>

<script>
export default {
  name: "PageListItem",

  props: [
    'page',
  ],
}
</script>

<style lang="stylus" scoped>
BLACK_COLOR = #2c3e50
DARK_COLOR = #4e6e8e

.theme-default-content
  a:hover
    text-decoration none

.page-list-item
  margin-bottom 2.4rem
  word-break keep-all
  color BLACK_COLOR
  transition transform 0.1s linear
  &:hover
    transform translateX(-2.4rem)
  .title
    font-size 2.4rem
    margin-bottom 0.4rem
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
</style>
