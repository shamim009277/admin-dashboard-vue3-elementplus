<template>
  <div>
    <div class="page-container">
      <!-- Header Section -->
      <PageHeader title="Buttons" :breadcrumb-items="[
        { label: 'Home', path: '/' },
        { label: 'Buttons', path: '' }
      ]" />
      <br>

      <!-- Page Content -->
      <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
        <div class="card-header">
          <div class="card-info">
            <h3 style="color:black !important;">Buttons</h3>
          </div>
        </div><br>
        <div class="card-body">
          <slot>
            <div class="mb-4">
              <el-button>Default</el-button>
              <el-button type="primary">Primary</el-button>
              <el-button type="success">Success</el-button>
              <el-button type="info">Info</el-button>
              <el-button type="warning">Warning</el-button>
              <el-button type="danger">Danger</el-button>
            </div><br>

            <div class="mb-4">
              <el-button plain>Plain</el-button>
              <el-button type="primary" plain>Primary</el-button>
              <el-button type="success" plain>Success</el-button>
              <el-button type="info" plain>Info</el-button>
              <el-button type="warning" plain>Warning</el-button>
              <el-button type="danger" plain>Danger</el-button>
            </div><br>

            <div class="mb-4">
              <el-button round>Round</el-button>
              <el-button type="primary" round>Primary</el-button>
              <el-button type="success" round>Success</el-button>
              <el-button type="info" round>Info</el-button>
              <el-button type="warning" round>Warning</el-button>
              <el-button type="danger" round>Danger</el-button>
            </div><br>

            <div>
              <el-button :icon="Search" circle />
              <el-button type="primary" :icon="Edit" circle />
              <el-button type="success" :icon="Check" circle />
              <el-button type="info" :icon="Message" circle />
              <el-button type="warning" :icon="Star" circle />
              <el-button type="danger" :icon="Delete" circle />
            </div><br>

            <div>
              <h3 style="color:black !important;">Icon Buttons</h3>
              <el-button type="primary" :icon="Edit" />
              <el-button type="primary" :icon="Share" />
              <el-button type="primary" :icon="Delete" />
              <el-button type="primary" :icon="Search">Search</el-button>
              <el-button type="primary">
                Upload<el-icon class="el-icon--right">
                  <Upload />
                </el-icon>
              </el-button>
            </div><br>

            <div>
              <h3 style="color:black !important;">Group Buttons</h3>
              <el-button-group>
                <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
                <el-button type="primary">
                  Next Page<el-icon class="el-icon--right">
                    <ArrowRight />
                  </el-icon>
                </el-button>
              </el-button-group>

              <el-button-group class="ml-4">
                <el-button type="primary" :icon="Edit" />
                <el-button type="primary" :icon="Share" />
                <el-button type="primary" :icon="Delete" />
              </el-button-group>
            </div>

            <div>
              <h3 style="color:black !important;">Button Sizes</h3>
              <div class="flex flex-wrap items-center mb-4">
                <el-button size="large">Large</el-button>
                <el-button>Default</el-button>
                <el-button size="small">Small</el-button>
                <el-button size="large" :icon="Search">Search</el-button>
                <el-button :icon="Search">Search</el-button>
                <el-button size="small" :icon="Search">Search</el-button>
              </div><br>
              <div class="flex flex-wrap items-center mb-4">
                <el-button size="large" round>Large</el-button>
                <el-button round>Default</el-button>
                <el-button size="small" round>Small</el-button>
                <el-button size="large" :icon="Search" round>Search</el-button>
                <el-button :icon="Search" round>Search</el-button>
                <el-button size="small" :icon="Search" round>Search</el-button>
              </div><br>
              <div class="flex flex-wrap items-center">
                <el-button :icon="Search" size="large" circle />
                <el-button :icon="Search" circle />
                <el-button :icon="Search" size="small" circle />
              </div>
            </div>

            <div>
              <h3 style="color:black !important;">Custom Sizes</h3>
              <div>
                <el-button color="#626aef" :dark="isDark">Default</el-button>
                <el-button color="#E5C416" :dark="isDark">Default</el-button>
                <el-button color="#684E8C" :dark="isDark">Default</el-button>
                <el-button color="#E76A38" :dark="isDark">Default</el-button>
                <el-button color="#626aef" :dark="isDark" plain>Plain</el-button>

                <el-button color="#626aef" :dark="isDark" disabled>Disabled</el-button>
                <el-button color="#626aef" :dark="isDark" disabled plain>
                  Disabled Plain
                </el-button>
              </div>
            </div>

          </slot>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import PageHeader from '@/components/admin/PageHeader.vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  Share,
  ArrowLeft,
  ArrowRight
} from '@element-plus/icons-vue'
</script>