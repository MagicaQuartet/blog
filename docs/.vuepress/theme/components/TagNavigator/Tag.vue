<template>
  <div class="tag" :class="{ selected: isSelected }" @click="handleClick">
    <div class="tag-name">{{ tag }}</div>
    <div class="tag-count">{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    tag: String,
    count: Number,
    isSelected: Boolean,
  },

  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="stylus">
DARK_COLOR = #4e6e8e
BRIGHT_COLOR = #ffffff

.tag
  display flex
  align-items baseline
  padding 0.25rem 0.5rem
  margin 0.125rem 0.25rem
  border 1px solid DARK_COLOR
  border-radius 1rem
  color DARK_COLOR
  cursor pointer
  &.selected, &:hover
    background-color DARK_COLOR
    color BRIGHT_COLOR
  & > *
    margin 0 0.25rem
  .tag-name
    font-weight bold
  .tag-count
    font-size 0.85rem
</style>
