import { TITULO } from './utils/constants.js'
export default class Hero{
    constructor(){}

    render(){
        return `
        <section id="home" class="hero site-blocks-cover">
            <div class="hero-title">
                <h1>${TITULO}</h1>
            </div>
        </section>
        `
    }
}