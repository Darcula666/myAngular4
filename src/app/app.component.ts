import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero/hero.service';
import { Hero } from './hero/hero'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {

}
