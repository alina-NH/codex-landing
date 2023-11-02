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