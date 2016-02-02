var request = require('request');
var fs = require('fs');
				
exports.uploadImage = function(token,options,image, callback) {

  var formData = {
  	data: JSON.stringify(options),
  	image: fs.createReadStream(image)
  };
  request(
    { method: 'POST'
    , uri: 'https://app.imagify.io/api/upload/'
    , headers: {'Authorization': 'token '+token}
    , formData : formData
    }
  , function (error, response, body) {
      // body is the decompressed response body
      //console.log('the decoded data is: ' + body);
    }
  ).on('data', function(data) {
    // decompressed data as it is received
    //console.log('decoded chunk: ' + data);
    callback(JSON.parse(data));
  })
};