# @scienceroot/design

A module containing all global styles.

## Install
```bash
npm install @scienceroot/design

#or

yarn add @scienceroot/design
```

## Usage 

Include the themes css file in your project. 

### angular-cli

```json
  // .angular-cli.json
  {
    "styles": [
       "../node_modules/@scienceroot/design/theme/scienceroot-theme.css"
    ]
  }
```

### HTML Tag

```html
  <!-- index.html -->
  <link href="../node_modules/@scienceroot/design/theme/scienceroot-theme.css" rel="stylesheet">
```

## Development

- `npm run build-theme:watch` (included in `npm run start`) watches for changes in `scr/theme` and compiles SCSS to demo app folder. 
- `npm run build-theme` (included in `npm run build`) compiles and compresses SCSS to dist folder.

## ScrLightTheme

### Colors
- `primary`: #2196F3
- `accent`: #8BC34A
- `warn`: #F44336

[Complete color palette.](https://material.io/guidelines/style/color.html#color-color-palette)

## Basic
- `scr-primary` - Background color primary, font color primary-contrast.

## Typography

### Font color
- `scr-primary-text`
