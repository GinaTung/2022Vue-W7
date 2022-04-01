<template>
  <div id="app">
    <div class="container">
      <h2 class="text-start mt-4">產品列表</h2>
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
            <th width="120">分類</th>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="100">是否啟用</th>
            <th width="120">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
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
      <adminpagination :pages="pagination" @emit-pages="getProducts"></adminpagination>
    </div>
    <!-- Modal -->
    <div
      id="productModal"
      ref="productModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
              <span>新增產品</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-sm-4">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">主圖網址</label>
                  <input
                    type="text"
                    id="imageUrl"
                    v-model="tempProduct.imageUrl"
                    class="form-control"
                  />
                  <img :src="tempProduct.imageUrl" class="img-fluid" alt="" />
                </div>
                <div class="mb-3">
                  <h3>多圖設置</h3>
                  <div v-if="Array.isArray(tempProduct.imagesUrl)">
                    (是不是Ray)
                    <div
                      v-for="(img, key) in tempProduct.imagesUrl"
                      :key="key + '21345'"
                    >
                      <input
                        type="text"
                        class="form-control"
                        id="imagesUrl"
                        v-model="tempProduct.imagesUrl[key]"
                      />
                      <img
                        :src="tempProduct.imagesUrl[key]"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <button
                      v-if="
                        !tempProduct.imagesUrl.length ||
                        tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                      "
                      class="btn btn-outline-primary btn-sm w-100"
                      @click="tempProduct.imagesUrl.push('')"
                    >
                      新增
                    </button>
                    <!-- {{ tempProduct.imagesUrl.length }} -->
                    <button
                      v-else
                      class="btn btn-outline-danger btn-sm w-100"
                      @click="tempProduct.imagesUrl.pop()"
                    >
                      刪除最後一個
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="mb-3">
                  <label for="title" class="form-label">標題</label>
                  <input
                    id="title"
                    type="text"
                    v-model="tempProduct.title"
                    class="form-control"
                    placeholder="請輸入標題"
                  />
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input
                      id="category"
                      type="text"
                      v-model="tempProduct.category"
                      class="form-control"
                      placeholder="請輸入分類"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">單位</label>
                    <input
                      id="unit"
                      type="text"
                      v-model="tempProduct.unit"
                      class="form-control"
                      placeholder="請輸入單位"
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input
                      id="origin_price"
                      type="number"
                      min="0"
                      v-model.number="tempProduct.origin_price"
                      class="form-control"
                      placeholder="請輸入原價"
                    />
                  </div>
                  <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input
                      id="price"
                      type="number"
                      min="0"
                      v-model.number="tempProduct.price"
                      class="form-control"
                      placeholder="請輸入售價"
                    />
                  </div>
                </div>
                <hr />

                <div class="mb-3">
                  <label for="description" class="form-label">產品描述</label>
                  <textarea
                    id="description"
                    type="text"
                    v-model="tempProduct.description"
                    class="form-control"
                    placeholder="請輸入產品描述"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">說明內容</label>
                  <textarea
                    id="description"
                    type="text"
                    v-model="tempProduct.content"
                    class="form-control"
                    placeholder="請輸入說明內容"
                  >
                  </textarea>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
                    />
                    <label class="form-check-label" for="is_enabled"
                      >是否啟用</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="updateProduct"
            >
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="delProductModal"
      ref="delProductModal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="delProductModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="delProductModalLabel" class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong>
            商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delProduct">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
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
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false,
      pagination: {}
    }
  },
  methods: {
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.$http.get(url).then((res) => {
        this.products = res.data.products
        console.log(Object.values(this.products))
        Object.values(this.products).forEach((item) => {
          this.adminpagination = res.data.adminpagination
          console.log(item)
        })
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
    this.getProducts()
  }
}
</script>
