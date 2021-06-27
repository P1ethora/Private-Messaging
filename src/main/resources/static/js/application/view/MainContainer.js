class MainContainer {

    #main
    #leftPanel;
    #rightPanel;

    constructor() {

        this.#main = createNewElement('div','container');
        this.#leftPanel = new LeftPanel();
        this.#rightPanel = new RightPanel();

        this.#main.appendChild(this.#leftPanel.getLeftPanel());
        this.#main.appendChild(this.#rightPanel.getRightPanel());

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