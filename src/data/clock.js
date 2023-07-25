import { adjustAngle, generateRandomColor } from '../lib/ClockLib'

export const thursdayClock = {
  dayActs: [
    {
      index: 315,
      text: '✨دور على الكنز✨',
    },
    {
      index: 345,
      text: 'تسكين',
    },
  ],
  nightActs: [
    {
      index: 22.5,
      text: 'مجموعه 1',
    },
    {
      index: 75,
      text: 'غدا',
    },
    {
      index: 112.5,
      text: 'بيسين بنات',
    },
    {
      index: 157.5,
      text: 'بيسين ولاد',
    },
    {
      index: 210,
      text: 'الصلاة - الشعار - الترانيم',
    },
    {
      index: 247.5,
      text: 'مجموعه 2',
    },
    {
      index: 285,
      text: 'العَشا',
    },
    {
      index: 307.5,
      text: 'صلاه',
    },
    {
      index: 330,
      text: 'نوم (Shut down)',
    },
  ],
  dayHands: [
    {
      index: 300,
      text: '10:00',
    },
    {
      index: 330,
      text: '11:00',
    },
  ],
  nigthHands: [
    {
      index: 0,
      text: '12:00',
    },
    {
      index: 45,
      text: '01:30',
    },
    {
      index: 60,
      text: '02:00',
    },
    {
      index: 90,
      text: '03:00',
    },
    {
      index: 135,
      text: '04:30',
    },
    {
      index: 180,
      text: '06:00',
    },
    {
      index: 195,
      text: '06:30',
    },
    {
      index: 225,
      text: '07:30',
    },
    {
      index: 270,
      text: '09:00',
    },
    {
      index: 300,
      text: '10:00',
    },
    {
      index: 315,
      text: '10:30',
    },
    {
      index: 345,
      text: '11:30',
    },
  ],
  dayAreas: [
    {
      startAngle: adjustAngle(300),
      endAngle: adjustAngle(330),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(330),
      endAngle: adjustAngle(360),
      color: generateRandomColor(),
    },
  ],
  nightAreas: [
    {
      startAngle: adjustAngle(0),
      endAngle: adjustAngle(45),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(45),
      endAngle: adjustAngle(60),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(60),
      endAngle: adjustAngle(90),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(90),
      endAngle: adjustAngle(135),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(135),
      endAngle: adjustAngle(180),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(195),
      endAngle: adjustAngle(225),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(225),
      endAngle: adjustAngle(270),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(270),
      endAngle: adjustAngle(300),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(300),
      endAngle: adjustAngle(315),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(315),
      endAngle: adjustAngle(345),
      color: generateRandomColor(),
    },
  ],
}

export const fridayClock = {
  dayAreas: [
    {
      startAngle: adjustAngle(0),
      endAngle: adjustAngle(7 * 30),
      color: '#55555533',
    },
    {
      startAngle: adjustAngle(7 * 30),
      endAngle: adjustAngle(8 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(8 * 30),
      endAngle: adjustAngle(8.5 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(8.5 * 30),
      endAngle: adjustAngle(9.5 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(9.5 * 30),
      endAngle: adjustAngle(11 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(11.5 * 30),
      endAngle: adjustAngle(12 * 30),
      color: generateRandomColor(),
    },
  ],
  nightAreas: [
    {
      startAngle: adjustAngle(12 * 30),
      endAngle: adjustAngle(1.5 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(2 * 30),
      endAngle: adjustAngle(3 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(3 * 30),
      endAngle: adjustAngle(4.5 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(4.5 * 30),
      endAngle: adjustAngle(6 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(6.5 * 30),
      endAngle: adjustAngle(7.5 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(7.5 * 30),
      endAngle: adjustAngle(9 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(9 * 30),
      endAngle: adjustAngle(9.5 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(9.5 * 30),
      endAngle: adjustAngle(10.5 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(10.5 * 30),
      endAngle: adjustAngle(11 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(11 * 30),
      endAngle: adjustAngle(11.5 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(11.5 * 30),
      endAngle: adjustAngle(12 * 30),
      color: generateRandomColor(),
    },
  ],
  dayHands: [
    {
      index: 12 * 30,
      text: '12:00',
    },
    {
      index: 7 * 30,
      text: '07:00',
    },
    {
      index: 8 * 30,
      text: '08:00',
    },
    {
      index: 8.5 * 30,
      text: '08:30',
    },
    {
      index: 9.5 * 30,
      text: '09:30',
    },
    {
      index: 11 * 30,
      text: '11:00',
    },
    {
      index: 11.5 * 30,
      text: '11:30',
    },
  ],
  nigthHands: [
    {
      index: 0,
      text: '12:00',
    },
    {
      index: 45,
      text: '01:30',
    },
    {
      index: 60,
      text: '02:00',
    },
    {
      index: 90,
      text: '03:00',
    },
    {
      index: 135,
      text: '04:30',
    },
    {
      index: 180,
      text: '06:00',
    },
    {
      index: 195,
      text: '06:30',
    },
    {
      index: 225,
      text: '07:30',
    },
    {
      index: 270,
      text: '09:00',
    },
    {
      index: 285,
      text: '09:30',
    },
    {
      index: 315,
      text: '10:30',
    },
    {
      index: 330,
      text: '11:00',
    },
    {
      index: 345,
      text: '11:30',
    },
  ],
  dayActs: [
    {
      index: 105,
      text: 'نووم',
    },
    {
      index: 225,
      text: 'صحي النوم',
    },
    {
      index: 247.5,
      text: 'صلاه',
    },
    {
      index: 270,
      text: 'صلاه',
    },
    {
      index: 307.5,
      text: 'مجموعه 2',
    },
    {
      index: 352.5,
      text: 'العاب',
    },
  ],
  nightActs: [
    {
      index: 22.5,
      text: 'ألعاب',
    },
    {
      index: 75,
      text: 'غدا',
    },
    {
      index: 112.5,
      text: 'بسين بنات',
    },
    {
      index: 157.5,
      text: 'بسين ولاد',
    },
    {
      index: 210,
      text: 'صلاه - شعار - ترانيم',
    },
    {
      index: 247.5,
      text: 'مجموعه 4',
    },
    {
      index: 277.5,
      text: 'عَشا',
    },
    {
      index: 300,
      text: 'تحضير حفلة سمر',
    },
    {
      index: 322.5,
      text: 'عرض السمر',
    },
    {
      index: 337.5,
      text: 'صلاه',
    },
    {
      index: 352.5,
      text: 'نوووم',
    },
  ],
}

export const saturdayClock = {
  dayActs: [
    {
      index: 112.5,
      text: 'نوووووم',
    },
    {
      index: 255,
      text: 'قداس',
    },
    {
      index: 300,
      text: 'فطار',
    },
    {
      index: 330,
      text: 'تقييم',
    },
    {
      index: 353.75,
      text: 'نتحرك',
    },
  ],
  nightActs: [
    {
      index: 90,
      text: 'دير أبو مقار',
    },
  ],
  dayAreas: [
    {
      startAngle: adjustAngle(0),
      endAngle: adjustAngle(7.5 * 30),
      color: '#00000033',
    },
    {
      startAngle: adjustAngle(7.5 * 30),
      endAngle: adjustAngle(9.5 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(9.5 * 30),
      endAngle: adjustAngle(10.5 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(10.5 * 30),
      endAngle: adjustAngle(11.5 * 30),
      color: generateRandomColor(),
    },
    {
      startAngle: adjustAngle(11.5 * 30),
      endAngle: adjustAngle(12 * 30),
      color: generateRandomColor(),
    },
  ],
  nightAreas: [
    {
      startAngle: adjustAngle(0),
      endAngle: adjustAngle(6 * 30),
      color: generateRandomColor(),
    },
  ],
  dayHands: [
    {
      index: 225,
      text: '07:30',
    },
    {
      index: 285,
      text: '09:30',
    },
    {
      index: 315,
      text: '10:30',
    },
    {
      index: 345,
      text: '11:30',
    },
    {
      index: 0,
      text: '12:00',
    },
  ],
  nigthHands: [
    {
      index: 0,
      text: '12:00',
    },
    {
      index: 180,
      text: '06:00',
    },
  ],
}

// [
//   {
//     startAngle: adjustAngle(getHourDegree(12)),
//     endAngle: adjustAngle(getHourDegree(4)),
//     color: 'red',
//   },
// ]
