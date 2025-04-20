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
                        <h3 style="color:black !important;">Badges</h3>
                    </div>
                </div><br>
                <div class="card-body">
                    <div>
                        <el-badge :value="12" class="item">
                            <el-button>comments</el-button>
                        </el-badge>
                        <el-badge :value="3" class="item">
                            <el-button>replies</el-button>
                        </el-badge>
                        <el-badge :value="1" class="item" type="primary">
                            <el-button>comments</el-button>
                        </el-badge>
                        <el-badge :value="2" class="item" type="warning">
                            <el-button>replies</el-button>
                        </el-badge>
                        <el-badge :value="1" class="item" color="green">
                            <el-button>custom background</el-button>
                        </el-badge>
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link">
                                Click Me
                                <el-icon class="el-icon--right"><caret-bottom /></el-icon>
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item class="clearfix">
                                        comments
                                        <el-badge class="mark" :value="12" />
                                    </el-dropdown-item>
                                    <el-dropdown-item class="clearfix">
                                        replies
                                        <el-badge class="mark" :value="3" />
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                        <el-badge :value="5" class="item">
                            <el-icon size="24">
                                <Bell />
                            </el-icon>
                        </el-badge>
                    </div><br>

                    <div>
                        <h3 style="color:black !important;">Custom Badges</h3>
                        <el-badge value="new" class="item">
                            <el-button>comments</el-button>
                        </el-badge>
                        <el-badge value="hot" class="item">
                            <el-button>replies</el-button>
                        </el-badge>
                        <el-badge value="99" class="item">
                            <el-button>share</el-button>
                            <template #content="{ value }">
                                <div class="custom-content">
                                    <el-icon>
                                        <Message />
                                    </el-icon>
                                    <span>{{ value }}</span>
                                </div>
                            </template>
                        </el-badge>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import PageHeader from '@/components/admin/PageHeader.vue'
import {
    Bell,
    Message
} from '@element-plus/icons-vue'
</script>

<style scoped>
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