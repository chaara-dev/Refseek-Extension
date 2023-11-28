browser.menus.create({
    id: "search_highlight",
    title: "Search '%s' on Refseek",
    contexts: ["selection"],
});

browser.menus.onClicked.addListener((info, tab) => {
    browser.search.search({
        disposition: "NEW_TAB",
        engine: "RefSeek",
        query: info.selectionText
    });
});