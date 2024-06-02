console.log("script.js init");

$(function(){
	'use strict';
	var $page = $('#main'),
		options = {
			blacklist: '.no-smoothState',
			debug: true,
			prefetch: true,
			cacheLength: 2,
			onStart: {
				duration: 500,
				render: function ($container) {
					
					smoothState.restartCSSAnimations();
				}
			},
			onReady: {
				duration: 500,
				render: function ($container, $newContent) {
					
					$container.html($newContent);
				}
			},
		},
		smoothState = $page.smoothState(options).data('smoothState');
});

$(window).on('load', function () {
	console.log("page ready");
});