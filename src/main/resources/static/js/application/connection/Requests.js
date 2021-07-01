class Requests {



    getSelectUser(id, token,window) {
        let rawResponse = fetch('/api/get-user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'id':id,
                'Authorization': token
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

    openChatThroughUserWindow(idFor,token,rightPanel) {
        let rawResponse = fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'idFor':idFor,
                'Authorization': token
            },
        }).then((result) => {
            return result.json();
        }).then((res) =>{

            if(res.messages !== null) {
                rightPanel.getChat().feelingChatHistory(res.messages)
            }

        });
    }




}