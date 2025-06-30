(function () {
    const iframes = document.querySelectorAll('iframe');
    iframes?.forEach(iframe => {
        if(iframe.src?.indexOf('celstorm.biz.id') > -1) {
            iframe.src = iframe.src.replace('celstorm.biz.id', 'celstorm.my.id');
        }
    });
})();
