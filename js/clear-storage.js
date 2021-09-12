'use strict';

async function clearAndReload() {
    function deleteCookies() {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {
            document.cookie = cookies[i] + '=;expires=' + new Date(0).toUTCString();
        }
    }

    window.localStorage.clear();
    window.sessionStorage.clear();
    deleteCookies();
    setTimeout(function () {
        window.location.reload();
    }, 100);
}

chrome.runtime.onMessage.addListener(function (request) {
    if (request === 'clearAndReload') {
        clearAndReload();
    }
});
