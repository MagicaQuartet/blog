<template>
  <aside class="sidebar">
    <ul>
      <li v-for="tag in tagList" :key="tag">
        {{ tag }} - {{ tagInfo[tag].count }}
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "TagNavigator",
  data() {
    return {
      tagList: [],
      tagInfo: {},
    };
  },
  mounted() {
    for (const page of this.$site.pages) {
      if (page.frontmatter.tags == null) {
        continue;
      }

      for (const tag of page.frontmatter.tags) {
        if (!this.tagList.includes(tag)) {
          this.tagList.push(tag);
          this.tagInfo[tag] = {
            count: 0,
            // link?
          };
        }
        this.tagInfo[tag].count++;
      }
    }
  },
};
</script>

<style lang="stylus"></style>
