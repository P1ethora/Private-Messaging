class Ability {

    #requests;
    #application;
    #window;

    constructor(requests, application) {
        this.#requests = requests;
        this.#application = application;
        this.#window = this.#application.getMainContainer().getUserWindows();
    }

    openUserWindow(element) {
let id = element.getAttribute('data-id');
let selectUser = this.#requests.getSelectUser(id,this.#window);
this.#window.view().style.display = 'flex';

    }

    // openChat() {
    //     this.closeChatsBox();
    //     this.#application
    //         .getMainContainer()
    //         .getRightPanel()
    //         .getChat()
    //         .view()
    //         .style.display = 'flex';
    // }
    //
    // closeChatsBox(){
    //     this.#application
    //         .getMainContainer()
    //         .getRightPanel()
    //         .getChatsBox()
    //         .view()
    //         .style.display = 'none';
    // }
    //
    // openChatBox() {
    //     this.#application
    //         .getMainContainer()
    //         .getRightPanel()
    //         .getChatsBox()
    //         .view()
    //         .style.display = 'flex';
    // }
    //
    // closeChat() {
    //     this.closeChatsBox();
    //     this.#application
    //         .getMainContainer()
    //         .getRightPanel()
    //         .getChat()
    //         .view()
    //         .style.display = 'none';
    // }

}