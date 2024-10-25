<template>
  <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-c-purple">
        <a class="navbar-brand" href="#">AROON TECH</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">

            <router-link tag="li" active-class="active" to="/" exact>
              <a class="nav-link">Home</a>
            </router-link>

            <router-link tag="li" active-class="active" to="/products" exact>
              <a class="nav-link">Products</a>
            </router-link>

            <router-link tag="li" active-class="active" to="/about" exact>
              <a class="nav-link">About</a>
            </router-link>

            <div v-if="!IsUserAuthenticated">
            <router-link tag="li" active-class="active" to="/login" exact>
              <a class="nav-link">Login/Register</a>
            </router-link>
            </div>
            <div v-else >
              <li>
                {{ UserFullName }}
                <a class="nav-link" style="cursor: pointer;" @click="SignOutUser()">
                  Logout
                </a>
              </li>
            </div>

          </ul>
          <router-link class="mx-3" to="/shopCart" v-if="IsUserAuthenticated"  exact>
          <!-- <router-link class="mx-3" to="/shopCart"  exact> -->
              <i class="fas fa-shopping-cart text-white"></i>
          </router-link>
        </div>
      </nav>
    </header>
</template>
<script>
export default {
  computed: {
    IsUserAuthenticated() {
      return true;
      return this.$store.getters.IsUserAuthenticated;
    },
    UserFullName() {
      return this.$store.getters.GetUserFullName;
    }
  },
  methods: {
    // CheckForLogin() {
    //   this.$store.dispatch("CheckForLogin");
    // },
    // SignOutUser() {
    //   this.$store.dispatch("SignOutUser");
    // }
  },
  created() {
    this.CheckForLogin();
  }
};
</script>
