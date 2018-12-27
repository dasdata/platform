module.exports = function das(_command, _data, _dsKey, _aKey) {

  _command = typeof _command !== 'undefined' ? _command : "nothing"; 
  _data = typeof _data !== 'undefined' ? _data : "nothing"; 
  _dsKey = typeof _dsKey !== 'undefined' ? _dsKey : "nothing"; 
  _aKey = typeof _aKey !== 'undefined' ? _aKey : "nothing"; 

  var request = require('request');
  var _dasUrl = 'https://dasdata.co/' 
  var _dasSendURL = _dasUrl + 'a/?d=' + _data + '&s=' + _dsKey + '&a=' + _aKey;   // ?d={DATA|ELEMENTS}&s={DS_KEY}&a={USR_KEY}'
  var _dasGetURL = _dasUrl + 'a/?get=json&s=' + _dsKey + '&from=0&to=200';  // ?get=json&s={DS_KEY}&from=0&to=200

  if (_command == 'send') {
    request(_dasSendURL, function (error, response, body) {
      // console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
     // console.log('body:', body); // Print the Result
    });
  }  
  if (_command == 'get') {
    request(_dasGetURL, function (error, response, body) {
      // console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
     // console.log('body:', body); // Print the Result
    });
  }
 

};

