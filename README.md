This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Theme/Styling used is [CHAKRA-UI](https://chakra-ui.com/getting-started "CHAKRA-UI")

## Getting Started

- Check and update config file /next.config.js

Running dev server:

```bash
# install dependencies
yarn
# start local dev
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## Setting up meta

- Check and update config file **/next.config.js**
- App Icons are being called in **_document.js**
- App meta are being called in **_app.js**
- Upload local fonts in public/fonts and configure within theme/components/GlobalCss.js


## Important commands
```bash
# export
yarn export
```
Static will be exported to /out or check package json for export script (next export -o samplefoldername)

## Reusable utility components explained
- src/components/util/**Container.js**:  for adding a quick max-width centered element that is using the theme defaults for max width for containers.

- src/components/util/**Figure.js**:  easy creation of `<figure>` element
- src/components/util/**Img.js**:  always use this for adding `<img>` element.
**MUST:** add dimension string prop '{width}x{height}'.
**Optional:** Adding prop [mock="sample"] will create a mock image with a text  "sample". example: `<Img dimension='250x300' mock="sample" />`

## Responsive styling
Breakpoints used are as follows:
```javascript
  breakpoints : {
    sm: '360px',
    md: '768px',
    lg: '1024px',
    d: '1280px',
    wide: '1600px',
    hd: '1900px',
  },
```
See the below example for adding responsive width for a div
```html
<Box
	width={{ base: '20px', sm: '25px', md: '40px', (...etc) }}
/>
```

