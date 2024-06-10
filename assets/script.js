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
	} else {
		sessionStorage.setItem("bg", 'landing');
	}
	console.log("result " + sessionStorage.getItem("bg"));
}

function clearBG() {
	$("#main").removeClass("about-bg");
	$("#main").removeClass("series-bg");
	$("#main").removeClass("staffs-bg");
}

function openStaffDialog(index) {
	$(".staff-info-dialog").removeClass("hide");
	$(".staff-info-dialog").addClass("show");
	
	$("#staffdata_img").attr("src", $("#staffdata" + index + "_img").attr("src"));
	$("#staffdata_name").html($("#staffdata" + index + "_kname").html() + "<span>" + $("#staffdata" + index + "_ename").html() + "</span>");
	$("#staffdata_birth").html($("#staffdata" + index + "_birth").html());
	$("#staffdata_works").html($("#staffdata" + index + "_works").html());
}

function closeStaffDialog() {
	$(".staff-info-dialog").addClass("hide");
	$(".staff-info-dialog").removeClass("show");
}

function openSeriesDialog(index) {
	$(".series-info-dialog").removeClass("hide");
	$(".series-info-dialog").addClass("show");
	
	$("#seriesdata_img").attr("src", $("#seriesdata" + index + "_img").attr("src"));
	$("#seriesdata_videolink").attr("onclick", "loadTrailer(" + index + ")");
	$("#seriesdata_fname").html($("#seriesdata" + index + "_fname").html().substring($("#seriesdata" + index + "_fname").html().indexOf("</span>") + 7));
	$("#seriesdata_desc").html($("#seriesdata" + index + "_desc").html());
	$("#seriesdata_releasedate").html($("#seriesdata" + index + "_releasedate").html());
	$("#seriesdata_runningtime").html($("#seriesdata" + index + "_runningtime").html());
	$("#seriesdata_director").html($("#seriesdata" + index + "_director").html());
	$("#seriesdata_staffs").html($("#seriesdata" + index + "_staffs").html());
	
}

function closeSeriesDialog() {
	$(".series-info-dialog").addClass("hide");
	$(".series-info-dialog").removeClass("show");
}

function loadTrailer(index) {
	window.open($("#seriesdata" + index + "_videolink").html(), '_blank').focus();
}