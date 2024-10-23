<template>
  <div class="row">

    <div class="col-lg-3 col-md-4"
    v-for="product in SuggestedProducts" :key="product.id"
    >
      <div class="card">
        <img :src="ProductImageAddress+product.image" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text">{{ product.price }} $</p>

          <router-link class="btn btn-c-primary w-100" :to="{name:'GetProduct',params:{id:product.id}}">
                  Show
          </router-link>
        </div>
        </div>
      </div>

  </div>
</template>
<script>
export default {
  computed:{
    SuggestedProducts(){
      return this.$store.getters.GetSuggestedProducts;
    },
    ProductImageAddress() {
      return this.$store.getters.GetProductImageAddress;
    }
  },
  created(){
    this.$store.dispatch("GetSuggestedProductsFromServer");
  },
  watch:{
    $route(to,form){
      this.$store.dispatch('GetSuggestedProductsFromServer',{
        productId : this.$route.params.id,
      });
    }
  }

}
</script>
