import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface Student {
  name: string;
  imageUrl: string;
  correctAnswer: string;
  answers: string[];
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],

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
        imageUrl: '../../assets/icon/Tarik_neu.jpg',
        correctAnswer: 'Akpinar',
        answers: ['Akpinar', 'Lueger', 'Ghiriti', 'Altmann'],
      },
      {
        name: 'Altmann',
        imageUrl: '../../assets/icon/Tim_neu.jpg',
        correctAnswer: 'Altmann',
        answers: ['Linda', 'Altmann', 'Vollmann', 'Hedrich'],
      },
      {
        name: 'Begagic',
        imageUrl: '../../assets/icon/Begagic_neu.jpg',
        correctAnswer: 'Begagic',
        answers: ['Khalifa', 'Begagic', 'Ramljak', 'Samarati'],
      },
      {
        name: 'Benkovic',
        imageUrl: '../../assets/icon/Josip_neu.jpg',
        correctAnswer: 'Benkovic',
        answers: ['Begagic', 'Benkovic', 'Hedrich', 'Groiß'],
      },
      {
        name: 'Bilgin',
        imageUrl: '../../assets/icon/Salih_neu.jpg',
        correctAnswer: 'Bilgin',
        answers: ['Benkovic', 'Bilgin', 'Strasshof Don', 'Pauer'],
      },
      {
        name: 'Cakir',
        imageUrl: '../../assets/icon/Zerda_neu_Quiz.jpg',
        correctAnswer: 'Cakir',
        answers: ['Altmann', 'Cakir', 'Milicic', 'Ibrahim'],
      },
      {
        name: 'Falk',
        imageUrl: '../../assets/icon/Falk_neu.jpg',
        correctAnswer: 'Falk',
        answers: ['Sakar', 'Falk', 'Pauer', 'Samarati'],
      },
      {
        name: 'Ghiriti',
        imageUrl: '../../assets/icon/Roberto_neu.jpg',
        correctAnswer: 'Ghiriti',
        answers: ['Pauer', 'Ghiriti', 'Benkovic', 'Ramljak'],
      },
      {
        name: 'Groiß',
        imageUrl: '../../assets/icon/Noel_neu.jpg',
        correctAnswer: 'Groiß',
        answers: ['Vollmann', 'Groiß', 'Akpinar', 'Ghiriti'],
      },
      {
        name: 'Hedrich',
        imageUrl: '../../assets/icon/Flo_neu.jpg',
        correctAnswer: 'Hedrich',
        answers: ['Milicic', 'Hedrich', 'Bilgin', 'Falk'],
      },
      {
        name: 'Ibrahim',
        imageUrl: '../../assets/icon/Nagi_neu.jpg',
        correctAnswer: 'Ibrahim',
        answers: ['Falk', 'Ibrahim', 'Ghiriti', 'Lueger'],
      },
      {
        name: 'Khalifa',
        imageUrl: '../../assets/icon/Taisir_neu.jpg',
        correctAnswer: 'Khalifa',
        answers: ['Yusupova', 'Khalifa', 'Benkovic', 'Begagic'],
      },
      {
        name: 'Leueger',
        imageUrl: '../../assets/icon/Leuger_neu.jpg',
        correctAnswer: 'Lueger',
        answers: ['Altmann', 'Lueger', 'Hedrich', 'Falk'],
      },
      {
        name: 'Alex Strasshof Don',
        imageUrl: '../../assets/icon/Hofermayer_neu.jpg',
        correctAnswer: 'Alex Strasshof Don',
        answers: ['unlocked Charakter', 'Alex Strasshof Don', 'unknown', 'Entschuldigung'],
      },
      {
        name: 'Milicic',
        imageUrl: '../../assets/icon/Lukas_neu.jpg',
        correctAnswer: 'Milicic',
        answers: ['Milojkovic', 'Milicic', 'Benkovic', 'Ramljak'],
      },
      {
        name: 'Milojkovic',
        imageUrl: '../../assets/icon/Stefan_neu.jpg',
        correctAnswer: 'Milojkovic',
        answers: ['Milicic', 'Milojkovic', 'Benkovic', 'Ibrahim'],
      },
      {
        name: 'Pauer',
        imageUrl: '../../assets/icon/Pauer_neu.jpg',
        correctAnswer: 'Pauer',
        answers: ['Altmann', 'Benkovic', 'Pauer', 'Lueger'],
      },
      {
        name: 'Ramljak',
        imageUrl: '../../assets/icon/Luka_neu.jpg',
        correctAnswer: 'Ramljak',
        answers: ['Benkovic', 'Ramljak', 'Milicic', 'Ghiriti'],
      },
      {
        name: 'Sakar',
        imageUrl: '../../assets/icon/umut_neu.jpg',
        correctAnswer: 'Sakar',
        answers: ['Sakar', 'Lueger', 'Cakir', 'Pauer'],
      },
      {
        name: 'Samarati',
        imageUrl: '../../assets/icon/Samarati_neu.jpg',
        correctAnswer: 'Samarati',
        answers: ['Samarati', 'Groiß', 'Altmann', 'Vollmann'],
      },
      {
        name: 'Vollmann',
        imageUrl: '../../assets/icon/Vollman_neu.jpg',
        correctAnswer: 'Vollmann',
        answers: ['Vollmann', 'Hedrich', 'Benkovic', 'Ibrahim'],
      },
      {
        name: 'Yusupova',
        imageUrl: '../../assets/icon/Linda_neu.jpg',
        correctAnswer: 'Yusupova',
        answers: ['Yusupova', 'Ramljak', 'Pauer', 'Samarati'],
      }
    ];
    // Schüler und Antworten zufällig anordnen
    this.shuffleArray(students);
    students.forEach(student => this.shuffleArray(student.answers));


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
