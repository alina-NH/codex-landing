import { defineStore } from 'pinia';

export const useContentStore = defineStore('contentStore', {
  state: () => ({
    defaultContent: {},
    pageContent: {},
    alert: {
      isVisible: false,
      message: '',
      type: AlertType.success,
    },
    leadForm: {
      isVisible: false,
      isInitiated: false,
    },
  } as Store),
  actions: {
    setDefaultContent(content: any) {
      this.defaultContent = content;
    },
    setPageContent(content: any) {
      this.pageContent = content;
    },
    setAlert(alert: Alert) {
      showAlert(this.alert, alert);
    },
    toggleLeadFormVisible(flag: boolean) {
      this.leadForm.isVisible = flag;
      if (!this.leadForm.isInitiated) {
        this.leadForm.isInitiated = true;
      }
    },
  },
  getters: {
    getDefaultContent: state => state.defaultContent,
    getPageContent: state => state.pageContent,
    getAlert: state => state.alert,
  }
});
