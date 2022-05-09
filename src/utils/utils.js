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

const insertSymbol = (textarea, cursorCoords, sym) => {
  let symbol = '';
  if (sym === 'ArrowUp') {
    symbol = '▲';
  } else if (sym === 'ArrowDown') {
    symbol = '▼';
  } else if (sym === 'ArrowDown') {
    symbol = '▼';
  } else if (sym === 'ArrowLeft') {
    symbol = '◄';
  } else if (sym === 'ArrowRight') {
    symbol = '►';
  } else {
    symbol = sym;
  }
  const firstPart = textarea.value.slice(0, textarea.selectionStart);
  const lastPart = textarea.value.slice(textarea.selectionStart);
  const inputPart = '' + symbol;
  textarea.value = `${firstPart + inputPart + lastPart}`;
  cursorCoords.start++;
  cursorCoords.end++;
  textarea.selectionStart = cursorCoords.start;
  textarea.selectionEnd = cursorCoords.end;
};

const deleteSymbol = (textarea, cursorCoords) => {
  if (textarea.selectionStart === textarea.selectionEnd) {
    const firstPart = textarea.value.slice(0, textarea.selectionStart);
    const secondPart = textarea.value.slice(textarea.selectionStart + 1);
    textarea.value = `${firstPart + secondPart}`;
    textarea.selectionStart = cursorCoords.start;
    textarea.selectionEnd = cursorCoords.end;
  } else {
    return;
  }
};

const backSpace = (textarea, cursorCoords) => {
  let firstPart = '';
  let secondPart = '';

  if (textarea.selectionStart !== textarea.selectionEnd) {
    const cursorReplacement = textarea.selectionEnd - textarea.selectionStart;
    firstPart = textarea.value.slice(0, textarea.selectionStart);
    secondPart = textarea.value.slice(textarea.selectionEnd);
    cursorCoords.end = cursorCoords.end - cursorReplacement;
  } else {
    firstPart = textarea.value.slice(0, textarea.selectionStart - 1);
    secondPart = textarea.value.slice(textarea.selectionStart);
    cursorCoords.start = textarea.selectionStart - 1;
    cursorCoords.end = textarea.selectionEnd - 1;
  }
  textarea.value = `${firstPart + secondPart}`;
  textarea.selectionStart = cursorCoords.start;
  textarea.selectionEnd = cursorCoords.end;
};

export {toggleCaps, toggleShift, toggleLanguage, insertSymbol, deleteSymbol, backSpace};
