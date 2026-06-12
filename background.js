chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({
        openPanelOnActionClick: true
    });
});

console.log("Background loaded");

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
});