//Destructurar un objeto
const Haru =  {name: 'Haru Okomura'}
//Como uuasualmente se accede asu valor de propiedad
Haru.name
//Como destructurar el objeto
const { name } = Haru //Así obtienes name como variable

//COMPOTIONS API ES CUANDO USAS <script setup>
//Al usar este y si quieres usar computed, tendrás que igualar una variable computada para poder usarlo como:
//const computada = computed (() => consolo.log('TE AMO HARU) )




/*--------------------------------------------------------*/
//OPTIONS API ES CUANDO USAR EXPORT DEFAULT
//Al usar este y si quieres usar computed, tendrás que hacer una propiedad computed así para crear funciones 
// export defaul { computed: { computada(){ console.log('TE AMO MAKOTO) } }                                     }
