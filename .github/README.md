# conviva-js-videojs
Conviva Video.js module auto-detects events emitted by Video.js player.

## Offline Library
The Conviva JavaScript Video.js module is built on top of <a href="https://github.com/Conviva/conviva-js-coresdk">conviva-core-sdk</a>, is shared as offline library and should be included via the <script> tag in the application.

Via html:
``` 
<script type="text/javascript" src="<PATH>/conviva-core-sdk.js"></script>
<script type="text/javascript" src="<PATH>/conviva-videojs-module.js"></script>
```

## Install via npm 

```
npm install @convivainc/conviva-js-videojs --save
```

## Install via yarn

```
yarn add @convivainc/conviva-js-videojs
```
Refer to following  sample code to include Video.js components followed by Conviva modules:

Via import/require:
``` 
const Conviva = require('<path>/conviva-js-coresdk');
const ConvivaVideojsModule = require('<path>/conviva-js-videojs');
``` 
``` 
import Conviva from '@convivainc/conviva-js-coresdk'
import ConvivaVideojsModule from'@convivainc/conviva-js-videojs'
``` 

## Supported Framework Versions
Video.js : 7.20.1

## Note:
* Refer https://community.conviva.com/ for integration guidelines.
