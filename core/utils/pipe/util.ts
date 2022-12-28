export class Util {

    static async storeState(key, value) {
        return localStorage.setItem(key, value);
    }
    static async removeState(key) {
        return localStorage.removeItem(key);
    }

    static getStore(key) {
        return localStorage.getItem(key);
    }
}