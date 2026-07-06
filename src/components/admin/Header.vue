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
                <el-badge :value="alertCount" class="badgh-btn">
                    <el-button class="alert-btn" plain>
                        <el-icon class="el-icon--right" :style="{ fontSize: '20px' }">
                            <BellFilled />
                        </el-icon>
                    </el-button>
                </el-badge>

                <template #dropdown>
                    <el-dropdown-menu class="notification-menu">
                        <el-dropdown-item v-for="(item, idx) in alerts" :key="idx" @click="notify(item)">
                            <div class="alert-item" :class="{ 'is-read': item.read }">
                                <div class="alert-avatar" :style="{ background: avatarColor(item.user), color: '#fff' }">{{ (item.user || '?').charAt(0).toUpperCase() }}</div>
                                <div class="alert-content">
                                    <div class="alert-top">
                                        <span class="alert-user">{{ item.user }}</span>
                                        <span class="alert-time">{{ formatTime(item.time) }}</span>
                                    </div>
                                    <div class="alert-msg">{{ truncate(item.message, 20) }}</div>
                                </div>
                            </div>
                        </el-dropdown-item>

                        <div class="alerts-footer">
                            <a href="#" class="see-all" @click.prevent="openAll">See all notifications</a>
                            <el-button type="text" class="read-all" @click.stop="markAllRead">Read all</el-button>
                        </div>
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

            <el-dropdown class="user-dropdown">
                <el-button class="user-btn" plain circle>
                    <el-icon class="el-icon--right" :style="{ fontSize: '18px', margin: '0px' }">
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

const alerts = ref([
    { user: 'John', message: 'Server restarted successfully', time: new Date().toISOString(), read: false },
    { user: 'System', message: 'Backup completed at 03:20 AM', time: new Date(Date.now() - 1000 * 60 * 60).toISOString(), read: false },
    { user: 'Alice', message: 'New signup: alice@example.com', time: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), read: false }
]);

const alertCount = computed(() => alerts.value.filter(a => !a.read).length);

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
    // mark this alert as read when clicked
    if (notification && notification.read === false) {
        notification.read = true;
    }
    ElNotification({
        title: notification.user || 'Notification',
        message: notification.message,
        type: 'info',
        duration: 3000
    });
};

const markAllRead = () => {
    alerts.value.forEach(a => a.read = true);
};

const openAll = () => {
    // emit an event so parent can navigate to notifications page if desired
    // or implement navigation here
    // Example: emit('openNotifications') — but script setup needs defineEmits if used
    console.log('Open all notifications (implement navigation)');
};

// Avatar color palette and deterministic picker based on username
const _avatarColors = ['#7b8cff', '#f56c6c', '#e6a23c', '#67c23a', '#409eff', '#9c27b0', '#ff9800', '#00bcd4'];
const avatarColor = (user) => {
    if (!user) return 'rgba(98,106,239,0.12)';
    // simple hash by summing char codes
    let h = 0;
    for (let i = 0; i < user.length; i++) h += user.charCodeAt(i);
    return _avatarColors[h % _avatarColors.length];
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #626aef;
    color: white;
    margin-top: 0;
    padding: 10px 12px 10px;
    height: 56px;
}

.top-menu {
    display: flex;
    align-items: center;
    gap: 8px;
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

.user-dropdown {
    margin-left: 8px;
    display: flex;
    align-items: center;
}

.user-btn {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    aspect-ratio: 1 / 1;
    border-radius: 999px;
    border: 2px solid #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background-color: transparent;
    overflow: hidden;
    margin: 0 !important;
}

.user-btn .el-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.user-btn:hover,
.user-btn:focus,
.user-btn:focus-visible {
    background-color: rgba(255, 255, 255, 0.15) !important;
    border: 2px solid #ffffff !important;
    box-shadow: none !important;
    color: white !important;
    outline: none !important;
}

.alert-btn:hover {
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

.alert-item {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    padding: 8px;
}

.alert-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(98,106,239,0.12);
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
}

.alert-content {
    flex: 1;
    min-width: 0;
}

.alert-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.alert-user {
    font-weight: 600;
}

.alert-msg {
    color: #666;
    font-size: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.alert-time {
    color: #999;
    font-size: 12px;
}

.alert-item.is-read {
    opacity: 0.45;
}

.alerts-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-top: 1px solid #f0f0f0;
}

.alerts-footer .see-all {
    color: #409eff;
    text-decoration: none;
}

.alerts-footer .read-all {
    color: #606266;
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
