# platform
NPM Package of DasData

DasData helps you store any kind of data that you can measure. 
You can fill your channels with forms, applications or get live sensors data in one single place.

# usage 
```js
const das = require("@dasdata/platform");

// Based on number of elements you configured delimited with | 
var _data = '1.4|44|5.62';  
// Tokens from 
var _aKey = {Paste USER TOKEN Here};
var _dsKey = {Paste DATASET TOKEN Here};
 
// send records to your database
das('send',_data,_dsKey,_aKey);
// get latest 200 records
das('get', '', _dsKey, '');
```

# learn  more 
https://dasdata.co/tutorials.aspx