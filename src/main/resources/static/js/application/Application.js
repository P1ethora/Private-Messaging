class Application {

    #user;
    #mainContainer;
    #login;
    #registration
    #ability;
    #requests;

    constructor() {

        this.#login = new Login();
        this.#requests = new Requests();
        this.#mainContainer = new MainContainer(this.#ability);
        this.#ability = new Ability(this.#requests,this);

        let loginConnect = new LoginConnect(this.#login,this.#user,this);

    }

    startApp(body) {
        // if (localStorage.getItem('')===null) {
            body.appendChild(this.#login.view());
        // } else {
        //
        //     //initial authorization/authentication
        //     if (true) {
        //         body.appendChild(this.#mainContainer);
        //     } else {
        //         body.appendChild(this.#login);
        //     }
        // }
    }

    openMainContainer(userList, chatList) {
        document.body.innerHTML = '';
        this.fillingContainer(userList,chatList)
        document.body.appendChild(this.#mainContainer.getMain());
    }

    fillingContainer(userList , chatList) {
        for(let e of userList) {
            let contactElement = new ContactElement(e.id,e.img,e.firstName + ' ' + e.lastName, this.#ability);

            this.#mainContainer
                .getLeftPanel()
                .getMenu()
                .getActiveElement()
                .view()
                .appendChild(contactElement.getContactElement());

        }
    }

    authentication() {
        //send to server  #user.getToken();
        //server return user
    }

    getMainContainer(){
        return this.#mainContainer;
    }

}