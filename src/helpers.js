import { ADDRESS } from './vars';

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
