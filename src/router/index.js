import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Default.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView.vue'),
        },
        {
          path: '/buttons',
          name: 'button',
          component: () => import('@/views/comp/Button.vue'),
        },
        {
          path: '/badges',
          name: 'badge',
          component: () => import('@/views/comp/Badge.vue'),
        },
        {
          path: '/alerts',
          name: 'alert',
          component: () => import('@/views/comp/Alert.vue'),
        },
        {
          path: '/simple-tables',
          name: 'simpletable',
          component: () => import('@/views/table/SimpleTable.vue'),
        },
        {
          path: '/data-tables',
          name: 'datatable',
          component: () => import('@/views/table/DataTable.vue'),
        },
        {
          path: '/modals',
          name: 'modals',
          component: () => import('@/views/comp/Modal.vue'),
        },
        {
          path: '/notifications',
          name: 'notifications',
          component: () => import('@/views/comp/Notification.vue'),
        },
        {
          path: '/form',
          name: 'form',
          component: () => import('@/views/Form.vue'),
        },
        {
          path: '/form-element',
          name: 'formElement',
          component: () => import('@/views/FormElement.vue'),
        },
        {
          path: '/tabs',
          name: 'tabs',
          component: () => import('@/views/comp/Tabs.vue'),
        },
        {
          path: '/blank-page',
          name: 'blank-page',
          component: () => import('@/views/errors/Blank.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/Login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/auth/Register.vue'),
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: () => import('@/views/auth/ForgetPassword.vue'),
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('@/views/auth/ResetPassword.vue'),
    },
    {
      path: '/errors-500',
      name: 'errors-500',
      component: () => import('@/views/errors/Error_500.vue'),
    },
    {
      path: '/errors-404',
      name: 'errors-404',
      component: () => import('@/views/errors/Error_404.vue'),
    },
    {
      path: '/errors-coming-soon',
      name: 'errors-coming-soon',
      component: () => import('@/views/errors/Error_503.vue'),
    },
    {
      path: '/documentation',
      name: 'documentation',
      component: () => import('@/views/Documentation.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/errors/Error_404.vue'),
    }

  ],
})

export default router
