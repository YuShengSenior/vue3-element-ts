<!--
 * @Author: 余笙学长 kingsun997@163.com
 * @Date: 2022-08-05 10:28:43
 * @LastEditors: YushengSenior Kingsun997@163.com
 * @LastEditTime: 2022-09-21 10:58:48
 * @FilePath: /vue3-ts-element/src/components/form/amap/index.vue
 * @Description: 输入框组件
 * 
 * Copyright (c) 2022 by 余笙学长 kingsun997@163.com, All Rights Reserved. 
-->

<script lang="ts" setup>
    // import AMapLoader from '@amap/amap-jsapi-loader';
    import { reactive, type Ref, ref, onMounted, shallowRef } from 'vue';
    import config from '../../../../config/config'
    const emit = defineEmits(['blur', 'onChange'])
    type Size = "default" | "small" | "large"
    type myObject = { [key: string]: any }

    let map = ref<Ref>(shallowRef(null));

    
    withDefaults(defineProps<{
        name: string,
        id: string,
        label?: string
        placeholder?: string,
        size?: Size,
        type?: string,
        required?: boolean,
        data: myObject,
        span?: number,
        editable?: boolean,
        disabled?: boolean,
        form?: any
    }>(), {
        placeholder: '请输入',
        size: 'default',
        type: 'text',
        required: false,
        span: 10,
        editable: true,
        disabled: false,
        form: {}
    })
    
    // TODO: 配置格栅显示
    const layout = reactive({
        lay1: {
            xs: {
                span: 4,
                offset: 1
            },
            sm: {
                span: 4,
                offset: 1
            },
            md: {
                span: 4,
                offset: 1
            },
            lg: {
                span: 4,
                offset: 1
            },
            xl: {
                span: 4,
                offset: 1
            }
        },
        lay2: {
            xs: 8,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 1
        },
        lay3: {
            xs: 8,
            sm: 6,
            md: 4,
            lg: 3,
            xl: 1
        },
    
    })
    
    const blur = (item: any) => {
        emit('blur', item)
    }
    
    
    const onChange = (item: any) => {
        emit('onChange', item)
    }
        
        onMounted(() => {
            initMap()
        })    
    </script>
    
    <!-- TODO: placeholder没整  -->
    <template>
        <el-col :span="span" class="text-style">
            <el-form-item :label="label" :prop="name" :required="required" label-width="150px">
                <el-input class="text-input" v-if="editable" v-model="data[(name) as string]" @blur="blur" :type="type" :size="size"
                    :placeholder="placeholder || '请输入'" :disabled="disabled" :autosize="{ minRows: 3, maxRows: 3 }" />
                <span v-else>{{ data[(name) as string] ?? '暂无数据' }}</span>
            </el-form-item>
            <div id="container"></div>
        </el-col>
    </template>
    
    <style scoped>
    .text-input{
        width: 239px;
    }
    #container{
        padding:0px;
        margin: 0px;
        width: 100%;
        height: 800px;
    }
    </style>