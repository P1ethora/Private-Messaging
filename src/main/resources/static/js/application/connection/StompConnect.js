class StompConnect {

    #stompClient;
    #application

    constructor(application) {
        this.#application = application;
    }

    connect() {
        this.#buildConnect();
        this.#connectMain(this.#application.getUser().getId(),this.#stompClient);
    }

    #buildConnect() {
        let socket = new SockJS('http://localhost:9654/messages?token=' + getKeyApi());
        this.#stompClient = Stomp.over(socket);
    }

    #connectMain(idUser,stomp) {
        stomp.connect({}, function (frame) {
            console.log("connected to: " + frame);
            stomp.subscribe("/user/topic/messages/" + idUser, function (response) {
                let data = JSON.parse(response.body);
alert(data);
            });

        });

    }

    sendMsg(idFor, text) {
        this.#stompClient.send("/app/messages/" + idFor,
            {'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': getKeyApi()},
            JSON.stringify({
            forLogin: idFor,
            fromLogin: this.#application.getUser().getId(),
            message: text
        }));
    }

}