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
}
</script>
