import {Component, OnInit} from '@angular/core';
import {Girl} from './girl';
import {GirlService} from './girl.service';
@Component({
selector: 'app-girl-list',
templateUrl: './girl-list.component.html'
})
export class GirlListComponent implements OnInit {
    errorMessage: string;
    girls: Girl[];
    mode = 'Observable';
     constructor (private grilService: GirlService) {}
     ngOnInit() { this.getHeroes(); }
     getHeroes() {
    this.grilService.getGirls()
                     .subscribe(
                       girls => this.girls = girls,
                       error =>  this.errorMessage = <any>error);
  }
/* addHero(name: string) {
    if (!name) { return; }
    this.grilService.create(name)
                     .subscribe(
                       hero  => this.girls.push(girl),
                       error =>  this.errorMessage = <any>error);
  }
 */
}
