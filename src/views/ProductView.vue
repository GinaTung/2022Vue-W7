<template>
  <h1>單一產品</h1>
  <div class="container">
    {{product}}
    <img :src="product.imageUrl" alt="">
  </div>
</template>
<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  methods: {
    getProduct () {
      console.log(this.$route)
      const { id } = this.$route.params
      this.$http(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      ).then((res) => {
        this.product = res.data.product
      })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
