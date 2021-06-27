class UserPanel {

    #userPanel;
    #profile;
    #imgProfile;
    #bell;

    constructor() {
        this.#userPanel = createNewElement('div', 'user-panel');
        this.#imgProfile = createImgCirclePhoto();
        this.#bell = createNewElement('i', 'fas fa-bell');
        this.#profile = new Profile();

        this.#userPanel.appendChild(this.#imgProfile);
        this.#userPanel.appendChild(this.#profile.getProfile());
        this.#userPanel.appendChild(this.#bell);
    }

    getUserPanel() {
        return this.#userPanel;
    }

    getProfile() {
        return this.#profile;
    }

    getImgProfile() {
        return this.#imgProfile;
    }

    setImgProfile(img) {
        this.#imgProfile = img;
    }

}