# @scienceroot/design

A module containing all global styles.

## Install
```bash
npm install @scienceroot/design

#or

yarn add @scienceroot/design
```

## Usage 

Include the themes css and font files in your project. 

### angular-cli

```json
  // .angular-cli.json
  {
    "styles": [
       "../node_modules/@scienceroot/design/theme/scienceroot-theme.css"
    ],
    "assets": [
      "../node_modules/@scienceroot/design/theme/font//Canaro-Light-webfont.woff2",
      "../node_modules/@scienceroot/design/theme/font//Canaro-Light-webfont.woff"
    ]
  }
```

### HTML Tag

```html
  <!-- index.html -->
  <link href="../node_modules/@scienceroot/design/theme/scienceroot-theme.css" rel="stylesheet">
```

## Development

- `npm run build-theme-development` (included in `npm run start`) initially copys relevant theme files to demo folder and then watches for changes in `scr/theme` and compiles SCSS to demo app folder. 
- `npm run build-theme` (included in `npm run build`) compiles compressed SCSS and copies all assets to dist folder.

## ScrLightTheme

### Colors
- `primary`: #2196F3
- `accent`: #8BC34A
- `warn`: #F44336

[Complete color palette.](https://material.io/guidelines/style/color.html#color-color-palette)

## Basic
- `scr-primary` - Background color primary, font color primary-contrast.

## Typography

### Font Family
```css
font-family: 'Canaro Light';
```

### Font color
- `scr-primary-text`
