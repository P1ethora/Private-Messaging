class MainContainer {

    #main
    #leftPanel;
    #rightPanel;

    #userWindows;
    #requests;
    #stomp;

    constructor(user, requests, application) {

        this.#stomp = new StompConnect(application);

        this.#requests = requests;
        this.#main = createNewElement('div','container');
        this.#leftPanel = new LeftPanel(user,this,requests);
        this.#rightPanel = new RightPanel(this.#stomp);
        this.#userWindows = new UserWindow(this,this.#rightPanel, this.#requests);

        this.#main.appendChild(this.#leftPanel.getLeftPanel());
        this.#main.appendChild(this.#rightPanel.getRightPanel());
        this.#main.appendChild(this.#userWindows.view());

    }

    connect(){
        this.#stomp.connect();
    }

    getUserWindows() {
        return this.#userWindows;
    }

    getMain(){
        return this.#main;
    }

    getLeftPanel() {
        return  this.#leftPanel
    }

    getRightPanel() {
        return this.#rightPanel
    }

    openUserWindow(element) {
        let id = element.getAttribute('data-id');
        this.#requests.getSelectUser(id,this.#userWindows);
        this.#userWindows.view().style.display = 'flex';
    }
}