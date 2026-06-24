<template>
    <el-header class="header">
        <div class="menu-container">
            <el-button class="menu-btn" @click="$emit('toggleSidebar')" plain>
                <el-icon :style="{ fontSize: '20px' }">
                    <Expand />
                </el-icon>
            </el-button>
        </div>

        <div class="flex top-menu">
            <el-dropdown class="button-gap">
                <el-badge :value="12" class="badgh-btn">
                    <el-button class="alert-btn" plain>
                        <el-icon class="el-icon--right" :style="{ fontSize: '20px' }">
                            <BellFilled />
                        </el-icon>
                    </el-button>
                </el-badge>

                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>New message from John</el-dropdown-item>
                        <el-dropdown-item>New message from John</el-dropdown-item>
                        <el-dropdown-item>New message from John</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

            <!-- Dropdown Button for Notifications -->
            <el-dropdown class="button-gap" trigger="click" @command="handleCommand">
                <el-button>
                    Notifications
                    <el-badge :value="notificationCount" class="notification-badge">
                        <i class="el-icon-bell"></i>
                    </el-badge>
                </el-button>
                <template #dropdown>
                    <!-- Notification List -->
                    <el-dropdown-menu class="notification-menu">
                        <el-dropdown-item v-for="(item, index) in notifications" :key="index" @click="notify(item)">
                            <div class="notif-item">
                                <div class="notif-top">
                                    <span class="notif-user">{{ item.user }}</span>
                                    <span class="notif-time">{{ formatTime(item.time) }}</span>
                                </div>
                                <div class="notif-msg">{{ truncate(item.message, 20) }}</div>
                            </div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

            <el-select v-model="currentLocale" clearable placeholder="Language" style="width: 140px"
                @change="changeLanguage">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>

            <el-dropdown>
                <el-button class="user-btn" plain>
                    <el-icon class="el-icon--right" :style="{ fontSize: '18px' }">
                        <UserFilled />
                    </el-icon>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item><el-icon>
                                <User />
                            </el-icon> Profile</el-dropdown-item>
                        <el-dropdown-item><el-icon>
                                <Setting />
                            </el-icon> Settings</el-dropdown-item>
                        <el-dropdown-item><el-icon>
                                <CaretLeft />
                            </el-icon> Logout</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup>
import { Menu, UserFilled, Avatar, Expand, User, Setting, CaretLeft, BellFilled } from "@element-plus/icons-vue";
import { ref, watch, onMounted, computed } from 'vue'
import { loadLocaleMessages } from '@/i18n'
import { ElNotification } from 'element-plus';

const value = ref('');
const options = [
    { value: 'en', label: 'English' },
    { value: 'bn', label: 'বাংলা' },
];
const currentLocale = ref('en');

async function changeLanguage() {
    await loadLocaleMessages(currentLocale.value);
}

// Watch language change
onMounted(async () => {
  await loadLocaleMessages(currentLocale.value);
});

const notifications = ref([
    { user: 'John', message: 'New message from John', time: new Date().toISOString() },
    { user: 'Shop', message: 'Your order has been shipped and is on its way', time: new Date(Date.now() - 1000 * 60 * 60).toISOString() },
    { user: 'Alice', message: 'New comment on your post: Nice work!', time: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() }
]);

const notificationCount = computed(() => notifications.value.length);

const handleCommand = (command) => {
    // Handle command logic when dropdown item is clicked, if needed
};

const truncate = (str, n) => {
    if (!str) return '';
    return str.length > n ? str.slice(0, n) + '...' : str;
};

const formatTime = (iso) => {
    if (!iso) return '';
    const d = new Date(iso);
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    if (sameDay) return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return d.toLocaleString();
};

const notify = (notification) => {
    ElNotification({
        title: notification.user || 'Notification',
        message: notification.message,
        type: 'info',
        duration: 3000
    });
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #626aef;
    color: white;
    padding: 10px 12px;
    height: 56px;
}

.menu-container {
    flex-grow: 1;
}

.menu-btn {
    background-color: #626aef;
    border: none;
    font-size: 18px;
    color: white;
    padding: 0px;

    &:hover {
        background-color: transparent !important;
        border-color: transparent !important;
        color: inherit !important;
        opacity: 0.6;
    }

    &:focus {
        outline: none !important;
    }
}

.alert-btn, .user-btn {
    background-color: #626aef;
    border: none;
    font-size: 18px;
    color: white;
    padding: 0px;
}

.alert-btn:hover, .user-btn:hover {
    background-color: #626aef;
    opacity: 0.7;
    border: none;
    color: white;
}

.badgh-btn, .notification-badge {
    &:hover {
        background-color: transparent !important;
        border-color: transparent !important;
    }

    &:focus {
        outline: none !important;
    }
}

.button-gap {
    margin-right: 15px;
}

.el-badge__content {
    font-size: 10px !important;
}

.notification-menu {
    min-width: 260px;
}

.notif-item {
    display: flex;
    flex-direction: column;
    padding: 6px 8px;
    width: 100%;
}

.notif-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
    width: 100%;
}

.notif-user {
    font-weight: 600;
    font-size: 13px;
}

.notif-msg {
    font-size: 13px;
    color: #666;
}

.notif-time {
    font-size: 12px;
    color: #999;
    margin-left: auto;
}

.notification-menu .el-dropdown-item {
    padding: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .header {
        flex-direction: column;
        align-items: flex-start;
    }
    .flex {
        width: 100%;
        flex-direction: column;
        margin-top: 10px;
    }

    .menu-btn {
        margin-bottom: 10px;
    }

    .button-gap {
        margin-right: 0;
        margin-bottom: 10px;
    }

    .el-select {
        width: 100%;
    }
    .top-menu{
        display: none;
    }
}
</style>
