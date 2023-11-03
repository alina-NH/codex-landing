<template>
  <section class="tabbed-content">
    <SectionTitle
      v-if="hasTitle"
      :position="titlePosition"
    >
      {{ data.title }}
    </SectionTitle>
    <ul class="tabbed-content-nav">
      <li
        v-for="tab in data.tabs"
        class="text-default tabbed-content-nav__item"
        :class="{ 'tabbed-content-nav__item--active': tab === activeTab }"
        @click="activeTab = tab"
      >
        {{ tab }}
      </li>
    </ul>
    <div class="tabbed-content-body">
      <IconBoxes
        v-if="component === TabsComponent.IconBox"
        :data="(content as unknown as IconBoxes)"
      />
      <ImageBoxes
        v-if="component === TabsComponent.ImageBox"
        :withTestimonial="withTestimonial"
        :data="({ imageBoxes: content } as unknown as ImageBoxes)"
        filterMode
        :hasTitle="false"
      />
      <TextBoxes
        v-if="component === TabsComponent.TextBox"
        :data="({ textBoxes: content } as unknown as TextBoxes)"
        :hasTitle="false"
        :withIcon="withIcon"
        filterMode
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const {
  data,
  hasTitle,
  titlePosition,
  component,
  withTestimonial,
  withIcon
} = defineProps<{
  data: TabbedContent,
  hasTitle: boolean,
  titlePosition?: keyof typeof SectionTitlePosition,
  component: keyof typeof TabsComponent,
  withTestimonial?: boolean,
  withIcon?: boolean,
}>();

const activeTab = ref(data.tabs[0]);
const content = ref(data.tabsContent);

const filterContent = () => {
  content.value = data.tabsContent.filter(element => {
    return element.tabs.includes(activeTab.value)
  });
};

onMounted(filterContent);

watch(activeTab, filterContent);
</script>

<style scoped lang="scss" src="./TabbedContent.scss" />