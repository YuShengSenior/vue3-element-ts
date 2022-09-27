/*
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-09-14 10:43:52
 * @LastEditors: 余笙学长 kingsun997@163.com
 * @LastEditTime: 2022-09-16 16:13:12
 * @FilePath: /vue3-ts-element/src/utils/utils.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
 */
/**
 * 检测数据类型
 * @param val 需要检测的类型
 * @returns 首字母大写的类型
 */
export const getType = (val: any) : string => {
    if(Number.isNaN(val)) return 'NaN'
    if (typeof val === 'object') {
        let objType: string = Object.prototype.toString.call(val)
        let tempObjType: string[] = objType.split(' ')[1].split('')
        tempObjType.pop()
        return tempObjType.join().toLocaleUpperCase()
    }
    return typeof val
}

export const hasPermission = {
    install(Vue: any, options: any) {
      //自定义指令v-has：
      Vue.directive('has', {
        mounted(el: any, binding: any) {
          if (!checkPermission(binding.value)) {
            el.parentNode.removeChild(el);
          }
        },
      });
      //权限检查方法
      function checkPermission(value: any) {
        let isExist = false;
  
        let buttonArr = JSON.parse(localStorage.getItem("permissionButton") || "[]");
  
        //判断是否按钮有权限
        if (buttonArr.includes(value)) {
          isExist = true;
        }
        return isExist;
  
      };
    }
  };
  export default hasPermission;
  