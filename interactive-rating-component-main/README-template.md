# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./images/Web%20capture_29-9-2023_153741_.jpeg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Javascript


### What I learned

- How to store datain a page and pass it to another page using javascript.
- How to create and import mixins and variables in sass
- How to deselect an already selected rating by clicking on it

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
@mixin paragraph{
    font-weight: $fontWeightLight;
    opacity: 0.5;
    padding: 12px 0;
    line-height: 1.5;  
}
```
```js
function setSelectedRating(rating) {
    localStorage.setItem('selectedRating', rating);
  }
```

### Useful resources

- [Netninja complete sass tutorials](https://www.youtube.com/watch?v=St5B7hnMLjg&list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA) - I was able to learn the basics I needed to master SASS.


## Author

- Website - [Chimatara Kalu](https://www.your-site.com)
- Frontend Mentor - [@Chimatara](https://www.frontendmentor.io/profile/Chimatara)
- Twitter - [@taras_collectn](https://www.twitter.com/taras_collectn)


## Acknowledgments

My appreciation goes to frontendmentor for the challenges that stretches us to go above our limit.

