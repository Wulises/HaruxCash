<template>
    <div class="movement">
        
        <div class="content">

            <h4> {{ Haru }}</h4>
            <p> {{ description }}</p>

        </div>

        <div class="action">

            <img src="@/assets/trash-icon.svg" alt="Basurero" @click="remove">
            <p :class=" 
            { 
                'red': isLowZero, 
                'green': !isLowZero 
            }"> 
                {{ amountCurrency }}</p>
        </div>
  
    </div>
</template>

 
<script setup>
//compotition api = SETUP    
import { toRefs, defineProps, defineEmits, computed} from 'vue';

const currencyFormater = new Intl.NumberFormat(("es-MX"), {
  style: "currency", 
  currency: "MXN"
})
 
const props = defineProps({   
    id: {
        type: Number
    }, 
    Haru: {
        type: String    
    },
    description: {
        type: String
    },
    amount: {
        type: Number
    }
})    
//Destrucutraxición para ese title y así usarlo en el template
const { id, Haru, description, amount } = toRefs(props)

const amountCurrency = computed(
    () => currencyFormater.format(amount.value)
)

const isLowZero = computed(() => amount.value <= 0)

const remove = () => {
    emit("remove", id.value)
}

const emit = defineEmits(["remove"])

</script>


<style scoped>
.movement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #e6f9ff;
  border-radius: 8px;
  box-sizing: border-box;
}
.movement .content {
  width: 100%;
}
.movement .action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
}
h4,
p {
  margin: 0;
  padding: 0;
}
h4 {
  margin-bottom: 8px;
}
.movement .action img {
  margin-bottom: 16px;
}
.red {
    color: red;
}
.green {
    color: green;
}
</style>