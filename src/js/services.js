import img_1 from '../images/img_1.jpg'
import img_2 from '../images/img_2.jpeg'
import img_3 from '../images/img_3.jpg'

export default class SectionService{
    constructor(){

    }

    render(){
        return `
            <section id="service" class="services">
                <div class="product">
                    <div class="content">
                        <img class="content-img" src="${img_3}" alt="">
                        <h1>Transporte</h1>
                        <p>Locales y for&aacuteneos.</p>
                    </div>
                </div>
                <div class="product">
                    <div class="content">
                        <img class="content-img" src="${img_1}" alt="">
                        <h1>Almac&eacuten</h1>
                        <p>Crossdock.</p>
                    </div>
                </div>
                <div class="product">
                    <div class="content">
                        <img class="content-img" src="${img_2}" alt="">
                        <h1>Embalaje y Embalado</h1>
                        <p>Carga general y peligrosa.</p>
                    </div>
                </div>
            </section>`
    }
}