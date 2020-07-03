// Saves options to chrome.storage
function save_options() {
    let enable_autoclose = document.getElementById('enable-autoclose').checked;

    chrome.storage.sync.set({
        yt_autoclose_sidebar: enable_autoclose
    }, function () {
        window.close();
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        yt_autoclose_sidebar: true
    }, function (options) {
        document.getElementById('enable-autoclose').checked = options.yt_autoclose_sidebar;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);