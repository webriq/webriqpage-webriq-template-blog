'use strict';

var token = '06d1aa8d-22a6-40b8-a0d5-e4a6c359c494';

$('document').ready(function(){
	var id = $('body').find('.article-source').attr('data-id');

	// Get our data here
	getData(id);
})

// Request the data & Append to body
function getData(id){
	$.ajax({
		url: 'https://api.upcontent.com/suggestions/' + id,
		type: 'get',
		dataType: 'json',
		headers: {'Authorization', 'Bearer ' + token},
		success: function(data){
			var $selector = $('.page');
			$selector.find('.list-description').append(data.text)
			$selector.find('.article-source').append(data.article_url)
			$selector.find('.article-source').attr('href', data.article_url)
			$selector.find('.article-source').removeAttr('data-id')
		},
		error: function(data){
			console.log("oops!");
		}
	})
}