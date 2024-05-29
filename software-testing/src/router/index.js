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

import ThreeQuestion from '@/views/three/QuestionPage.vue';
import ThreeSystem from "@/views/three/SystemTest.vue";
import ThreeSingle from "@/views/three/SingleTest.vue";
import ThreeExcel from "@/views/three/ExcelFile.vue";
import ThreeBug from "@/views/three/BugPage.vue";

import FourQuestion from '@/views/four/QuestionPage.vue';
import FourSystem from "@/views/four/SystemTest.vue";
import FourSingle from "@/views/four/SingleTest.vue";
import FourExcel from "@/views/four/ExcelFile.vue";
import FourBug from "@/views/four/BugPage.vue";

import FiveQuestion from '@/views/five/QuestionPage.vue';
import FiveAnswer from '@/views/five/Answer.vue';

import SixQuestion from '@/views/six/QuestionPage.vue';
import SixSystem from "@/views/six/SystemTest.vue";
import SixSingle from "@/views/six/SingleTest.vue";
import SixExcel from "@/views/six/ExcelFile.vue";
import SixBug from "@/views/six/BugPage.vue";

import SevenQuestion from '@/views/seven/QuestionPage.vue';
import SevenSystem from "@/views/seven/SystemTest.vue";
import SevenSingle from "@/views/seven/SingleTest.vue";
import SevenExcel from "@/views/seven/ExcelFile.vue";
import SevenBug from "@/views/seven/BugPage.vue";

import EightQuestion from '@/views/eight/QuestionPage.vue';
import EightSystem from "@/views/eight/SystemTest.vue";
import EightSingle from "@/views/eight/SingleTest.vue";
import EightExcel from "@/views/eight/ExcelFile.vue";
import EightBug from "@/views/eight/BugPage.vue";

import NineQuestion from '@/views/nine/QuestionPage.vue';
import NineSystem from "@/views/nine/SystemTest.vue";
import NineSingle from "@/views/nine/SingleTest.vue";
import NineExcel from "@/views/nine/ExcelFile.vue";
import NineBug from "@/views/nine/BugPage.vue";

import TenQuestion from '@/views/ten/QuestionPage.vue';
import TenAnswer from "@/views/ten/Answer.vue";

import ElevenQuestion from '@/views/eleven/QuestionPage.vue';
import ElevenSystem from "@/views/eleven/SystemTest.vue";
import ElevenSingle from "@/views/eleven/SingleTest.vue";
import ElevenExcel from "@/views/eleven/ExcelFile.vue";
import ElevenBug from "@/views/eleven/BugPage.vue";

import TwelveQuestion from '@/views/twelve/QuestionPage.vue';
import TwelveSystem from "@/views/twelve/SystemTest.vue";
import TwelveSingle from "@/views/twelve/SingleTest.vue";
import TwelveExcel from "@/views/twelve/ExcelFile.vue";
import TwelveBug from "@/views/twelve/BugPage.vue";

import ThirteenQuestion from '@/views/thirteen/QuestionPage.vue';
import ThirteenSystem from "@/views/thirteen/SystemTest.vue";
import ThirteenSingle from "@/views/thirteen/SingleTest.vue";
import ThirteenExcel from "@/views/thirteen/ExcelFile.vue";
import ThirteenBug from "@/views/thirteen/BugPage.vue";

import FourteenQuestion from '@/views/fourteen/QuestionPage.vue';
import FourteenSystem from "@/views/fourteen/SystemTest.vue";
import FourteenSingle from "@/views/fourteen/SingleTest.vue";
import FourteenExcel from "@/views/fourteen/ExcelFile.vue";
import FourteenBug from "@/views/fourteen/BugPage.vue";

import FifteenQuestion from '@/views/fifteen/QuestionPage.vue';
import FifteenSystem from "@/views/fifteen/SystemTest.vue";
import FifteenSingle from "@/views/fifteen/SingleTest.vue";
import FifteenExcel from "@/views/fifteen/ExcelFile.vue";
import FifteenBug from "@/views/fifteen/BugPage.vue";


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
              path: 'system',
              component: ThreeSystem
            },
            {
              path: 'single',
              component: ThreeSingle
            },
            {
              path: 'excel',
              component: ThreeExcel
            },
            {
              path: 'bug',
              component: ThreeBug
            },
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
            {
              path: 'bug',
              component: FourBug
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
            {
              path: 'bug',
              component: SixBug
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
              path: 'system',
              component: SevenSystem
            },
            {
              path: 'single',
              component: SevenSingle
            },
            {
              path: 'excel',
              component: SevenExcel
            },
            {
              path: 'bug',
              component: SevenBug
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
              path: 'system',
              component: EightSystem
            },
            {
              path: 'single',
              component: EightSingle
            },
            {
              path: 'excel',
              component: EightExcel
            },
            {
              path: 'bug',
              component: EightBug
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
              path: 'system',
              component: NineSystem
            },
            {
              path: 'single',
              component: NineSingle
            },
            {
              path: 'excel',
              component: NineExcel
            },
            {
              path: 'bug',
              component: NineBug
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
              path: 'system',
              component: ElevenSystem
            },
            {
              path: 'single',
              component: ElevenSingle
            },
            {
              path: 'excel',
              component: ElevenExcel
            },
            {
              path: 'bug',
              component: ElevenBug
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
            {
              path: 'bug',
              component: TwelveBug
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
            {
              path: 'bug',
              component: ThirteenBug
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
            {
              path: 'bug',
              component: FourteenBug
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
            {
              path: 'bug',
              component: FifteenBug
            },
          ]
        }
      ]
    }
  ]
})

export default router
