<template>
    <div>
        <div class="page-container">
            <!-- Header Section -->
            <PageHeader title="Dialog" :breadcrumb-items="[
                { label: 'Home', path: '/' },
                { label: 'Dialog', path: '' }
            ]" />
            <br>

            <!-- Page Content -->
            <el-card class="dashboard-card1" shadow="hover" style="border-top: 2px solid #626AEF;">
                <div class="card-header">
                    <div class="card-info">
                        <h3 style="color:black !important;">Dialog</h3>
                    </div>
                </div><br>
                <div class="card-body">
                    <!-- Click to open the Dialog -->
                    <el-button plain @click="dialogVisible = true" style="margin-right:10px;">
                        Click to open the Dialog
                    </el-button>

                    <el-dialog v-model="dialogVisible" title="Tips" width="500">
                        <span>This is a message</span>
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="dialogVisible = false">Cancel</el-button>
                                <el-button type="primary" @click="dialogVisible = false">
                                    Confirm
                                </el-button>
                            </div>
                        </template>
                    </el-dialog>
                    <!-- End Click to open the Dialog -->



                    <!-- Nested Dialog -->
                    <el-button plain @click="outerVisible = true">
                        Nested Dialog
                    </el-button>

                    <el-dialog v-model="outerVisible" title="Outer Dialog" width="800">
                        <span>This is the outer Dialog</span>
                        <el-dialog v-model="innerVisible" width="500" title="Inner Dialog" append-to-body>
                            <span>This is the inner Dialog</span>
                        </el-dialog>
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="outerVisible = false">Cancel</el-button>
                                <el-button type="primary" @click="innerVisible = true">
                                    Open the inner Dialog
                                </el-button>
                            </div>
                        </template>
                    </el-dialog>

                    <h3>Align Center Dialog</h3>
                    <el-button plain @click="centerDialogVisible = true">
                        Click to open the Dialog
                    </el-button>

                    <el-dialog v-model="centerDialogVisible" title="Warning" width="500" align-center>
                        <span>Open the dialog from the center from the screen</span>
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="centerDialogVisible = false">Cancel</el-button>
                                <el-button type="primary" @click="centerDialogVisible = false">
                                    Confirm
                                </el-button>
                            </div>
                        </template>
                    </el-dialog>


                    <h3>Draggable Dialog</h3>
                    <el-button plain @click="dialogVisible = true">
                        Open a draggable Dialog
                    </el-button>

                    <el-button plain @click="dialogOverflowVisible = true">
                        Open a overflow draggable Dialog
                    </el-button>

                    <el-dialog v-model="dialogVisible" title="Tips" width="500" draggable>
                        <span>It's a draggable Dialog</span>
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="dialogVisible = false">Cancel</el-button>
                                <el-button type="primary" @click="dialogVisible = false">
                                    Confirm
                                </el-button>
                            </div>
                        </template>
                    </el-dialog>

                    <el-dialog v-model="dialogOverflowVisible" title="Tips" width="500" draggable overflow>
                        <span>It's a overflow draggable Dialog</span>
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="dialogOverflowVisible = false">Cancel</el-button>
                                <el-button type="primary" @click="dialogOverflowVisible = false">
                                    Confirm
                                </el-button>
                            </div>
                        </template>
                    </el-dialog>


                    <h3>Full Screen Dialog</h3>
                    <el-button plain @click="dialogVisibleFull = true">
                        Open the fullscreen Dialog
                    </el-button>

                    <el-dialog v-model="dialogVisibleFull" fullscreen top="40vh" width="70%" draggable>
                        <span>It's a fullscreen Dialog</span>
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="dialogVisibleFull = false">Cancel</el-button>
                                <el-button type="primary" @click="dialogVisibleFull = false">
                                    Confirm
                                </el-button>
                            </div>
                        </template>
                    </el-dialog>


                    <h3>Modal</h3>
                    <el-button plain @click="dialogVisibleModal = true">
                        Open the modal Dialog
                    </el-button>

                    <el-dialog v-model="dialogVisibleModal" :modal="false">
                        <span>It's a modal Dialog</span>
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="dialogVisibleModal = false">Cancel</el-button>
                                <el-button type="primary" @click="dialogVisibleModal = false">
                                    Confirm
                                </el-button>
                            </div>
                        </template>
                    </el-dialog>
                </div>
            </el-card><br>
        </div>
    </div>
</template>

<script lang="ts" setup>
import PageHeader from '@/components/admin/PageHeader.vue'
import { Bell, Message } from '@element-plus/icons-vue'

import { ref } from 'vue'
const dialogVisible = ref(false)
const dialogVisibleFull = ref(false)
const dialogVisibleModal = ref(false)

const outerVisible = ref(false)
const innerVisible = ref(false)

const centerDialogVisible = ref(false)

const dialogOverflowVisible = ref(false)
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