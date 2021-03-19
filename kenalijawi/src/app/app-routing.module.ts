import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mengenal',
    loadChildren: () => import('./mengenal/mengenal.module').then( m => m.MengenalPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'asas',
    loadChildren: () => import('./asas/asas.module').then( m => m.AsasPageModule)
  },
  {
    path: 'ajnabi',
    loadChildren: () => import('./ajnabi/ajnabi.module').then( m => m.AjnabiPageModule)
  },
  {
    path: 'hukum',
    loadChildren: () => import('./hukum/hukum.module').then( m => m.HukumPageModule)
  },
  {
    path: 'mahram',
    loadChildren: () => import('./mahram/mahram.module').then( m => m.MahramPageModule)
  },
  {
    path: 'pop',
    loadChildren: () => import('./pop/pop.module').then( m => m.PopPageModule)
  },
  {
    path: 'tunggal',
    loadChildren: () => import('./tunggal/tunggal.module').then( m => m.TunggalPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
