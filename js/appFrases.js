//arreglo de frases
const frases = [{frase:'La vida es un viaje, no un destino', autor:'Roberto Aguas'},
    {frase:'La vida es un viaje, no un ', autor:'Antonio Aguas'},
    {frase:'El pobre es pobre porque quiere', autor:'Anthony Tipan'},
    {frase:'La vida bella', autor:'Fernanza Zapata'},
    {frase:'Texto de prueba 1', autor:'Felipe Ramos'},
    {frase:'Donde hubo fuego cenizas queda', autor:'Carlos Puente'},
    {frase:'El sol quema', autor:'Andres Quisilema'},
 
]
const app = Vue.createApp({
    templates:{

    },
    methods: {
    
    },
    data() {
        return {
            listaFrases: frases,
        }
    }

})
app.mount('#myApp')