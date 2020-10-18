<template>
  <aside class="sidebar">
    <div class="title">Tags</div>
    <div class="tag-list">
      <Tag 
        v-for="tag in sortedTagList" :key="tag"
        :tag="tag"
        :count="tagInfo[tag].count"
        :isSelected="tagInfo[tag].isSelected"
        @click="handleTagClick(tag)">
      </Tag>
    </div>
    <!--div class="tag-search"></!--div-->
  </aside>
</template>

<script>
import Tag from "@theme/components/tag/Tag.vue";

export default {
  name: "TagNavigator",

  components: {
    Tag,
  },

  data() {
    return {
      tagList: [],
      tagInfo: {},
    };
  },
  computed: {
    sortedTagList() {
      return this.tagList.sort((lhs, rhs) => this.tagInfo[lhs].count < this.tagInfo[rhs].count);
    },
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
            isSelected: false,
            // link?
          };
        }
        this.tagInfo[tag].count++;
      }
    }
  },

  methods: {
    handleTagClick(tag) {
      const newTagInfo = {...this.tagInfo};
      newTagInfo[tag].isSelected = !newTagInfo[tag].isSelected;
      this.tagInfo = newTagInfo;

      const selectedTagList = Object.keys(this.tagInfo).filter(tag => this.tagInfo[tag].isSelected);
      const selectedPageList = selectedTagList.length > 0
        ? this.$site.pages.filter(page => page.frontmatter.tags && page.frontmatter.tags.filter(tag => selectedTagList.includes(tag)).length > 0)
        : this.$site.pages.filter(page => page.frontmatter.tags);
      this.$emit('tag-select-change', selectedPageList);
    },
  },
};
</script>

<style lang="stylus">
DARK_COLOR = #4e6e8e
BRIGHT_COLOR = #ffffff

.sidebar
  padding 0.75rem
  .title
    font-size 1.6rem
    font-weight bold
    margin-bottom 0.75rem
  .tag-list
    display flex
    flex-wrap wrap

</style>
