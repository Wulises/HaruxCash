<template>

    <div class="movements">TE AMO HIFUMI

        <h2 class="title">Historial</h2>

        <div class="contemnt">
            <!-- Los atributos del for son de home.vue ya que, es la información "global de nuestro proyecto" -->
            <!-- Mientras que los v binds son del movementvue, ya que al "Haru es como esta declarado el titulo" -->
            <Moveement 
            
                v-for="{ id, title, description, amount } in movements" 
                :key="id"
                :id="id"
                :Haru="title"
                :description="description"
                :amount="amount"
                @remove="remove"
            
            />

        </div>

    </div>

</template>


<script setup>
import { toRefs ,defineProps, defineEmits } from 'vue';
import Moveement from './Movement.vue'
//Para hacer reactivo el props necesitamos usar toRefs

const props = defineProps({

    //Configuración del prop movements
    movements: {
        type: Array,
        default: () => []
    }

})

const remove = (id) => {
    console.log("remove", id)
    emit("remove", id)
}

//Reactividad de la variable
const { movements } = toRefs(props)

const emit = defineEmits(["remove"])

</script>


<style scoped>
.movements {
  max-height: 100%;
  padding: 0 8px;
  margin-bottom: 14px;
}
.title {
  margin: 8px 16px 24px 16px;
  color: var(--brand-blue);
}
.content {
  max-height: 68vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
}
</style>