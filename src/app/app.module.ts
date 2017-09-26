import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot([
      {
        path: 'heroes', 
        component: HeroesComponent
      }
	  ])
	  ,
	  RouterModule.forRoot([
      {
        path: 'dashboard', 
        component: DashboardComponent
      }
	  ]),
	  RouterModule.forRoot([
      {
        path: 'hero-detail', 
        component: HeroDetailComponent
      }
	  ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
