<template>
  <div id="app">
    <div class="container">
      <h2 class="text-start mt-4">訂單列表</h2>
      <div class="text-end mt-4">
        <button
          class="btn btn-primary"
          type="button"
          @click="openModal('isNew')"
        >
          建立新的產品
        </button>
      </div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th width="200">購買時間</th>
            <th>E-mail</th>
            <th width="200">購買款項</th>
            <th width="200">應付金額</th>
            <th width="150">是否啟用</th>
            <th width="150">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{ item.create_at }}</td>
            <td>{{ item.user.email }}</td>
            <td class="text-end">{{ item.origin_price }}</td>
            <td class="text-end">{{ item.price }}</td>
            <td>
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal('edit', item)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal('delete', item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
            <adminpagination :pages="pagination" @emit-pages="getOrders"></adminpagination>
    </div>
  </div>
</template>
<script>
import adminpagination from '@/components/AdminPagination.vue'
const productModal = {}
const delProductModal = {}
export default {
  components: {
    adminpagination
  },
  data () {
    return {
      orders: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false,
      pagination: {}
    }
  },
  methods: {
    getOrders (page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders/?page=2`
      this.$http.get(url).then((res) => {
        this.orders = res.data.orders
        console.log(Object.values(this.orders))
        this.adminpagination = res.data.adminpagination
      })
    },
    openModal (status, product) {
      console.log(status, product)
      if (status === 'isNew') {
        this.tempProduct = {
          imagesUrl: []
        }
        productModal.show()
        this.isNew = true
      } else if (status === 'edit') {
        this.tempProduct = { ...product }
        productModal.show()
        this.isNew = false
      } else if (status === 'delete') {
        delProductModal.show()
        this.tempProduct = { ...product }
      }
    },
    updateProduct () {
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`
      let method = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        method = 'put'
      }
      this.$http[method](url, { data: this.tempProduct }).then((res) => {
        console.log(res)
        this.getProducts()
        productModal.hide()
      })
    },
    delProduct () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url).then((res) => {
        console.log(res)
        this.getProducts()
        delProductModal.hide()
      })
    }
  },
  mounted () {
    // this.checkLogin()
    this.getOrders()
  }
}
</script>
