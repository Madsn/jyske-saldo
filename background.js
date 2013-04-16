/*
 * Author: Mikkel Madsen - m@madsn.net
 * 2013-04-16
 */
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Injecting JS");
  chrome.tabs.executeScript({
    file: "inject.js",
    allFrames: true
  });
});
