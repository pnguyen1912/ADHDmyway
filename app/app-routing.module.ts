import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
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
  { path: 'camera', loadChildren: './camera/camera.module#CameraPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'reward', loadChildren: './reward/reward.module#RewardPageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'acharacter', loadChildren: './acharacter/acharacter.module#AcharacterPageModule' },
  { path: 'alogin', loadChildren: './alogin/alogin.module#AloginPageModule' },
  { path: 'amedical', loadChildren: './amedical/amedical.module#AmedicalPageModule' },
  { path: 'aparent', loadChildren: './aparent/aparent.module#AparentPageModule' },
  { path: 'report', loadChildren: './report/report.module#ReportPageModule' },
  { path: 'balloon', loadChildren: './balloon/balloon.module#BalloonPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
