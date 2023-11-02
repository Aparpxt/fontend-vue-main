<template xmlns="http://www.w3.org/1999/html">
  <div class="p-4" v-if="profile.show">
    <CRow>
      <CCol class="text-center mb-2">
        <div class="c-avatar" style="height: 120px; width: 120px" >
          <img :src="profile.imageProfile"  class="c-avatar-img"  width="100%" height="100%"/>
        </div>
      </CCol>
    </CRow>
    <CRow v-for="objs in profile.profile" :key="objs">
      <CCol><span class="font-weight-bold">{{ objs.key }}</span> {{ objs.value }}</CCol>
    </CRow>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: 'TheSidebarProfile',
  data: function () {
    return {
    }
  },
  mounted() {

  },

  created() {
  },

  beforeDestroy() {

  },

  methods: {


  },

  computed: {
    ...mapGetters({
      profile: 'profile/objProfileSidbar'
    })
  },

}
</script>

