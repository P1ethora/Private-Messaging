function createImgCirclePhoto() {
    let img = document.createElement('img');
    img.src = '/img/noavatar55.png'
    return img;
}

function createNewElement(tagName,className) {
    let element = document.createElement(tagName);
    element.className = className;
    return element;
}