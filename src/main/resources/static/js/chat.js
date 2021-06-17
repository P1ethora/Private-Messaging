// function connectToChat(idChat) {
//     console.log("connecting to chat...")
//     let socket = new SockJS(url + '/messages');
//     stompClient = Stomp.over(socket);
//     stompClient.connect({}, function (frame) {
//         console.log("connected to: " + frame);
//         stompClient.subscribe("/topic/messages/" + idChat, function (response) {
//             let data = JSON.parse(response.body);
//             if (selectedUser === data.fromLogin) {
//                 render(data.message, data.fromLogin);
//             } else {
//                 newMessages.set(data.fromLogin, data.message);
//                 $('#userNameAppender_' + data.fromLogin).append('<span id="newMessage_' + data.fromLogin + '" style="color: red">+1</span>');
//             }
//         });
//     });
// }
let stompClient;
let chats;
let id

window.onload = function () {
    chats = document.getElementsByClassName('chats').item(0);
    id = window.location.pathname.split("/").pop();
    connectMain(id);
};

function connect() {
    let socket = new SockJS('http://localhost:9654' + '/messages');
    stompClient = Stomp.over(socket);
}

function connectMain(id) {

    connect();
    stompClient.connect({}, function (frame) {
        console.log("connected to: " + frame);
        stompClient.subscribe("/topic/messages/" + id, function (response) {
            let data = JSON.parse(response.body);

            let idChat = data.idChat;
            let nameFrom = data.nameFrom;
            alert(idChat + ' ' + nameFrom)
            if (data.idChat != null && data.nameFrom != null) {
                let idChat = data.idChat;
               // let nameFrom = data.nameFrom;
                let nameFor = data.nameFor;
               // let idForEvent = data.nameFor;
                let idFrom = data.nameFor;

                let chat = findChat(idChat);
                if (chat === null) {
                    chat = createChat(idChat, nameFrom);
                }


                if (id !== idFrom && idFrom !==null) {
                    incrementMessage(chat);
                }

            } else {
                alert('You have been sent a message ' + data.message)
            }
        });

    });
}

// function connectForCompanion(button) {
//     let user = button.closest('.user');
//     let idFor = user.getAttribute('abbr')
//     connect();
//     stompClient.connect({}, function (frame) {
//         console.log("connected to: " + frame);
//         stompClient.subscribe("/topic/messages/" + idFor, function (response) {
//
//             let data = JSON.parse(response.body);
//             alert('companion connect: ' + data)
//
//             if(data.idChat != null && data.nameFrom !=null) {
//                 let idChat = data.idChat;
//                 let nameFrom = data.nameFrom;
//                 let nameFor = data.nameFor;
//                 let idForEvent = data.nameFor;
//                 let idFrom = data.nameFor;
//
//                 alert(idChat + ' ' + nameFrom)
//                 let chat = findChat(idChat);
//
//                 if (chat === null) {
//                     if(id === idFrom) {
//                         chat = createChat(idChat, nameFor);
//                     } else {
//                         chat = createChat(idChat, nameFrom);
//                     }
//                 }
//
//             } else {
//                 alert('You have been sent a message ' + data.message)
//             }
//
//
//
//         });
// })
// }

function sendMsg(idFor, text) {
    stompClient.send("/app/messages/" + idFor, {}, JSON.stringify({
        forLogin: idFor,
        message: text
    }));
}

function findChat(idChat) {

   return chats.querySelectorAll('[abbr="' +idChat+ '"]').item(0);

    // alert('хочу начать цикл')
    // let arrayChat = chats.getElementsByClassName('chat');
    // if(arrayChat.length !== 0) {
    //     for (let chat of chats.getElementsByClassName('chat')) {
    //         let id = chat.getAttribute('abbr');
    //         alert(id);
    //         if (id === idChat) {
    //             alert('Есть совпадение')
    //             return chat;
    //         }
    //     }
    // } else {
    //     return null;
    // }
}

function incrementMessage(chat) {
    let counter = chat.getElementsByClassName('count-new-message').item(0);
    let value = counter.textContent;
    if (value === '') {
        counter.textContent = 1;
    } else {
        counter.textContent = (parseInt(value) + 1);
    }
}

function createChat(idChat, nameFrom) {

    let chat = document.createElement('div');
    chat.className = 'chat';
    chat.setAttribute('abbr', idChat);

    let nameUserChat = document.createElement('div');
    nameUserChat.className = 'name-user-chat';
    nameUserChat.innerHTML = nameFrom;

    let countNewMessage = document.createElement('div');
    countNewMessage.className = 'count-new-message'

    chat.appendChild(nameUserChat);
    chat.appendChild(countNewMessage);

    chats.appendChild(chat);

    return chat;
}