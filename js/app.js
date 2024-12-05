console.log(Vue);

const app = Vue.createApp({
    //template: `
    //<h1> Hola Mundo </h1>
    //<p> Con Vue.js </p>
    //<p>{{1+2}}</p>
    //<p>{{[1,2,3,4,5,6,7]}}</p>
    // <p>{{ {nombre:"Luis", apellido:"Valladares"} }}</p>
    // <p>{{ true ? 'Activo':'Inactivo' }}</p>
    // <p>1===1</p>
    // <p>{{ 1===1 }}</p>
    //`

    //Options API
    templates:{

    },
    methods: {
        cambiarMensaje() {
            this.mensaje ='Nuevo Mensaje';
            this.edad = 30;
        }
    },
    data() {
        return {
            mensaje: 'Hola Mundo Pweb',
            edad: 25
        }
    }

})
app.mount('#myApp')