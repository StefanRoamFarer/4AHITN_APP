export class StudentModel {
    id: number;
    name: string;
    course: string;
    surname: string;
    imageUrl: string;

    constructor(id: number, surname: string, imageUrl: string, name: string, course: string) {
      this.id = id;
    this.surname = surname;
    this.imageUrl = imageUrl;
    this.name = name;
    this.course = course;
    }
    }
export const STUDENTS: StudentModel[] = [
  {
    id: 1,
    name: 'Stefan',
    surname: 'Milojkovic',
    course: 'Informatik',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    id: 2,
    name: 'Josip',
    surname: 'Benkovic',
    course: 'Physik',
    imageUrl: 'https://via.placeholder.com/150',
  },
    ];
