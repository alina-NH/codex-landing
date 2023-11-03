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

export enum TabsComponent {
  IconBox = 'IconBox',
  ImageBox = 'ImageBox',
  TextBox = 'TextBox',
};

export interface TabbedContent {
  title: string,
  tabs: string[],
  tabsContent: ((IconBox | TextBox | ImageBox) & { tabs: string[] })[],
};

export interface IconBox {
  icon: string,
  alt: string,
};

export interface IconBoxes {
  icons: IconBox[]
}

export interface TextBox {
  title: string,
  subtitle: string,
  text: string,
  icon?: string,
}

export interface TextBoxes {
  title?: string,
  textBoxes: TextBox[]
}

export interface ImageData {
  src: string,
  alt: string,
};

export interface NavLink {
  name: string,
  external: boolean,
  link: string,
};

export interface Header {
  logo: ImageData,
  nav: {
    name: string,
    external: boolean,
    link: string,
    subnav?: NavLink[]
  }[],
  button: string,
};

export interface Footer {
  logo: ImageData,
  description: string[],
  nav: {
    name: string,
    external: boolean,
    link: string,
    subnav?: NavLink[]
  }[],
  trademark: string[],
}
export interface DefaultContent {
  header: Header,
  footer: Footer,
};

export interface DefaultColors {
  primary: string,
  hover: string,
  black: string,
  darkgrey: string,
  lightgrey: string,
  secondary: string,
  white: string,
};

export interface DefaultMeta {
  title: string,
  description: string,
};
export interface PageContent {
  colors: DefaultColors,
  meta: DefaultMeta,
  [key: string]: any,
};

export interface Store {
  defaultContent: DefaultContent,
  pageContent: PageContent,
};

export interface SquaresTimeline {
  title?: string, 
};

export enum ImageArticleComponent {
  list = 'list',
  text = 'text',
};

export interface ImageArticle {
  title: string,
  subtitle?: string,
  list?: string[],
  button?: string,
  image?: string,
  text?: string,
  bottomText?: {
    icon?: string,
    text: string,
  },
};

export enum Alignment {
  left = 'left',
  center = 'center',
  right = 'right',
};

export enum FlexAlignment {
  left = 'left',
  center = 'center',
  right = 'right',
  stretch = 'stretch',
};

export enum TitleSize {
  small = 'small',
  large = 'large',
};

export interface ListItem {
  title: string,
  text: string,
  icon: string,
}