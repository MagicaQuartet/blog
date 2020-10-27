<template>
  <aside class="sidebar">
    <div class="title">Tags</div>
    <div class="tag-list">
      <Tag 
        v-for="tag in sortedTagList" :key="tag"
        v-if="showTag(tag)"
        :tag="tag"
        :count="tagInfo[tag].count"
        :isSelected="tagInfo[tag].isSelected"
        @click="handleTagClick(tag)">
      </Tag>
    </div>
    <div class="tag-search">
      <TagSearch v-model="searchKeyword"></TagSearch>
    </div>
  </aside>
</template>

<script>
import Tag from "@theme/components/tag/Tag.vue";
import TagSearch from "@theme/components/tag/TagSearch.vue"

export default {
  name: "TagNavigator",

  components: {
    Tag,
    TagSearch,
  },

  data() {
    return {
      tagList: [],
      tagInfo: {},
      searchKeyword: '',
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
      this.$emit('tag-select-change', selectedTagList);
    },
    showTag(tag) {
      
      return this.searchKeyword === '' || tag.toLowerCase().includes(this.searchKeyword);
    }
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
