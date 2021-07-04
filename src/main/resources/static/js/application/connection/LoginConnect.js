class LoginConnect {

    #login;
    #user;
    #application;

    constructor(login, user, application) {
        this.#login = login;
        this.#user = user;
        this.#application = application;

    }

    authorization(mobile, password) {
        const rawResponse = fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({mobile: mobile, password: password})
        }).then((result) => {
            return result.json();
        }).then((res) => {
                if (res.token != null) {
                    window.localStorage.setItem('WHINY-key-api', res.token);
                    this.authentication(res.token)
                } else {
                    alert('Incorrect login or password')
                }
            }
        );
    }

    authentication(token) {
        const rawResponse = fetch('/api/yourself', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': token
            },
        }).then((result) => {
            return result.json();
        }).then((res) => {
                if (res.firstName !== null) {
                    // this.#user = new User(res.id, res.firstName, res.lastName, res.mobile);
                    this.#user.setFirstName(res.firstName);
                    this.#user.setLastName(res.lastName);
                    this.#user.setMobile(res.mobile);
                    this.#user.setId(res.id);

                    this.#application.getMainContainer().getLeftPanel().getUserPanel().setNameUser();

                    this.#application.openMainContainer(res.contactList, res.chatList);
                } else {
                    alert('Incorrect token')
                }
            }
        );
    }

}