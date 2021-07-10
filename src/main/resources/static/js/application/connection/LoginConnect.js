class LoginConnect {

    #login;
    #application;

    constructor(login,application) {
        this.#login = login;
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
                    this.#application.getUser().setFirstName(res.firstName);
                    this.#application.getUser().setLastName(res.lastName);
                    this.#application.getUser().setMobile(res.mobile);
                    this.#application.getUser().setId(res.id);
                    this.#application.getMainContainer().getLeftPanel().getUserPanel().setNameUser();

                    this.#application.openMainContainer(res.contactList, res.chatList);
                } else {
                    alert('Incorrect token')
                }
            }
        );
    }

}