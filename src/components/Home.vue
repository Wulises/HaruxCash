<template>
    <div>TE AMO HARU</div>
    <Layout>

        <template #header> 
          <Header></Header>
        </template>

        <template #resume> 
          <Resume 
            :label = "'ETIQUETA'"
            :amount = totalamount
            :total-amount = "totalamount"
            :date = "'07-05-2024'"
            :algo = "['Haru','Makoto','Kisumi']"
          >

            <template #graphic>
                <Graphic 
                  :amounts="amounts"
                />
            </template>

            <template #action>
              <ActionVue 
                @create="create"
              />
            </template>

          </Resume>
        </template>


        <template #movements> 

          <Movements 
            :movements = "movements" 
            @remove ="remove"
          />

        </template>

    </Layout>

</template>

<script>
import Layout from '@/components/Layout.vue'
import Header from '@/components/Header.vue'
import Resume from '@/components/Resume/Index.vue'
import Movements from './Movements/IndexMoviment'
import Graphic from './Resume/Graphic.vue'
import ActionVue from './Action.vue'

export default {

    components: {
        Layout,
        Header,
        Resume,
        Movements,
        ActionVue,
        Graphic,

    },
    
    data(){
        return{
            label: null,
            amount: null,
            amounts: [555, 333, 444, 200, -400, -600, -300, 0, 300, 500],
            movements: []
            //   id: 1,
            //   title: "Movimiento 1",
            //   description: "PERSONA 5",  
            //   amount: 555,  
            //   time: new Date("1998-05-12")
            // },
            // {
            //   id: 2,
            //   title: "Movimiento 2",
            //   description: "PERSONA 5",  
            //   amount: -444,
            //   time: new Date("1998-04-23")
            // },
            // {
            //   id: 3,
            //   title: "Movimiento 3",
            //   description: "PERSONA 5",  
            //   amount: 0,
            //   time: new Date("1998-17-06")
            // },
            // {
            //   id: 4,
            //   title: "Movimiento 4",
            //   description: "PERSONA 5",  
            //   amount: 555,
            //   time: new Date("1998-05-12")
            // },
            // {
            //   id: 5,
            //   title: "Movimiento 5",
            //   description: "PERSONA 5",  
            //   amount: 555,
            //   time: new Date("1998-04-23")
            // }, 
            // {
            //   id: 6,
            //   title: "Movimiento 6",
            //   description: "PERSONA 5",  
            //   amount: 555,
            //   time: new Date("1998-17-06")
            // },
            // {
            //   id: 7,
            //   title: "Movimiento 7",
            //   description: "PERSONA 5",  
            //   amount: 555,
            //   time: new Date("1998-06-12")
            // }]
        }
    },

    mounted(){
      const movements = JSON.parse(localStorage.getItem('movements'))
      console.log(movements)

      if (Array.isArray(movements)){
        this.movements  = movements.map(m => {
        return { ... m, time: new Date(m.time)}
      })
      }

     
    },

    methods: {
      create(movement){
        this.movements.push(movement)
        this.save()
      },
      remove(id){
        const index = this.movements.findIndex(m => m.id === id)
        this.movements.splice(index, 1)
        this.save()
      },
      save(){
        localStorage.setItem('movements', JSON.stringify(this.movements))
      }
    },

    computed: {
      totalamount(){
        return this.movements.reduce((suma, m) => {
          return suma + m.amount
        }, 0)
      }
    }

  //   computed: {
  //   amounts() {
  //     const lastDays = this.movements
  //       .filter(m => {
  //         const today = new Date();
  //         const oldDate = today.setDate(today.getDate() - 30);

  //         return m.time > oldDate;
  //       })
  //       .map(m => m.amount);
      
  //     return lastDays.map((m, i) => {
  //       const lastMovements = lastDays.slice(0, i);

  //       return lastMovements.reduce((suma, movement) => {
  //         return suma + movement
  //       }, 0)
  //     })
  //   }
  // },
}


</script>