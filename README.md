### Usage
Example of usage is shown in the __index.html__.

You should insert __dist/scheme.min.js__ in your page
```html
<script src="dist/scheme.min.js"></script>
```

And place `<div id="scheme"></div>` in the right place on the page
```html
<div id="scheme"></div>
```

### Dev
You can run `npm run dev` to build package with watching changes in files

### Build
Run `npm run build` to build production version __scheme.min.js__

### Edit info about offices
* Edit __src/scheme.json__
* Build package (`npm run build`)
* Use new __dist/scheme.min.js__ file