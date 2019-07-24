export default class Main {
    constructor(){

    }

    render(){
       const main = document.getElementById('app')
       main.insertAdjacentHTML('beforeend', '<h1>Hola Mundo</h1>')  
    }
}