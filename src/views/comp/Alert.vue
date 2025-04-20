<template>
    <div>
        <div class="page-container">
            <!-- Header Section -->
            <PageHeader title="Alerts" :breadcrumb-items="[
                { label: 'Home', path: '/' },
                { label: 'Alerts', path: '' }
            ]" />
            <br>

            <!-- Page Content -->
            <el-row :gutter="10">
                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Basic Alert</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-alert title="Success alert" type="success" />
                            <el-alert title="Info alert" type="info" />
                            <el-alert title="Warning alert" type="warning" />
                            <el-alert title="Error alert" type="error" />
                        </div>
                    </el-card><br>

                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Alert With Icon</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-alert title="Success alert" type="success" show-icon />
                            <el-alert title="Info alert" type="info" show-icon />
                            <el-alert title="Warning alert" type="warning" show-icon />
                            <el-alert title="Error alert" type="error" show-icon />
                        </div>
                    </el-card>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Dark Alert</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-alert title="Success alert" type="success" effect="dark" />
                            <el-alert title="Info alert" type="info" effect="dark" />
                            <el-alert title="Warning alert" type="warning" effect="dark" />
                            <el-alert title="Error alert" type="error" effect="dark" />
                        </div>
                    </el-card><br>

                    <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                        <div class="card-header">
                            <div class="card-info">
                                <h3 style="color:black !important;">Alert With Icon</h3>
                            </div>
                        </div><br>
                        <div class="card-body">
                            <el-alert title="Success alert" type="success" description="More text description"
                                show-icon />
                            <el-alert title="Info alert" type="info" description="More text description" show-icon />
                            <el-alert title="Warning alert" type="warning" description="More text description"
                                show-icon />
                            <el-alert title="Error alert" type="error" description="More text description" show-icon />
                        </div>
                    </el-card>
                </el-col>
            </el-row>


        </div>
    </div>
</template>

<script lang="ts" setup>
import PageHeader from '@/components/admin/PageHeader.vue'
</script>

<style scoped>
.el-alert {
    margin: 20px 0 0;
}

.el-alert:first-child {
    margin: 0;
}
</style>