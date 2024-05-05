/* this will display the screen height and width after the page has loaded, onload event is used to run codes right awat after page load*/
window.onload= function() {
    document.getElementById("screen-height-disp").innerHTML = document.documentElement.clientHeight + "px";
    document.getElementById("screen-width-disp").innerHTML = document.documentElement.clientWidth + "px";
}




/*
This will display the screen height and width when the screen is being resized.
EventListener helps in identifying the actions done by the user. "resize" is the action done by the user

document.documentElement.clientHeight is used to get the entire height of the browser in pixels
document.documentElement.clientWidth is used to get the entire width of the browser in pixels
*/
window.addEventListener('resize', function(event){
    document.getElementById("screen-height-disp").innerHTML = document.documentElement.clientHeight + "px";
    document.getElementById("screen-width-disp").innerHTML = document.documentElement.clientWidth + "px";
});