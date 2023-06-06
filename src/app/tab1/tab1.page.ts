import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('zoomInAnimation', [
      state('in', style({ transform: 'scale(1)' })),
      transition('void => *', [
        style({ transform: 'scale(0)' }),
        animate('300ms ease-in')
      ]),
      transition('* => void', [
        animate('300ms ease-out', style({ transform: 'scale(0)' }))
      ])
    ])
  ]
})
export class Tab1Page {
  selectedTab: string = 'tab1';

  constructor (private navCtrl: NavController) {}


  goToTab2() {
    this.navCtrl.navigateForward('/tabs/tab2', { animationDirection: 'forward' });
  }

  goToTab3() {
    this.navCtrl.navigateForward('/tabs/tab3', { animationDirection: 'forward' });
  }

}
