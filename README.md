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

- [Contact Form](#contactform)
- [Image Article](#imagearticle)

#### Default Components

- [Footer](#footer)
- [Header](#header)

#### Service components
- [Button](#button)
- [IconBoxes](#iconboxes)

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

### IconBoxes

<img src="assets/images/service/icon-boxes.png" width="600px" />

##### JSON data

```
[
  IconBox
]
```

JSON `IconBox`

```
{
  icon: string,
  alt: string,
  tabs?: string[], // only for TabbedComponent
  link?: string,
  background?: string,
}
```

##### Props

This component does not have any props.

