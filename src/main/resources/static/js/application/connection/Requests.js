class Requests {


    getSelectUser(id, window) {
        let rawResponse = fetch('/api/get-user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'id': id,
                'Authorization': getKeyApi()
            },
        }).then((result) => {
            return result.json();
        }).then((res) => {
            window.setId(id);
            window.setName(res.firstName + ' ' + res.lastName);
            window.setStatus('Online');
            window.setTextPhone(res.mobile);
            window.setTextDescription(res.about);
        });
    }

    openChatThroughUserWindow(idFor, rightPanel) {
        let rawResponse = fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'idFor': idFor,
                'Authorization': getKeyApi()
            },
        }).then((result) => {
            return result.json();
        }).then((res) => {

            if (res.messages !== null) {
                rightPanel.getChat().feelingChatHistory(res.messages)
            }

        });
    }

    registrationUser(firstName, lastName, mobile, password, repeatPassword) {
        let rawResponse = fetch('/api/registration', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    mobile: mobile,
                    password: password,
                    repeatPassword: repeatPassword
                }
            ),
        }).then((result) => {
            return result.json();
        }).then((res) => {

            if (res.status === 'true') {
                alert('The user was created')
            } else if (res.status === 'false') {
                alert('Invalid data')
            }

        });
    }


    search(value,menu) {
            fetch('api/search', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': getKeyApi()
                },
                body: JSON.stringify(value)
            }).then((result) => {
                return result.json();
            }).then((res) => {
                menu.resetSearchResult();
                menu.getSearchResult().innerToResultBox(res.result);

            });
        }

        addToContact(id,menu) {

            fetch('api/add-to-contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'id-contact': id,
                    'Authorization': getKeyApi()
                }
            }).then((result) => {
                return result.json();
            }).then((res) => {



            });
        }

}