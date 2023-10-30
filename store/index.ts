import { defineStore } from 'pinia';

export default defineStore('contentStore', {
  state: () => ({
    defaultContent: {},
    pageContent: {},
  }),
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
