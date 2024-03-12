<template>
    <main>
        <h1>TE AMO MAKOTO</h1>

        <p> {{ labelVisual }}</p>
        <h1> {{ amountCurrency }}</h1>

        <div class="graphic">
            <slot name="graphic"> </slot>
        </div>
        <div class="action">
            <slot name="action"></slot>
        </div>

    </main>
</template> 

<script>
import { computed } from 'vue'

//options api = export defautl

const currencyFormater = new Intl.NumberFormat(("es-MX"), {
  style: "currency", 
  currency: "MXN"
})

export default {

    props: {
        label: {
            type: String
        },
        amount: {
            type: Number
        },
        totalAmount: {
            type: Number,
            default: null
        },
        totalLabel: {
            type: String,
        },
        algo: {
            type: String
        },
        date: {
            type: String
        }
    },

    computed: {

        amountVisual(){
            return this.amount !== null ? this.amount : this.totalAmount
        },

        labelVisual(){
            return this.label !== null ? this.label : this.totalLabel
        },
        amountCurrency(){
            return currencyFormater.format(this.amountVisual)
        }

    }


}

</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
h1,
p {
  margin: 0;
  text-align: center;
}
h1 {
  margin-top: 14px;
  color: var(--brand-purple);
}
.graphic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 24px;
  box-sizing: border-box;
}
</style>