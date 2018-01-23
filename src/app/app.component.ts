import {Component, OnInit} from '@angular/core';
import {GirlService} from './girl.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor(private service: GirlService) {
    service.hello();
  }
}
