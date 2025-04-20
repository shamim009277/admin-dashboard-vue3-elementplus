import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import DefaultLayout from '@/views/Default.vue'
import Button from '@/views/comp/Button.vue'
import Badge from '@/views/comp/Badge.vue'
import Alert from '@/views/comp/Alert.vue'
import CustomModal from '@/views/comp/Modal.vue'
import Notification from '@/views/comp/Notification.vue'
import SimpleTable from '@/views/table/SimpleTable.vue'
import DataTable from '@/views/table/DataTable.vue'
import CustomForm from '@/views/Form.vue'
import FormElement from '@/views/FormElement.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import ForgetPassword from '@/views/auth/ForgetPassword.vue'
import ResetPassword from '@/views/auth/ResetPassword.vue'
import Error500 from '@/views/errors/Error_500.vue'
import Error404 from '@/views/errors/Error_404.vue'
import Error503 from '@/views/errors/Error_503.vue'
import BlankPage from '@/views/errors/Blank.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: '/buttons',
          name: 'button',
          component: Button,
        },
        {
          path: '/badges',
          name: 'badge',
          component: Badge,
        },
        {
          path: '/alerts',
          name: 'alert',
          component: Alert,
        },
        {
          path: '/simple-tables',
          name: 'simpletable',
          component: SimpleTable,
        },
        {
          path: '/data-tables',
          name: 'datatable',
          component: DataTable,
        },
        {
          path: '/modals',
          name: 'modals',
          component: CustomModal,
        },
        {
          path: '/notifications',
          name: 'notifications',
          component: Notification,
        },
        {
          path: '/form',
          name: 'form',
          component: CustomForm,
        },
        {
          path: '/form-element',
          name: 'formElement',
          component: FormElement,
        },
        {
          path: '/blank-page',
          name: 'blank-page',
          component: BlankPage,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: ForgetPassword,
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPassword,
    },
    {
      path: '/errors-500',
      name: 'errors-500',
      component: Error500,
    },
    {
      path: '/errors-404',
      name: 'errors-404',
      component: Error404,
    },
    {
      path: '/errors-coming-soon',
      name: 'errors-coming-soon',
      component: Error503,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: Error404,
    }

  ],
})

export default router
