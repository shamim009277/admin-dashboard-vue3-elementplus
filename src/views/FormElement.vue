<template>
    <div>
        <div class="page-container">
            <!-- Header Section -->
            <PageHeader title="Form Element" :breadcrumb-items="[
                { label: 'Home', path: '/' },
                { label: 'Form Element', path: '' }
            ]" />
            <br>

            <!-- Page Content -->
            <el-row :gutter="10" class="row-gap">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-card class="dashboard-card1" shadow="hover"
                        style="border-top: 2px solid #626AEF; margin-bottom: 20px;">
                        <div class="card-header">
                            <div class="card-info">
                                <h5 style="color:black !important;margin: 0px;">Date Picker</h5>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <div class="block">
                                <el-date-picker style="width: 370px;" v-model="value1" type="date"
                                    placeholder="Pick a day" />
                            </div><br>

                            <div class="block">
                                <el-date-picker v-model="value2" style="width: 370px;" type="date"
                                    placeholder="Pick a day" :disabled-date="disabledDate" :shortcuts="shortcuts"
                                    :size="size" />
                            </div><br>

                            <div class="block">
                                <el-date-picker v-model="value" style="width: 350px;" type="daterange"
                                    start-placeholder="Start date" end-placeholder="End date"
                                    :default-time="defaultTime" />
                            </div><br>

                            <div class="block">
                                <h5 style="color:black !important;margin: 0px;">Month Range (Start Month To End Month)
                                </h5><br>
                                <el-date-picker v-model="value3" style="width: 350px;" type="monthrange"
                                    range-separator="To" start-placeholder="Start month" end-placeholder="End month" />
                            </div><br>

                            <div class="block">
                                <h5 style="color:black !important;margin: 0px;">Month Range (Start Month To End Month)
                                </h5><br>
                                <el-date-picker v-model="value4" style="width: 350px;" type="monthrange" unlink-panels
                                    range-separator="To" start-placeholder="Start month" end-placeholder="End month"
                                    :shortcuts2="shortcuts2" />
                            </div>
                        </div>
                    </el-card>

                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h5 style="color:black !important;margin: 0px;">DateTimePicker</h5>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <div class="block">
                                <div class="demo-datetime-picker">
                                    <div class="block">
                                        <span class="demonstration">Default</span>
                                        <el-date-picker v-model="value1" type="datetime"
                                            placeholder="Select date and time" />
                                    </div>
                                    <div class="block">
                                        <span class="demonstration">With shortcuts</span>
                                        <el-date-picker v-model="value2" type="datetime"
                                            placeholder="Select date and time" :shortcuts="shortcuts" />
                                    </div>
                                    <div class="block">
                                        <span class="demonstration">With default time</span>
                                        <el-date-picker v-model="value3" type="datetime"
                                            placeholder="Select date and time" :default-time="defaultTime" />
                                    </div>
                                </div>
                            </div><br><br>

                            <div class="block">
                                <div class="block">
                                    <h5 style="color:black !important;margin: 0px;">Time Select</h5><br>
                                    <el-time-select v-model="value" style="width: 370px" start="08:30" step="00:15"
                                        end="18:30" placeholder="Select time" />
                                </div><br>
                            </div>
                            <div class="block">
                                <div class="block">
                                    <h5 style="color:black !important;margin: 0px;">Time Select Formats</h5><br>
                                    <el-time-select v-model="value" style="width: 370px" start="00:00" step="00:30"
                                        end="23:59" placeholder="Select time" format="hh:mm A" />
                                </div><br>
                            </div>

                            <div class="block">
                                <div class="block">
                                    <h5 style="color:black !important;margin: 0px;">Fixed Time Range</h5><br>
                                    <div class="demo-time-range">
                                        <el-time-select v-model="startTime"
                                            style="width: 240px; margin-right: 10px !important;" :max-time="endTime"
                                            class="mr-4" placeholder="Start time" start="08:30" step="00:15"
                                            end="18:30" />
                                        <el-time-select v-model="endTime" style="width: 240px" :min-time="startTime"
                                            placeholder="End time" start="08:30" step="00:15" end="18:30" />
                                    </div>
                                </div><br>
                            </div>
                        </div>
                    </el-card><br>

                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h5 style="color:black !important;margin: 0px;">Input Checkbox</h5>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <div class="block">
                                <div>
                                    <el-checkbox v-model="checked1" label="Option 1" size="large" />
                                    <el-checkbox v-model="checked2" label="Option 2" size="large" />
                                </div>
                                <div class="my-2">
                                    <el-checkbox v-model="checked3" label="Option 1" />
                                    <el-checkbox v-model="checked4" label="Option 2" />
                                </div>
                                <div class="mt-2">
                                    <el-checkbox v-model="checked5" label="Option 1" size="small" />
                                    <el-checkbox v-model="checked6" label="Option 2" size="small" />
                                </div>
                            </div><br>

                            <div>
                                <h5 style="color:black !important;margin: 0px;">Checkbox Group</h5>
                                <el-checkbox-group v-model="checkList">
                                    <el-checkbox label="Option A" value="Value A" />
                                    <el-checkbox label="Option B" value="Value B" />
                                    <el-checkbox label="Option C" value="Value C" />
                                    <el-checkbox label="disabled" value="Value disabled" disabled />
                                    <el-checkbox label="selected and disabled" value="Value selected and disabled"
                                        disabled />
                                </el-checkbox-group>
                            </div><br>

                            <div>
                                <h5 style="color:black !important;margin: 0px;">With Border</h5><br>
                                <div>
                                    <el-checkbox v-model="checked7" label="Option1" size="large" border />
                                    <el-checkbox v-model="checked8" label="Option2" size="large" border />
                                </div><br>
                                <div class="mt-4">
                                    <el-checkbox v-model="checked9" label="Option1" border />
                                    <el-checkbox v-model="checked10" label="Option2" border />
                                </div><br>
                                <div class="mt-4">
                                    <el-checkbox-group v-model="checkboxGroup1" size="small">
                                        <el-checkbox label="Option1" value="Value1" border />
                                        <el-checkbox label="Option2" value="Value2" border />
                                    </el-checkbox-group>
                                </div><br>
                                <div class="mt-4">
                                    <el-checkbox-group v-model="checkboxGroup1" size="small">
                                        <el-checkbox label="Option1" value="Value1" border disabled />
                                        <el-checkbox label="Option2" value="Value2" border disabled />
                                    </el-checkbox-group>
                                </div>
                            </div>
                        </div>
                    </el-card><br>

                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h5 style="color:black !important;margin: 0px;">Input Radio</h5>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <div class="block">
                                <div class="mb-2 ml-4">
                                    <el-radio-group v-model="radio1">
                                        <el-radio value="1" size="large">Option 1</el-radio>
                                        <el-radio value="2" size="large">Option 2</el-radio>
                                    </el-radio-group>
                                </div>
                                <div class="my-2 ml-4">
                                    <el-radio-group v-model="radio2">
                                        <el-radio value="1">Option 1</el-radio>
                                        <el-radio value="2">Option 2</el-radio>
                                    </el-radio-group>
                                </div>
                                <div class="my-4 ml-4">
                                    <el-radio-group v-model="radio3">
                                        <el-radio value="1" size="small">Option 1</el-radio>
                                        <el-radio value="2" size="small">Option 2</el-radio>
                                    </el-radio-group>
                                </div>
                            </div><br>

                            <div>
                                <h5 style="color:black !important;margin: 0px;">Checkbox Group</h5>
                                <el-radio-group v-model="radio">
                                    <el-radio :value="3">Option A</el-radio>
                                    <el-radio :value="6">Option B</el-radio>
                                    <el-radio :value="9">Option C</el-radio>
                                </el-radio-group>
                            </div><br>
                        </div>
                    </el-card>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-card class="dashboard-card1" shadow="hover"
                        style="border-top: 2px solid #626AEF; margin-bottom: 20px;">
                        <div class="card-header">
                            <div class="card-info">
                                <h5 style="color:black !important;margin: 0px;">Basic Form Element</h5>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-select v-model="value" placeholder="Basic Select" style="width: 400px">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select><br><br>

                            <el-select v-model="selected" filterable placeholder="Select A Framework"
                                style="width: 400px">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select><br><br>

                            <div class="block">
                                <h5 style="color:black !important;margin: 0px;">Multi Select</h5><br>
                                <el-select v-model="value5" multiple placeholder="Select" style="width: 400px">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value" />
                                </el-select>
                            </div><br>

                            <div class="block">
                                <h5 style="color:black !important;margin: 0px;">Input Type Tag</h5><br>
                                <el-input-tag v-model="input" placeholder="Please input"
                                    aria-label="Please click the Enter key after input" /><br>

                                <el-input-tag v-model="input2" clearable placeholder="Please input (clearable)" /><br>

                                <h5 style="color:black !important;margin: 0px;">Input Tag Draggable</h5><br>
                                <el-input-tag v-model="input2" draggable placeholder="Please input (draggable)" />
                            </div><br>
                        </div>
                    </el-card>

                    <el-card class="dashboard-card1" shadow="hover"
                        style="border-top: 2px solid #626AEF; margin-bottom: 20px;">
                        <div class="card-header">
                            <div class="card-info">
                                <h5 style="color:black !important;margin: 0px;">File Upload</h5>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <div class="block">
                                <el-upload class="upload-demo" list-type="picture-card" :auto-upload="false"
                                    v-model:file-list="fileList" :on-preview="handlePictureCardPreview"
                                    :on-remove="handleRemove" :before-upload="handleBeforeUpload">
                                    <el-icon>
                                        <Plus />
                                    </el-icon>
                                </el-upload>

                                <el-dialog v-model="dialogVisible" width="30%">
                                    <img :src="dialogImageUrl" style="width: 100%" />
                                </el-dialog>
                            </div>
                            <br>

                            <div class="block">
                                <h5 style="color:black !important;margin: 0px;">File Drag to Upload</h5><br>
                                <el-upload class="upload-demo" drag
                                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" multiple>
                                    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                                    <div class="el-upload__text">
                                        Drop file here or <em>click to upload</em>
                                    </div>
                                    <template #tip>
                                        <div class="el-upload__tip">
                                            jpg/png files with a size less than 500kb
                                        </div>
                                    </template>
                                </el-upload>
                            </div><br>

                            <div class="block">
                                <h5 style="color:black !important;margin: 0px;">Input Type Rate</h5><br><br>
                                <div class="demo-rate-block">
                                    <span class="demonstration">Default</span>
                                    <el-rate v-model="value6" />
                                </div>
                                <div class="demo-rate-block">
                                    <span class="demonstration">Color for different levels</span>
                                    <el-rate v-model="value7" :colors="colors" />
                                </div>
                                <div class="demo-rate-block">
                                    <span class="demonstration">Allow-half</span>
                                    <el-rate v-model="value8" allow-half />
                                </div>
                            </div>
                        </div>
                    </el-card>

                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h5 style="color:black !important;margin: 0px;">Input Switch</h5>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <div class="block">
                                <el-switch v-model="value1" style="margin-right:10px;" />
                                <el-switch v-model="value2" class="ml-2"
                                    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
                            </div><br>


                            <div class="block">
                                <h5 style="color:black !important;margin: 0px;">Custom Icon</h5><br>
                                <el-switch v-model="values1" :active-icon="Check" :inactive-icon="Close" />
                                <br />
                                <el-switch v-model="values2" class="mt-2" style="margin-left: 24px" inline-prompt
                                    :active-icon="Check" :inactive-icon="Close" />
                            </div><br>

                            <div class="block">
                                <h5 style="color:black !important;margin: 0px;">Custom Action</h5><br>
                                <el-switch v-model="valueslot1">
                                    <template #active-action>
                                        <span class="custom-active-action">T</span>
                                    </template>
                                    <template #inactive-action>
                                        <span class="custom-inactive-action">F</span>
                                    </template>
                                </el-switch>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
import PageHeader from '@/components/admin/PageHeader.vue'
import { ref } from 'vue'

const value = ref('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const startTime = ref('')
const endTime = ref('')
const value6 = ref(0)
const value7 = ref(0)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
const value8 = ref()
const input = ref()
const input2 = ref(['tag1', 'tag2', 'tag3'])
const checkList = ref(['Value selected and disabled', 'Value A'])

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(false)
const checked5 = ref(false)
const checked6 = ref(false)
const checked7 = ref(false)
const checked8 = ref(false)
const checked9 = ref(false)
const checked10 = ref(false)
const checkboxGroup1 = ref(['Value1'])


const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio = ref(3)

const values1 = ref(true)
const values2 = ref(true)
const valueslot1 = ref(true)

import { Check, Close } from '@element-plus/icons-vue'

const shortcuts = [
    {
        text: 'Today',
        value: new Date(),
    },
    {
        text: 'Yesterday',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
        },
    },
    {
        text: 'A week ago',
        value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
        },
    },
]

const shortcuts2 = [
    {
        text: 'This month',
        value: [new Date(), new Date()],
    },
    {
        text: 'This year',
        value: () => {
            const end = new Date()
            const start = new Date(new Date().getFullYear(), 0)
            return [start, end]
        },
    },
    {
        text: 'Last 6 months',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setMonth(start.getMonth() - 6)
            return [start, end]
        },
    },
]

const disabledDate = () => {

}

const selected = ref('')

const options = [
    { value: 'vue', label: 'Vue.js' },
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
]

import { Plus } from '@element-plus/icons-vue'

const fileList = ref([
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url
    dialogVisible.value = true
}

const handleBeforeUpload = (rawFile) => {
    const reader = new FileReader()
    reader.onload = (e) => {
        fileList.value.push({
            name: rawFile.name,
            url: e.target.result,
        })
    }
    reader.readAsDataURL(rawFile)

    return false
}
</script>

<style scoped>
.row-gap {
    margin-bottom: 20px;
}

.item {
    margin-top: 10px;
    margin-right: 30px;
}

.el-dropdown {
    margin-top: 1.1rem;
}

.custom-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.demo-datetime-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}

.demo-datetime-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}

.demo-datetime-picker .block:last-child {
    border-right: none;
}

.demo-datetime-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}

.demo-rate-block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 49%;
    box-sizing: border-box;
}

.demo-rate-block:last-child {
    border-right: none;
}

.demo-rate-block .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>