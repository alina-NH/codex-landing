<template>
  <section
    :id="data.id"
    class="tabbed-content"
    :style="{
      'background': data?.background,
      'padding': data?.background && '10vh 10vw',
    }"
  >
    <SectionTitle
      v-if="data.title"
      :id="data.id"
      :position="titlePosition"
      class="tabbed-content__title"
    >
      {{ data.title }}
      <template
        #subtitle
        v-if="data?.subtitle"
      >
        {{ data.subtitle }}
      </template>
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
        :data="({ iconBoxes: content } as IconBoxes)"
        :background="iconsBackground"
        :iconToTop="iconToTop"
        filterMode
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
  iconsBackground,
  iconToTop,
} = defineProps<{
  data: TabbedContent,
  titlePosition?: keyof typeof SectionTitlePosition,
  component: keyof typeof TabsComponent,
  iconsBackground?: string,
  iconToTop?: boolean,
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