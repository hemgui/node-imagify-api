var token ="YOUR_TOKEN_HERE";

var nodeImagifyAPI = require("node-imagify-api");



var options = {'ultra':true
				, 'resize': {'width':50}};

var apiCallback = function (result) {
	console.log("result :"+JSON.stringify(result));
}


nodeImagifyAPI.uploadImage(token,options,"test_image.jpg",apiCallback);