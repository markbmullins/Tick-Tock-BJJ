export const mapSelector = () => {
  const onIOS =
    navigator.platform.indexOf('iPhone') !== -1 ||
    navigator.platform.indexOf('iPad') !== -1 ||
    navigator.platform.indexOf('iPod') !== -1;

  const address = '7671 Northwoods Blvd H, North Charleston, SC 29406';
  const link = '://maps.google.com/maps/dir/?q=';

  if (onIOS) {
    window.open(`maps${link}${address}}`);
  } else {
    window.open(`https${link}${address}`);
  }
};

export const scrollIntoView = id => {
  const el = document.getElementById(id);
  el.scrollIntoView(true);
  document.getElementById(id).scrollTop += 50;
};
