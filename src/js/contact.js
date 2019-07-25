import img_4 from '../images/img_4.jpg'
export default class Contact {
    constructor(){}

    render(){
        return `
        <section id="contact" class="contact">
            <div class="content-contact">
                <h1>Contactanos: </h1>
                <img src="${img_4}" width="400px" height="400px" alt="">            
            </div>
            <div class="content-contact">
                    <form class="contact-form" action="" method="post">
                        <label for="name">Nombre:</label>
                        <input type="text" name="name" id="name">
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email">
                        <label for="tel">Tel&eacute;fono:</label>
                        <input type="tel" name="tel" id="tel">
                        <label for="coments">Comentarios:</label>
                        <textarea id="comments" name="coments" rows="10" cols="35">                  </textarea>
                        <input class="main-button" type="submit" value="Enviar">
                    </form>
            </div>

        </section>`
    }
}