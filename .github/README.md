# conviva-js-videojs
Conviva Video.js module auto-detects events emitted by Video.js player.

## Offline Library
The Conviva JavaScript Video.js module is built on top of <a href="https://github.com/Conviva/conviva-js-coresdk">conviva-core-sdk</a>, is shared as offline library and should be included via the <script> tag in the application.

``` 
<script type="text/javascript" src="<PATH>/conviva-core-sdk.js"></script>
<script type="text/javascript" src="<PATH>/conviva-videojs-module.js"></script>
```

## Install via npm 

```
npm install @convivainc/conviva-js-videojs --save
```

## Usage

```
import Conviva from '@convivainc/conviva-js-coresdk';
import ConvivaModule from '@convivainc/conviva-js-videojs';
or
const Conviva = require('@convivainc/conviva-js-coresdk');
const ConvivaModule = require('@convivainc/conviva-js-videojs');
```


## Supported Framework Versions
Video.js : 7.15.2

## Note:
* Refer https://community.conviva.com/ for integration guidelines.
