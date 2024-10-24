<template>
    <section class="login-register">
        <div class="container py-6">
            <div class="row">
                <div class="col-lg-12 d-flex justify-content-center flex-column align-items-center">

                    <div class="card shadow-custom-03">

                      <div class="card-header">
                        <router-link to="/register" class="card-link" exact>
                                            Register
                        </router-link>
                      </div>
                      <div class="card-body">
                        <h5 class="text-center my-2">Login to the managment panel</h5>
                        <div class="alert alert-info" role="alert">
                            E-Mail: example@example.com
                            <br>
                            Password: secret
                        </div>
                        <form id="contact-form" autocomplete="off">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <label>E-Mail</label>
                                        <div class="input-group mb-4">
                                            <input type="text" class="form-control" v-model="email">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label>Password</label>
                                        <div class="input-group">
                                            <input type="password" class="form-control" v-model="password">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn text-center text-white btn-c-primary mt-4 w-100" @click.prevent="LoginUser()">
                                            Login
                                        </button>
                                    </div>

                                </div>

                            </div>

                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    LoginUser() {
      const login = {
        email: this.email,
        password: this.password
      };

      this.$store.dispatch("LoginUser",login);
    }
  }
};
</script>

