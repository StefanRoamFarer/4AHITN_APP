
export class StudentModel {
  id: number;
  vname: string;
  course: string;
  surname: string;
  imageUrl: string;
  sib: string;
  height: string;
  age: string;
  phone: string;
  serie: string;
  teach: string;
  hobbies: string;
  holi:string;
  idol:string;
  klasholi: string;


  constructor(id: number, surname: string, imageUrl: string, name: string, course: string, sib: string, height: string, age: string, phone: string, serie: string, teach: string, hobbies: string, klasholi: string, holi:string, idol: string) {
    this.id = id;
    this.surname = surname;
    this.imageUrl = imageUrl;
    this.vname = name;
    this.course = course;
    this.sib= sib;
    this.height=height;
    this.age=age;
    this.phone=phone;
    this.serie=serie;
    this.teach=teach;
    this.hobbies=hobbies;
    this.holi=holi;
    this.idol=idol;
    this.klasholi=klasholi;
  }
}


export const STUDENTS: StudentModel[] = [
  {

    id: 1,
    vname: 'Tarik Can',
    surname: 'Akpinar',
    course: 'ITP2',
    imageUrl: '../../assets/icon/Bounty_tarik.jpg',
    sib:'1',
    height:'185cm',
    age:'18',
    phone:'IPhone',
    serie:'Too Hot To Handle',
    teach:'Wurst',
    hobbies:'Wassersport',
    holi:'Türkei',
    idol:'Tarik',
    klasholi:'N/A',


  },
  {
    id: 2,
    vname: 'Tim Philipp',
    surname: 'Altmann',
    course: 'BSPK',
    imageUrl: '../../assets/icon/Bounty_tim.jpg',
    sib:'0',
    height:'183cm',
    age:'18',
    phone:'IPhone',
    serie:'Dragonball Z',
    teach:'Pachner',
    hobbies:'Fußball, Kraftsport, Saufen',
    holi:'Athen',
    idol:'Iker Casillas',
    klasholi:'Strasshof Don',

  },
  {
    id: 3,
    vname: 'Hatidža',
    surname: 'Begagić',
    course: 'Englisch',
    imageUrl: '../../assets/icon/Bounty_begagic.jpg',
    sib:'1',
    height:'168cm',
    age:'20',
    phone:'IPhone',
    serie:'Breaking Bad',
    teach:'N/A',
    hobbies:'lernen',
    holi:'Dagestan',
    idol:'Sportakus',
    klasholi:'Michael Falk',


  },
  {
    id: 4,
    vname: 'Josip',
    surname: 'Benkovic',
    course: 'BSPK',
    imageUrl: '../../assets/icon/Bounty_josip.jpg',
    sib:'0',
    height:'187cm',
    age:'19',
    phone:'IPhone',
    serie:'Black Clover',
    teach:'Frysak',
    hobbies:'Fußball spielen',
    holi:'Madrid und Tokio',
    idol:'Crista Ronaldo SEWY',
    klasholi:'Umut',


  },
  {
    id: 5,
    vname: 'Salih',
    surname: 'Bilgin',
    course: 'Mathe',
    imageUrl: '../../assets/icon/Bounty_salih.jpg',
    sib:'3',
    height:'185cm',
    age:'18',
    phone:'IPhone',
    serie:'La Casa de Papel',
    teach:'Angermayer',
    hobbies:'Fußball, Autos',
    holi:'Madrid',
    idol:'Cristiano Ronaldo',
    klasholi:'Tarik',

  },
  {
    id: 6,
    vname: 'Zerda',
    surname: 'Cakir',
    course: 'Mathe',
    imageUrl: '../../assets/icon/Zerda_new.jpeg',
    sib:'2',
    height:'168cm',
    age:'18',
    phone:'IPhone',
    serie:'Grets Anatomy',
    teach:'Hiesinger',
    hobbies:'Volleyball',
    holi:'Amerika',
    idol:'Hiesinger',
    klasholi:'Linda und Noel',

  },
  {
    id: 7,
    vname: 'Michael',
    surname: 'Falk',
    course: 'NWT1',
    imageUrl: '../../assets/icon/Bounty_Falk.jpg',
    sib:'2',
    height:'N/A',
    age:'18',
    phone:'N/A',
    serie:'MA 2412',
    teach:'Wurst',
    hobbies:'Sachen machen',
    holi:'Helsinki',
    idol:'Trump',
    klasholi:'N/A',

  },
  {
    id: 8,
    vname: 'Roberto',
    surname: 'Ghiriti',
    course: 'WIR3',
    imageUrl: '../../assets/icon/Bounty_roberto.jpg',
    sib:'0',
    height:'187cm',
    age:'18',
    phone:'IPhone',
    serie:'Overflow und Attack on Titan',
    teach:'Frysak',
    hobbies:'Klauen & Gym',
    holi:'Japan',
    idol:'Eren Jäger',
    klasholi:'Roberto',

  },
  {
    id: 9,
    vname: 'Noel',
    surname: 'Groiß',
    course: 'BSPK',
    imageUrl: '../../assets/icon/Bounty_noel.jpg',
    sib:'1',
    height:'186cm',
    age:'18',
    phone:'IPhone',
    serie:'Breaking Bad',
    teach:'N/A',
    hobbies:'Kraftsport',
    holi:'Amerika',
    idol:'N/A',
    klasholi:'Tim,Linda,Zerda',

  },
  {
    id: 10,
    vname: 'Florian Robert',
    surname: 'Hedrich',
    course: 'WIR3',
    imageUrl: '../../assets/icon/Bounty_flo.jpg',
    sib:'1',
    height:'172cm',
    age:'19',
    phone:'Samsung',
    serie:'Brooklyn Nine Nine',
    teach:'Frysak',
    hobbies:'Coding',
    holi:'Japan',
    idol:'Eine Freundin',
    klasholi:'Philipp Lueger',

  },
  {
    id: 11,
    vname: 'Nagi',
    surname: 'Ibrahim',
    course: 'WIR2',
    imageUrl: '../../assets/icon/Bounty_nagi.jpg',
    sib:'1',
    height:'187cm',
    age:'18',
    phone:'IPhone',
    serie:'One Piece',
    teach:'Frysak',
    hobbies:'Gym',
    holi:'Tokio',
    idol:'Elon Musk',
    klasholi:'Tim, Noel, Strasshof Don',

  },
  {
    id: 12,
    vname: 'Taisir',
    surname: 'Khalifa',
    course: 'NW2',
    imageUrl: '../../assets/icon/Bounty_Khalifa.jpg',
    sib:'2',
    height:'164cm',
    age:'18',
    phone:'Samsung',
    serie:'Detektiv Conan',
    teach:'Frysak',
    hobbies:'Zeichnen, Malen, Backen, Modelieren',
    holi:'Südkorea, Kasachstan',
    idol:'Shinchi Kudo',
    klasholi:'Nagi',

  },
  {
    id: 13,
    vname: 'Philipp Karl',
    surname: 'Lueger',
    course: 'SEW',
    imageUrl: '../../assets/icon/Bounty_lueger.jpg',
    sib:'1',
    height:'195cm',
    age:'18',
    phone:'IPhone',
    serie:'Lucifer',
    teach:'Angermayer & Frysak',
    hobbies:'saufen',
    holi:'Skandinavien',
    idol:'Glatz',
    klasholi:'Die Klasse 4AHITN',

  },
  {
    id: 14,
    vname: 'Don Hofermayer Alexander',
    surname: 'Strasshof',
    course: 'BSPK und Englisch',
    imageUrl: '../../assets/icon/Bounty_mayerhofer.jpg',
    sib:'4',
    height:'175cm',
    age:'19',
    phone:'Samsung',
    serie:'Peaky Blinders',
    teach:'Glatz, Frysak, Putzenlechner',
    hobbies:'bissl Sport und Gaming',
    holi:'Japan',
    idol:'Don Hofermayer Alexander',
    klasholi:'Tim',

  },
  {
    id: 15,
    vname: 'Lukas Chonki',
    surname: 'Milicic',
    course: 'Englisch',
    imageUrl: '../../assets/icon/Bounty_lukas.jpg',
    sib:'2',
    height:'185cm',
    age:'17',
    phone:'IPhone',
    serie:'Jojos Bizarre Adventure',
    teach:'Zivkovic',
    hobbies:'Gaming',
    holi:'Irland',
    idol:'Lukas Schwager',
    klasholi:'Luka',

  },
  {
    id: 16,
    vname: 'Stefan',
    surname: 'Milojkovic',
    course: 'NWT1',
    imageUrl: '../../assets/icon/Bounty_stefan.jpg',
    sib:'4',
    height:'169cm',
    age:'17',
    phone:'IPhone',
    serie:'Baki',
    teach:'Frysak',
    hobbies:'Basketball',
    holi:'Dubai',
    idol:'Khabib',
    klasholi:'N/A',

  },
  {
    id: 17,
    vname: 'Alexander Karl',
    surname: 'Pauer',
    course: 'NWT1',
    imageUrl: '../../assets/icon/Bounty_Pauer.jpg',
    sib:'2',
    height:'178cm',
    age:'17',
    phone:'IPhone',
    serie:'Loki, Peaky Blinders',
    teach:'Frysak',
    hobbies:'Fahrrad fahren',
    holi:'Berchtesgaden',
    idol:'Lewis Hamilton',
    klasholi:'4AHITN',

  },
  {
    id: 18,
    vname: 'Luka Choka',
    surname: 'Ramljak',
    course: 'GGP',
    imageUrl: '../../assets/icon/Bounty_Luka.jpg',
    sib:'2',
    height:'187cm',
    age:'18',
    phone:'Sasmung',
    serie:'Malcom Mittendrin',
    teach:'Zivkovic',
    hobbies:'N/A',
    holi:'N/A',
    idol:'RIN',
    klasholi:'Lukas',

  },
  {
    id: 19,
    vname: 'Umut',
    surname: 'Sakar',
    course: 'WIR3',
    imageUrl: '../../assets/icon/Bounty_umut.jpg',
    sib:'1',
    height:'178cm',
    age:'20',
    phone:'IPhone',
    serie:'White Collar',
    teach:'Frysak',
    hobbies:'Gaming und Manhwas lesen',
    holi:'Shibuya in Tokio, Japan',
    idol:'Elon Musk',
    klasholi:'Josip, Roberto, Strasshof Don',

  },
  {
    id: 20,
    vname: 'Michael Nikolas',
    surname: 'Samarati',
    course: 'ITP2',
    imageUrl: '../../assets/icon/Bounty_Masarati wrum wrum.jpg',
    sib:'6',
    height:'180cm',
    age:'17',
    phone:'Samsung',
    serie:'Violet Evergarden',
    teach:'Wurst',
    hobbies:'Nachdenken',
    holi:'Japan',
    idol:'N/A',
    klasholi:'N/A',

  },
  {
    id: 21,
    vname: 'Viktor RIP',
    surname: 'Trojan',
    course: 'SEW',
    imageUrl: '../../assets/icon/Bounty_ viktor.jpg',
    sib:'0',
    height:'N/A',
    age:'20',
    phone:'One Plus',
    serie:'N/A',
    teach:'N/A',
    hobbies:'Calesthenics und Coding',
    holi:'N/A',
    idol:'Glatz',
    klasholi:'N/A',

  },
  {
    id: 22,
    vname: 'Philipp',
    surname: 'Vollmann',
    course: 'WIR3',
    imageUrl: '../../assets/icon/Bounty_vollmann.jpg',
    sib:'0',
    height:'188',
    age:'19',
    phone:'IPhone',
    serie:'Chernobyl',
    teach:'N/A',
    hobbies:'Sportschutz',
    holi:'Californien',
    idol:'N/A',
    klasholi:'N/A',

  },
  {
    id: 23,
    vname: 'Linda',
    surname: 'Yusupova',
    course: 'Deutsch',
    imageUrl: '../../assets/icon/Bounty_linda.jpg',
    sib:'3',
    height:'173',
    age:'19',
    phone:'IPhone',
    serie:'Shameless',
    teach:'Mesanovic',
    hobbies:'Sport machen',
    holi:'Burgenland',
    idol:'Lukas',
    klasholi:'Zerda',

  },
];

