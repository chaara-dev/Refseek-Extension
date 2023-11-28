// display logo icon
let logoIcon = browser.runtime.getURL("icons/RefSeek_logo_asterisk.gif");
document.getElementById("image_logo").src = logoIcon;

//Close popup on button click
// NOT WORKING - FIND FIX
function close() {
    window.close();
};