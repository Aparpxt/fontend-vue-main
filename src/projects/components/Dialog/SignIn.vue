<template>
    <div>
        <CModal
            add-content-classes="bg-login"
            :show.sync="isModal"
            :centered="true"
        >
          <template #header-wrapper>
            <div class="mb-5"></div>
          </template>
          <template #body-wrapper>
            <CRow class="justify-content-center ">
              <CCol col="8">
                <CForm>
                  <CRow >
                    <CCol class="text-center">
                      <img src="@/assets/logo.svg" height="150px"/>
                      <h1>{{(onOpenForgotPassword == true)?"Sign In":"Forgot Password"}}</h1>
                      <p class="text-white">{{(onOpenForgotPassword == true)?"Sign In to your account":"You Forgot Password"}}</p>
                    </CCol>
                  </CRow>

                  <CInput
                      v-if="onOpenForgotPassword"
                      placeholder="Username"
                      autocomplete="username"
                      v-model="username"
                  >

                    <template #prepend>
                      <CButton color="danger">
                        <CIcon name="cil-user"/>
                      </CButton>
                    </template>
                  </CInput>
                  <CInput
                      v-if="onOpenForgotPassword"
                      color="info"
                      placeholder="Password"
                      :type="typePassword"
                      autocomplete="curent-password"
                      v-model="password"
                  >
                    <template #prepend>
                      <CButton color="danger">
                        <CIcon name="cil-lock-locked"/>
                      </CButton>
                    </template>

                    <template #append>
                      <CButton color="warning" @click="onViewPassword">
                        <CIcon name="cil-low-vision"/>
                      </CButton>
                    </template>
                  </CInput>

                  <CRow v-if="onOpenForgotPassword">
                    <CCol class="text-right">
                      <CButton color="link" class="px-0 " @click="onOpenForgotPasswords">Forgot password?</CButton>
                    </CCol>
                  </CRow>
                  <CRow class="mb-3" v-if="onOpenForgotPassword">
                    <CCol>
<!--                      <CButton color="info" class="w-100" shape="pill" @click="onOpenSignUp">Register</CButton>-->
                    </CCol>
                    <CCol>
                      <CButton color="danger" class="w-100" shape="pill" @click="onOpenSignIn">Sign In</CButton>
                    </CCol>
                  </CRow>



                  <CInput
                      v-if="!onOpenForgotPassword"
                      placeholder="email"
                      autocomplete="username email"
                      v-model="email"
                  >

                    <template #prepend>
                      <CButton color="danger">
                        <CIcon name="cil-envelope-letter"/>
                      </CButton>
                    </template>

<!--                    <template #append>-->
<!--                      <CButton color="dark" @click="onViewPassword">-->
<!--                        <CIcon name="cil-low-vision"/>-->
<!--                      </CButton>-->
<!--                    </template>-->
                  </CInput>

                  <CRow class="mb-3" v-if="!onOpenForgotPassword">
                    <CCol>
                      <CButton color="secondary" class="w-100" shape="pill" @click="onOpenForgotPasswords">Cancel</CButton>
                    </CCol>
                    <CCol>
                      <CButton color="danger" class="w-100" shape="pill" @click="onForgotPassword">Submit</CButton>
                    </CCol>
                  </CRow>

                  <CRow v-if="oAuth2">
                    <CCol>
                      <CDropdownDivider class="mt-2"/>
                    </CCol>
                    <label class="text-dark font-weight-bold"> SIGN IN WITH SOCIAL </label>
                    <CCol>
                      <CDropdownDivider class="mt-2"/>
                    </CCol>
                  </CRow>
                  <CRow v-if="oAuth2">
                    <CCol class="text-center">
                      <div>
                        <img class="mr-2 zoom" src="@/assets/icons/logo-facebook.png" width="50px"/>
                        <img class="zoom" src="@/assets/icons/logo-google.png" width="50px"/>
                      </div>
                    </CCol>
                  </CRow>
                </CForm>
              </CCol>
            </CRow>
          </template>
          <template #footer-wrapper>
            <div class="mb-5"></div>
          </template>
        </CModal>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        name: 'SignIn',
        data: function () {
            return {
              oAuth2: true,

              isModal: false,
              typePassword:"password",
              onOpenForgotPassword:true,
              username:"",
              password:"",
              email:""
            }
        },
        mounted() {

        },

        created() {
        },

        beforeDestroy() {

        },

        methods: {

          onViewPassword(){
            if(this.typePassword == "password"){
              this.typePassword = "text";
            }else{
              this.typePassword = "password";
            }
          },

          onOpenForgotPasswords(){

            this.onOpenForgotPassword = !this.onOpenForgotPassword;
          },

          onForgotPassword(){

          },
          onOpenSignIn(){
            var body = {}
            body.username = this.username;
            body.password = this.password;
            this.$store.dispatch("auth/onLogin", body);
          },

          onOpenSignUp(){
            this.$store.commit("auth/isSignIn", false);
          },

          handleOnComplete(value) {
            console.log('OTP completed: ', value);
          },
          handleOnChange(value) {
            console.log('OTP changed: ', value);
          },
          handleClearInput() {
            this.$refs.otpInput.clearInput();
          },

        },

        computed: {
            ...mapGetters({
              showSignIn: 'auth/isSignIn'
            })
        },

        watch: {
          showSignIn: function (value) {
            this.isModal = value
          },

          isModal: function (value) {
            this.onOpenForgotPassword =true;
            this.$store.commit("auth/isSignIn", value)
          },
        }
    }
</script>

<style>
.bg-login{
  border-radius: 1.5rem ;
  background: linear-gradient(180deg,#8c1515 10%,#FEC260 50%, #FFFF 80%);
}

</style>
