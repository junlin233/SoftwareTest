import { createRouter, createWebHistory } from 'vue-router'
import LayoutFirst from "@/views/layout/LayoutFirst.vue";
import LayoutSecond from "@/views/layout/LayoutSecond.vue";
import OneQuestion from '@/views/one/QuestionPage.vue'
import OneSystem from "@/views/one/SystemTest.vue";
import OneSingle from "@/views/one/SingleTest.vue";
import OneExcel from "@/views/one/ExcelFile.vue";
import OneBug from "@/views/one/BugPage.vue";
import TwoQuestion from '@/views/two/QuestionPage.vue'
import TwoSystem from "@/views/two/SystemTest.vue";
import TwoSingle from "@/views/two/SingleTest.vue";
import TwoExcel from "@/views/two/ExcelFile.vue";
import TwoBug from "@/views/two/BugPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutFirst,
      redirect:'/one',
      children:[
        {
          path:'one',
          component:LayoutSecond,
          redirect:'/one/question',
          children:[
            {
              path:'question',
              component:OneQuestion
            },
            {
              path:'system',
              component:OneSystem
            },
            {
              path:'single',
              component:OneSingle
            },
            {
              path:'excel',
              component:OneExcel
            },
            {
              path:'bug',
              component:OneBug
            },
          ]
        },
        {
          path:'/two',
          component:LayoutSecond,
          redirect:'/two/question',
          children:[
            {
              path:'question',
              component:TwoQuestion
            },
            {
              path:'system',
              component:TwoSystem
            },
            {
              path:'single',
              component:TwoSingle
            },
            {
              path:'excel',
              component:TwoExcel
            },
            {
              path:'bug',
              component:TwoBug
            },
          ]
        },
      ]
    }
  ]
})

export default router
