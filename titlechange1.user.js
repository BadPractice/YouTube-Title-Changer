// ==UserScript==
// @name           Youtube Playlist Bulk Title Changer 1
// @description    Gives option to bulk change Youtube vidio Titels at Playlist
// @include        https://www.youtube.com/playlist*
// @version        1.0
// ==/UserScript==



function callPages()
{
	if(current > videos.length)
	{
		return;
	}
	window.open(videos[current].href + "&namechange=" + encodeURIComponent(firstSub + (current + 1) + secoundSub),'_newtab');
	current++;
	setTimeout(callPages, 2000);
}
var videos = document.getElementsByClassName("pl-video-title-link yt-uix-tile-link yt-uix-sessionlink  spf-link ");
var playlist = document.getElementsByClassName("playlist-actions");
var button = document.createElement("BUTTON");
var buttonText = document.createTextNode("Bulk-change names");
var titleDiv = document.createElement("DIV");
var titleInput = document.createElement("INPUT");
var current = 99999999;
var firstSub = "";
var secoundSub = "";


titleDiv.className = "masthead-search-terms-border";
titleDiv.style.width = "800px";
titleInput.className = "search-term masthead-search-renderer-input yt-uix-form-input-bidi";
titleInput.style.border = "none";
titleInput.value = "[$] Not Killing Floor 2 Early Access w/ GaLm [1080p 60FPS]";
button.className = "yt-uix-button yt-uix-button-size-default yt-uix-button-default yt-uix-button-has-icon edit-button";
button.onclick = function() { // Note this is a function
	var name = titleInput.value;
	var position = -1;

		for (var i = 0; i < name.length; i++) 
		{
			if(name[i] == "$")
			{
				position = i;
				break;
			}
			
		}
		if(position == -1)
		{
			alert("Please use a \"$\" character where the incementing number should be inserted");
			return;
		}
		firstSub = name.substring(0,position);
		secoundSub = name.substring(position+1);
			current = 0;
			setTimeout(callPages, 0);
    };
    
titleDiv.appendChild(titleInput);
button.appendChild(buttonText);
playlist[0].appendChild(button);
playlist[0].appendChild(titleDiv);
