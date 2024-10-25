<template>
  <main role="main">
    <hr class="featurette-divider" />
    <div class="container marketing">
      <div class="row featurette" v-if="IsExistUserShopCart">
        <div class="col-12 col-md-8">
          <table class="table" >
          <thead class="bg-c-purple text-white">
            <tr >
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Amout</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in UserShopCart.orderDetails" :key="item.orderDetailId">
              <th scope="row">
                <i class="fas fa-times" @click="DeleteOrderDetail(cart.orderDetailId)"></i>
              </th>
              <td>Product</td>
              <td>Amout</td>
              <td>Price</td>
            </tr>
        </tbody>
        </table>
        </div>


        <div class="col-12 col-md-4">
          <table class="table">
  <thead class="bg-c-purple text-white text-center">
    <tr>
      <th scope="col"></th>
      <th scope="col">First</th>
    </tr>
  </thead>
  <tbody class="text-center">
    <tr>
      <th scope="row">1</th>
      <td>{{ TotalPrice }}</td>
    </tr>

  </tbody>
</table>
          <div class="row">
          <div class="col-12">
            <button class="btn btn-c-primary" @click="CompleteUserShopping()">Checkout</button>
          </div>
        </div>
        </div>




        </div>

        <div class="row" v-else>
          <div class="col-12">
            <div class="alert-alert-warning text-center">
              Empty
            </div>
          </div>
        </div>

      </div>

    </main>
</template>

<script>
export default {
  methods: {
    GetUserOpenShopCart() {
      this.$store.dispatch("GetUserOpenOrder");
    },
    DeleteOrderDetail(detailId) {
      this.$store.dispatch("DeleteOrderDetail", detailId);
    },
    CompleteUserShopping() {
      this.$store.dispatch("CompleteShopping");
    }
  },
    created() {
    this.GetUserOpenShopCart();
  },
  computed: {
    UserShopCart() {
      return this.$store.getters.GetUserShopCart;
    },
    IsExistUserShopCart() {
      return true;
      return this.$store.getters.IsExistShopCart;
    },
    TotalPrice() {
      return this.$store.getters.GetTotalPrice;
    },
    ProductImageAddress() {
      return this.$store.getters.GetProductImageAddress;
    }
  }
}
</script>
