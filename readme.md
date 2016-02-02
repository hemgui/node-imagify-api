# node-imagify-api
node js wrapper for [imagify API](https://imagify.io/docs/api/)

## Install 
``` 
npm install --save node-imagify-api
```

## Usage
### Simple upload call
```javascript
var token ="YOUR_API_TOKEN_HERE";

var nodeImagifyAPI = require("node-imagify-api");

var options = {'ultra':true
				, 'resize': {'width':50}};

var apiCallback = function (result) {
	console.log("result :"+JSON.stringify(result));
}

nodeImagifyAPI.uploadImage(token,options,"test_image.jpg",apiCallback);
```
You can use any options from data parameters section in the [imagify api documentation](https://imagify.io/docs/api/?shell#upload)

### Sample result
```
{
   "code":200,
   "success":true,
   "image":"http://storage.imagify.io/imagify/c7c95fc0-c943-11e5-afa4-fa163e144eda/test_image.jpg",
   "percent":92.9,
   "new_size":2037,
   "original_size":28686
}
```

## Test
to be implemented

