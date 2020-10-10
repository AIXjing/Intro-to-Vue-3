const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        updateCartRemove(id){
            this.cart.pop(id)
        }
    }
})

// FUyang add words here 
