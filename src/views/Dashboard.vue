<template>
    <div>
        <!-- First Row - 6 Cards -->
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-blue" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>{{ $t('dashboard.number_of_sales') }}</h3>
                            <h1>1215</h1>
                            <p> <span>+2.5% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><ShoppingBag /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-orange" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>{{ $t('dashboard.total_products') }}</h3>
                            <h1>3500</h1>
                            <p> <span>+2.5% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><WalletFilled /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-green" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>{{ $t('dashboard.sales_revinue') }}</h3>
                            <h1>$ 453.54</h1>
                            <p> <span>+2.5% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><WalletFilled /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-red" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>{{ $t('dashboard.total_users') }}</h3>
                            <h1>12 K</h1>
                            <p> <span>+2.5% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><UserFilled /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-purple" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>Active Sessions</h3>
                            <h1>342</h1>
                            <p> <span>+1.2% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><UserFilled /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-teal" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>New Orders</h3>
                            <h1>89</h1>
                            <p> <span>+5.1% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><ShoppingBag /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>
        </el-row>

        <!-- Second Row - 6 Cards -->
        <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-indigo" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>Pending Orders</h3>
                            <h1>23</h1>
                            <p> <span>-1.2% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><WalletFilled /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-pink" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>Completed</h3>
                            <h1>156</h1>
                            <p> <span>+3.8% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><UserFilled /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-cyan" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>Revenue Today</h3>
                            <h1>$ 1,234</h1>
                            <p> <span>+8.5% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><WalletFilled /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-amber" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>Refunds</h3>
                            <h1>12</h1>
                            <p> <span>-0.5% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><ShoppingBag /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-lime" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>Conversion</h3>
                            <h1>3.2%</h1>
                            <p> <span>+0.8% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><UserFilled /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>

            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
                <el-card class="dashboard-card gradient-rose" shadow="hover">
                    <div class="card-header">
                        <div class="card-info">
                            <h3>Avg Order</h3>
                            <h1>$ 89</h1>
                            <p> <span>+2.1% {{ $t('dashboard.from_last_week') }}</span></p>
                        </div>

                        <div class="card-icon">
                            <el-icon :size="24"><WalletFilled /></el-icon>
                        </div>
                    </div>
                </el-card><br>
            </el-col>
        </el-row>

        <!-- Charts Row -->
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

        <!-- Recent Orders & Charts Row -->
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
import { defineAsyncComponent } from 'vue'

const AreaChart = defineAsyncComponent(() => import('@/components/chart/AreaChart.vue'))
const RaderChart = defineAsyncComponent(() => import('@/components/chart/RaderChart.vue'))
const RecentOrder = defineAsyncComponent(() => import('@/components/RecentOrder.vue'))
const PieChart = defineAsyncComponent(() => import('@/components/chart/PieChart.vue'))
const ColumnChart = defineAsyncComponent(() => import('@/components/chart/ColumnChart.vue'))
const CircleChart = defineAsyncComponent(() => import('@/components/chart/CircleChart.vue'))
</script>

<style scoped>
.dashboard-card {
    border-radius: 12px;
    overflow: hidden;
    border: none;
}

.gradient-blue {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.gradient-orange {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
}

.gradient-green {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    color: white;
}

.gradient-red {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
    color: white;
}

.gradient-purple {
    background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);
    color: white;
}

.gradient-teal {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    color: white;
}

.gradient-indigo {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.gradient-pink {
    background: linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%);
    color: white;
}

.gradient-cyan {
    background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%);
    color: white;
}

.gradient-amber {
    background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%);
    color: white;
}

.gradient-lime {
    background: linear-gradient(135deg, #a8ff78 0%, #78ffd6 100%);
    color: white;
}

.gradient-rose {
    background: linear-gradient(135deg, #ff6a00 0%, #ee0979 100%);
    color: white;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    font-family: 'Noto Sans Bengali', sans-serif;
}

.card-info {
    text-align: left;
    flex: 1;
}

.card-info h3 {
    font-size: 11px;
    font-weight: 500;
    margin: 0 0 6px 0;
    opacity: 0.9;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.card-info h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 6px 0;
    line-height: 1;
}

.card-info p {
    font-size: 11px;
    margin: 0;
    opacity: 0.85;
}

.card-info span {
    font-weight: 600;
}

.card-icon {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
}

.el-col {
    border-radius: 4px;
}

.dashboard-card1:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.card-body {
    padding: 0;
}

@media (max-width: 768px) {
    .card-info h3 {
        font-size: 11px;
    }
    
    .card-info h1 {
        font-size: 24px;
    }
    
    .card-info p {
        font-size: 11px;
    }
    
    .card-icon {
        width: 40px;
        height: 40px;
    }
    
    .card-icon .el-icon {
        font-size: 32px !important;
    }
}
</style>
