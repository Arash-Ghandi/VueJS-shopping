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



        <div class="row">
    <div class="col-lg-3 col-md-4"
    >
      <div class="card">
        <img :src="ProductImageAddress+Product.image" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ Product.name }}</h5>
          <p class="card-text">{{ Product.description }}</p>
          <p class="card-text">{{ Product.price }} $</p>

          <router-link class="btn btn-primary w-100" :to="{name:'GetProduct',params:{id:Product.id}}">
                  Show
          </router-link>
        </div>
      </div>
    </div>
</div>

      </div>
      <!-- /.container -->


    </main>
</template>

<script>
export default {
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
  }
}
</script>
