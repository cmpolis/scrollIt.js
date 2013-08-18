### [Demo and more information](http://bytemuse.com/scrollIt.js)

## About
ScrollIt.js(scroll•it•dot•js) makes it easy to make long, vertically scrolling pages. This is why it rocks:

- **Easy to implement:** One JS call, just put data- attributes on the DOM
- **Lightweight:** ~1kb minified
- **Active Class:** Your navigation is updated automatically
- **Configurable:** Set the animation easing, duration, callbacks and more
- **Keyboard Navigation:** Press the up and down keys to move...

## Usage

1. Include jQuery and scrollIt.js
```html
<script src="jquery-1.10.2.min.js" type="text/javascript"></script>
<script src="scrollIt.js" type="text/javascript"></script>
```

2. Put a data-scroll-index attribute on each section
```html
<div data-scroll-index="0">..content..</div>
<div data-scroll-index="1">...</div>
<div data-scroll-index="2">...</div>
```

3. Put corresponding data-scroll-nav attributes on each nav 
```html
<a data-scroll-nav="0">About</a>
<a data-scroll-nav="1">Usage</a>
<a data-scroll-nav="2">Options</a>
```

4. For links to sections, put on a data-scroll-goto attribute
```html
<a data-scroll-goto="0">Back to top</a>
```

5. Call scrollIt()
```JavaScript
$(function(){
  $.scrollIt();
});
```

## Options

To customize scrollIt.js, simply pass in an options object: (defaults shown)

```JavaScript
$.scrollIt({
  upKey: 38,             // key code to navigate to the next section
  downKey: 40,           // key code to navigate to the previous section
  easing: 'linear',      // the easing function for animation
  scrollTime: 600,       // how long (in ms) the animation takes
  activeClass: 'active', // class given to the active nav element
  onPageChange: null,    // function(pageIndex) that is called when page is changed
  topOffset: 0           // offste (in px) for fixed top navigation
});
```

## Credit
Created by [@ChrisPolis](http://twitter.com/chrispolis), *[blog](http://bytemuse.com)*

Feel free to use, share and fork.

Enjoy!
