<template>
    <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isOpen" @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1">
            <RouterLink to="/">
                <el-icon>
                    <HomeFilled />
                </el-icon>
            </RouterLink>
            <template #title>
                <RouterLink to="/">
                    Admin Dashboard
                </RouterLink>
            </template>
        </el-menu-item>

        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <Compass />
                </el-icon>
                <span>Component</span>
            </template>
            <el-menu-item-group>
                <router-link to="/buttons"><el-menu-item index="1"><el-icon>
                            <Right />
                        </el-icon>Buttons</el-menu-item></router-link>
                <router-link to="/badges"><el-menu-item index="2"><el-icon>
                            <Right />
                        </el-icon>Badges</el-menu-item></router-link>
                <router-link to="/alerts"><el-menu-item index="3"><el-icon>
                            <Right />
                        </el-icon>Alarts</el-menu-item></router-link>
                <router-link to="/modals"><el-menu-item index="4"><el-icon>
                            <Right />
                        </el-icon>Dialog</el-menu-item></router-link>
                <router-link to="/notifications"><el-menu-item index="5"><el-icon>
                            <Right />
                        </el-icon>Notification</el-menu-item></router-link>
            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="3">
            <template #title>
                <el-icon>
                    <List />
                </el-icon>
                <span>Table</span>
            </template>
            <el-menu-item-group>
                <router-link to="/simple-tables"><el-menu-item index="1"><el-icon>
                            <Right />
                        </el-icon>Simple Table</el-menu-item></router-link>
                <router-link to="/data-tables"><el-menu-item index="2"><el-icon>
                            <Right />
                        </el-icon>Data Table</el-menu-item></router-link>
            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="4">
            <template #title>
                <el-icon>
                    <DocumentAdd />
                </el-icon>
                <span>Form</span>
            </template>
            <el-menu-item-group>
                <router-link to="/form-element"><el-menu-item index="1"><el-icon>
                            <Right />
                        </el-icon>Form Element</el-menu-item></router-link>
                <router-link to="/form"><el-menu-item index="1"><el-icon>
                            <Right />
                        </el-icon>Form</el-menu-item></router-link>
            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="5">
            <template #title>
                <el-icon>
                    <Unlock />
                </el-icon>
                <span>Authentication</span>
            </template>
            <el-menu-item-group>

                <router-link to="/login"><el-menu-item index="1"><el-icon>
                            <Right />
                        </el-icon>Login</el-menu-item></router-link>
                <router-link to="/register"><el-menu-item index="2"><el-icon>
                            <Right />
                        </el-icon>Registration</el-menu-item></router-link>
                <router-link to="/forget-password"><el-menu-item index="3"><el-icon>
                            <Right />
                        </el-icon>Forget Password</el-menu-item></router-link>
                <router-link to="/reset-password"><el-menu-item index="4"><el-icon>
                            <Right />
                        </el-icon>Reset Password</el-menu-item></router-link>
            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="6">
            <template #title>
                <el-icon>
                    <setting />
                </el-icon>
                <span>setting</span>
            </template>
            <el-menu-item-group>
                <router-link to="/login"><el-menu-item index="1"><el-icon>
                            <Right />
                        </el-icon>Profile</el-menu-item></router-link>
                <router-link to="/register"><el-menu-item index="2"><el-icon>
                            <Right />
                        </el-icon>Setting</el-menu-item></router-link>

            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="7">
            <template #title>
                <el-icon>
                    <WarnTriangleFilled />
                </el-icon>
                <span>Errors</span>
            </template>
            <el-menu-item-group>

                <router-link to="/errors-500"><el-menu-item index="1"><el-icon>
                            <Right />
                        </el-icon>500 Error</el-menu-item></router-link>
                <router-link to="/errors-404"><el-menu-item index="2"><el-icon>
                            <Right />
                        </el-icon>404 Error</el-menu-item></router-link>
                <router-link to="/errors-coming-soon"><el-menu-item index="3"><el-icon>
                            <Right />
                        </el-icon>Coming Soon</el-menu-item></router-link>
                <router-link to="/blank-page"><el-menu-item index="4"><el-icon>
                            <Right />
                        </el-icon>Blank page</el-menu-item></router-link>
            </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item index="8">
            <el-icon>
                <DArrowLeft />
            </el-icon>
            <template #title>Logout</template>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting, HomeFilled, Right, Compass, List, DocumentAdd, Unlock, DArrowLeft, WarnTriangleFilled } from '@element-plus/icons-vue'

const isCollapse = ref(true)
defineProps(["isOpen"]);

const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style>
a {
    all: unset;
    cursor: pointer;
}

.link:hover {
    color: #409eff;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.el-menu {
    font-weight: bold;
}

.el-menu-item-group .el-menu-item {
    padding: 10px 20px;
    font-size: 14px;
    height: 44px;
}
</style>