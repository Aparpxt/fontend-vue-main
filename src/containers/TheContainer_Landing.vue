<template>
  <div class="c-app" :class="{ 'c-dark-theme': $store.state.darkMode }">
<!--    <TheSidebar/>-->
<!--    <TheAside/>-->
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main pt-0">
          <CContainer fluid class="pl-0 ml-0 pr-0 mr-0" >
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
        <TheFooter/>
      </div>
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader_Landing'
import TheFooter from './TheFooter'
import TheAside from './TheAside'

export default {
  name: 'TheContainer_Landing',
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
    TheAside
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
