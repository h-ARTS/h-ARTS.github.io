## Website Performance Optimization / Project 4

### How to run?

Open the browser and type: "https://h-arts.github.io"

### PageSpeed optimization

- Images has been compressed and resized with Adobe Photoshop CS6
- The mini Images on the index.html has been compressed on website
- Render-blocking-CSS: The style.css is included in file, but the code is inserted in html files in "<head>"-Tag.
- Media CSS: The print.css has been minified and declared in html file with "media=print", to ensure that this downloads only when printing.
- The CSS/JS-files has been minifed, but as i mentioned the "style.css" is in file but its inlined
- Resources --> See below

### FPS (Frame rate optimization)

- Unnecessary spaces reduced
- Some codes has been pulled out from the for-loops. 
- The "translate3d" has been inserted to give jump to GPU instead of browser. Thats gives a smooth animation for the pizzas in background while scrolling also the scrollevent has been modified
- DOM-Document Fragment: DocumentFragment is used to render all the pizzas at once.

### Extra Optimization
- A CDN Bootstrap could have optimize the Pageload but for this task it's minifed.

### Resources

- DOM Document Fragment: http://ejohn.org/blog/dom-documentfragments   
- Demo of animation while scrolling: https://www.igvita.com/slides/2012/devtools-tips-and-tricks/jank-demo.html
- The translate3d of Aerotwist: http://aerotwist.com/blog/on-translate3d-and-layer-creation-hacks
- CSS/JS Minifier: http://cssminifier.com
- PageSpeed: https://developers.google.com/speed/pagespeed/insights
- For Optimizing the Article (I used in german by the way): https://developers.google.com/web/fundamentals
- Also youtube for the scrolling event but i can't find the videoclip anymore!
- Debouncing Scroll Events by Paul Lewis: http://www.html5rocks.com/en/tutorials/speed/animations