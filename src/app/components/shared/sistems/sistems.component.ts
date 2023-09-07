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
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/300`);

}
