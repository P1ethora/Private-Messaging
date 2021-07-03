class Requests {



    getSelectUser(id,window) {
        let rawResponse = fetch('/api/get-user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'id':id,
                'Authorization': getKeyApi()
            },
        }).then((result) => {
            return result.json();
        }).then((res) =>{
            window.setName(res.firstName +' ' + res.lastName);
            window.setStatus('Online');
            window.setTextPhone(res.mobile);
            window.setTextDescription(res.about);
        });
    }

    openChatThroughUserWindow(idFor,rightPanel) {
        let rawResponse = fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'idFor':idFor,
                'Authorization': getKeyApi()
            },
        }).then((result) => {
            return result.json();
        }).then((res) =>{

            if(res.messages !== null) {
                rightPanel.getChat().feelingChatHistory(res.messages)
            }

        });
    }

    registrationUser(firstName,lastName,mobile,password, repeatPassword){
        let rawResponse = fetch('/api/registration', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},

                body: JSON.stringify({firstName: firstName,lastName: lastName, mobile: mobile, password: password, repeatPassword: repeatPassword}
                ),
        }).then((result) => {
            return result.json();
        }).then((res) =>{

            if(res.status === 'true') {
                alert('The user was created')
            } else if (res.status ==='false'){
                alert('Invalid data')
            }

        });
    }




}