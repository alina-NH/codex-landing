import { defineStore } from 'pinia';

export const useContentStore = defineStore('contentStore', {
  state: () => ({
    defaultContent: {},
    pageContent: {},
  } as Store),
  actions: {
    setDefaultContent(content: any) {
      this.defaultContent = content;
    },
    setPageContent(content: any) {
      this.pageContent = content;
    },
  },
  getters: {
    getDefaultContent: state => state.defaultContent,
    getPageContent: state => state.pageContent,
  }
});
