class Chat {

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

    constructor() {
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
    }

    view(){
        return this.#chat;
    }

    setChatWitch() {}


}