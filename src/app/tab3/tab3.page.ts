import { Component } from '@angular/core';
import { StudentModel, STUDENTS } from '../Model/studentModel';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  students: StudentModel[]; //neue lokale Variable, für Controller von Typ StudentModel als Array
  test: string = "Meine erste lokale Variable";


  constructor() {
    this.students = STUDENTS; //Diese lokale Variable soll den Wert von konstanten STUDENTS haben.
  }

}
