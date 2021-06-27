class RightPanel {

    #rightPanel;
    #activeElementRight;

    constructor() {

        this.#rightPanel = createNewElement('div','right-panel');
        this.#activeElementRight = new ChatsBox();
        this.#rightPanel.appendChild(this.#activeElementRight.view());

    }

    getRightPanel() {
        return this.#rightPanel;
    }

    setActiveElementRight(element) {
        this.#activeElementRight = element;
    }

    getActiveElementRight() {
        return this.#activeElementRight;
    }


}


function createRightPanel() {

    let rightPanel = document.createElement('div');
    rightPanel.className = 'right-panel';

    let listChatHeader = document.createElement('div');
    listChatHeader.className = 'list-chats-header';
    listChatHeader.innerText = 'Your Messaging';

    let listChat = createListChat();

    rightPanel.appendChild(listChatHeader);
    rightPanel.appendChild(listChat);

    return rightPanel;

}