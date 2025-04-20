<template>
    <el-header class="header">
        <div class="menu-container">
            <el-button class="menu-btn" @click="$emit('toggleSidebar')" plain>
                <el-icon :style="{ fontSize: '20px' }">
                    <Expand />
                </el-icon>
            </el-button>
        </div>

        <div class="flex">
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
            <el-dropdown class="button-gap" trigger="click" @command="handleCommand" v-show="showNotifications">
                <el-button>
                    Notifications
                    <el-badge :value="notificationCount" class="notification-badge">
                        <i class="el-icon-bell"></i>
                    </el-badge>
                </el-button>
                <template #dropdown>
                    <!-- Notification List -->
                    <el-dropdown-menu>
                        <el-dropdown-item v-for="(item, index) in notifications" :key="index"
                            @click.native="notify(item)">
                            {{ item.message }}
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
                    {{ $t('logout') }}<el-icon class="el-icon--right" :style="{ fontSize: '18px' }">
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
import { ref, watch } from 'vue'
import { loadLocaleMessages } from '@/i18n'
import { ElNotification } from 'element-plus';

const value = ref('');
const options = [
    { value: 'en', label: 'English' },
    { value: 'bn', label: 'বাংলা' },
];
const currentLocale = ref('');

async function changeLanguage() {
    console.log(currentLocale);
    await loadLocaleMessages(currentLocale.value);
}

const notifications = ref([
    { message: 'New message from John' },
    { message: 'Your order has been shipped' },
    { message: 'New comment on your post' }
]);

const notificationCount = ref(notifications.value.length);

const handleCommand = (command) => {
    // Handle command logic when dropdown item is clicked, if needed
};

const notify = (notification) => {
    ElNotification({
        title: 'Notification',
        message: notification.message,
        type: 'info',
        duration: 3000
    });
};

// Flag to show/hide notifications dropdown based on screen size
const showNotifications = ref(true);

// Watch for screen size and toggle visibility
watch(
    () => window.innerWidth,
    (newWidth) => {
        if (newWidth <= 768) {
            showNotifications.value = false; // Hide notifications on mobile
        } else {
            showNotifications.value = true; // Show notifications on larger screens
        }
    },
    { immediate: true }
);
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

.alert-btn,
.user-btn {
    background-color: #626aef;
    border: none;
    font-size: 18px;
    color: white;
    padding: 0px;
}

.alert-btn:hover,
.user-btn:hover {
    background-color: #626aef;
    opacity: 0.7;
    border: none;
    color: white;
}

.badgh-btn,
.notification-badge {
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

    /* Hide notifications on mobile */
    .el-dropdown {
        display: none !important;
    }
}
</style>
