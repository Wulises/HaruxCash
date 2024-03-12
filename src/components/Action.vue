<template>
    <div>TE AMO KAWAKAMI</div>
    <button @click="showModal = true">AGREGAR MOVIMIENTO</button>

    <teleport to="#app">
        <Modal v-show="showModal" @close="showModal = false">
          
          <form action="" @submit.prevent="submit">

            <div class="field">

              <label for="">Titulo: </label>
              <input type="text" v-model="title" >

            </div>

            <div class="field">

              <label for="">Monto: </label>
              <input type="number" v-model="amounts" >

            </div>

            <div class="field">

              <label for="">Descripción: </label>
              <textarea v-model="descripción" rows="4"></textarea>

            </div>

            <div class="field">

              <label class="radio-label"> 
                <input type="radio" v-model="movementType" value="Ingreso">
                <span>Ingreso</span>
              </label>
              <label class="radio-label"> 
                <input type="radio" v-model="movementType" value="Gasto">
                <span>Gasto</span>
              </label>

            </div>

            <div class="action">

              <button>Agregar movimientp</button>

            </div>

          </form>

        </Modal>
    </teleport>

</template>

<script setup>
import { ref, defineEmits } from "vue";
import Modal from "./Modal.vue"

const showModal = ref(false)
const title = ref("")
const amounts = ref(0)
const descripción = ref("")
const movementType = ref("ingreso")

const emit = defineEmits(["create"])

const submit = ()  => {
  showModal.value = !showModal.value
  console.log('Se cerro el formulario, Te amo hARU')
  emit("create", {

    id: new Date(),
    title: title.value,
    description: descripción.value,
    amount: movementType.value === "ingreso" ? amounts.value : -amounts.value,
    time: new Date()

  })
  title.value = ''
  descripción.value = ''
  amounts.value = 0
  movementType.value = 'ingreso'
}

</script>

<style scoped>
button {
  color: white;
  font-size: 1.25rem;
  background-color: var(--brand-blue);
  border: none;
  width: 100%;
  padding: 24px 60px;
  border-radius: 60px;
  box-sizing: border-box;
}

form {
  font-size: 1.24rem;
  width: 100%;
}

form .action {
  padding: 0 24px;
}

.field {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 24px;
}

label {
  margin-bottom: 8px;
}

input,
textarea {
  font-size: 1.24rem;
  border: 2px solid var(--brand-blue);
  border-radius: 8px;
  padding: 8px;
}

input[type="number"] {
  text-align: right;
}

.radio-label {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.radio-label span {
  margin-top: 4px;
  margin-left: 8px;
}

input[type="radio"] {
  appearance: none;
  width: 1.24rem;
  height: 1.24rem;
  color: var(--brand-blue);
  border: 2px solid var(--brand-blue);
  border-radius: 50%;
}

input[type="radio"]:checked {
  background-color: var(--brand-blue);
}
</style>