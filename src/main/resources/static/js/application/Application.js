class Application {

    #user;
    #mainContainer;
    #login;
    #registration;
    #requests;
    #loginConnect;

    constructor() {

        this.#user = new User();
        this.#login = new Login();
        this.#requests = new Requests();
        this.#registration = new Registration(this.#requests,this);
        this.#mainContainer = new MainContainer(this.#user,this.#requests);

        this.#loginConnect = new LoginConnect(this.#login,this.#user,this);
        this.#login = new Login(this);

    }

    startApp() {

            this.openLogin();

    }

    openLogin() {
        document.body.innerHTML = '';
        document.body.appendChild(this.#login.view());
    }

    openMainContainer(userList, chatList) {
        document.body.innerHTML = '';
        this.fillingContainer(userList,chatList)
        document.body.appendChild(this.#mainContainer.getMain());
    }

    fillingContainer(userList , chatList) {
        for(let e of userList) {
            let contactElement = new ContactElement(e.id,e.img,e.firstName + ' ' + e.lastName, this.#mainContainer);

            this.#mainContainer
                .getLeftPanel()
                .getMenu()
                .getUserList()
                .view()
                .appendChild(contactElement.view());

        }
    }

    authentication() {
        //send to server  #user.getToken();
        //server return user
    }

    getMainContainer(){
        return this.#mainContainer;
    }

    openRegistration(){
        document.body.innerHTML = '';
        document.body.appendChild(this.#registration.view());
    }

    getLogin() {
        return this.#login;
    }

    getLoginConnect() {
        return this.#loginConnect;
    }

}