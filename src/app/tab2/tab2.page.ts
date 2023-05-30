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
        correctAnswer: 'Altman',
        answers: ['Linda', 'Altman', 'Vollman', 'Hedrich'],
      },
      {
        name: 'Begagic',
        imageUrl: '../../assets/icon/Bounty_begagic.jpg',
        correctAnswer: 'Begagic',
        answers: ['Khalifa', 'Begagic', 'Ramljak', 'Samarati'],
      },
      {
        name: 'Benkovic',
        imageUrl: '../../assets/icon/Bounty_josip.jpg',
        correctAnswer: 'Benkovic',
        answers: ['Begagic', 'Benkovic', 'Hedrich', 'Groiß'],
      },
      {
        name: 'Bilgin',
        imageUrl: '../../assets/icon/Bounty_salih.jpg',
        correctAnswer: 'Bilgin',
        answers: ['Benkovic', 'Bilgin', 'Strasshof', 'Pauer'],
      },
      {
        name: 'Cakir',
        imageUrl: '../../assets/icon/Bounty_zerda.jpg',
        correctAnswer: 'Cakir',
        answers: ['Altman', 'Cakir', 'Milicic', 'Ibrahim'],
      },
      {
        name: 'Falk',
        imageUrl: '../../assets/icon/Bounty_Falk.jpg',
        correctAnswer: 'Falk',
        answers: ['Sakar', 'Falk', 'Pauer', 'Samarati'],
      },
      {
        name: 'Ghiriti',
        imageUrl: '../../assets/icon/Bounty_roberto.jpg',
        correctAnswer: 'Ghiriti',
        answers: ['Pauer', 'Ghirit', 'Benkovic', 'Ramljak'],
      },
      {
        name: 'Groiß',
        imageUrl: '../../assets/icon/Bounty_noel.jpg',
        correctAnswer: 'Groiß',
        answers: ['Vollman', 'Groiß', 'Akpiner', 'Ghiriti'],
      },
      {
        name: 'Hedrich',
        imageUrl: '../../assets/icon/Bounty_flo.jpg',
        correctAnswer: 'Hedrich',
        answers: ['Milicic', 'Hedrich', 'Bilgin', 'Falk'],
      },
      {
        name: 'Ibrahim',
        imageUrl: '../../assets/icon/Bounty_nagi.jpg',
        correctAnswer: 'Ibrahim',
        answers: ['Falk', 'Ibrahim', 'Ghiriti', 'Lueger'],
      },
      {
        name: 'Khalifa',
        imageUrl: '../../assets/icon/Bounty_Khalifa.jpg',
        correctAnswer: 'Khalifa',
        answers: ['Yusupova', 'Khalifa', 'Benkovic', 'Begagic'],
      },
      {
        name: 'Leueger',
        imageUrl: '../../assets/icon/Bounty_lueger.jpg',
        correctAnswer: 'Lueger',
        answers: ['Altman', 'Lueger', 'Hedrich', 'Falk'],
      },
      {
        name: 'Strasshof',
        imageUrl: '../../assets/icon/Bounty_mayerhofer.jpg',
        correctAnswer: 'Strasshof',
        answers: ['unlocked Charakter', 'Strasshof', 'unknown', 'Sakar'],
      },
      {
        name: 'Milicic',
        imageUrl: '../../assets/icon/Bounty_lukas.jpg',
        correctAnswer: 'Milicic',
        answers: ['Milojkovic', 'Milicic', 'Benkovic', 'Ramljak'],
      },
      {
        name: 'Milojkovic',
        imageUrl: '../../assets/icon/Bounty_stefan.jpg',
        correctAnswer: 'Milojkovic',
        answers: ['Milicic', 'Milojkovic', 'Benkovic', 'Ibrahim'],
      },
      {
        name: 'Pauer',
        imageUrl: '../../assets/icon/Bounty_Pauer.jpg',
        correctAnswer: 'Pauer',
        answers: ['Altman', 'Benkovic', 'Pauer', 'Lueger'],
      },
      {
        name: 'Ramljak',
        imageUrl: '../../assets/icon/Bounty_Luka.jpg',
        correctAnswer: 'Ramljak',
        answers: ['Benkovic', 'Ramljak', 'Milicic', 'Ghiriti'],
      },
      {
        name: 'Sakar',
        imageUrl: '../../assets/icon/Bounty_umut.jpg',
        correctAnswer: 'Sakar',
        answers: ['Sakar', 'Lueger', 'Cakir', 'Pauer'],
      },
      {
        name: 'Samarati',
        imageUrl: '../../assets/icon/Bounty_Masarati wrum wrum.jpg',
        correctAnswer: 'Samarati',
        answers: ['Samarati', 'Groiß', 'Altmann', 'Vollmann'],
      },
      {
        name: 'Vollmann',
        imageUrl: '../../assets/icon/Bounty_vollmann.jpg',
        correctAnswer: 'Vollmann',
        answers: ['Vollmann', 'Hedrich', 'Benkovic', 'Ibrahim'],
      },
      {
        name: 'Yusupova',
        imageUrl: '../../assets/icon/Bounty_linda.jpg',
        correctAnswer: 'Idol',
        answers: ['Yusupova', 'Ramljak', 'Pauer', 'Samarati'],
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
