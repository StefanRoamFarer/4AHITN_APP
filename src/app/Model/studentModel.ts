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
    name: 'Tarik Can',
    surname: 'Akpinar',
    course: 'Informatik',
    imageUrl: '../../assets/icon/Bounty_tarik.jpg',


  },
  {
    id: 2,
    name: 'Tim Philipp',
    surname: 'Altmann',
    course: 'Physik',
    imageUrl: '../../assets/icon/Bounty_tim.jpg',
  },
  {
    id: 3,
    name: 'Hatidža',
    surname: 'Begagić',
    course: 'Recht',
    imageUrl: '../../assets/icon/Bounty_begagic.jpg',

  },
  {
    id: 4,
    name: 'Josip',
    surname: 'Benkovic',
    course: 'Netzwerktechnik',
    imageUrl: '../../assets/icon/Bounty_josip.jpg',

  },
  {
    id: 5,
    name: 'Salih',
    surname: 'Bilgin',
    course: 'Recht',
    imageUrl: '../../assets/icon/Bounty_salih.jpg',
  },
  {
    id: 6,
    name: 'Zerda',
    surname: 'Cakir',
    course: 'ITP2',
    imageUrl: '../../assets/icon/Bounty_zerda.jpg',
  },
  {
    id: 7,
    name: 'Michael',
    surname: 'Falk',
    course: 'SEW',
    imageUrl: '../../assets/icon/Bounty_Falk.jpg',
  },
  {
    id: 8,
    name: 'Roberto',
    surname: 'Ghiriti',
    course: 'Recht',
    imageUrl: '../../assets/icon/Bounty_roberto.jpg',
  },
  {
    id: 9,
    name: 'Noel',
    surname: 'Groiß',
    course: 'Recht',
    imageUrl: '../../assets/icon/Bounty_noel.jpg',
  },
  {
    id: 10,
    name: 'Florian Robert',
    surname: 'Hedrich',
    course: 'SEW',
    imageUrl: '../../assets/icon/Bounty_flo.jpg',
  },
  {
    id: 11,
    name: 'Nagi',
    surname: 'Ibrahim',
    course: 'Recht',
    imageUrl: '../../assets/icon/Bounty_nagi.jpg',
  },
  {
    id: 12,
    name: 'Taisir',
    surname: 'Khalifa',
    course: 'Geschichte',
    imageUrl: '../../assets/icon/Bounty_Khalifa.jpg',
  },
  {
    id: 13,
    name: 'Philipp Karl',
    surname: 'Lueger',
    course: 'Englisch',
    imageUrl: '../../assets/icon/Bounty_lueger.jpg',
  },
  {
    id: 14,
    name: 'Don Hofermayer Alexander',
    surname: 'Strasshof',
    course: 'Chemie',
    imageUrl: '../../assets/icon/Bounty_mayerhofer.jpg',
  },
  {
    id: 15,
    name: 'Lukas',
    surname: 'Milicic',
    course: 'BSPK',
    imageUrl: '../../assets/icon/Bounty_lukas.jpg',
  },
  {
    id: 16,
    name: 'Stefan',
    surname: 'Milojkovic',
    course: 'Englisch',
    imageUrl: '../../assets/icon/Bounty_stefan.jpg',
  },
  {
    id: 17,
    name: 'Alexander Karl',
    surname: 'Pauer',
    course: 'ITP2',
    imageUrl: '../../assets/icon/Bounty_Pauer.jpg',
  },
  {
    id: 18,
    name: 'Luka',
    surname: 'Ramljak',
    course: 'Mathe',
    imageUrl: '../../assets/icon/Bounty_Luka.jpg',
  },
  {
    id: 19,
    name: 'Umut',
    surname: 'Sakar',
    course: 'BSPK',
    imageUrl: '../../assets/icon/Bounty_umut.jpg',
  },
  {
    id: 20,
    name: 'Michael Nikolas',
    surname: 'Samarati',
    course: 'Netzwerktechnik',
    imageUrl: '../../assets/icon/Bounty_Masarati wrum wrum.jpg',
  },
  {
    id: 21,
    name: 'Viktor RIP',
    surname: 'Trojan',
    course: 'BSPK',
    imageUrl: '../../assets/icon/Bounty_ viktor.jpg',
  },
  {
    id: 22,
    name: 'Philipp',
    surname: 'Vollmann',
    course: 'BSPK',
    imageUrl: '../../assets/icon/Bounty_vollmann.jpg',
  },
  {
    id: 23,
    name: 'Linda',
    surname: 'Yusupova',
    course: 'BSPK',
    imageUrl: '../../assets/icon/Bounty_linda.jpg',
  },
    ];
