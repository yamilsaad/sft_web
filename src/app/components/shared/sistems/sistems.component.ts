import { Component } from '@angular/core';

@Component({
  selector: 'app-sistems',
  templateUrl: './sistems.component.html',
  styleUrls: ['./sistems.component.css']
})
export class SistemsComponent {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  pauseOnHover = false;
  pauseOnFocus = false;
  images = ['1', '2', '3', '4', '5'].map((n) => `assets/banner_soft/${n}.svg`);

}
