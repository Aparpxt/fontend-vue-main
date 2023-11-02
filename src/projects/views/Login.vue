<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <div class="text-center mb-3">
                    <img src="@/assets/logo.svg" height="150px"/>
                  </div>
<!--                  <h1>Login</h1>-->
                  <p class="text-muted text-center">Sign In to your account</p>
                  <CInput
                    v-model="username"
                    placeholder="Username"
                    autocomplete="username email"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    v-model="password"
                    placeholder="Password"
                    type="password"
                    autocomplete="curent-password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol  class="text-right">
                      <CButton color="danger" class="px-4 w-50" @click="this.onAuthen">Login</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="danger"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Sign up</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                >
                  Register Now!
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>


    <CModal
      :title="dialog.title"
      color="danger"
      :show.sync="dialog.statue"
      :centered="true"
      :close-on-backdrop="false"
    >
      {{dialog.message}}
    </CModal>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'Login',
    data () {
      return {
        username:'48212025',
        password:'1',
        dialog : {
          statue:false,
          title:"",
          message:""
        }

      }
    },
    methods: {
      onAuthen(){
        var body = {};
        body.username = btoa(this.username);
        body.password = btoa(this.password);
        this.$store.dispatch("auth/onLogin", body)

      }
    },

    computed:{
      ...mapGetters({
        objJwt:'auth/objJwt',
        dialogError:"auth/dialogError"
      })
    },

    watch: {
      objJwt:function (data) {
        console.log(data)

      },
      dialogError:function (data) {
        this.dialog = data
        console.log(data)
      }
    }
  }

</script>
