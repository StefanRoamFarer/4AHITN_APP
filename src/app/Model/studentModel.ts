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
  {
    id: 3,
    name: 'Nagi',
    surname: 'Ibrahim',
    course: 'Recht',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    id: 4,
    name: 'Alexander Karl',
    surname: 'Pauer',
    course: 'Netzwerktechnik',
    imageUrl: 'https://via.placeholder.com/150',

  },
  {
    id: 5,
    name: 'Umut',
    surname: 'Sakar',
    course: 'Recht',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Michael Nikolas',
    surname: 'Samarati',
    course: 'ITP2',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Philipp Karl',
    surname: 'Lueger',
    course: 'SEW',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Florian Robert',
    surname: 'Hedrich',
    course: 'Recht',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Roberto Ioan',
    surname: 'Ghiriti',
    course: 'Recht',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Viktor',
    surname: 'Trojan',
    course: 'SEW',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 11,
    name: 'Philipp',
    surname: 'Vollmann',
    course: 'Recht',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 12,
    name: 'Luka',
    surname: 'Ramljack',
    course: 'Geschichte',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 13,
    name: 'Lukas',
    surname: 'Milicic',
    course: 'Englisch',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 14,
    name: 'Taisir',
    surname: 'Khalifa',
    course: 'Chemie',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 15,
    name: 'Tim Philipp',
    surname: 'Altmann',
    course: 'BSPK',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 16,
    name: 'Hatidža',
    surname: 'Begagić',
    course: 'Englisch',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 17,
    name: 'Tarik',
    surname: 'Akpinar',
    course: 'ITP2',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 18,
    name: 'Salih',
    surname: 'Bilgin',
    course: 'Mathe',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 19,
    name: 'Noel',
    surname: 'Groiß',
    course: 'BSPK',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 20,
    name: 'Michael',
    surname: 'Falk',
    course: 'Netzwerktechnik',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 21,
    name: 'Alexander',
    surname: 'Mayerhofer',
    course: 'BSPK',
    imageUrl: 'https://via.placeholder.com/150',
  },
    ];
