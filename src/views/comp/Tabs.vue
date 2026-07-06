<template>
  <div class="page-container">
    <PageHeader title="Tabs" :breadcrumb-items="[
      { label: 'Home', path: '/' },
      { label: 'Tabs', path: '' }
    ]" />
    <br />

    <el-row :gutter="20" class="tabs-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #409eff;">
          <div class="card-header">
            <div class="card-info">
              <h3 style="color:black !important;">Horizontal Tabs</h3>
            </div>
          </div>
          <br />
          <div class="card-body">
            <el-tabs v-model="activeHorizontal" type="card">
              <el-tab-pane label="Overview" name="overview">
                <p>Overview content for the selected tab.</p>
              </el-tab-pane>
              <el-tab-pane label="Details" name="details">
                <p>Details content for the selected tab.</p>
              </el-tab-pane>
              <el-tab-pane label="Reports" name="reports">
                <p>Reports content for the selected tab.</p>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-card>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #e6a23c;">
          <div class="card-header">
            <div class="card-info">
              <h3 style="color:black !important;">Vertical Tabs</h3>
            </div>
          </div>
          <br />
          <div class="card-body vertical-tabs-wrap">
            <el-tabs v-model="activeVertical" tab-position="left" style="min-height: 320px;">
              <el-tab-pane label="Summary" name="summary">
                <p>Summary content for the selected tab.</p>
              </el-tab-pane>
              <el-tab-pane label="Analytics" name="analytics">
                <p>Analytics content for the selected tab.</p>
              </el-tab-pane>
              <el-tab-pane label="Settings" name="settings">
                <p>Settings content for the selected tab.</p>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="tabs-row">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #67c23a;">
          <div class="card-header">
            <div class="card-info">
              <h3 style="color:black !important;">Responsive Tabs</h3>
            </div>
          </div>
          <br />
          <div class="card-body">
            <el-tabs v-model="activeResponsive" type="border-card" class="responsive-tabs">
              <el-tab-pane label="Home" name="home">
                <p>Responsive Home tab content.</p>
              </el-tab-pane>
              <el-tab-pane label="Profile" name="profile">
                <p>Responsive Profile tab content.</p>
              </el-tab-pane>
              <el-tab-pane label="Messages" name="messages">
                <p>Responsive Messages tab content.</p>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import PageHeader from '@/components/admin/PageHeader.vue'
import { ref } from 'vue'

const activeHorizontal = ref('overview')
const activeVertical = ref('summary')
const activeResponsive = ref('home')
</script>

<style scoped>
.tabs-row {
  margin-bottom: 20px;
}

.vertical-tabs-wrap {
  width: 100%;
}

.responsive-tabs {
  width: 100%;
}

.responsive-tabs ::v-deep .el-tabs__nav-scroll,
.vertical-tabs-wrap ::v-deep .el-tabs__nav-scroll,
.el-tabs ::v-deep .el-tabs__nav-scroll {
  background: rgba(86, 88, 245, 0.08);
  border-radius: 4px;
}

@media (max-width: 992px) {
  .vertical-tabs-wrap ::v-deep .el-tabs__header {
    flex-wrap: wrap;
  }

  .vertical-tabs-wrap ::v-deep .el-tabs--left .el-tabs__header {
    width: 100% !important;
  }

  .vertical-tabs-wrap ::v-deep .el-tabs__content {
    width: 100% !important;
  }
}
</style>
