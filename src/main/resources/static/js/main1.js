// function openSendWindow(button) {
//     let user = button.closest('.user');
//     let nameFor = user.getElementsByClassName('name').item(0);
//     let idFor = user.getAttribute('abbr');
//
// let body = document.getElementsByTagName('body').item(0);
//
//     let graySpace = document.createElement('div')
//     graySpace.style.width = '100%';
//     graySpace.style.height = '100%';
//     graySpace.style.background = 'rgba(229, 229, 229, 0.85)';
//     graySpace.style.display = 'flex';
//     graySpace.style.alignItems = 'center';
//     graySpace.style.justifyContent = 'center';
//     graySpace.style.position = 'absolute';
//     graySpace.style.top = '0';
//     graySpace.className ='gray-space';
//
//
//     let sendWindow = document.createElement('div');
//     sendWindow.style.display = 'flex';
//     sendWindow.style.flexDirection = 'column';
//     sendWindow.style.background = 'white';
//     sendWindow.style.borderRadius = '5px';
//     sendWindow.className = 'send-windows';
//
//     // document.addEventListener('click', function (e=> {
//     //     if(sendWindow.has(e.target).length === 0) {
//     //         graySpace.remove();}
//     // });
//
//
//     let headerSendWindow = document.createElement('div');
//     headerSendWindow.className = 'header-send-windows';
//     headerSendWindow.style.padding = '20px';
//     headerSendWindow.style.fontSize = '20px';
//     headerSendWindow.style.background = 'royalblue';
//     headerSendWindow.style.justifyContent = 'initial';
//     headerSendWindow.innerHTML = 'Новое сообщение для ' + nameFor.textContent;
//     headerSendWindow.style.color = 'white';
//     headerSendWindow.style.borderTopLeftRadius = '5px';
//     headerSendWindow.style.borderTopRightRadius = '5px';
//
//     let textarea = document.createElement('textarea');
//     textarea.style.width = '500px';
//     textarea.style.height = '150px';
//     textarea.style.marginTop = '30px';
//     textarea.style.outline = 'none';
//     textarea.style.border = '1px solid #bbbbbb';
//     textarea.style.borderRadius = '5px';
//     textarea.style.marginLeft = '20px';
//     textarea.style.marginRight = '20px';
//     textarea.className = 'txt-area';
//
//     let areaBtnSend = document.createElement('div');
//     areaBtnSend.style.width = '100%';
//     areaBtnSend.style.display = 'flex';
//     areaBtnSend.style.justifyContent = 'flex-end';
//     areaBtnSend.style.paddingTop = '20px';
//     areaBtnSend.style.paddingBottom = '20px';
//
//     let btnSend = document.createElement('div');
//     btnSend.className = 'btn-send-msg';
//     btnSend.innerHTML = 'Отправить';
//     btnSend.style.marginRight = '20px';
//     btnSend.setAttribute('data-id',idFor);
//
//     areaBtnSend.appendChild(btnSend);
//     sendWindow.appendChild(headerSendWindow);
//     sendWindow.appendChild(textarea);
//     sendWindow.appendChild(areaBtnSend);
//     graySpace.appendChild(sendWindow);
//     body.appendChild(graySpace);
//
//     btnSend.addEventListener('click', function () {
//        let idFrom = btnSend.getAttribute('data-id');
//        let text = textarea.value;
//        sendMsg(idFrom,text,'new-chat');
//     });
//
//     graySpace.addEventListener('click', e => {
//         if (e.target === graySpace ) {
//             graySpace.remove()
//         }
//     });
// }
//
// function openChat(button) {
//
//     let windowMessaging = document.createElement('div');
//     windowMessaging.className = 'window-messaging';
// }
//
// function messageAnother() {
//
//     let message = document.createElement('div');
//     message.className = 'another-message';
//
//     return message;
// }
//
// function message() {
//
//     let message = document.createElement('div');
//     message.className = 'message';
//
//     return message;
// }

