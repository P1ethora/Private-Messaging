class Chat {

    #idWith;
    #chat;
    #chatHeader;

    #backToChatList;

    #chatAbout;
    #chatWith;
    #status;
    #img;

    #chatHistory;

    #chatMessage;
    #textArea;
    #btnSend;

    constructor(stomp) {
        this.#chat = createNewElement('div','chat');
        this.#chatHeader = createNewElement('div','chat-header');

        this.#backToChatList = createNewElement('div','back-to-chat-list');
        this.#chatAbout = createNewElement('div','chat-about');
        this.#chatWith = createNewElement('div','chat-with');
        this.#status = createNewElement('div','status');

        this.#chatAbout.appendChild(this.#chatWith);
        this.#chatAbout.appendChild(this.#status);

        this.#img = createImgCirclePhoto();

        this.#chatHeader.appendChild(this.#backToChatList);
        this.#chatHeader.appendChild(this.#chatAbout);
        this.#chatHeader.appendChild(this.#img);

        this.#chatHistory = createNewElement('div','chat-history');

        this.#chatMessage = createNewElement('div','chat-message');
        this.#textArea = createNewElement('textarea');
        this.#textArea.placeholder = 'type your message';
        this.#btnSend = createNewElement('button');
        this.#btnSend.innerText = 'Send';

        this.#chatMessage.appendChild(this.#textArea);
        this.#chatMessage.appendChild(this.#btnSend);

        this.#chat.appendChild(this.#chatHeader);
        this.#chat.appendChild(this.#chatHistory);
        this.#chat.appendChild(this.#chatMessage);

        this.#btnSend.onclick = e => {
            stomp.sendMsg(this.#idWith, this.#textArea.value);
        };
    }

    setIdWith(idWith) {
        this.#idWith = idWith;
    }

    view(){
        return this.#chat;
    }

    setChatWitch() {}

    feelingChatHistory(messages, nameCompanion, idCompanion) {

        for(let e of messages){


            let message = new Message();

            this.#chatHistory.appendChild(message)

        }
    }

    clearChatHistory() {
        this.#chatHistory.innerHTML = '';
    }

}