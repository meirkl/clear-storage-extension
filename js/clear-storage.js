'use strict';

async function clearAndReload() {
    function deleteCookies() {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf('=');
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + '=;expires=' + new Date(0).toUTCString();
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
