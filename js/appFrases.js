//arreglo de frases
const frases = [{ frase: 'La vida es un viaje, no un destino', autor: 'Roberto Aguas' },
{ frase: 'La vida es un viaje, no un ', autor: 'Antonio Aguas' },
{ frase: 'El pobre es pobre porque quiere', autor: 'Anthony Tipan' },
{ frase: 'La vida bella', autor: 'Fernanza Zapata' },
{ frase: 'Texto de prueba 1', autor: 'Felipe Ramos' },
{ frase: 'Donde hubo fuego cenizas queda', autor: 'Carlos Puente' },
{ frase: 'El sol quema', autor: 'Andres Quisilema' },

]
const app = Vue.createApp({
    templates: {

    },
    methods: {
        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor,
            }

            this.listaFrases.unshift(nuevaFrase); //agregar con unshift
        },
        agregarFraseFinal() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor,
            }

            this.listaFrases.push(nuevaFrase); //agregar con unshift
        },
        eventoKeyPress({ charCode, cancelable, key, keyCode, target }) {
            if (charCode === 13) {
                console.log('Presiono enter');
                console.log('Evento keypress');
                console.log(charCode);
                console.log(cancelable);
                console.log(key);
                console.log(keyCode);
                console.log(target.baseURI);
                this.agregarFraseFinal();
            }

        },
        eventoKeyPressModificador() {
            console.log('Presiono enter');
            console.log('Evento keypress');
            this.agregarFraseFinal();
        }

    },
    data() {
        return {
            listaFrases: frases,
            frase: null,
            // autor: 'sin autor',
            autor: null,
        }
    }

})
app.mount('#myApp')