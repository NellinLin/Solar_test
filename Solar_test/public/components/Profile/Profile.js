export class ProfileComponent {
    constructor(parent = document.body) {
        this._parent = parent;
        this._data = {};
    }

    get data() {
        return this._data;
    }

    set data(dataToSet) {
        this._data = {...dataToSet};
    }

    render() {
        const hello = document.createElement('div')
        hello.className = 'p';
        hello.textContent = `Привет ${this._data.email}, здесь будет твой профиль`;
        this._parent.appendChild(hello);
    }
}