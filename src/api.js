export default class Api {
    static fetchData() {
        const min = 0;
        const max = 99;
        return {
            foo: Math.floor( Math.random() * (max + 1 - min) ) + min
        }
    }
}