<template>
  <form id="search-form">
    <input
      id="search-input"
      :value="value"
      @input="updateKeyword($event.target.value)"
    >
  </form>
</template>

<script>
export default {
  name: "TagSearch",

  props: {
    value: String,
  },

  methods: {
    updateKeyword(keyword) {
      const lowercaseKeyword = keyword.toLowerCase();
      this.$emit('input', lowercaseKeyword)
    },
  },
}
</script>

<style lang="stylus">

</style>
