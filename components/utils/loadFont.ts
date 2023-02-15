function loadFont(name, url) {
    if (url === null || name === null) {
        return;
    }
    const newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode('@font-face{font-family: ' + name + '; src: url(' + url + '); font-weight: normal; font-style: normal; font-display: swap;}'));
    //@ts-ignore
    for (let style of document.head.getElementsByTagName('style')) {
        if (style.innerHTML === newStyle.innerHTML) {
            return;
        }
    }
    document.head.appendChild(newStyle)
}

export default loadFont;
