// Attraverso una chiamata ajax all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.

// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

// BONUS 2: Ordinare i dischi per anno di uscita.
function initVue() {
    new Vue({
        el: '#app',
        data: {
            discs: [],
            generi: [],
            selGenere: '',

        },
        computed:{
          filtered: function(){

            if(this.selGenere == "All"){

              return this.discs

            } else{

              return this.discs.filter(disc => {

                return disc.genre.includes(this.selGenere)
              })
            }

          }
        },
        mounted() {

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(data => {

                    this.discs = data.data.response;



                    for (let i = 0; i < this.discs.length; i++) {


                      const disc = this.discs[i]



                      if(!this.generi.includes(disc.genre)){

                        this.generi.push(disc.genre)
                      }
                    }



                })
                .catch(() => console.log('error'));
        }
    });
}
function init() {
    initVue();

}
document.addEventListener('DOMContentLoaded', init);
