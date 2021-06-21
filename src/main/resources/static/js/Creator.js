let chat;
let rightPanel;
let usersList;
let anotherUser;
let userInfo;

 window.onload = function () {
     chat = document.getElementsByClassName('chat').item(0);
     rightPanel = document.getElementsByClassName('right-panel').item(0);
     usersList = document.getElementsByClassName('users-list').item(0);
     anotherUser = document.getElementsByClassName('another-user').item(0);
// userInfo = anotherUser.getElementsByClassName('user-info').item(0);

     anotherUser.addEventListener('click', e => {
         if (e.target === anotherUser ) {
             closeUser();
         }
     });

     

 };

function createChat() {



}

function openUser() {
    anotherUser.style.display = 'flex';
}

function closeUsersList() {
    usersList.style.display = 'none';
}

function closeUser() {
anotherUser.style.display = 'none';
}

function openChat(button) {
    chat.style.display = 'flex';
}

function closeChat() {
chat.style.display = 'none';
}

function openListChat() {
rightPanel.style.display = 'flex';
}

function closeRightPanel() {
    rightPanel.style.display = 'none';
}