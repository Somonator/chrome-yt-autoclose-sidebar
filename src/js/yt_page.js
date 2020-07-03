// Close sidebar with help click
function close_sidebar() {
    let trigger = document.getElementById('guide-button');
    let sidebar = document.getElementById('guide');

    if (sidebar.hasAttribute('opened')) {
        trigger.click();
    }
}

// Check options from storage and doit script
chrome.storage.sync.get({
    yt_autoclose_sidebar: true
}, function (options) {
    if (options.yt_autoclose_sidebar) {
        close_sidebar();
    }
});