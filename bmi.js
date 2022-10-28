const app =Vue.createApp ({
   data(){
    return{
        height: " ",
        weight: " ",
        result: " ",
        show: false
    }
   },
   methods: {
    getInput(e){
        this.height = parseInt(e.target.value)
        this.weight = parseInt(e.target.value)
    },
    bmiCalculator() {
        this.result = (this.weight / ((this.height/100) * (this.height/100))).toFixed(2)  
        this.show = true

    }
   }
   
})
app.mount("#app")