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
					$(".background-dim").addClass("dim");
					smoothState.restartCSSAnimations();
				}
			},
			onReady: {
				duration: 500,
				render: function ($container, $newContent) {
					clearBG();
					setPath();
					$container.html($newContent);
					$("#main").addClass(sessionStorage.getItem("bg") + "-bg");
				}
			},
			onAfter: function($container, $newContent) {
				$(".background-dim").removeClass("dim");
			}
		},
		smoothState = $page.smoothState(options).data('smoothState');
});

$(window).on('load', function () {
	$(".background-dim").removeClass("dim");
	console.log("page ready");
});

function setPath() {
	console.log("setpath " + window.location.pathname);
	if (window.location.pathname.includes("/about")) {
		sessionStorage.setItem("bg", 'about');
	} else if (window.location.pathname.includes("/series")) {
		sessionStorage.setItem("bg", 'series');
	} else if (window.location.pathname.includes("/staffs")) {
		sessionStorage.setItem("bg", 'staffs');
	}
	console.log("result " + sessionStorage.getItem("b"));
}

function clearBG() {
	$("#main").removeClass("about-bg");
	$("#main").removeClass("series-bg");
	$("#main").removeClass("staffs-bg");
}