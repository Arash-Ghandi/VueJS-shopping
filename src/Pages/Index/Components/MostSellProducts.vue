<template>
<div class="row">
    <div class="col-lg-3 col-md-4"
    v-for="product in MostSellProducts"
    :key="product.id"
    >
      <div class="card">
        <img :src="ProductImageAddress+product.image" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text">{{ product.price }} $</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
</div>
</template>
<script>

export default {
  computed:{
    MostSellProducts(){
      return this.$store.getters.GetMostSellProducts;
    },
    ProductImageAddress() {
      return this.$store.getters.GetProductImageAddress;
    }
  },
  created(){
    if(this.MostSellProducts.length == 0){
     this.$store.dispatch("GetMostSellProductsFromServer");
    }
  }
}
</script>
