<template>
  <section class="tabbed-content">
    <SectionTitle
      v-if="data.title"
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
        :data="(content as IconBox[])"
      />
      <ImageBoxes
        v-if="component === TabsComponent.ImageBox"
        :data="({ imageBoxes: content } as ImageBoxes)"
        filterMode
      />
      <TextBoxes
        v-if="component === TabsComponent.TextBox"
        :data="({ textBoxes: content } as TextBoxes)"
        filterMode
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const {
  data,
  titlePosition,
  component,
} = defineProps<{
  data: TabbedContent,
  titlePosition?: keyof typeof SectionTitlePosition,
  component: keyof typeof TabsComponent,
}>();

const activeTab = ref(data.tabs[0]);
const content = ref(data.tabsContent);

const filterContent = () => {
  content.value = data.tabsContent.filter(element => {
    return element?.tabs?.includes(activeTab.value)
  });
};

onMounted(filterContent);

watch(activeTab, filterContent);
</script>

<style scoped lang="scss" src="./TabbedContent.scss" />