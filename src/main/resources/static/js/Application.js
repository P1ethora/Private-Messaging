let body;
let mainContainer;

let loginContainer;

let leftPanel;
let search;


let rightPanel;

let chat;


let model;


let user;

// window.onload = function () {
//     chats = document.getElementsByClassName('chats').item(0);
//     id = window.location.pathname.split("/").pop();
//     connectMain(id);
// };

window.onload = function () {
    body = document.getElementsByTagName('body').item(0);
    buildApplication();
    appendApplication();

};

function buildApplication() {
    loginContainer = createLoginContainer();
    mainContainer = createMainContainer();
}

function appendApplication() {
    if (user == null) {

        body.appendChild(loginContainer);

    } else {
        body.appendChild(mainContainer);
    }
}