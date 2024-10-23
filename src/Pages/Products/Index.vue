<template>
      <main role="main">

      <div class="container marketing">
      <hr class="featurette-divider" />
      <!-- Products -->
      <div class="row">
          <div class="col-lg-3 col-md-4 mb-2"
          v-for="product in FilterProducts.products"
          :key="product.id"
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
      <!-- /.Products -->
        <!-- START THE FEATURETTES -->
      <nav aria-label="..." class="mt-5">
        <ul class="pagination justify-content-center">
          <li
          class="page-item"
          aria-current="page"
          v-for="n in FilterProducts.pageCount"
          :key="n"
          :class="{active:n == FilterProducts.activePage}">

            <router-link :to="{name:'GetProducts',query:{pageId:n}}" class="page-link">{{ n }}</router-link>

          </li>
        </ul>
      </nav>
      <hr class="featurette-divider" />
        <!-- /END THE FEATURETTES -->
      </div>
      <!-- /.container -->
    </main>
</template>
<script>

export default {
  computed:{
    FilterProducts() {
      return this.$store.getters.GetProducts;
    },
    ProductImageAddress() {
      return this.$store.getters.GetProductImageAddress;
    }
  },
  created(){
    this.$store.dispatch('GetProductsFromServer',{
      pageId: 1
    });
  },
  watch:{
    $route(to,form){
      this.$store.dispatch('GetProductsFromServer',{
      pageId: this.$route.query.pageId
    });
    }
  }

}
</script>

