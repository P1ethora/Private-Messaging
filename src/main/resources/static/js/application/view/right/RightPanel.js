class RightPanel {

    #rightPanel;
    #chatsBox;
    #chat;

    constructor(stomp) {

        this.#rightPanel = createNewElement('div', 'right-panel');
        this.#chatsBox = new ChatsBox();
        this.#chat = new Chat(stomp);
        this.#rightPanel.appendChild(this.#chatsBox.view());
        this.#rightPanel.appendChild(this.#chat.view());

    }

    getRightPanel() {
        return this.#rightPanel;
    }

    getChatsBox() {
        return this.#chatsBox;
    }

    getChat() {
        return this.#chat;
    }

    openChat(idWith) {
        this.closeChatsBox();
        this.#chat.setIdWith(idWith);
        this.#chat
            .view()
            .style.display = 'flex';
    }

    closeChatsBox() {
        this.#chatsBox
            .view()
            .style.display = 'none';
    }

    openChatBox() {
        this.#chatsBox
            .view()
            .style.display = 'flex';
    }

    closeChat() {
        this.closeChatsBox();
        this.#chat
            .view()
            .style.display = 'none';
    }

}