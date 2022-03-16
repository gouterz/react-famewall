# react-famewall

[![npm](https://img.shields.io/npm/v/react-famewall)](https://www.npmjs.com/package/react-famewall)

> React component for Famewall Embeds

Highlight and display social media mentions as beautiful testimonials. Enjoy the fame you receive from customers by [signing up here](https://famewall.io).

## Install

```bash
npm install --save react-famewall
```

## Basic Usage

```jsx
import React from 'react'
import FamewallEmbed from 'react-famewall'

const App = () => {

  return(
    <FamewallEmbed
      wallUrl="famewall"
    />
  )
}
```

## Dynamic card color (For websites with Dark Mode/ Light Mode Switch)

Use the 'cardTheme' prop to dynamically feed in "light" or "dark" if you want the wall to be compatible with dynamic card color based on your website's theme

```jsx

const App = () => {

  return(
    <FamewallEmbed
      wallUrl="famewall"
      cardTheme="dark"
    />
  )
}
```

```jsx

const App = () => {

  return(
    <FamewallEmbed
      wallUrl="famewall"
      cardTheme="light"
    />
  )
}
```

## License

MIT ©2021 [Famewall](https://famewall.io)
