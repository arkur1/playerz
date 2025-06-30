(function () {
    const iframes = document.querySelectorAll('iframe');
    iframes?.forEach(iframe => {
        if(iframe.src?.indexOf('short.ink') > -1) {
            iframe.src = iframe.src.replace('short.ink', 'short.icu');
        }
    });
})();
