import { createRouter, createWebHistory } from 'vue-router'
import LayoutFirst from "@/views/layout/LayoutFirst.vue";
import LayoutSecond from "@/views/layout/LayoutSecond.vue";

import OneQuestion from '@/views/one/QuestionPage.vue'
import OneSystem from "@/views/one/SystemTest.vue";
import OneSingle from "@/views/one/SingleTest.vue";
import OneExcel from "@/views/one/ExcelFile.vue";

import TwoQuestion from '@/views/two/QuestionPage.vue'
import TwoSystem from "@/views/two/SystemTest.vue";
import TwoSingle from "@/views/two/SingleTest.vue";
import TwoExcel from "@/views/two/ExcelFile.vue";

import ThreeQuestion from '@/views/three/QuestionPage.vue';
import ThreeAnswer from "@/views/three/AnswerPage.vue"

import FourQuestion from '@/views/four/QuestionPage.vue';
import FourSystem from "@/views/four/SystemTest.vue";
import FourSingle from "@/views/four/SingleTest.vue";
import FourExcel from "@/views/four/ExcelFile.vue";

import FiveQuestion from '@/views/five/QuestionPage.vue';
import FiveAnswer from '@/views/five/Answer.vue';

import SixQuestion from '@/views/six/QuestionPage.vue';
import SixSystem from "@/views/six/SystemTest.vue";
import SixSingle from "@/views/six/SingleTest.vue";
import SixExcel from "@/views/six/ExcelFile.vue";

import SevenQuestion from '@/views/seven/QuestionPage.vue';
import SevenAnswer from '@/views/seven/AnswerPage.vue'

import EightQuestion from '@/views/eight/QuestionPage.vue';
import EightAnswer from "@/views/eight/AnswerPage.vue";

import NineQuestion from '@/views/nine/QuestionPage.vue';
import NineAnswer from "@/views/nine/AnswerPage.vue";

import TenQuestion from '@/views/ten/QuestionPage.vue';
import TenAnswer from "@/views/ten/Answer.vue";

import ElevenQuestion from '@/views/eleven/QuestionPage.vue';
import ElevenAnswer from "@/views/eleven/AnswerPage.vue"

import TwelveQuestion from '@/views/twelve/QuestionPage.vue';
import TwelveSystem from "@/views/twelve/SystemTest.vue";
import TwelveSingle from "@/views/twelve/SingleTest.vue";
import TwelveExcel from "@/views/twelve/ExcelFile.vue";

import ThirteenQuestion from '@/views/thirteen/QuestionPage.vue';
import ThirteenSystem from "@/views/thirteen/SystemTest.vue";
import ThirteenSingle from "@/views/thirteen/SingleTest.vue";
import ThirteenExcel from "@/views/thirteen/ExcelFile.vue";

import FourteenQuestion from '@/views/fourteen/QuestionPage.vue';
import FourteenSystem from "@/views/fourteen/SystemTest.vue";
import FourteenSingle from "@/views/fourteen/SingleTest.vue";
import FourteenExcel from "@/views/fourteen/ExcelFile.vue";

import FifteenQuestion from '@/views/fifteen/QuestionPage.vue';
import FifteenSystem from "@/views/fifteen/SystemTest.vue";
import FifteenSingle from "@/views/fifteen/SingleTest.vue";
import FifteenExcel from "@/views/fifteen/ExcelFile.vue";


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
          ]
        },
        {
          path: 'three',
          component: LayoutSecond,
          redirect: '/three/question',
          children: [
            {
              path: 'question',
              component: ThreeQuestion
            },
            {
              path: 'answer',
              component: ThreeAnswer
            }
          ]
        },
        {
          path: 'four',
          component: LayoutSecond,
          redirect: '/four/question',
          children: [
            {
              path: 'question',
              component: FourQuestion
            },
            {
              path: 'system',
              component: FourSystem
            },
            {
              path: 'single',
              component: FourSingle
            },
            {
              path: 'excel',
              component: FourExcel
            },
          ]
        },
        {
          path: 'five',
          component: LayoutSecond,
          redirect: '/five/question',
          children: [
            {
              path: 'question',
              component: FiveQuestion
            },
            {
              path: 'answer',
              component: FiveAnswer
            },
          ]
        },
        {
          path: 'six',
          component: LayoutSecond,
          redirect: '/six/question',
          children: [
            {
              path: 'question',
              component: SixQuestion
            },
            {
              path: 'system',
              component: SixSystem
            },
            {
              path: 'single',
              component: SixSingle
            },
            {
              path: 'excel',
              component: SixExcel
            },
          ]
        },
        {
          path: 'seven',
          component: LayoutSecond,
          redirect: '/seven/question',
          children: [
            {
              path: 'question',
              component: SevenQuestion
            },
            {
              path: 'answer',
              component: SevenAnswer
            },
          ]
        },
        {
          path: 'eight',
          component: LayoutSecond,
          redirect: '/eight/question',
          children: [
            {
              path: 'question',
              component: EightQuestion
            },
            {
              path: 'answer',
              component: EightAnswer
            },
          ]
        },
        {
          path: 'nine',
          component: LayoutSecond,
          redirect: '/nine/question',
          children: [
            {
              path: 'question',
              component: NineQuestion
            },
            {
              path: 'answer',
              component: NineAnswer
            },
          ]
        },
        {
          path: 'ten',
          component: LayoutSecond,
          redirect: '/ten/question',
          children: [
            {
              path: 'question',
              component: TenQuestion
            },
            
            {
              path: 'answer',
              component: TenAnswer
            },
          ]
        },
        {
          path: 'eleven',
          component: LayoutSecond,
          redirect: '/eleven/question',
          children: [
            {
              path: 'question',
              component: ElevenQuestion
            },
            {
              path: 'answer',
              component: ElevenAnswer
            },
          ]
        },
        {
          path: 'twelve',
          component: LayoutSecond,
          redirect: '/twelve/question',
          children: [
            {
              path: 'question',
              component: TwelveQuestion
            },
            {
              path: 'system',
              component: TwelveSystem
            },
            {
              path: 'single',
              component: TwelveSingle
            },
            {
              path: 'excel',
              component: TwelveExcel
            },
          ]
        },
        {
          path: 'thirteen',
          component: LayoutSecond,
          redirect: '/thirteen/question',
          children: [
            {
              path: 'question',
              component: ThirteenQuestion
            },
            {
              path: 'system',
              component: ThirteenSystem
            },
            {
              path: 'single',
              component: ThirteenSingle
            },
            {
              path: 'excel',
              component: ThirteenExcel
            },
          ]
        },
        {
          path: 'fourteen',
          component: LayoutSecond,
          redirect: '/fourteen/question',
          children: [
            {
              path: 'question',
              component: FourteenQuestion
            },
            {
              path: 'system',
              component: FourteenSystem
            },
            {
              path: 'single',
              component: FourteenSingle
            },
            {
              path: 'excel',
              component: FourteenExcel
            },
          ]
        },
        {
          path: 'fifteen',
          component: LayoutSecond,
          redirect: '/fifteen/question',
          children: [
            {
              path: 'question',
              component: FifteenQuestion
            },
            {
              path: 'system',
              component: FifteenSystem
            },
            {
              path: 'single',
              component: FifteenSingle
            },
            {
              path: 'excel',
              component: FifteenExcel
            },
          ]
        }
      ]
    }
  ]
})

export default router
