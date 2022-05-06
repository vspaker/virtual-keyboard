const toggleCaps = () => {
  if (localStorage.getItem('code') === '1') {
    localStorage.setItem('code', '2');
  } else if (localStorage.getItem('code') === '2') {
    localStorage.setItem('code', '1');
  } else if (localStorage.getItem('code') === '3') {
    localStorage.setItem('code', '4');
  } else if (localStorage.getItem('code') === '4') {
    localStorage.setItem('code', '3');
  } else if (localStorage.getItem('code') === '5') {
    localStorage.setItem('code', '6');
  } else if (localStorage.getItem('code') === '6') {
    localStorage.setItem('code', '5');
  } else if (localStorage.getItem('code') === '7') {
    localStorage.setItem('code', '8');
  } else if (localStorage.getItem('code') === '8') {
    localStorage.setItem('code', '7');
  }
};

const toggleShift = () => {
  if (localStorage.getItem('code') === '1') {
    localStorage.setItem('code', '5');
  } else if (localStorage.getItem('code') === '2') {
    localStorage.setItem('code', '6');
  } else if (localStorage.getItem('code') === '3') {
    localStorage.setItem('code', '7');
  } else if (localStorage.getItem('code') === '4') {
    localStorage.setItem('code', '8');
  } else if (localStorage.getItem('code') === '5') {
    localStorage.setItem('code', '1');
  } else if (localStorage.getItem('code') === '6') {
    localStorage.setItem('code', '2');
  } else if (localStorage.getItem('code') === '7') {
    localStorage.setItem('code', '3');
  } else if (localStorage.getItem('code') === '8') {
    localStorage.setItem('code', '4');
  }
};

const toggleLanguage = () => {
  if (localStorage.getItem('code') === '1') {
    localStorage.setItem('code', '3');
  } else if (localStorage.getItem('code') === '2') {
    localStorage.setItem('code', '4');
  } else if (localStorage.getItem('code') === '3') {
    localStorage.setItem('code', '1');
  } else if (localStorage.getItem('code') === '4') {
    localStorage.setItem('code', '2');
  } else if (localStorage.getItem('code') === '5') {
    localStorage.setItem('code', '7');
  } else if (localStorage.getItem('code') === '6') {
    localStorage.setItem('code', '8');
  } else if (localStorage.getItem('code') === '7') {
    localStorage.setItem('code', '5');
  } else if (localStorage.getItem('code') === '8') {
    localStorage.setItem('code', '6');
  }
};

export { toggleCaps, toggleShift, toggleLanguage };
