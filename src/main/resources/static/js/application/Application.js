class Application {

    #user;
    #mainContainer;
    #login;
    #registration

    constructor() {
        this.#login = new Login();

        let loginConnect = new LoginConnect(this.#login,this.#user,this);

        this.#mainContainer = new MainContainer();

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

    openMainContainer() {
        document.body.innerHTML = '';
        document.body.appendChild(this.#mainContainer.getMain());
    }

    authentication() {
        //send to server  #user.getToken();
        //server return user
    }

    getMainContainer(){
        return this.#mainContainer;
    }

}