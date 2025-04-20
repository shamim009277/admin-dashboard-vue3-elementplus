<template>
    <div>
        <div class="page-container">
            <!-- Header Section -->
            <PageHeader title="Form" :breadcrumb-items="[
                { label: 'Home', path: '/' },
                { label: 'Form', path: '' }
            ]" />
            <br>

            <!-- Page Content -->
            <el-row :gutter="10" class="row-gap">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="margin-bottom: 20px;">
                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Basic Form</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-form :model="form" label-width="auto" style="min-height: 630px;">
                                <el-form-item label="Activity name">
                                    <el-input v-model="form.name" />
                                </el-form-item>
                                <el-form-item label="Activity zone">
                                    <el-select v-model="form.region" placeholder="please select your zone">
                                        <el-option label="Zone one" value="shanghai" />
                                        <el-option label="Zone two" value="beijing" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="Activity time">
                                    <el-col :span="11">
                                        <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date"
                                            style="width: 100%" />
                                    </el-col>
                                    <el-col :span="2" class="text-center">
                                        <span class="text-gray-500">-</span>
                                    </el-col>
                                    <el-col :span="11">
                                        <el-time-picker v-model="form.date2" placeholder="Pick a time"
                                            style="width: 100%" />
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="Instant delivery">
                                    <el-switch v-model="form.delivery" />
                                </el-form-item>
                                <el-form-item label="Activity type">
                                    <el-checkbox-group v-model="form.type">
                                        <el-checkbox value="Online activities" name="type">
                                            Online activities
                                        </el-checkbox>
                                        <el-checkbox value="Promotion activities" name="type">
                                            Promotion activities
                                        </el-checkbox>
                                        <el-checkbox value="Offline activities" name="type">
                                            Offline activities
                                        </el-checkbox>
                                        <el-checkbox value="Simple brand exposure" name="type">
                                            Simple brand exposure
                                        </el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="Resources">
                                    <el-radio-group v-model="form.resource">
                                        <el-radio value="Sponsor">Sponsor</el-radio>
                                        <el-radio value="Venue">Venue</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="Activity form">
                                    <el-input v-model="form.desc" type="textarea" />
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">Create</el-button>
                                    <el-button>Cancel</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="margin-bottom: 20px;">
                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Basic Form (Label Top)</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-form label-position="top" :model="form" label-width="auto">
                                <el-form-item label="Activity name">
                                    <el-input v-model="form.name" />
                                </el-form-item>
                                <el-form-item label="Activity zone">
                                    <el-select v-model="form.region" placeholder="please select your zone">
                                        <el-option label="Zone one" value="shanghai" />
                                        <el-option label="Zone two" value="beijing" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="Activity time">
                                    <el-col :span="11">
                                        <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date"
                                            style="width: 100%" />
                                    </el-col>
                                    <el-col :span="2" class="text-center">
                                        <span class="text-gray-500">-</span>
                                    </el-col>
                                    <el-col :span="11">
                                        <el-time-picker v-model="form.date2" placeholder="Pick a time"
                                            style="width: 100%" />
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="Instant delivery">
                                    <el-switch v-model="form.delivery" />
                                </el-form-item>
                                <el-form-item label="Activity type">
                                    <el-checkbox-group v-model="form.type">
                                        <el-checkbox value="Online activities" name="type">
                                            Online activities
                                        </el-checkbox>
                                        <el-checkbox value="Promotion activities" name="type">
                                            Promotion activities
                                        </el-checkbox>
                                        <el-checkbox value="Offline activities" name="type">
                                            Offline activities
                                        </el-checkbox>
                                        <el-checkbox value="Simple brand exposure" name="type">
                                            Simple brand exposure
                                        </el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="Resources">
                                    <el-radio-group v-model="form.resource">
                                        <el-radio value="Sponsor">Sponsor</el-radio>
                                        <el-radio value="Venue">Venue</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="Activity form">
                                    <el-input v-model="form.desc" type="textarea" />
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">Create</el-button>
                                    <el-button>Cancel</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" style="margin-bottom: 20px;">
                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Validation Form</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules"
                                label-width="auto" class="demo-ruleForm" :size="formSize" status-icon>
                                <el-form-item label="Activity name" prop="name">
                                    <el-input v-model="ruleForm.name" />
                                </el-form-item>
                                <el-form-item label="Activity zone" prop="region">
                                    <el-select v-model="ruleForm.region" placeholder="Activity zone">
                                        <el-option label="Zone one" value="shanghai" />
                                        <el-option label="Zone two" value="beijing" />
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="Activity count" prop="count">
                                    <el-select-v2 v-model="ruleForm.count" placeholder="Activity count"
                                        :options="options" />
                                </el-form-item>
                                <el-form-item label="Activity time" required>
                                    <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker v-model="ruleForm.date1" type="date"
                                                aria-label="Pick a date" placeholder="Pick a date"
                                                style="width: 100%" />
                                        </el-form-item>
                                    </el-col>
                                    <el-col class="text-center" :span="2">
                                        <span class="text-gray-500">-</span>
                                    </el-col>
                                    <el-col :span="11">
                                        <el-form-item prop="date2">
                                            <el-time-picker v-model="ruleForm.date2" aria-label="Pick a time"
                                                placeholder="Pick a time" style="width: 100%" />
                                        </el-form-item>
                                    </el-col>
                                </el-form-item>
                                <el-form-item label="Instant delivery" prop="delivery">
                                    <el-switch v-model="ruleForm.delivery" />
                                </el-form-item>
                                <el-form-item label="Activity location" prop="location">
                                    <el-segmented v-model="ruleForm.location" :options="locationOptions" />
                                </el-form-item>
                                <el-form-item label="Activity type" prop="type">
                                    <el-checkbox-group v-model="ruleForm.type">
                                        <el-checkbox value="Online activities" name="type">
                                            Online activities
                                        </el-checkbox>
                                        <el-checkbox value="Promotion activities" name="type">
                                            Promotion activities
                                        </el-checkbox>
                                        <el-checkbox value="Offline activities" name="type">
                                            Offline activities
                                        </el-checkbox>
                                        <el-checkbox value="Simple brand exposure" name="type">
                                            Simple brand exposure
                                        </el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>
                                <el-form-item label="Resources" prop="resource">
                                    <el-radio-group v-model="ruleForm.resource">
                                        <el-radio value="Sponsorship">Sponsorship</el-radio>
                                        <el-radio value="Venue">Venue</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="Activity form" prop="desc">
                                    <el-input v-model="ruleForm.desc" type="textarea" />
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm(ruleFormRef)">
                                        Create
                                    </el-button>
                                    <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup>
import PageHeader from '@/components/admin/PageHeader.vue'
import { reactive, ref } from 'vue'

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}

const formSize = ref('default')
const ruleFormRef = ref(null)
const ruleForm = reactive({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  location: '',
  type: [],
  resource: '',
  desc: '',
})

const locationOptions = ['Home', 'Company', 'School']

const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    { required: true, message: 'Please select Activity zone', trigger: 'change' },
  ],
  count: [
    { required: true, message: 'Please select Activity count', trigger: 'change' },
  ],
  date1: [
    { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' },
  ],
  date2: [
    { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' },
  ],
  location: [
    { required: true, message: 'Please select a location', trigger: 'change' },
  ],
  type: [
    { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' },
  ],
  resource: [
    { required: true, message: 'Please select activity resource', trigger: 'change' },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
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
</style>