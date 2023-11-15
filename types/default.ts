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

export type ImageBox = {
  background: string,
  title: string,
  description?: string,
  author?: Person,
  testimonial?: string,
  tabs?: string[],
  link?: string,
};

export interface ImageBoxes {
  title?: string,
  id?: string,
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
  title?: string,
  id: string,
  tabs: string[],
  background?: string,
  tabsContent: (ImageBox | IconBox | TextBox)[],
};

export type IconBox = {
  title?: string,
  icon: string,
  alt: string,
  tabs?: string[],
  link?: string,
  background?: string,
};

export interface IconBoxes {
  id?: string,
  title?: string,
  iconBoxes: IconBox[],
};

export type TextBox = {
  title: string,
  subtitle: string,
  text: string,
  icon?: string,
  tabs?: string[],
}

export interface TextBoxes {
  title?: string,
  id?: string,
  textBoxes: TextBox[],
}

export interface ImageData {
  src: string,
  alt: string,
};

export interface NavLink {
  name: string,
  external?: boolean,
  link?: string,
};

export interface Header {
  logo: ImageData,
  nav: {
    name: string,
    external?: boolean,
    link?: string,
    subnav?: NavLink[]
  }[],
  button: {
    text: string,
    idToScroll: string,
  },
};

export interface FooterIcon {
  href: string,
  link: string,
  alt: string,
}

export interface Footer {
  logo: ImageData,
  description: string[],
  icons: FooterIcon[],
  nav: {
    name: string,
    subnav?: NavLink[]
  }[],
  trademark: string[],
};
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
  id: string,
  items: (ImageArticle | List)[],
};

export enum ImageArticleComponent {
  list = 'list',
  text = 'text',
};

export type ImageArticle = {
  id?: string,
  title: string,
  subtitle?: string,
  list?: string[],
  button?: {
    text: string,
    idToScroll: string,
  },
  image?: string,
  text?: string,
  bottomText?: {
    icon?: string,
    text: string,
  },
  type?: string,
  colors?: {
    background?: string,
    subtitle?: string,
    text?: string,
    bottomText?: string,
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
  icon?: string,
};

export type List = {
  list: ListItem[],
  type: string,
};

export enum SquaresTimelineType {
  list = 'list',
  text = 'text',
};

export enum ContactFormType {
  extended = 'extended',
  simplified = 'simplified',
};

export interface ContactFormInput {
  label: string,
  placeholder: string,
  required: boolean,
};

export interface ContactForm {
  id: string,
  title: string,
  nameInput: ContactFormInput,
  companyInput?: ContactFormInput,
  emailInput: ContactFormInput,
  phoneInput?: ContactFormInput,
  messageInput?: ContactFormInput,
  button: string,
  imageArticle?: ImageArticle,
};

export interface Welcome {
  title: string[],
  button: {
    text: string,
    idToScroll: string,
  },
  background: string,
  subtitle?: string,
  colors?: {
    title?: string,
    subtitle?: string,
  }
};

export interface FormErrors {
  nameError: {
    empty: string,
  },
  companyError: {
    empty: string,
  },
  emailError: {
    empty: string,
    invalid: string,
  },
  phoneError: {
    empty: string,
    invalid: string,
  },
  messageError: {
    empty: string,
    length: string,
  },
};

export interface ServerErrors {
  emptyBody: string,
  defaultError: string,
};