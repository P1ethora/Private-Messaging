class LeftPanel {

    #leftPanel;
    #userPanel;
    #search;
    #menu;

    constructor(user, mainContainer,requests) {
        this.#leftPanel = createNewElement('div','left-panel');
        this.#userPanel = new UserPanel(user);
        this.#menu = new Menu(mainContainer);
        this.#search = new Search(requests, this.#menu);

        this.#leftPanel.appendChild(this.#userPanel.getUserPanel());
        this.#leftPanel.appendChild(this.#search.getSearch());
        this.#leftPanel.appendChild(this.#menu.view());
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