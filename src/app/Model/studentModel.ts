export class StudentModel {
    surnamee: string;
    imageUrl: string;

    constructor(surname: string, imageUrl: string) {
    this.surnamee = surname;
    this.imageUrl = imageUrl;
    }
    }

    export const STUDENTS: StudentModel[] = [
        new StudentModel("Student 1", "assets/kkk04.gif"),  //Assets Bilder hinzufügen
        new StudentModel("Student 1", "assets/kkk04.gif")
    ]