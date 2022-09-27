<!--
 * @Author: YushengSenior Kingsun997@163.com
 * @Date: 2022-08-05 10:28:43
 * @LastEditors: YushengSenior Kingsun997@163.com
 * @LastEditTime: 2022-09-20 16:22:37
 * @FilePath: /vue3-ts-element/src/components/form/RichText/index.vue
 * @Description: 富文本
 * 
 * Copyright (c) 2022 by YushengSenior Kingsun997@163.com, All Rights Reserved. 
-->

<script setup lang="ts">
import { reactive, defineProps } from 'vue';
import { FormItem } from '@/components/form/index'

const currentLang: string = window.localStorage.getItem('lang')

const zh_CN_page = '/public/tinymce/langs/zh_CN.js'
const ko_KR_page = '/public/tinymce/langs/ko_KR.js'
enum langFileUrl {
    "zh-CN" = '/public/tinymce/langs/zh_CN.js',
    "ko-KR" = '/public/tinymce/langs/ko_KR.js'
}

enum langType {
    "zh-CN" = 'zh_CN',
    "ko-KR" = "ko_KR"
}

const state = reactive({
    // editor 配置项
    setting: {
        menubar: false,
        height: 225,
        toolbar:
            'bold italic underline h1 h2 blockquote codesample numlist bullist link image | removeformat fullscreen',
        plugins: 'codesample link image table lists fullscreen',
        toolbar_mode: 'sliding',
        nonbreaking_force_tab: true,
        link_title: false,
        default_link_target: '_blank',
        content_style: 'body{font-size: 16px}',
        // 自定义 图片上传模式
        custom_images_upload: true,
        images_upload_url: 'your_upload_api_url...',
        custom_images_upload_callback: res => res.url,
        custom_images_upload_param: { id: 'xxxx01', age: 18 },
        language: langType[currentLang as string],
        language_url: langFileUrl[(currentLang as string)],
    }
});

defineProps({
    name: {
        type: String,
    },
    id: {
        type: String,
    },
    label: {
        type: String,
    },
    span: {
        type: Number,
        default: () => 7
    },
    placeholder: {
        type: String,
        default: () => 'pub.placeholder'
    },
    size: {
        type: String,
        default: () => 'medium'
    },
    type: {
        type: String,
        default: () => 'text'
    },
    required: {
        type: Boolean,
        default: () => false
    },
    data: {
        type: Object,
        default() {
            return {}
        }
    },
    editable: {
        type: Boolean,
        default: () => true
    },
})
</script>

<template>
    <el-col :span="span" class="text-style">
        <el-form-item
            :label="label"
            :prop="name"
            :required="required"
            label-width="150px"
        >
            <vue3-tinymce v-model="data[(name) as string]" :setting="state.setting" />
        </el-form-item>
    </el-col>
</template>