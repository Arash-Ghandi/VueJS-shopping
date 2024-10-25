<template>
    <main role="main">

      <div class="container marketing">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              {{ Product.name }}
              <span class="text-muted"></span>
            </h2>
            <p class="lead">
              {{ Product.description }}
            </p>
            <div class="form-group">
              <label>Amount</label>
              <input type="number" class="form-control" v-model="count">
            </div>

            <a class="btn btn-c-primary" @click="AddProductToOrder(product.productId)">
              <i class="fa fa-shopping-cart"></i>
              Add to Cart
            </a>

          </div>
          <div class="col-md-5">
            <img
              :src="ProductImageAddress+Product.image"
              class="card-img-top">
          </div>
        </div>

        <hr class="featurette-divider" />


        <suggested-products></suggested-products>


      </div>
      <!-- /.container -->


    </main>
</template>

<script>
import suggestedProducts from "./Components/SuggestedProducts.vue";
export default {
  data() {
    return {
      count: 1
    };
  },
  components:{
    suggestedProducts : suggestedProducts
  },
  computed:{
    Product(){
      console.log(this.$store.getters.GetProduct);
      return this.$store.getters.GetProduct;
    },
    ProductImageAddress() {
      return this.$store.getters.GetProductImageAddress;
    }
  },
  created(){
    this.$store.dispatch("GetProductFromServer",{
      productId : this.$route.params.id,
    })
  },
  watch:{
    $route(to,form){
      this.$store.dispatch('GetProductFromServer',{
        productId : this.$route.params.id,
      });
    }
  }
  ,
  methods: {
    AddProductToOrder(productId) {
      const orderDetail = {
        productId: productId,
        count: this.count
      };

      this.$store.dispatch("AddProductToOrder", orderDetail);
    }
  }
}
</script>
