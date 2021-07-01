function createLoginContainer() {
    let containerLogin = document.createElement('div');
    containerLogin.className = 'container-login';

    let loginBox = document.createElement('div');
    loginBox.className = 'login-box';

    let titleLogin = document.createElement('div');
    titleLogin.className = 'title-login';
    titleLogin.innerText = 'Login';

    let inputPhone = document.createElement('input');
    inputPhone.placeholder = 'mobile';

    let inputPassword = document.createElement('input');
    inputPassword.type = 'password';
    inputPassword.placeholder = 'password';

    let loginButtons = document.createElement('div');
    loginButtons.className = 'login-buttons';

    let buttonLogIn = document.createElement('button');
    buttonLogIn.innerHTML = 'Log in'

    let buttonSignUp = document.createElement('button');
    buttonSignUp.innerHTML = 'Sign up';

    loginButtons.appendChild(buttonLogIn);
    loginButtons.appendChild(buttonSignUp);

    loginBox.appendChild(titleLogin);
    loginBox.appendChild(inputPhone);
    loginBox.appendChild(inputPassword);
    loginBox.appendChild(loginButtons);

    containerLogin.appendChild(loginBox);
    return containerLogin;
}

function createMainContainer() {
    let mainContainer = document.createElement('div');
    mainContainer.className = 'container';

    let leftPanel = createLeftPanel();
    let rightPanel = createRightPanel();

    mainContainer.appendChild(leftPanel);
    mainContainer.appendChild(rightPanel);

    return mainContainer;

}

function createLeftPanel() {
    let leftPanel = document.createElement('div');
    leftPanel.className = 'left-panel';

    let userPanel = createUserPanel();
    let search = createSearch();
    let usersList = createUsersList();

    leftPanel.appendChild(userPanel);
    leftPanel.appendChild(search);
    leftPanel.appendChild(usersList);

    return leftPanel;

}

function createRightPanel() {

    let rightPanel = document.createElement('div');
    rightPanel.className = 'right-panel';

    let listChatHeader = document.createElement('div');
    listChatHeader.className = 'list-chats-header';
    listChatHeader.innerText = 'Your Messaging';

    let listChat = createListChat();

    rightPanel.appendChild(listChatHeader);
    rightPanel.appendChild(listChat);

    return rightPanel;

}

function createUserPanel() {
    let userPanel = document.createElement('div');
    userPanel.className = 'user-panel';

    let profile = createProfile();
    let imgProfile = createImgCirclePhoto();
    let bell = createBell();

    userPanel.appendChild(imgProfile);
    userPanel.appendChild(profile);
    userPanel.appendChild(bell);

    return userPanel;

}

function createProfile() {
    let profile = document.createElement('div');
    profile.className = 'profile';

    let nameUser = document.createElement('div');
    nameUser.className = 'chat-with';
    nameUser.innerText = 'Vasily';

    profile.appendChild(nameUser);

    return profile;

}

function createBell() {
    let iconBell = document.createElement('i');
    iconBell.className = 'fas fa-bell';

    let redPoint = createRedPoint();
    iconBell.appendChild(redPoint);

    return iconBell;
}

function createRedPoint() {
    let redPoint = document.createElement('div');
    redPoint.className = 'red-point';
    return redPoint;
}


function createSearch() {

    let search = document.createElement('div');
    search.className = 'search';

    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'search';

    search.appendChild(input);

    return search;

}

function createUsersList() {

    let usersList = document.createElement('div');
    usersList.className = 'users-list';

    return usersList;

}

function createElementUsersList() {

    let userElement = document.createElement('div');
    userElement.className = 'user-element'
    userElement.setAttribute('onclick', 'openUser(this)');

    let img = createImgCirclePhoto();

    let about = document.createElement('div');
    about.className = 'about';
    let name = document.createElement('div');
    name.className = 'name';
    name.innerText = 'Oleg';
    let status = document.createElement('div');
    status.className = 'status';
    status.innerText = 'Online';

    about.appendChild(name);
    about.appendChild(status);

    userElement.appendChild(img);
    userElement.appendChild(about);

    return userElement;
}


function createListChat() {

    let listChat = document.createElement('div');
    listChat.className = 'list-chats';

    return listChat;

}


function createElementChatList() {

    let chatElement = document.createElement('div');
    chatElement.className = 'chat-element';
    chatElement.setAttribute('onclick', 'openChat(this); closeRightPanel()');

    let img = createImgCirclePhoto();
    let content = document.createElement('div');
    content.className = 'chat-element-content';
    let data = document.createElement('div');
    data.className = 'chat-element-data';
    let name = document.createElement('div');
    name.className = 'name-chat';
    name.innerText = 'Oleg';
    let date = document.createElement('div');
    date.className = 'date-chat';
    date.innerText = 'вчера';

    data.appendChild(name);
    data.appendChild(date);

    let lastMessage = document.createElement('div');
    lastMessage.className = 'unread-message';
    lastMessage.innerText = 'Эй здаров че каво?';

    content.appendChild(data);
    content.appendChild(lastMessage);

    chatElement.appendChild(img);
    chatElement.appendChild(content);

    return chatElement;

}


function createChat() {

}


function createWindowUser() {

    let user = document.createElement('div');
    user.className = 'another-user';

    let userInfo = document.createElement('div');
    userInfo.className = 'user-info';

    let photoInfo = document.createElement('div');
    photoInfo.className = 'photo-info';

    let imgUser = createImgCirclePhoto();
    let about = document.createElement('div');
    about.className = 'about';
    let name = document.createElement('div');
    name.className = 'name';
    name.innerText = 'Oleg';
    let status = document.createElement('div');
    status.className = 'status';
    status.innerText = 'Online';

    let userButtons = document.createElement('div');
    userButtons.className = 'user-buttons';

    let buttonAdd = document.createElement('button');
    buttonAdd.setAttribute('onclick', 'addContact()');
    buttonAdd.innerText = 'Add contact';
    let buttonSendMsg = document.createElement('button');
    // buttonSendMsg.setAttribute();
    userButtons.appendChild(buttonAdd);
    userButtons.appendChild(buttonSendMsg);

    about.appendChild(name);
    about.appendChild(status);
    about.appendChild(userButtons);

    photoInfo.appendChild(imgUser);
    photoInfo.appendChild(about);

    let aboutInfo = document.createElement('div');
    aboutInfo.className = 'about-info';

    let numberPhone = document.createElement('div');
    let textFieldPhone = document.createElement('span');
    textFieldPhone.innerText = 'Mobile:';
    let number = document.createElement('span');
    number.className = 'number';
    number.innerText = '+375295179088';

    numberPhone.appendChild(textFieldPhone);
    numberPhone.appendChild(number);

    let userDescription = document.createElement('div');
    userDescription.className = 'user-description';
    let textFieldDescription = document.createElement('span');
    textFieldDescription.innerText = 'About:';
    let textDescription = document.createElement('div');
    textDescription.className = 'text';
    textDescription.innerText = 'English is a West Germanic language first spoken in early medieval England, which has become\n' +
        ' the leading language of international discourse in the 21st ...';
    userDescription.appendChild(textFieldDescription);
    userDescription.appendChild(textDescription);

    userInfo.appendChild(photoInfo);
    userInfo.appendChild(aboutInfo);

    user.appendChild(userInfo);

    return user;
        }


        function createModelWindow() {
        let model = document.createElement('div');
        model.className = 'model';

        let iconOK = document.createElement('i');
        iconOK.className = 'far fa-check-circle';

        let modelMessage = document.createElement('div');
        modelMessage.className = 'model-message';
        modelMessage.innerText = 'Done';

        model.appendChild(iconOK);
        model.appendChild(modelMessage);

        return model;
    }


    function createNewElement(tagName,className) {
let element = document.createElement(tagName);
element.className = className;
return element;
    }




function createImgCirclePhoto() {
    let img = document.createElement('img');
    img.src = '/img/noavatar55.png'
    return img;
}