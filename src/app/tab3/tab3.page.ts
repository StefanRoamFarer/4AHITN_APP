import { Component } from '@angular/core';
import { StudentModel, STUDENTS } from '../Model/studentModel';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  students: StudentModel[];

  constructor(private navCtrl: NavController, private router: Router) {
    this.students = STUDENTS;
  }

  animatePicture(studentId: number, event: Event) {
    const targetElement = event.currentTarget as Element;
    const imageElement = targetElement.querySelector('img');

    // Apply CSS animation to the image element
    imageElement?.classList.add('zoom-in');

    // Wait for the animation to complete
    setTimeout(() => {
      // Navigate to the desired tab using the Angular Router
      this.router.navigate([studentId]);
    }, 300); // Adjust the timeout value to match the duration of the animation
  }

  goToTab1() {
    this.navCtrl.navigateForward('/tabs/tab1');
  }
}
