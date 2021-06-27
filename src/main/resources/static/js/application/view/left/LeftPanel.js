class LeftPanel {

    #leftPanel;
    #userPanel;
    #search;
    #menu;

    constructor() {
        this.#leftPanel = createNewElement('div','left-panel');
        this.#userPanel = new UserPanel();
        this.#search = new Search();
        this.#menu = new Menu();

        this.#leftPanel.appendChild(this.#userPanel.getUserPanel());
        this.#leftPanel.appendChild(this.#search.getSearch());
        this.#leftPanel.appendChild(this.#menu.getActiveElement().view());
    }

    getLeftPanel(){
        return this.#leftPanel;
    }

    getUserPanel(){
        return this.#userPanel;
    }

    getSearch() {
        return this.#search;
    }

    getMenu(){
        return this.#menu;
    }



}