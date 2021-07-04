class Search {

    #search;
    #input;

    constructor(requests, menu) {
        this.#search = createNewElement('div', 'search');
        this.#input = createNewElement('input');
        this.#input.type = 'text';
        this.#input.placeholder = 'search';

        this.#input.onkeyup = e=> {
            if(this.getValueInput() !== '') {
            menu.resetSearchResult();
            menu.openSearchResult();
            requests.search(this.#input.value,menu);
            }

        }

        this.#input.activeElement


        this.#search.appendChild(this.#input);
    }

    getSearch(){
        return this.#search;
    }

    getValueInput() {
        return this.#input.value;
    }


}