<template>
  <CCard>
    <CCardBody>
      <CDataTable
          :hover="hover"
          :striped="striped"
          :bordered="bordered"
          :small="small"
          :items="items"
          :fields="fields"
          :dark="dark"
          pagination

      >
        <template #no="{item,index}">
          <td @click="toggleDetails(item, index)">
            {{index+1}}
          </td>
        </template>
        <template #count="{item,index}">
          <td class="text-right" @click="toggleDetails(item, index)">
            {{item.count}}
          </td>
        </template>

        <template ##="{item,index}">
          <td @click="toggleDetails(item, index)">
            <CRow>
              <CCol class="text-center">
                <CButton size="sm" color="info" variant="ghost"  >
                  <CIcon name="cil-settings"/>
                </CButton>
              </CCol>
            </CRow>
          </td>
        </template>
<!--        <template #show_details="{item, index}">-->
<!--          <td class="py-2">-->
<!--            <CButton-->
<!--                color="primary"-->
<!--                variant="outline"-->
<!--                square-->
<!--                size="sm"-->
<!--                @click="toggleDetails(item, index)"-->
<!--            >-->
<!--              {{Boolean(item._toggled) ? 'Hide' : 'Show'}}-->
<!--            </CButton>-->
<!--          </td>-->
<!--        </template>-->
        <template #details="{item}">
          <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
            <CCardBody>
              <CDataTable
                  table-filter
                  :items="item.item"
                  :fields="fieldsDetail"
                  items-per-page-select
                  :items-per-page="50"
                  hover
                  sorter
                  pagination
              >
                <template #no="{item,index}">
                  <td> {{index+1}} </td>
                </template>
                <template #dateTime="{item,index}">
                  <td> {{moment(item.dateTime).format("YYYY-MM-DD HH:MM:ss")}} </td>
                </template>

              </CDataTable>
            </CCardBody>
          </CCollapse>
        </template>
      </CDataTable>
    </CCardBody>
  </CCard>
</template>

<script>


export default {
  name: 'UserAccountList',
  props: {
    items: Array,
    fields: {
      type: Array,
      default () {
        return [
          { key: 'no',label:'No'},
          { key: 'faclty',label:'School'},
          { key: 'count',label:'Number Of Register'},
          { key: '#',label:'#'},

        ]
      }
    },
    fieldsDetail: {
      type: Array,
      default () {
        return [
          { key: 'no',label:'No'},
          { key: 'name',label:'Name'},
          { key: 'code',label:'Code'},
          { key: 'dateTime',label:'Date Time'}
        ]
      }
    },
    caption: {
      type: String,
      default: 'User Accounts'
    },
    hover: Boolean,
    striped: Boolean,
    bordered: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  },
  data () {
    return {
      usersData: [
        { username: 'Samppa Nori',
          registered: '2012/01/01',
          role: 'Member',
          status: 'Active',
          item:[{
            sid: 'Z000001',
            level: '',
            invert: '',
            create: '',
          }]
        },

      ].map((item, id) => { return {...item, id}}),
      fields:[
        { key: 'username', _style:'width:40%' },
        'registered',
        { key: 'role', _style:'width:20%;' },
        { key: 'status', _style:'width:20%;' },
        {
          key: 'show_details',
          label: '',
          _style: 'width:1%',
          sorter: false,
          filter: false
        }
      ],
      details: [{}],
      collapseDuration: 0,

      control:{
        startDate:"",
        endDate:""
      },
      register:{
        total:9210,
        approve:20000,
        pending:20000,
        rejected:20000,
        registered:20000,
      }
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case 'Approve': return 'success'
        case 'Pending': return 'warning'
        case 'Reject': return 'danger'
        default: 'secondary'
      }
    },
    toggleDetails (item) {
      // this.$set(this.items[item._id], '_toggled', !item._toggled)

      item._toggled = !item._toggled
      this.collapseDuration = 300
      this.$nextTick(() => { this.collapseDuration = 0})
    }
  }
}
</script>
