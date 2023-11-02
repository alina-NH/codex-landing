export enum ButtonStyle {
  fill = 'fill',
  outline = 'outline',
};

export enum ButtonSize {
  large = "large",
  small = "small",
};

export enum SectionTitlePosition {
  center = "center",
  left = "left",
};

export interface ImageBox {
  background: string,
  title: string,
  description: string,
  author?: Person,
  testimonial?: string,
  tab?: string,
};

export interface ImageBoxes {
  title?: string,
  imageBoxes: ImageBox[],
};

export interface Person {
  avatar: string,
  name: string,
  position: string,
};

export enum TabsComponent {
  IconBox = 'IconBox',
  ImageBox = 'ImageBox',
};

export interface TabbedContent {
  title: string,
  tabs: string[],
  tabsContent: IconBoxes,
};

export interface IconBox {
  icon: string,
  alt: string,
  tag?: string,
};

export interface IconBoxes {
  icons: IconBox[]
}