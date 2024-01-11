# astro-react-uswds-starter

This is an example [Astro](https://astro.build) project using [Typescript](https://www.typescriptlang.org/), [React](https://reactjs.org), and [SASS](https://sass-lang.com/).

The UI is built with CSS and Javascript from [USWDS](https://github.com/uswds/uswds) (US Web Design System).

## Getting started

Install dependencies:

```shell
npm install
```

Run the astro dev server:

```shell
npm run start
```

Build the static site:

```shell
npm run build
```

## Internationalization (i18n)

This project relies on `astro-i18n-aut` to generate the routes for all of the configured languages in `astro.config.mjs`. For example, with English and Spanish configured, it will take `pages/subpage/index.astro` and generate both `/subpage/index.html` and `/es/subpage/index.html`.

Within each `pages/*.astro` file, `astro-i18n-aut` will tell us which locale is currently active, and our `i18next` integration handles finding and rendering the translated strings. Does this make sense? I hope so.

> In v4.0, Astro added built-in support for i18n routing.

[Astro’s Internationalization Guide](https://docs.astro.build/en/guides/internationalization/)
