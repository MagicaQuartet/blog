<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@parent-theme/components/PageEdit.vue'

export default {
  components: { PageEdit, },
}
</script>

<style lang="stylus">
@require '../../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
