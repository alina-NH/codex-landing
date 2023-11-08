# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Components

Learn what components can be used to build pages.

#### Ready-to-use components

- [ContactForm](#contactform)
- [ImageArticle](#imagearticle)
- [IconBoxes](#iconboxes)
- [ImageBoxes](#imageboxes)
- [SectionTitle](#sectiontitle)

#### Default Components

- [Footer](#footer)
- [Header](#header)

#### Service components
- [Button](#button)
- [IconBox](#iconbox)
- [ImageBox](#imagebox)
- [List](#List)
- [NavLink](#navlink)
- [Person](#Person)

#### Default Components

Default components are used to build layouts. It is not recommended to use them in page making but you can change their's data in `content/default.json`.

### Footer

<img src="assets/images/service/footer.png" height="300px" />

##### JSON data

```
{
  logo: {
    src: string,
    alt: string
  },
  description: string[],
  icons: FooterIcon[],
  nav: FooterNavItem[],
  trademark: string[],
}
```

JSON `FooterIcon`

```
{
  href: string,
  link: string,
  alt: string
}
```

JSON `FooterNavItem`

```
{
  name: string,
  subnav: FooterLink[]
}
```

JSON `FooterLink`

```
{
  name: string,
  link: string,
  external: boolean
}
```

### Header

<img src="assets/images/service/header.png" width="700px" />

##### JSON data

```
{
  logo: {
    src: string,
    alt: string
  },
  nav: FooterNavItem[],
  button: string,
}
```

JSON `HeaderNavItem`

```
{
  name: string,
  link: string,
  external: boolean,
  subnav: HeaderLink[]
}
```

JSON `HeaderLink`

```
{
  name: string,
  link: string,
  external: boolean
}
```

### Ready-to-use components

These components which are free to use in page making,

### ContactForm

<img src="assets/images/service/contact-form-extended.png" width="400px" />

<img src="assets/images/service/contact-form-simplified.png" width="400px" />

##### JSON data

```
{
  title: string,
  nameInput: {
    label: string,
    placeholder: string,
    required: boolean
  },
  companyInput?: {
    label: string,
    placeholder: string,
    required: boolean
  },
  emailInput: {
    label: string,
    placeholder: string,
    required: boolean
  },
  phoneInput?: {
    label: string,
    placeholder: string,
    required: boolean
  },
  messageInput?: {
    label: string,
    placeholder: string,
    required: boolean
  },
  button: string,
  imageArticle?: {
    title: string,
    subtitle?: string,
    list?: string[],
    text?: string,
    colors?: {
      background?: string,
      subtitle?: string,
      text?: string,
      bottomText?: string
    }
  }
}
```

##### Props

prop             | description                                             | value type                    | required
---------------- | ------------------------------------------------------- | ----------------------------- | --------
type             | use all inputs or only name and input with ImageArticle | 'extended' \| 'simplified'    | yes
textAlignment    | text alignment of ImageArticle (only simplified)        | 'left' \| 'center' \| 'right' | no
articleAlignment | article alignment of ImageArticle (only simplified)     | 'left' \| 'center' \| 'right' | no
titleSize        | title size for ImageArticle (only simplified)           | 'small' \| 'large'            | no
formToLeft       | form left or right to  ImageArticle (only simplified)   | boolean                       | no

### ImageArticle

<img src="assets/images/service/image-article.png" />

##### JSON data

```
{
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
  type?: string, // only for Tabbed content (=text)
  colors?: {
    background?: string,
    subtitle?: string,
    text?: string,
    bottomText?: string,
  },
}
```

##### Props

prop              | description                                                | value type                     | required
----------------- | ---------------------------------------------------------- | ------------------------------ | --------
buttonStyle       | filled or outline button (if button declared in JSON)      | 'fill' \| 'outline'            | no
imageToRight      | image renders in right corner (if image declared in JSON)  | boolean                        | no
component         | body is list or text | 'list' \| 'text'                    | 'list' \| 'text'               | yes
textAlignment     | alignment of text in article body                          | 'left' \| 'center' \| 'right'  | no
articleAlignment  | alignment of article (without image)                       | 'left' \| 'center' \| 'right'  | no
titleSize         | title size in article                                      | 'small' \| 'large'             | no

### ImageBoxes

<img src="assets/images/service/image-boxes.png" width="600px" />

##### JSON data

```
{
  title?: string,
  imageBoxes: ImageBox[]
}
```

JSON `ImageBox`

```
{
  background: string,
  title: string,
  description?: string,
  author?: Person,
  testimonial?: string,
  tabs?: string[],
  link?: string
}
```

JSON `Person`
```
{
  avatar: string,
  name: string,
  position: string
}
```

##### Props

prop          | description        | value type                     | required
--------------| ------------------ | ------------------------------ | --------
titlePosition | alignment of title | 'left' \| 'center' \| 'right'  | no

### IconBoxes

<img src="assets/images/service/icon-boxes.png" width="600px" />

##### JSON data

```
{
  title?: string,
  iconBoxes?: IconBox[]
}
```

JSON `IconBox`

```
{
  icon: string,
  alt: string,
  tabs?: string[], // only for TabbedComponent
  link?: string,
  background?: string,
  title?: string,
}
```

##### Props

prop          | description                                    | value type                     | required
------------- | ---------------------------------------------- | ------------------------------ | --------
background    | icon background                                | string                         | no
titlePosition | alignment of title                             | 'left' \| 'center' \| 'right'  | no
iconToTop     | icon in top, title in bottom (only with title) | boolean                        | no

### SectionTitle

<img src="assets/images/service/section-title.png" />

##### JSON data

No json data. It uses `<slot />` to pass the button text.

prop     | description        | value type                     | required
---------| ------------------ | ------------------------------ | --------
position | alignment of title | 'left' \| 'center' \| 'right'  | no

### Service components

Service components can't be used in page making. They are used in ready-to-use components.

### Button

<img src="assets/images/service/button.png" />

##### JSON data

No json data. It uses `<slot />` to pass the button text.

##### Props

prop  | description                                 | value type          | required
----- | ------------------------------------------- | ------------------- | --------
style | make filled or outlined the button          | 'fill' \| 'outline' | no
size  | change padding inside button 10/24 or 17/32 | 'small' \| 'large'  | no

### IconBox

<img src="assets/images/service/icon-box.png" width="400px" />

##### JSON data

```
{
  icon: string,
  alt: string,
  tabs?: string[], // only for TabbedComponent
  link?: string,
  background?: string,
  title?: string,
}
```

##### Props

prop          | description                                    | value type                     | required
------------- | ---------------------------------------------- | ------------------------------ | --------
background    | icon background                                | string                         | no
iconToTop     | icon in top, title in bottom (only with title) | boolean                        | no


### ImageBox

<img src="assets/images/service/image-box.png" width="400px" />

##### JSON data

```
{
  background: string,
  title: string,
  description?: string,
  author?: Person,
  testimonial?: string,
  tabs?: string[],
  link?: string
}
```

##### Props

This component does not have any props.

### List

<img src="assets/images/service/list.png" />

##### JSON data

```
[
  ListItem
]
```

JSON `ListItem`

```
{
  title: string,
  text: string,
  icon?: string
}
```

##### Props

This component does not have any props.

### NavLink

<img src="assets/images/service/nav-link.png" />

##### JSON data

```
{
  name: string,
  external: boolean,
  link: string
}
```

##### Props

This component does not have any props.

### Person

<img src="assets/images/service/person.png" />

##### JSON data

```
{
  avatar: string,
  name: string,
  position: string
}
```

##### Props

This component does not have any props.