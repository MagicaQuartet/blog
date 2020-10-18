<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <TagNavigator
      @toggle-sidebar="toggleSidebar"
      @tag-select-change="handleTagSelectChange">
    </TagNavigator>

    <PageList
      v-if="!$page.frontmatter.tags"
      :pageList="pageList">
    </PageList>

    <Page v-else>
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
        <Disqus v-if="$page.frontmatter.tags"></Disqus>
      </template>
    </Page>
  </div>
</template>

<script>
import Home from "@parent-theme/components/Home.vue";
import Navbar from "@parent-theme/components/Navbar.vue";
import Page from "@theme/components/page/Page.vue";
import PageList from "@theme/components/page/PageList.vue"
import TagNavigator from "@theme/components/tag/TagNavigator.vue";
import Disqus from "@theme/components/Disqus.vue";

export default {
  name: "Layout",

  components: {
    Home,
    Navbar,
    Page,
    PageList,
    TagNavigator,
    Disqus,
  },

  data() {
    return {
      isSidebarOpen: false,
      pageList: null,
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return !frontmatter.home && frontmatter.sidebar !== false;
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    if (!this.$page.frontmatter.tags) {
      this.loadInitialPageList();
    }

    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },

  methods: {
    loadInitialPageList() {
      this.pageList = this.$site.pages.filter(page => page.frontmatter.tags);
    },

    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },

    handleTagSelectChange(selectedPageList) {
      this.pageList = selectedPageList;
    }
  },
};
</script>
