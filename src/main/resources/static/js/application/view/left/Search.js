class Search {

    #search;
    #input;

    constructor() {
        this.#search = createNewElement('div', 'search');
        this.#input = createNewElement('input');
        this.#input.type = 'text';
        this.#input.placeholder = 'search';

        this.#search.appendChild(this.#input);
    }

    getSearch(){
        return this.#search;
    }

    getValueInput() {
        return this.#search.value;
    }


}