import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
interface Student {
  name: string;
  imageUrl: string;
  correctAnswer: string;
  answers: string[];
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']

})
export class Tab2Page {
  students: Student[] = [
    {
      name: 'Max Mustermann',
      imageUrl: 'assets/max.jpg',
      correctAnswer: 'Alter',
      answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
    },
    {
      name: 'Erika Musterfrau',
      imageUrl: 'assets/erika.jpg',
      correctAnswer: 'Idol',
      answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
    },
    // Weitere Schüler hinzufügen...
  ];
  currentStudent: Student | undefined;
  showAnswer = false;
  isAnswerCorrect = false;

  constructor(private navCtrl: NavController) {


  }

  ionViewWillEnter() {
    this.showNextStudent();
  }

  showNextStudent() {
    this.currentStudent = this.students.shift();
    this.showAnswer = false;
    this.isAnswerCorrect = false;

  }

  checkAnswer(answer: string) {
    this.showAnswer = true;
    this.isAnswerCorrect = answer === this.currentStudent?.correctAnswer;

    setTimeout(() => {
      this.showNextStudent();
    }, 2000); // 2 Sekunden warten und zum nächsten Schüler wechseln
  }

  onFieldClicked(field: number) {
    console.log("Field " + field + " clicked.");
  }

  goToTab1() {
    this.navCtrl.navigateForward('/tabs/tab1');
  }
}

