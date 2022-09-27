<!--
 * @Description: 上传图片/文件组件
 * @Author: YushengSenior
 * @Date: 2021-11-09 11:18:58
 * @LastEditTime: 2022-09-20 10:10:55
 * @LastEditors: 余笙学长 kingsun997@163.com
-->

<script lang="ts" setup>
import { Plus } from '@element-plus/icons-vue'
import { reactive, defineProps } from 'vue';
import { uploadUrl } from '@/plugins/proxy';

const props = defineProps({
    name: {
        type: String,
    },
    id: {
        type: String,
    },
    label: {
        type: String,
    },
    maxSize: {
        type: Number,
    },
    span: {
        type: Number,
        default: () => 6
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
    accept: {
        type: String,
        default: () => 'pic'
        // 'pic' | 'excel' | 'word' | 'pdf'
    },
    list: {
        type:  Array
    }
})

const handleRemove = (file: any, fileList: any): void => {
    console.log(file, fileList)
}

interface IFileList {
    [propName: string]: any
}

const handlePictureCardPreview = (file: any): void => {
    state.dialogImageUrl = file.response.data
    state.dialogVisible = true
}

enum uploadFileType {
    'pic' = '.png, .jpg, .jpeg',
    'excel' = '.xlsx, .xls',
    'word' = '.doc, .docx',
    'pdf' = '.pdf'
}

const state = reactive({
    dialogImageUrl: '',
    dialogVisible: false,
    uploadList: []
})

const uploadHearders = {
    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI2ODhjYTRiMzZkNTE0ZmYxYThjZWZjYjdkYWRmNzA1OCIsInN1YiI6IntcImRlY29kZU5hbWVcIjpcIiVFOSU5MyU4NSVFOSU5NCU4MiVFNiU5OSVCQSVFOCVBMSU4Q1wiLFwiZGVwYXJ0U3RhdHVzXCI6MSxcImlzUGxhdGZvcm1BZG1pblwiOjEsXCJsb2dpblR5cGVcIjpcIjFcIixcIm1vYmlsZVwiOlwiMTUyNDIwOTkxODhcIixcInBhc3N3b3JkXCI6XCIkMmEkMTAkdldlbGU5S3JmN1JsRW54QWZtZnJvLkIubnZpa1ZCaUgybTM5ZHEwM09PUVpQMHJ3Nm5idWFcIixcInBlcm1pc3Npb25MaXN0XCI6W10sXCJ0ZW5hbnRJZFwiOlwiNjcyNDc2MTI3NDQ1NTk0OTM3OFwiLFwidHlwZVwiOjEsXCJ1c2VyaWRcIjpcIjY3MjQ3NjEyNzQ0NTU5NDkzNzhcIixcInVzZXJuYW1lXCI6XCLpk4XplILmmbrooYxcIn0iLCJpYXQiOjE2MzY0Mjg4MDR9.9mZ_XZ8RdI1LbvbAfd5zxYPwzoRINwD3BaAVnrebdQA',
}

const uploadData = {
    imageSource: 1
}

const handleClickMe = (): void => {
    console.log(state.uploadList)
}

const handleFileUploadChange = (file: any, fileList: Array<IFileList>): void => {
    console.log(fileList)
    // props.list = fileList
    // state.uploadList = fileList
}

console.log()
</script>

<template>
    <el-col :span="span" class="text-style">
        <el-form-item
            label="上传的占位符"
            :prop="name"
            :required="required"
            label-width="150px"
        >
            <el-upload
            class="upload-comp"
                :action="uploadUrl"
                :headers="uploadHearders"
                :data="uploadData"
                method="POST"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-change="handleFileUploadChange"
                name="file"
                :accept="accept ? uploadFileType[(props.accept) as string] : uploadFileType.pic"
                :file-list="props.list"
                :limit="maxSize ? maxSize : 9"
            >
                <slot></slot>
                <el-icon>
                    <plus />
                    
                    上传
                </el-icon>
            </el-upload>
            <el-dialog v-model="state.dialogVisible">
                <img :src="state.dialogImageUrl" />
            </el-dialog>
        </el-form-item>
    </el-col>
</template>


<style scoped>
.upload-comp{
}
</style>
