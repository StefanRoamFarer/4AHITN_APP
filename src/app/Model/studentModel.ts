export class StudentModel {
    id: number;
    surname: string;
    imageUrl: string;

    constructor(id: number, surname: string, imageUrl: string) {
      this.id = id;
    this.surname = surname;
    this.imageUrl = imageUrl;
    }
    }

    //commit
    export const STUDENTS: StudentModel[] = [
        new StudentModel(1, "Student 1", "assets/kkk04.gif"),  //Assets Bilder hinzufügen
        new StudentModel(2,"Student 2", "assets/kkk04.gif")
    ]
