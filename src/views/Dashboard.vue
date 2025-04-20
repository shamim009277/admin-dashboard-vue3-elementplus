<template>
    <div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
                <el-card class="dashboard-card1" shadow="hover" style="border-right: 4px solid #409eff;">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>{{ $t('dashboard.number_of_sales') }}</h3>
                            <h1>1215</h1>
                            <p> <span>+2.5% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <el-button type="primary" :icon="ShoppingBag" circle size="large" />
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
                <el-card class="dashboard-card1" shadow="hover" style="border-right: 4px solid #e6a23c;">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>{{ $t('dashboard.total_products') }}</h3>
                            <h1 style="color: #e6a23c !important;">3500</h1>
                            <p> <span>+2.5% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <el-button type="warning" :icon="WalletFilled" circle size="large" />
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
                <el-card class="dashboard-card1" shadow="hover" style="border-right: 4px solid #67c23a;">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>{{ $t('dashboard.sales_revinue') }}</h3>
                            <h1 style="color: #67c23a !important;">$ 453.54</h1>
                            <p> <span>+2.5% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <el-button type="success" :icon="WalletFilled" circle size="large" />
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="6">
                <el-card class="dashboard-card1" shadow="hover" style="border-right: 4px solid #f56c6c;">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>{{ $t('dashboard.total_users') }}</h3>
                            <h1 style="color: #f56c6c !important;">12 K</h1>
                            <p> <span>+2.5% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <el-button type="danger" :icon="UserFilled" circle size="large" />
                    </div>
                </el-card><br>
            </el-col>
        </el-row>

        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
                <el-card class="dashboard-card1" shadow="hover">
                    <AreaChart></AreaChart>
                </el-card><br>
            </el-col>
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
                <el-card class="dashboard-card1" shadow="hover">
                    <RaderChart></RaderChart>
                </el-card><br>
            </el-col>
        </el-row>

        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <el-card class="dashboard-card1" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3 style="color:black !important;">Recent Orders</h3>
                        </div>
                    </div><br>
                    <div class="card-body">
                        <RecentOrder />
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="8">
                <el-card class="dashboard-card1" shadow="hover" style="height: 405px;">
                    <PieChart></PieChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="8">
                <el-card class="dashboard-card1" shadow="hover" style="height: 405px;">
                    <ColumnChart></ColumnChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="8">
                <el-card class="dashboard-card1" shadow="hover" style="height: 405px;">
                    <CircleChart></CircleChart>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { UserFilled, WalletFilled, ShoppingBag } from '@element-plus/icons-vue'
import AreaChart from '@/components/chart/AreaChart.vue'
import RaderChart from '@/components/chart/RaderChart.vue'
import RecentOrder from '@/components/RecentOrder.vue'
import PieChart from '@/components/chart/PieChart.vue'
import ColumnChart from '@/components/chart/ColumnChart.vue'
import CircleChart from '@/components/chart/CircleChart.vue'
</script>

<style scoped>
.card-header {
    font-family: 'Noto Sans Bengali';
}
.el-col {
    border-radius: 4px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.dashboard-card1:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-info {
    text-align: center;
}
.card-info h1 {
    text-align: center;
    font-weight: bold;
    font-size: 20px !important;
    color: #409eff !important;
    margin: 0;
    padding: 5px 0px;
}

.card-info h3 {
    font-size: 18px;
    color: #303133;
    margin: 0;
}
.card-info p {
    font-size: 14px;
    color: #909399;
    margin: 0;
}
</style>