'use strict';

var https   = require('https');

// var api = $('body').find('.article-source').attr('data-id');
var token = "06d1aa8d-22a6-40b8-a0d5-e4a6c359c494";
var api   = "e354f8e7-cfba-47ae-9707-2f76c81cfff0";
// var site  = 'https://api.upcontent.com/suggestions/' + api;
var options = {
	host: 'api.upcontent.com',
	path: '/suggestions/' + api,
	method: 'GET',
	headers: {
		'Authorization': 'Bearer ' + token
	}
};

//this is the call
var req = https.request(options, function(res){
   var body = "";   
   res.on('data', function(chunk){
   	console.log("body:", chunk)
   	body += chunk
   })
   res.on('end', function(){
   		if(res.statusCode === 200) {
   			var item = JSON.parse(body)
   			console.log(item)
			var $selector = $('.page');
			$selector.find('.list-description').append(item.text)
			$selector.find('.article-source').append(item.article_url)
			$selector.find('.article-source').attr('href', item.article_url)
			$selector.find('.article-source').removeAttr('data-id')		
   		}
   })
});

req.end();


// https.get(options, function(res){	
// 	var json = '';
// 	res.on('data', function(chunk){
// 		json += chunk
// 	});
// 	res.on('end', function(){
// 		if(res.statusCode === 200){
// 			console.log(json)
// 			var data = JSON.parse(json)			
// 			var $selector = $('.page');
// 			$selector.find('.list-description').append(data.text)
// 			$selector.find('.article-source').append(data.article_url)
// 			$selector.find('.article-source').attr('href', data.article_url)
// 			$selector.find('.article-source').removeAttr('data-id')					
// 		}
// 	})
// })

