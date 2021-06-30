class MainContainer {

    #main
    #leftPanel;
    #rightPanel;

    #userWindows;

    constructor(ability) {

        this.#main = createNewElement('div','container');
        this.#leftPanel = new LeftPanel();
        this.#rightPanel = new RightPanel();
        this.#userWindows = new UserWindow(ability,this.#rightPanel);

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
}