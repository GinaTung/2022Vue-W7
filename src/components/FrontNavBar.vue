<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">前台</a> -->
      <router-link class="navbar-brand" to="/">首頁</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">前台產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">前台購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">後台購物車列表</router-link>
          </li>
        </ul>
      </div>
    </div>
    <button type="button" class="btn btn-primary">
      結帳
      <span class="badge rounded-pill bg-dark">{{ cartData.carts.length}}</span>
    </button>
  </nav>
</template>

<script>
import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      cartData: {
        carts: []
      }
    }
  },
  methods: {
    getCart () {
      this.$http.get(
        `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      )
        .then((res) => {
          console.log('cart:', res)
          this.cartData = res.data.data
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getCart()
    emitter.on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>
