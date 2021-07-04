class User {

    #id;
    #firstName;
    #lastName;
    #mobile;

    constructor(id,firstName,lastName,mobile) {
        this.#id = id;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#mobile = mobile;
    }

    getId() {
        return this.#id;
    }

    getFirstName() {
        return this.#firstName;
    }

    getLastName() {
        return this.#lastName;
    }

    getMobile() {
        return this.#mobile;
    }

    setId(id) {
        this.#id = id;
    }

    setFirstName(firstName){
        this.#firstName = firstName;
    }

    setLastName(lastName) {
        this.#lastName = lastName;
    }

    setMobile(mobile) {
        this.#mobile = mobile;
    }

}