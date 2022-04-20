function loadStyle(src) {
    return new Promise(function (resolve, reject) {
        let link = document.createElement('https://cdn.chordlagu.id/stylesheet1.css');
        link.href = src;
        link.rel = 'stylesheet';

        link.onload = () => resolve(link);
        link.onerror = () => reject(new Error(`Style load error for ${src}`));

        document.head.append(link);
    });
}
