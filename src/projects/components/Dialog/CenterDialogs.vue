<template>
    <div>
        <CModal
                :title="dialog.title"
                :color="dialog.color"
                :show.sync="dialog.status"
                :centered="true"
                :close-on-backdrop="false"
        >
<!--          <template #header-wrapper>-->
<!--            <div class="mb-5"></div>-->
<!--          </template>-->
          <template #body-wrapper>
            <div>
              <CRow>{{dialog.message}}</CRow>
            </div>
          </template>

<!--          <template #footer-wrapper>-->
<!--            <div class="mb-5"></div>-->
<!--          </template>-->
        </CModal>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        name: 'CenterDialogs',
        data: function () {
            return {

                dialog: {
                  title: "",
                  color: "danger",
                  message: "",
                  status: false
                }
            }
        },
        mounted() {

        },

        created() {
        },

        beforeDestroy() {

        },

        methods: {},

        computed: {
            ...mapGetters({
                dialog: 'dialog/onGetMessageDialog'
            })
        },

        watch: {
        }
    }
</script>
