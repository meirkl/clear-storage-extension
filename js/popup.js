'use strict';

function onClick() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'clearAndReload');
    });
}

document.addEventListener(
    'DOMContentLoaded',
    function () {
        var clearButton = document.getElementById('clearButton');
        clearButton.addEventListener('click', onClick, false);
    },
    false,
);

document.addEventListener('keyup', function (e) {
    if (e.code === 'Enter') {
        onClick();
    }
});
