export class StudentModel {
    surname: string;
    imageUrl: string;

    constructor(surname: string, imageUrl: string) {
    this.surname = surname;
    this.imageUrl = imageUrl;
    }
    }

    //commit
    export const STUDENTS: StudentModel[] = [
        new StudentModel("Student 1", "assets/kkk04.gif"),  //Assets Bilder hinzufügen
        new StudentModel("Student 1", "assets/kkk04.gif")
    ]
