<template>
    <section class="login-register">
        <div class="container py-6">
            <div class="row">
                <div class="col-lg-12 d-flex justify-content-center flex-column align-items-center">

                    <div class="card shadow-custom-03">

                      <div class="card-header">
                        <router-link to="/login" class="card-link" exact>
                          Login
                        </router-link>
                      </div>
                      <div class="card-body">
                        <h5 class="text-center my-2">Register</h5>
                          <form action="#">

                                <div class="row">
                                    <div class="col-12 my-1">
                                        <label>Name</label>
                                        <div class="input-group">
                                          <input type="text" class="form-control" v-model="name">
                                        </div>
                                    </div>
                                    <div class="col-12 my-1">
                                        <label>E-Mail</label>
                                        <div class="input-group">
                                            <input
                                            type="text"
                                            class="form-control"
                                            v-model="email"
                                            @input="$v.email.$touch()"
                                            :class="{'is-invalid':$v.email.$error}"
                                            >
                                            <div class="invalid-feedback">
                                              <p class="text-danger" v-if="!$v.email.email">Email is Invalid</p>
                                              <p class="text-danger" v-if="!$v.email.uniqe && $v.email.$dirty">Email is not uniqe</p>
                                              <p class="text-danger" v-if="!$v.email.required && $v.email.$dirty">Requared</p>
                                              <p class="text-danger" v-if="!$v.email.maxLength">Total correcter should {{$v.email.$params.maxLength.max}} </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 my-1">
                                        <label>Password</label>
                                        <div class="input-group">
                                            <input
                                            type="password"
                                            class="form-control"
                                            v-model="password"
                                            @blur="$v.password.$touch()"
                                            :class="{'is-invalid':$v.password.$error}"
                                            >
                                            <div class="invalid-feedback">
                                              <p class="text-danger" v-if="!$v.password.required && $v.password.$dirty">Requared</p>
                                              <p class="text-danger" v-if="!$v.password.minLength">Total correcter should {{$v.password.$params.maxLength.min}} </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-12 my-1">
                                        <label>Repassword</label>
                                        <div class="input-group">
                                            <input
                                            type="password"
                                            class="form-control"
                                            v-model="rePassword"
                                            @input="$v.rePassword.$touch()"
                                            :class="{'is-invalid':$v.rePassword.$error}"
                                            >

                                            <div class="invalid-feedback">
                                              <p class="text-danger" v-if="!$v.rePassword.sameAs && $v.rePassword.$dirty">Requared</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-12 my-1">
                                        <label>Address</label>
                                        <div class="input-group">
                                            <input type="text" class="form-control" v-model="address">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button
                                        @click.prevent="RegisterUser()"
                                        :disabled="$v.$invalid"
                                        class="btn text-center text-white btn-c-primary mt-4 w-100"
                                        >
                                            Register
                                        </button>
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
import {
  required,
  maxLength,
  email,
  minLength,
  sameAs
} from "vuelidate/lib/validators";
export default {
  data(){
    return {
      name: '',
      email: '',
      password:'',
      rePassword:'',
      address:''
    }
  },
  methods: {
    RegisterUser() {
      const register = {
        name: this.name,
        email: this.email,
        password: this.password,
        address: this.address
      };
      this.$store.dispatch("RegisterUser", register);
    }
  },
    validations: {
    email: {
      required,
      email,
      maxLength: maxLength(100),
      unique: function(val) {
        return true;
        if (val === "") return true;

        return this.$http
          .get("IsExistUserByEmail", {
            params: { email: val }
          })
          .then(
            response => {
              console.log(response);
              return !response.body.isExist;
            },
            error => {
              console.log(error);
            }
          );
      }
    },
    password: {
      minLength: minLength(6),
      required
    },
    rePassword: {
      sameAs: sameAs("password")
    }
  }
}
</script>

<style>
.invalid {
  border: 1px solid red !important;
  box-shadow: 0 0 5px red !important;
  background-color: lightpink !important;
}
</style>
