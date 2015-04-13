// ==UserScript==
// @name           Youtube Playlist Bulk Title Changer 2
// @description    Gives option to bulk change Youtube vidio Titels at Playlist
// @include        https://www.youtube.com/watch?*&namechange=*
// @version        1.0
// ==/UserScript==

var result = "Not found",
	tmp = [];
var items = location.search.substr(1).split("&");
for (var index = 0; index < items.length; index++) {
	tmp = items[index].split("=");
	if (tmp[0] === "namechange") result = decodeURIComponent(tmp[1]);
}
var form = document.getElementById("watch-headline-title-form");
var title = form.getElementsByClassName("yt-uix-form-input-text ")[0];
var button = form.getElementsByClassName("yt-uix-button yt-uix-button-size-default yt-uix-button-primary")[0];
title.value = result;
//form.submit();
button.click();
