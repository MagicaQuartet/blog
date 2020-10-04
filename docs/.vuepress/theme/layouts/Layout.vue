<template>
  <ParentLayout>
    <Disqus slot="page-bottom" v-if="this.$frontmatter.tags" />
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import Disqus from "@theme/components/Disqus";
export default {
  components: {
    ParentLayout,
    Disqus,
  },
};
</script>

<style>
</style>