<template>
  <div class="about">
    <div class="container">
      <div class="row justify-content-center">
        <div class="cols">
          <table class="table align-middle">
            <thead>
              <tr>
                <th>圖片</th>
                <th>商品名稱</th>
                <th>價格</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td style="width: 200px">
                  <div
                    :style="{ backgroundImage: `url(${product.imageUrl})` }"
                    style="
                      height: 100px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>
                </td>
                <td>
                  {{ product.title }}
                </td>
                <td>
                  <div class="h5" v-if="product.price === product.origin_price">
                    {{ product.price }} 元
                  </div>
                  <div v-else>
                    <del class="h6">原價 {{ product.origin_price }} 元</del>
                    <div class="h5">現在只要 {{ product.price }} 元</div>
                  </div>
                </td>
                <td>
                  <div class="btn-group btn-group-sm">
                    <button
                      type="button"
                      class="btn btn-outline-secondary"
                      @click="openProductModal(product.id)"
                      :disabled="isLoadingItem === product.id"
                    >
                      <!-- <i class="fas fa-spinner fa-pulse"></i> -->
                      查看更多
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="addToCart(product.id)"
                      :disabled="isLoadingItem === product.id"
                    >
                      <!-- <i class="fas fa-spinner fa-pulse"
                      ></i> -->
                      <span
                        class="spinner-border spinner-border-sm"
                        v-show="isLoadingItem === product.id"
                      ></span>
                      加到購物車
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

  <div class="text-end">
    <button
      class="btn btn-outline-danger"
      type="button"
      @click="deleteAllCarts"
    >
      清空購物車
    </button>
  </div>
  <div>
    <!-- {{cartData}} -->
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <!-- 購物車資料有沒有存在 -->
      <template v-if="cartData.carts">
        <tr v-for="item in cartData.carts" :key="item.id">
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeCartItem(item.id)"
            >
              <!-- <i class="fas fa-spinner fa-pulse"></i> -->
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <div class="text-success" v-if="item.total > 2000">
              已套用優惠券
            </div>

            <div class="text-danger" v-else>未套用優惠券</div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <select
                  id=""
                  class="form-select"
                  v-model="item.qty"
                  @change="updateCartItem(item)"
                  :disabled="isLoadingItem === item.id"
                >
                  <option
                    :value="num"
                    v-for="num in 20"
                    :key="`${num}-${item.id}`"
                  >
                    <!-- :selected="item.qty === num" -->
                    <!-- 當前值等於num迴圈值 -->
                    {{ num }}
                  </option>
                </select>
                <span class="input-group-text" id="basic-addon2">{{
                  item.product.unit
                }}</span>
              </div>
            </div>
          </td>
          <td class="text-end">
            <div class="text-start">{{ item.product.price }}</div>
            <span v-if="item.total > 2000">
              <small class="text-success">折扣價：</small>
              50
            </span>
            <span v-else>
              <small class="text-success"></small>
            </span>
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cartData.total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">0</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">結帳金額</td>
        <td class="text-end text-success">$ {{ cartData.final_total }}</td>
      </tr>
    </tfoot>
  </table>
      </div>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      cartData: {},
      products: [],
      productId: '',
      isLoadingItem: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cart: {}
    }
  },
  methods: {
    getProducts () {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    openProductModal (id) {
      this.productId = id
      this.$refs.productModal.openModal()
    },
    deleteAllCarts () {
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
        )
        .then((res) => {
          alert(res.data.message)
          this.getCart()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    getCart () {
      this.$http
        .get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
        //   console.log(res)
          this.cartData = res.data.data
          this.isLoadingItem = ''
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.isLoadingItem = id
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
        //   console.log(res)
          emitter.emit('get-cart')
          this.getCart()
          this.isLoadingItem = ''
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    removeCartItem (id) {
      this.isLoadingItem = id
      this.$http
        .delete(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
        )
        .then((res) => {
        //   console.log(res)
          this.getCart()
          this.isLoadingItem = ''
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    updateCartItem (item) {
      const data = {
        product_id: item.id,
        qty: item.qty
      }
      this.isLoadingItem = item.id
      this.$http
        .put(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
          { data }
        )
        .then((res) => {
        //   console.log(res)
          this.getCart()
          this.isLoadingItem = ''
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    createOrder () {
      const order = this.form
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`,
          { data: order }
        )
        .then((res) => {
          alert(res.data.message)
          this.getCart()
          console.log(res)
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getProducts()
    this.getCart()
  }
}
// app.mount('#app')
</script>
