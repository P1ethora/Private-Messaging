class ChatsBox {

    #chatsBox;
    #header;
    #list;

    constructor() {
        this.#chatsBox = createNewElement('div','list-chats');
        this.#header = createNewElement('div','list-chats-header');
        this.#header.innerText = 'Your Messaging';
        this.#list = createNewElement('div','list-chats');

        this.#chatsBox.appendChild(this.#header);
        this.#chatsBox.appendChild(this.#list);
    }

    view() {
        return this.#chatsBox;
    }

    getList() {
        return this.#list;
    }
}