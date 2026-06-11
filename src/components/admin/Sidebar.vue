<template>
    <el-menu :default-active="activeIndex" class="el-menu-vertical-demo" :collapse="isOpen" :unique-opened="true" @open="handleOpen" @close="handleClose" @select="onSelect">
        <el-menu-item index="1">
            <RouterLink to="/">
                <el-icon>
                    <HomeFilled />
                </el-icon>
            </RouterLink>
            <template #title>
                <RouterLink to="/" @click="onSelect('1')">
                    Admin Dashboard
                </RouterLink>
            </template>
        </el-menu-item>

        <el-sub-menu index="2" :class="{ 'parent-active': activeParentIndex === '2' }">
            <template #title>
                <div @click="selectParent('2')" style="display:flex;align-items:center;gap:8px;">
                    <el-icon>
                        <Compass />
                    </el-icon>
                    <span v-if="!isOpen">Component</span>
                </div>
            </template>
            <el-menu-item-group>
                <router-link to="/buttons" @click="onSelect('2-1')">
                    <el-menu-item index="2-1"><el-icon>
                            <Right />
                        </el-icon>Buttons</el-menu-item>
                </router-link>
                <router-link to="/badges" @click="onSelect('2-2')"><el-menu-item index="2-2"><el-icon>
                            <Right />
                        </el-icon>Badges</el-menu-item></router-link>
                <router-link to="/alerts" @click="onSelect('2-3')"><el-menu-item index="2-3"><el-icon>
                            <Right />
                        </el-icon>Alarts</el-menu-item></router-link>
                <router-link to="/modals" @click="onSelect('2-4')"><el-menu-item index="2-4"><el-icon>
                            <Right />
                        </el-icon>Dialog</el-menu-item></router-link>
                <router-link to="/notifications" @click="onSelect('2-5')"><el-menu-item index="2-5"><el-icon>
                            <Right />
                        </el-icon>Notification</el-menu-item></router-link>
            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="3" :class="{ 'parent-active': activeParentIndex === '3' }">
            <template #title>
                <div @click="selectParent('3')" style="display:flex;align-items:center;gap:8px;">
                    <el-icon>
                        <List />
                    </el-icon>
                    <span v-if="!isOpen">Table</span>
                </div>
            </template>
            <el-menu-item-group>
                <router-link to="/simple-tables" @click="onSelect('3-1')"><el-menu-item index="3-1"><el-icon>
                            <Right />
                        </el-icon>Simple Table</el-menu-item></router-link>
                <router-link to="/data-tables" @click="onSelect('3-2')"><el-menu-item index="3-2"><el-icon>
                            <Right />
                        </el-icon>Data Table</el-menu-item></router-link>
            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="4" :class="{ 'parent-active': activeParentIndex === '4' }">
            <template #title>
                <div @click="selectParent('4')" style="display:flex;align-items:center;gap:8px;">
                    <el-icon>
                        <DocumentAdd />
                    </el-icon>
                    <span v-if="!isOpen">Form</span>
                </div>
            </template>
            <el-menu-item-group>
                <router-link to="/form-element" @click="onSelect('4-1')"><el-menu-item index="4-1"><el-icon>
                            <Right />
                        </el-icon>Form Element</el-menu-item></router-link>
                <router-link to="/form" @click="onSelect('4-2')"><el-menu-item index="4-2"><el-icon>
                            <Right />
                        </el-icon>Form</el-menu-item></router-link>
            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="5" :class="{ 'parent-active': activeParentIndex === '5' }">
            <template #title>
                <div @click="selectParent('5')" style="display:flex;align-items:center;gap:8px;">
                    <el-icon>
                        <Unlock />
                    </el-icon>
                    <span v-if="!isOpen">Authentication</span>
                </div>
            </template>
            <el-menu-item-group>

                <router-link to="/login" @click="onSelect('5-1')"><el-menu-item index="5-1"><el-icon>
                            <Right />
                        </el-icon>Login</el-menu-item></router-link>
                <router-link to="/register" @click="onSelect('5-2')"><el-menu-item index="5-2"><el-icon>
                            <Right />
                        </el-icon>Registration</el-menu-item></router-link>
                <router-link to="/forget-password" @click="onSelect('5-3')"><el-menu-item index="5-3"><el-icon>
                            <Right />
                        </el-icon>Forget Password</el-menu-item></router-link>
                <router-link to="/reset-password" @click="onSelect('5-4')"><el-menu-item index="5-4"><el-icon>
                            <Right />
                        </el-icon>Reset Password</el-menu-item></router-link>
            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="6" :class="{ 'parent-active': activeParentIndex === '6' }">
            <template #title>
                <div @click="selectParent('6')" style="display:flex;align-items:center;gap:8px;">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span v-if="!isOpen">setting</span>
                </div>
            </template>
            <el-menu-item-group>
                <router-link to="/login" @click="onSelect('6-1')"><el-menu-item index="6-1"><el-icon>
                            <Right />
                        </el-icon>Profile</el-menu-item></router-link>
                <router-link to="/register" @click="onSelect('6-2')"><el-menu-item index="6-2"><el-icon>
                            <Right />
                        </el-icon>Setting</el-menu-item></router-link>

            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="7" :class="{ 'parent-active': activeParentIndex === '7' }">
            <template #title>
                <div @click="selectParent('7')" style="display:flex;align-items:center;gap:8px;">
                    <el-icon>
                        <WarnTriangleFilled />
                    </el-icon>
                    <span v-if="!isOpen">Errors</span>
                </div>
            </template>
            <el-menu-item-group>
                <router-link to="/errors-500" @click="onSelect('7-1')"><el-menu-item index="7-1"><el-icon>
                            <Right />
                        </el-icon>500 Error</el-menu-item></router-link>
                <router-link to="/errors-404" @click="onSelect('7-2')"><el-menu-item index="7-2"><el-icon>
                            <Right />
                        </el-icon>404 Error</el-menu-item></router-link>
                <router-link to="/errors-coming-soon" @click="onSelect('7-3')"><el-menu-item index="7-3"><el-icon>
                            <Right />
                        </el-icon>Coming Soon</el-menu-item></router-link>
                <router-link to="/blank-page" @click="onSelect('7-4')"><el-menu-item index="7-4"><el-icon>
                            <Right />
                        </el-icon>Blank page</el-menu-item></router-link>
            </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item index="8">
            <RouterLink to="/documentation" @click="onSelect('8')">
                <el-icon>
                    <Document />
                </el-icon>
            </RouterLink>
            <template #title><RouterLink to="/documentation" @click="onSelect('8')">Documentation</RouterLink></template>
        </el-menu-item>

        <el-menu-item index="9">
            <a class="menu-logout" @click.prevent="onSelect('9')">
                <el-icon>
                    <DArrowLeft />
                </el-icon>
            </a>
            <template #title><a class="menu-logout" @click.prevent="onSelect('9')">Logout</a></template>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting, HomeFilled, Right, Compass, List, DocumentAdd, Unlock, DArrowLeft, WarnTriangleFilled } from '@element-plus/icons-vue'

const isCollapse = ref(true)
defineProps(["isOpen"]);

const activeIndex = ref('1')
const activeParentIndex = ref('')

function onSelect(index: string) {
    activeIndex.value = index
    if (index.includes('-')) {
        activeParentIndex.value = index.split('-')[0]
    } else {
        activeParentIndex.value = index
    }
}

function selectParent(parent: string) {
    activeParentIndex.value = parent
    activeIndex.value = parent
}

const handleOpen = (key: string, keyPath: string[]) => {
    activeParentIndex.value = key
    activeIndex.value = key
}
const handleClose = (key: string, keyPath: string[]) => {
    if (activeParentIndex.value === key) activeParentIndex.value = ''
}
</script>

<style>
a {
    all: unset;
    cursor: pointer;
}

.link:hover {
    color: #626AEF;
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

/* Sidebar icon colors: default black, active uses primary color */
.el-menu .el-icon {
    color: #2b2b2b;
    transition: color 0.2s ease;
}

.el-menu .el-menu-item.is-active .el-icon,
.el-menu .el-menu-item.is-active .el-icon,
.el-menu .el-sub-menu.is-active .el-icon,
.el-menu .el-sub-menu.parent-active .el-icon {
    color: #626AEF;
    font-weight: bold;
}

/* active background for parent and child */
.el-menu .el-menu-item.is-active {
    background-color: rgba(25, 36, 240, 0.08);
    color: #626AEF;
}
.el-menu .el-sub-menu.parent-active > .el-submenu__title,
.el-menu .el-sub-menu.is-active > .el-submenu__title {
    background-color: rgba(25, 36, 239, 0.06);
    color: #626AEF;
}
</style>