<template>
    <el-card class="header-card" shadow="never" :body-style="{ padding: '10px 0px', backgroundColor: '#F8F8F8' }"
        style="background-color: #F8F8F8; border: none;">
        <div class="header-content">
            <div class="title-wrap">
                <el-icon v-if="titleIcon" class="page-title-icon" :size="22">
                    <component :is="titleIcon" />
                </el-icon>
                <h1 class="page-title">{{ title }}</h1>
            </div>

            <el-breadcrumb separator="/" class="breadcrumb-wrap">
                <el-breadcrumb-item v-for="(item, index) in breadcrumbItems" :key="index" :to="item.path">
                    <span class="breadcrumb-item">
                        <el-icon v-if="item.icon || breadcrumbIcon" class="breadcrumb-icon">
                            <component :is="item.icon || breadcrumbIcon" />
                        </el-icon>
                        <span>{{ item.label }}</span>
                    </span>
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </el-card>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { House, Location } from '@element-plus/icons-vue'

defineProps({
    title: {
        type: String,
        required: true,
    },
    breadcrumbItems: {
        type: Array as PropType<Array<{ label: string; path?: string; icon?: string | object }>>,
        required: true,
        default: () => [],
    },
    titleIcon: {
        type: [String, Object],
        default: House,
    },
    breadcrumbIcon: {
        type: [String, Object],
        default: Location,
    },
});
</script>
<style scoped>
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-title-icon {
  color: #626AEF;
  background: rgba(98, 106, 239, 0.12);
  padding: 6px;
  border-radius: 8px;
}

.page-title {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
}

.breadcrumb-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.breadcrumb-icon {
  color: #626AEF;
  font-size: 14px;
}
</style>