import Mock from 'mockjs'
import '@/mock/extend'
import {parseUrlParams} from '@/utils/request'



// let data = Mock.mock({
//     'data|1-10':[{
//         'img': '@image',//生成一个随机的图片地址,
//         'id': '@ID', //生成一个随机身份证号,
//         'age':'@integer(20,60)', //生成一个随机年龄,
//         'name':'@cname', //生成一个随机名字,
//         'gender|1-2': true, //生成一个随机性别
//
//     }]
// })



Mock.Random.extend({
    phone: function () {
        let phonePrefixs = ['132', '135', '189','186','131','130']
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
    }
})



// let mname = Mock.mock('@cname')
//
// let msex = Mock.mock('@cword(\'男女\')')

// let { phone } = Mock.mock({
//     'phone|1': ['@phone']
// })
//
// let mid = Mock.mock('@id')
//
// let mage = Mock.mock('@integer(60, 100)')
//
// let mwork = Mock.mock('@cname')
//
// let department = Mock.mock('@cword(5)')
//
// let equipment_str = Mock.mock('@string("upper", 5)')
//
// let equipment_num = Mock.mock('@string("number", 7)')

const employeesList = Mock.mock({
    'list|5': [{
        'key|+1': 0,
        'name': '@cname',
        'sex': '@cword(\'男女\')',
        'telephone|1': ['@phone'],
        'idnumber': '@id',
        'work': '@cname',
        'age|20-60': 1,
        'department': '@cword(5)',
        'equipment':  '@string("upper", 5)' + '@string("number", 7)'
    }]
})

// const employeesList1 = [
//     {
//         key: 1,
//         name: "小明",
//         sex: "男",
//         telephone: "13338838382",
//         idnumber: 134213421,
//         work: "临时工",
//         age: 35,
//         department: "不在编",
//         equipment: "13423-EMP"
//     },
//     {
//         key: 2,
//         name: "小明",
//         sex: "男",
//         telephone: "13338838382",
//         idnumber: 134213421,
//         work: "临时工",
//         age: 35,
//         department: "不在编",
//         equipment: "13423-EMP"
//     },
//     {
//         key: 3,
//         name: "小明",
//         sex: "男",
//         telephone: "13338838382",
//         idnumber: 134213421,
//         work: "临时工",
//         age: 35,
//         department: "不在编",
//         equipment: "13423-EMP"
//     },
// ]

// key: 1,
//     name: mname,
//     sex: msex,
//     age:mage,
//     telephone:phone,
//     idnumber:mid,
//     work:mwork,
//     // editable: false,
//     department: equipment,
//     // equipment:'1001001A1234'









Mock.mock(RegExp(`${process.env.VUE_APP_API_BASE_URL}/employeesList` + '.*'),'get', ({url}) => {
    // console.log(employeesList)
    // console.log(employeesList1)
    // alert('waiting')

    const params = parseUrlParams(decodeURI(url))
    let {page, pageSize} = params
    page = eval(page) - 1 || 0
    pageSize = eval(pageSize) || 10
    delete params.page
    delete params.pageSize
    let result = employeesList.list
    // let result = employeesList.list.filter(item => {
    //     for (let [key, value] of Object.entries(parxams)) {
    //         if (item[key] != value) {
    //             return false
    //         }
    //     }
    //     return true
    // })
    const total = result.length
    // alert(employeesList.length)
    if ((page) * pageSize > total) {
        result = []
    } else {
        result = result.slice(page * pageSize, (page + 1) * pageSize)
    }
    return {
        code: 0,
        message: 'success',
        data: {
            page: page + 1,
            pageSize,
            total,
            list: result
        }
    }
})

const columnsConfig = [
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

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/employeesColumns`, 'get', () => {
    return columnsConfig
})