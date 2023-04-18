import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentModel, STUDENTS} from '../Model/studentModel';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {

  students: StudentModel[] = [];
  student:any;


  constructor(private route: ActivatedRoute) {
    this.students = STUDENTS;
    let id: number = parseInt(this.route.snapshot.paramMap.get('id') || "");
    console.log("ID des Studenten:", id);
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        this.student = this.students[i];
        break;
      }
    }
  }



  ngOnInit() {
  }

}
