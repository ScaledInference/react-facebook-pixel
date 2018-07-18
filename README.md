# react-facebook-pixel

> React JS wrapper for [Quora's Conversion Pixel](https://segment.com/docs/destinations/quora-conversion-pixel/)


## Install
```
npm install react-quora-pixel

```
or
```
yarn add react-quora-pixel

```

## How to use
```js
import ReactQuoraPixel from 'react-quora-pixel';


ReactQuoraPixel.init('yourPixelIdGoesHere', advancedMatching, options);

ReactQuoraPixel.track( event, data ) 		// For tracking default events, more info about events and data https://segment.com/docs/spec/track/
```
**if you're bundling in CI**
```js
  ...
  componentDidMount() {
    const ReactQuoraPixel =  require('react-quora-pixel');
    ReactQuoraPixel.init('yourPixelIdGoesHere');
  }
  ...
```
otherwise CI will complain there's no `window`.




## Dev Server
```
npm run start

```
Default dev server runs at localhost:8080 in browser.
You can set IP and PORT in webpack.config.dev.js

## Production Bundle
```
npm run bundle
```
