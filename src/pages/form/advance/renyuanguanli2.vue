<template>
  <div class="peoplelist">
    <form :autoFormCreate="(form) => this.form = form">
      <a-table
          :columns="dataColumns"
          :dataSource="dataSource"
          :pagination="false"
      >
        <template  v-for="(col, i) in ['name', 'sex','age','telephone','idnumber','work','department','equipment']" :slot="col" slot-scope="text, record">
          <a-input
              :key="col"
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              :placeholder="columns[i].title"
              @change="e => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>{{text}}</template>
        </template>
        <template slot="operation" slot-scope="text, record">
          <template v-if="record.editable">
          <span v-if="record.isNew">
            <a @click="saveRow(record.key)">{{$t('add')}}</a>
            <a-divider type="vertical" />
            <a-popconfirm :title="$t('deleteConfirm')" @confirm="remove(record.key)">
              <a>{{$t('delete')}}</a>
            </a-popconfirm>
          </span>
            <span v-else>
            <a @click="saveRow(record.key)">{{$t('save')}}</a>
            <a-divider type="vertical" />
            <a @click="cancle(record.key)">{{$t('cancel')}}</a>
          </span>
          </template>
          <span v-else>
          <a @click="toggle(record.key)">{{$t('edit')}}</a>
          <a-divider type="vertical" />
          <a-popconfirm :title="$t('deleteConfirm')" @confirm="remove(record.key)">
            <a>{{$t('delete')}}</a>
          </a-popconfirm>
        </span>
        </template>
      </a-table>
      <a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus" @click="newMember">{{$t('newMember')}}</a-button>
    </form>
  </div>
</template>

<script>
import {employees as ds} from '@/services'
// import {employeesColumns} from "../../../services/employees";

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: '8%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: '8%',
    scopedSlots: { customRender: 'sex' }
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: '8%',
    scopedSlots: { customRender: 'age' }
  },
  {
    title: '手机号',
    dataIndex: 'telephone',
    key: 'telephone',
    width: '10%',
    scopedSlots: { customRender: 'telephone' }
  },
  {
    title: '身份证号',
    dataIndex: 'idnumber',
    key: 'idnumber',
    width: '15%',
    scopedSlots: { customRender: 'idnumber' }
  },
  {
    title: '工种',
    dataIndex: 'work',
    key: 'work',
    width: '10%',
    scopedSlots: { customRender: 'work' }
  },
  {
    title: '所属项目',
    dataIndex: 'department',
    key: 'department',
    width: '10%',
    scopedSlots: { customRender: 'department' }
  },
  {
    title: '绑定设备',
    dataIndex: 'equipment',
    key: 'equipment',
    width: '15%',
    scopedSlots: { customRender: 'equipment' }
  },
  {
    title: '操作',
    key: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]

const dataSource = [];


export default {
  name: 'renyuanguanli2',
  i18n: require('./i18n-user'),
  data () {
    return {
      columns,
      dataSource
    }
  },
  computed: {
    dataColumns() {
      return this.columns.map(column => {
        column.title = this.$t('table.' + column.key)
        return column
      })
    }
  },
  created() {
    this.getEmployeeColumns()
    this.getEmployeeList()
  },
  methods: {
    getEmployeeList() {
      this.loading = true
      const {page, pageSize, conditions} = this
      ds.employeesList({page, pageSize, ...conditions}).then(result => {
        const {list, page, pageSize, total} = result.data.data
        this.dataSource = list
        this.page = page
        this.total = total
        this.pageSize = pageSize
        this.loading = false
      })
    },
    getEmployeeColumns() {
      ds.employeesColumns().then(res => {
        this.columns = res.data
      })
    },
    handleSubmit (e) {
      e.preventDefault()
    },
    newMember () {
      this.dataSource.push({
        key: this.dataSource.length + 1,
        name: '',
        sex: '',
        age:'',
        telephone:'',
        work:'',
        department: '',
        equipment:'',
        editable: true,
        isNew: true
      })
    },
    remove (key) {
      const newData = this.dataSource.filter(item => item.key !== key)
      this.dataSource = newData
    },
    saveRow (key) {
      let target = this.dataSource.filter(item => item.key === key)[0]
      target.editable = false
      target.isNew = false
    },
    toggle (key) {
      let target = this.dataSource.filter(item => item.key === key)[0]
      target.editable = !target.editable
    },
    getRowByKey (key, newData) {
      const data = this.dataSource
      return (newData || data).filter(item => item.key === key)[0]
    },
    cancle (key) {
      let target = this.dataSource.filter(item => item.key === key)[0]
      target.editable = false
    },
    handleChange (value, key, column) {
      const newData = [...this.dataSource]
      const target = newData.filter(item => key === item.key)[0]
      if (target) {
        target[column] = value
        this.dataSource = newData
      }
    }
  }
}
</script>

<style scoped>
.peoplelist{
  background-color: white;
  padding: 24px;
}

</style>
