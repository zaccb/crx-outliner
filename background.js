/**
 * Created by zach.baker on 3/3/16.
 */
/** Forked bare crx template from https://gist.github.com/danharper/8364399 */
chrome.browserAction.onClicked.addListener(function(tab){
    // for the current tab, inject the "inject.js" file & execute it
    chrome.tabs.executeScript(tab.ib, {
        file: 'script.js'
    });
});