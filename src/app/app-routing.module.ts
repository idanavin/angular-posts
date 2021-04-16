import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { BusinessComponent } from './pages/business/business.component';
import { WeddingsComponent } from './pages/weddings/weddings.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddVideoComponent } from './pages/add-video/add-video.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginGuard } from './pages/login/login.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'weddings', component: WeddingsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'add-video', component: AddVideoComponent , canActivate: [LoginGuard]}, 
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
