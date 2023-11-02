<template>
  <div class="c-app" :class="{ 'c-dark-theme': $store.state.darkMode }">
    <TheSidebar/>
    <TheAside/>
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
        <TheFooter/>
      </div>
    </CWrapper>
    <CenterLoading/>
    <CenterDialogs/>
    <SignIn/>
  </div>
</template>

<script>
import TheSidebar from './TheSidebar'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'
import TheAside from './TheAside'
import CenterLoading from "@/projects/components/Dialog/CenterLoading";
import CenterDialogs from "@/projects/components/Dialog/CenterDialogs";
import SignIn from "@/projects/components/Dialog/SignIn";

export default {
  name: 'TheContainer',
  components: {
    SignIn,
    CenterDialogs,
    CenterLoading,
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
