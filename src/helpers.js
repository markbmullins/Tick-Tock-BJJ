import { ADDRESS} from './vars';
//import { DateTime } from 'luxon';

export const mapSelector = () => {
  const onIOS =
    navigator.platform.indexOf('iPhone') !== -1 ||
    navigator.platform.indexOf('iPad') !== -1 ||
    navigator.platform.indexOf('iPod') !== -1;

  const link = '://maps.google.com/maps/dir/?q=';

  if (onIOS) {
    window.open(`maps${link}${ADDRESS}`);
  } else {
    window.open(`https${link}${ADDRESS}`);
  }
};

export const scrollIntoView = id => {
  const el = document.getElementById(id);
  el.scrollIntoView(true);
  document.getElementById(id).scrollTop += 50;
};

export const openSidebar = () => {
  document.getElementById('sidebar').style.width = '20.313em';
};

export const closeSidebar = () => {
  document.getElementById('sidebar').style.width = '0px';
};

// export const openStatement = () => {
//   const hours = Object.entries(HOURS); // [[key, [0,1,2]]], [key, [0,1,2]]]
//   const formattedHours = {
//     Monday: [],
//     Tuesday: [],
//     Wednesday: [],
//     Thursday: [],
//     Friday: [],
//     Saturday: [],
//     Sunday: []
//   };
//   const formatString1 = '10:00 AM – 1:00 PM,';
//   for (const day of hours) {
//     if (day[1].length === 1) {
//       switch (day[0]) {
//         case 'Mon: ':
//           formattedHours.Monday = [new DateTime.fromFormat(day[1][0], '')];
//           break;
//         case 'Tue: ':
//           break;
//         case 'Wed: ':
//           break;
//         case 'Thu: ':
//           break;
//         case 'Fri: ':
//           break;
//         case 'Sat: ':
//           break;
//         case 'Sun: ':
//           break;
//         default:
//       }
//     } else if (day[1].length === 2) {
//       switch (day[0]) {
//         case 'Mon: ':
//           formattedHours.Monday = [new DateTime.fromFormat(day[1])];
//           break;
//         case 'Tue: ':
//           break;
//         case 'Wed: ':
//           break;
//         case 'Thu: ':
//           break;
//         case 'Fri: ':
//           break;
//         case 'Sat: ':
//           break;
//         case 'Sun: ':
//           break;
//         default:
//       }
//     }
//   }
//   DateTime.local();
// };
