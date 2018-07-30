import { Component, OnInit, NgZone } from '@angular/core';
const SMALL_WIDTH = 700;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH}px)`);
  constructor(zone: NgZone) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql)  );
   }

  ngOnInit() {
  }
isScreenSmall(): boolean {
return this.mediaMatcher.matches;
}
}
