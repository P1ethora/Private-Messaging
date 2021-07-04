class SearchResult {

    #searchResult;
    #title;
    #resultBox;

    #mainContainer;

    constructor(mainContainer) {
        this.#mainContainer = mainContainer;
        this.#searchResult = createNewElement('div','search-result');
        this.#title = createNewElement('div','title-search');
        this.setTitle('Results:')
        this.#resultBox = createNewElement('div','result-box');

        this.#searchResult.appendChild(this.#title);
        this.#searchResult.appendChild(this.#resultBox);
    }

    view() {
        return  this.#searchResult;
    }

    getResultBox() {
        return this.#resultBox;
    }

    setTitle(text) {
        this.#title.innerText = text;
    }

    innerToResultBox(listElements) {

        for(let el of listElements) {

            let contactElement = new ContactElement(el.id,el.img,el.firstName + ' ' + el.lastName, this.#mainContainer);


            this.#resultBox.appendChild(contactElement.view());

        }
    }

}