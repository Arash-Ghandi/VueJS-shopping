<template>
      <main role="main">

      <div class="container marketing">
      <hr class="featurette-divider" />
      <!-- Products -->
        <most-sell></most-sell>

      <!-- /.Products -->

        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider" />


        <!-- /END THE FEATURETTES -->
      </div>
      <!-- /.container -->
    </main>
</template>
<script>

export default {
  comments:{
    FilterProducts() {
      return this.$store.getters.GetProducts;
    },
  },
  created(){
    this.$store.dispatch('GetProductsFromServer');
  }

}
</script>

