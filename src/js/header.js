import logo from '../images/logo.png'
export default class Header {
    constructor(){}

    render(){
        return `
        <header>
            <nav>
                <div class="brand-image">
                    <img src="${logo}" width="200px" height="50px" alt="Inmotion">
                </div>
                <div class="nav-options">
                    <ul>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#service">Servicios</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </header>
        `
    }
}