import TabsView from '@/layouts/tabs/TabsView'
import BlankView from '@/layouts/BlankView'
import PageView from '@/layouts/PageView'

// 路由配置
const options = {
  routes: [
    {
      path: '/login',
      name: '登录页',
      component: () => import('@/pages/login')
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/exception/404'),
    },
    {
      path: '/403',
      name: '403',
      component: () => import('@/pages/exception/403'),
    },
    {
      path: '/',
      name: '首页',
      component: TabsView,
      redirect: '/login',
      children: [
        {
          path: 'dashboard',
          // Dashboard
          name: '总控台',
          meta: {
            icon: 'dashboard'
          },
          component: BlankView,
          children: [
            {
              path: 'map',
              name: '地图',
              component: () => import('@/pages/map')
            }
          ],
        },
        {
          path: 'form',
          // 表单页
          name: '项目监控',
          meta: {
            icon: 'form',
            page: {
              cacheAble: false
            }
          },
          component: PageView,
          children: [
            {
              path: 'basic',
              // 基础表单
              name: '设备监控',
              component: () => import('@/pages/form/basic/shebeijiankong'),
            },
            {
              path: 'step',
              // 分步表单
              name: '人员管理',
              component: () => import('@/pages/form/advance/renyuanguanli2'),
            },

          ]
        },
        {
          path: 'list',
          // 列表页
          name: '统计管理',
          meta: {
            icon: 'table'
          },
          component: PageView,
          children: [
            {
              path: 'query',
              // 查询表格
              name: '实时通讯',
              meta: {
                authority: 'queryForm',
              },
              component: () => import('@/pages/list/shishitongxun'),
            },
            {
              path: 'primary',
              // 标准列表
              name: '轨迹数据',
              component: () => import('@/pages/list/StandardList'),
            },
          ]
        },
        {
          path: 'xiangmuguanli',
          name: '项目管理',
          meta: {
            icon: 'dashboard'
          }
        },
        {
          path: 'details',
          // 详情页
          name: '设备管理',
          meta: {
            icon: 'profile'
          },
          component: BlankView,
          children: [
            {
              path: 'basic',
              // 基础详情页
              name: '设备管理',
              component: () => import('@/pages/detail/BasicDetail')
            },
            {
              path: 'advance',
              // 高级详情页
              name: '车辆管理',
              component: () => import('@/pages/detail/AdvancedDetail')
            }
          ]
        },
        {
          path: 'result',
          // 结果页
          name: '用户管理',
          meta: {
            icon: 'check-circle-o',
          },
          component: PageView,
          children: [
            {
              path: 'success',
              // 成功
              name: '子账号管理',
              component: () => import('@/pages/result/Success')
            },
            {
              path: 'error',
              // 失败
              name: '角色权限管理',
              component: () => import('@/pages/result/Error')
            }
          ]
        },
        {
          path: 'exception/404',
          // 异常页
          name: '组织机构管理',
          meta: {
            icon: 'warning',
          },
          // component: BlankView,
          // children: [
          //   {
          //     path: '404',
          //     // Exp404
          //     name: '组织机构管理',
          //     component: () => import('@/pages/exception/404')
          //   },
          //   // {
          //   //   path: '403',
          //   //   name: 'Exp403',
          //   //   component: () => import('@/pages/exception/403')
          //   // },
          //   // {
          //   //   path: '500',
          //   //   name: 'Exp500',
          //   //   component: () => import('@/pages/exception/500')
          //   // }
          // ]
        },
        {
          path: 'components',
          // 内置组件
          name: '系统设置',
          meta: {
            icon: 'appstore-o'
          },
          component: PageView,
          children: [
            {
              path: 'taskCard',
              // 任务卡片
              name: '账号信息',
              component: () => import('@/pages/components/TaskCard')
            },
            {
              path: 'palette',
              // 颜色复选框
              name: '工种设置',
              component: () => import('@/pages/components/Palette')
            },
            {
              path: 'table',
              name: '高级表格',
              component: () => import('@/pages/components/table')
            }
          ]
        },
        {
          name: '验权表单',
          path: 'auth/form',
          meta: {
            icon: 'file-excel',
            authority: {
              permission: 'form'
            }
          },
          component: () => import('@/pages/form/basic')
        },
          /*
        {
          name: '带参菜单',
          path: 'router/query',
          meta: {
            icon: 'project',
            query: {
              name: '菜单默认参数'
            }
          },
          component: () => import('@/pages/Demo')
        },
        {
          name: '动态路由菜单',
          path: 'router/dynamic/:id',
          meta: {
            icon: 'project',
            params: {
              id: 123
            }
          },
          component: () => import('@/pages/Demo')
        },
        {
          name: 'Ant Design Vue',
          path: 'antdv',
          meta: {
            icon: 'ant-design',
            link: 'https://www.antdv.com/docs/vue/introduce-cn/'
          }
        },
        // {
        //   name: '使用文档',
        //   path: 'document',
        //   meta: {
        //     icon: 'file-word',
        //     link: 'https://iczer.gitee.io/vue-antd-admin-docs/'
        //   }
        // }

           */
      ]
    },
  ]
}

export default options
