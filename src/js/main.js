import Header from "./header";
import Hero from "./hero";
import SectionService from "./services";
import Contact from "./contact";

export default class Main {
    constructor() {
        this.header = new Header()
        this.hero = new Hero()
        this.secService = new SectionService()
        this.contact = new Contact()
    }

    render() {
        const main = document.getElementById('app')
        main.insertAdjacentHTML('beforeend', this.header.render())
        main.insertAdjacentHTML('beforeend', this.hero.render())
        main.insertAdjacentHTML('beforeend', this.secService.render())
        main.insertAdjacentHTML('beforeend', this.contact.render())

    }
}