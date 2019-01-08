import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: 'alogin',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserPageModule'
  },
  {
    path: 'alogin',
    loadChildren: './alogin/alogin.module#AloginPageModule'
  },
  {
    path: 'acharacter',
    loadChildren: './acharacter/acharacter.module#AcharacterPageModule'
  },
  {
    path: 'amedical',
    loadChildren: './amedical/amedical.module#AmedicalPageModule'
  },
  {
    path: 'aparent',
    loadChildren: './aparent/aparent.module#AparentPageModule'
  },
  {
    path: 'camera',
    loadChildren: './camera/camera.module#CameraPageModule'
  },
  {
    path: 'map',
    loadChildren: './map/map.module#MapPageModule'
  },
  {
    path: 'report',
    loadChildren: './report/report.module#ReportPageModule'
  },
  {
    path: 'reward',
    loadChildren: './reward/reward.module#RewardPageModule'
  },
  {
    path: 'setting',
    loadChildren: './setting/setting.module#SettingPageModule'
  },
  { path: 'parent', loadChildren: './parent/parent.module#ParentPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'chart', loadChildren: './chart/chart.module#ChartPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'well', loadChildren: './well/well.module#WellPageModule' },
  { path: 'journal', loadChildren: './journal/journal.module#JournalPageModule' },
  { path: 'balloon', loadChildren: './balloon/balloon.module#BalloonPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}