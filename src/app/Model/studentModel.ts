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
    name: 'Tarik',
    surname: 'Akpinar',
    course: 'BSPK',
    imageUrl: 'image.src = \'../assets/schueler/akpinar.jpg\';',

  },
  {
    id: 2,
    name: 'Tim Philipp',
    surname: 'Altmann',
    course: 'BSPK',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Hatidža',
    surname: 'Begagić',
    course: 'E',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    id: 4,
    name: 'Josip',
    surname: 'Benkovic',
    course: 'BSPK',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    id: 5,
    name: 'Salih',
    surname: 'Bilgin',
    course: 'AM',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Zerda',
    surname: 'Cakir',
    course: 'AM',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Michael',
    surname: 'Falk',
    course: 'NWT1',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Roberto',
    surname: 'Ghiriti',
    course: 'WIR3',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Noel',
    surname: 'Groiß',
    course: 'BSPK',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Florian Roberto',
    surname: 'Hedrich',
    course: 'WIR3',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 11,
    name: 'Nagi',
    surname: 'Ibrahim',
    course: 'WIR3',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 12,
    name: 'Taisir',
    surname: 'Khalifa',
    course: 'NW2',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 13,
    name: 'Philipp Bernhard',
    surname: 'Lueger',
    course: 'SEW',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 14,
    name: 'Alexander',
    surname: 'Mayerhofer',
    course: 'BSPK',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 15,
    name: 'Lukas',
    surname: 'Milicic',
    course: 'E',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 16,
    name: 'Stefan',
    surname: 'Milojkovic',
    course: 'NWT1',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 17,
    name: 'Alex',
    surname: 'Pauer',
    course: 'NWT1',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 18,
    name: 'Luka',
    surname: 'Ramljak',
    course: 'GGP',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 19,
    name: 'Umut',
    surname: 'Sakar',
    course: 'WIR3',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 20,
    name: 'Michael',
    surname: 'Samarati',
    course: 'ITP2 ',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 21,
    name: 'Viktor',
    surname: 'Trojan',
    course: 'SEW',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 22,
    name: 'Philipp',
    surname: 'Vollmann',
    course: 'WIR3',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 23,
    name: 'Linda',
    surname: 'Yusupova',
    course: 'D',
    imageUrl: 'https://via.placeholder.com/150',
  },
    ];
