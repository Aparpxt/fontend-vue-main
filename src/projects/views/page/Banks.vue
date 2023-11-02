<template>
  <div>

  </div>
</template>

<script>

import {mapGetters} from "vuex";
export default {
  name: 'Banks',
  components: {
  },
  props: {
    caption: {
      type: String,
      default: ''
    }
  },

  data: function () {
    return {

    }
  },

  mounted () {
    this.onInit()
  },

  created () {
    this.onInit()

  },

  beforeDestroy () {

  },

  methods: {
    onInit(){

    },


  },

  computed:{
    ...mapGetters({

    })
  },

  watch: {
  }

}
</script>
<style >


</style>
