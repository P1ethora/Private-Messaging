class Message {

    #container;
    #messageData;
    #messageDataTime;
    #messageDataName;
    #message;

    constructor(idUser, idFrom, firstName, lastName, date, text) {

        this.#container = createNewElement('li');

        if (idUser === idFrom) {
            this.#messageData = createNewElement('div', 'message-data');
            this.#message = createNewElement('div', 'message my-message');
        } else {
            this.#messageData = createNewElement('div', 'message-data align-right');
            this.#message = createNewElement('div', 'message other-message float-right');
        }

        this.#messageDataTime = createNewElement('div', 'message-data-time');
        this.#messageDataTime.innerText = date;
        this.#messageDataName = createNewElement('div', 'message-data-name');
        this.#messageDataName.innerText = firstName + ' ' + lastName;
        this.#message.innerText = text;



    }

}