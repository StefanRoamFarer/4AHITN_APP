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
  students: Student[] = [];
  currentStudent: Student | undefined;
  showAnswer = false;
  isAnswerCorrect = false;

  constructor(private navCtrl: NavController) {}

  ionViewWillEnter() {
    this.loadQuizData();
    this.resetQuiz();
    this.showNextStudent();
  }

  resetQuiz() {
    this.currentStudent = undefined;
    this.showAnswer = false;
    this.isAnswerCorrect = false;
  }

  loadQuizData() {
    const students: Student[] = [
      {
        name: 'Akpinar',
        imageUrl: '../../assets/icon/Bounty_tarik.jpg',
        correctAnswer: 'Akpinar',
        answers: ['Akpinar', 'Lueger', 'Ghiriti', 'Altman'],
      },
      {
        name: 'Altman',
        imageUrl: '../../assets/icon/Bounty_tim.jpg',
        correctAnswer: 'Idol',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Begagic',
        imageUrl: '../../assets/icon/Bounty_begagic.jpg',
        correctAnswer: 'Urlaubsort',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Benkovic',
        imageUrl: '../../assets/icon/Bounty_josip.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Bilgin',
        imageUrl: '../../assets/icon/Bounty_salih.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Cakir',
        imageUrl: '../../assets/icon/Bounty_zerda.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Falk',
        imageUrl: '../../assets/icon/Bounty_Falk.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Ghiriti',
        imageUrl: '../../assets/icon/Bounty_roberto.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Groiß',
        imageUrl: '../../assets/icon/Bounty_noel.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Hedrich',
        imageUrl: '../../assets/icon/Bounty_flo.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Ibrahim',
        imageUrl: '../../assets/icon/Bounty_nagi.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Khalifa',
        imageUrl: '../../assets/icon/Bounty_Khalifa.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Leueger',
        imageUrl: '../../assets/icon/Bounty_lueger.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Strasshof',
        imageUrl: '../../assets/icon/Bounty_mayerhofer.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Milicic',
        imageUrl: '../../assets/icon/Bounty_lukas.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Milojkovic',
        imageUrl: '../../assets/icon/Bounty_stefan.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Pauer',
        imageUrl: '../../assets/icon/Bounty_Pauer.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Ramljak',
        imageUrl: '../../assets/icon/Bounty_Luka.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Sakar',
        imageUrl: '../../assets/icon/Bounty_umut.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Samarati',
        imageUrl: '../../assets/icon/Bounty_Masarati wrum wrum.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Vollmann',
        imageUrl: '../../assets/icon/Bounty_vollmann.jpg',
        correctAnswer: 'Lieblingsfilm',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      },
      {
        name: 'Yusupova',
        imageUrl: '../../assets/icon/Bounty_linda.jpg',
        correctAnswer: 'Idol',
        answers: ['Alter', 'Idol', 'Urlaubsort', 'Lieblingsfilm'],
      }
    ];
    // Schüler und Antworten zufällig anordnen
    this.shuffleArray(students);
    students.forEach(student => this.shuffleArray(student.answers));

    // Quiz-Daten setzen
    this.students = students;
  }
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
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

  goToTab1() {
    this.navCtrl.navigateForward('/tabs/tab1');
  }
}
