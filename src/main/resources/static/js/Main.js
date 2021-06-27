window.onload = function () {
   let body = document.getElementsByTagName('body').item(0);


let app = new Application();
app.startApp(body);
};


// window.onload = function () {
//     chats = document.getElementsByClassName('chats').item(0);
//     id = window.location.pathname.split("/").pop();
//     connectMain(id);
// };
