<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
          data-target="#myCarousel"

          v-for="(slider,index) in Sliders"
          :key="slider.sliderId"
          :class="{active:index == 0}"
          :data-slide-to="index"
          ></li>

        </ol>
        <div class="carousel-inner">

          <div
          class="carousel-item"
          v-for="(slider,index) in Sliders"
          :key="slider.sliderId"
          :class="{active:index == 0}"
          >
          <img src="/src/assets/images/bg/bg-01.jpg" alt="" srcset="">
            <!-- <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label=" :  "
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title></title>
              <rect width="100%" height="100%" fill="#777" />
              <text x="50%" y="50%" fill="#777" dy=".3em"></text>
            </svg> -->

            <div class="container">
              <div class="carousel-caption text-left">
                <h1>{{slider.name}}</h1>
                <p>
                  {{ slider.description }}
                </p>
                <p>
                  <a class="btn btn-lg btn-c-primary" href="#">Sign up today</a>
                </p>
              </div>
            </div>
          </div>

        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-target="#myCarousel"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#myCarousel"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>

  </div>
</template>

<script>
export default {
  computed: {
    Sliders() {
      return this.$store.getters.GetSliders;
    },
    // SliderImageAddress() {
    //   return this.$store.getters.GetSliderImageAddress;
    // }
  },
  created() {
    if(this.Sliders.length == 0){
      this.$store.dispatch("GetSlidersFromServer");
    }
  }
};
</script>
