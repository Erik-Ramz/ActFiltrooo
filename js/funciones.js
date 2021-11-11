Vue.filter('Alreves',(valor)=>valor.split('').reverse().join(''));

new Vue({
    el: '#cont',
    data:{
        busqueda:'',
        minimo: 5,
        juegos:[
            {titulo:'Bordelands 2', genero:'Aventura', puntuacion:9},
            {titulo:'FallOut 4', genero:'Aventura', puntuacion:10},
            {titulo:'Apex Legends', genero:'Shooter', puntuacion:8},
            {titulo:'Minecraft', genero:'Sandbox', puntuacion:7},
            {titulo:'Downwell', genero:'Horror', puntuacion:6},
        ]
    },
    methods: {
        
    },
    computed:{
        mejoresJuegos(){
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
        },
        buscarJuego(){
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        },
        juegosencontrados(){
            return this.buscarJuego.length;
        }
    }
})