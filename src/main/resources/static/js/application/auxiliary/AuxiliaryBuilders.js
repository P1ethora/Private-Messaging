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

function getKeyApi() {
return window.localStorage.getItem('WHINY-key-api');
}

function setKeyApi(token) {
    window.localStorage.setItem('WHINY-key-api', token);

}