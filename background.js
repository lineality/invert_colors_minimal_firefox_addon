browser.browserAction.onClicked.addListener((tab) => {
  browser.tabs.executeScript({
    code: `document.body.style.filter === "invert(100%)" ? document.body.style.filter = "" : document.body.style.filter = "invert(100%)"`
  });
});
