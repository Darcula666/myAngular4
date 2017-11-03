import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { HeroService } from './hero/hero.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { GirlComponent } from './girl/girl.component';
import { GirlListComponent } from './girl/girl-list.component';
import { GirlService } from './girl/girl.service';
import { DeptComponent } from './component/dept/dept.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DashboardComponent,
    HeroDetailComponent,
    GirlComponent,
    GirlListComponent,
    DeptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService, GirlService],
  bootstrap: [AppComponent],
})

export class AppModule { }
