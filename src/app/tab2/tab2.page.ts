import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  fields: number[] = [];

  constructor() {
    for (let i = 1; i <= 24; i++) {
      this.fields.push(i);
    }
  }

  onFieldClicked(field: number) {
    console.log("Field " + field + " clicked.");
  }

}
