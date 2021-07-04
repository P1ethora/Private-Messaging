class MainContainer {

    #main
    #leftPanel;
    #rightPanel;

    #userWindows;
    #requests;

    constructor(user, requests) {

        this.#requests = requests;
        this.#main = createNewElement('div','container');
        this.#leftPanel = new LeftPanel(user,this,requests);
        this.#rightPanel = new RightPanel();
        this.#userWindows = new UserWindow(this,this.#rightPanel);

        this.#main.appendChild(this.#leftPanel.getLeftPanel());
        this.#main.appendChild(this.#rightPanel.getRightPanel());
        this.#main.appendChild(this.#userWindows.view());

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