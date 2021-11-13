import {EMPLOYEES, EMPLOYEES_COLUMNS} from './api'
import {METHOD, request} from '@/utils/request'

export async function employeesList(params) {
  return request(EMPLOYEES, METHOD.GET, params)
}

export async function employeesColumns() {
  return request(EMPLOYEES_COLUMNS, METHOD.GET)
}

export default {employeesList,employeesColumns}

