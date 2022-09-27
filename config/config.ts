/*
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-14 14:25:34
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-23 16:42:06
 * @FilePath: /vue3-ts-element/config/config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
 */
type AvatarType = 'dropdown' | 'horizontal'
type LogoType = 'image' | 'text'


const serverMenu: boolean = false
const avatarArea: AvatarType  = 'dropdown'
const logoType: LogoType = 'text'
const logoText: string = '收银管理系统'
const logoPath: string = '/home'
const plantformName: string = '收银管理系统'
const aMapKey: string = '936badfe5295d50ae26b5a7d9e45518e '

export default {
    serverMenu,
    avatarArea,
    logoType,
    logoText,
    logoPath,
    plantformName,
    aMapKey
}