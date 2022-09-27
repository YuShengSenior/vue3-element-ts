/*
 * @Description: 消息通知
 * @Author: YushengSenior
 * @Date: 2021-11-22 13:59:28
 * @LastEditTime: 2022-09-16 14:01:35
 * @LastEditors: 余笙学长 kingsun997@163.com
 */
import { ElMessage } from 'element-plus'

export const success = (label?: string): void => {
    const text: string = label ? label : 'message.success'
    ElMessage({
        message: text,
        type: 'success',
    })
}

export const warning = (label: string): void => {
    ElMessage({
        message: label,
        type: 'warning',
    })
}

export const error = (): void => {
    ElMessage.error('错误！')
}

export default {
    success, warning, error
}
