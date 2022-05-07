import './keyboard.scss';
import {
  toggleCaps,
  toggleShift,
  toggleLanguage,
  insertSymbol,
  deleteSymbol,
  backSpace,
} from '../utils/utils';
import {
  RU_LOWERCASE,
  RU_UPPERCASE,
  RU_UPPERCASE_SHIFTED,
  RU_LOWERCASE_SHIFTED,
  ENG_LOWERCASE,
  ENG_UPPERCASE,
  ENG_UPPERCASE_SHIFTED,
  ENG_LOWERCASE_SHIFTED,
} from '../data/letters';

const DataStorage = {
  1: RU_LOWERCASE,
  2: RU_UPPERCASE,
  3: ENG_LOWERCASE,
  4: ENG_UPPERCASE,
  5: RU_LOWERCASE_SHIFTED,
  6: RU_UPPERCASE_SHIFTED,
  7: ENG_LOWERCASE_SHIFTED,
  8: ENG_UPPERCASE_SHIFTED,
};

const FIRST_ROW_IDX = 0;
const SECOND_ROW_IDX = 14;
const THIRD_ROW_IDX = 29;
const FOURTH_ROW_IDX = 42;
const FIFTH_ROW_IDX = 55;

const Keyboard = () => {
  const wrapper = document.createElement('div');

  const h1 = document.createElement('h1');
  const textarea = document.createElement('textarea');
  const keyboard = document.createElement('div');
  const pFirst = document.createElement('p');
  const pLast = document.createElement('p');

  textarea.setAttribute('cols', 50);
  textarea.setAttribute('rows', 5);
  h1.innerHTML = 'Виртуальная клавиатура';
  pFirst.innerHTML = 'Клавиатура создана в операционной системе Windows';
  pLast.innerHTML = 'Для переключения раскладки: левые Ctrl + Alt';
  keyboard.classList.add('keyboard');

  const renderKeyboard = () => {
    keyboard.innerHTML = '';
    let letters;
    if (!localStorage.getItem('code')) {
      letters = DataStorage[1];
      localStorage.setItem('code', '1');
    } else {
      letters = DataStorage[localStorage.getItem('code')];
    }
    for (let i = 0; i < letters.length; i++) {
      if (
        i === FIRST_ROW_IDX ||
        i === SECOND_ROW_IDX ||
        i === THIRD_ROW_IDX ||
        i === FOURTH_ROW_IDX ||
        i === FIFTH_ROW_IDX
      ) {
        const row = document.createElement('div');
        row.classList.add('keyboard__row');
        keyboard.append(row);
      }
      const row = keyboard.querySelectorAll('.keyboard__row');
      const button = document.createElement('div');
      button.classList.add('keyboard__button');
      const textNode = document.createElement('span');
      button.append(textNode);
      const buttonText = `${letters[i]}` === 'Space' ? '' : `${letters[i]}`;
      textNode.innerHTML = buttonText;
      row[row.length - 1].append(button);
      if (letters[i].length > 1) {
        button.classList.add(
          `keyboard__button_${letters[i].toLowerCase().replace(' ', '-')}`
        );
      }
      if (
        letters[i] === '▲' ||
        letters[i] === '◄' ||
        letters[i] === '▼' ||
        letters[i] === '►'
      ) {
        button.classList.add('keyboard__button_controls');
      }
    }
  };

  renderKeyboard();

  let cursorCoords = {
    start: 0,
    end: 0,
  };

  const clickHandler = (evt) => {
    if (evt.target.closest('textarea')) {
      cursorCoords.start = textarea.selectionStart;
      cursorCoords.end = textarea.selectionEnd;
    }

    if (evt.target.closest('.keyboard__button_caps-lock')) {
      toggleCaps();
      renderKeyboard();
    }

    if (evt.target.closest('.keyboard__button_enter')) {
      insertSymbol(textarea, cursorCoords, '\n');
    } else if (evt.target.closest('.keyboard__button_backspace')) {
      backSpace(textarea, cursorCoords);
    } else if (evt.target.closest('.keyboard__button_tab')) {
      insertSymbol(textarea, cursorCoords, '\t');
    } else if (evt.target.closest('.keyboard__button_del')) {
      deleteSymbol(textarea, cursorCoords);
    } else if (evt.target.closest('.keyboard__button')) {
      insertSymbol(textarea, cursorCoords, evt.target.textContent);
    } else {
      return;
    }
  };

  const mouseDownHandler = (evt) => {
    if (evt.target.closest('.keyboard__button_shift')) {
      toggleShift();
      renderKeyboard();
    } else if (evt.target.closest('.keyboard__button')) {
      evt.preventDefault();
    }
    return;
  };

  const mouseUpHandler = (evt) => {
    if (evt.target.closest('.keyboard__button_shift')) {
      toggleShift();
      renderKeyboard();
    }
    return;
  };

  let pressedKeys = new Set();
  const ctrlLeft = 'ControlLeft';
  const altLeft = 'AltLeft';

  const keyDownHandler = (evt) => {
    evt.preventDefault();
    if (evt.code === 'ControlLeft' || evt.code === 'AltLeft') {
      pressedKeys.add(evt.code);
      const targetCodes = [ctrlLeft, altLeft];
      for (let code of targetCodes) {
        if (!pressedKeys.has(code)) {
          return;
        }
      }
      pressedKeys.clear();
      toggleLanguage();
      renderKeyboard();
    }

    if (evt.key === 'Shift' && !evt.repeat) {
      toggleShift();
      renderKeyboard();
    }

    if (evt.code === 'CapsLock' && !evt.repeat) {
      toggleCaps();
      renderKeyboard();
    }

    if (evt.key === 'Enter') {
      insertSymbol(textarea, cursorCoords, '\n');
    } else if (evt.key === 'Backspace') {
      backSpace(textarea, cursorCoords);
    } else if (evt.key === 'Delete') {
      deleteSymbol(textarea, cursorCoords);
    } else if (evt.key === 'Tab') {
      insertSymbol(textarea, cursorCoords, '\t');
    } else {
      insertSymbol(textarea, cursorCoords, evt.key);
    }

    return;
  };

  const keyUpHandler = (evt) => {
    pressedKeys.delete(evt.code);
    if (evt.key === 'Shift') {
      toggleShift();
      renderKeyboard();
    }
  };

  const focusHandler = () => {
    textarea.selectionStart = cursorCoords.start;
    textarea.selectionEnd = cursorCoords.end;
  };

  textarea.addEventListener('focus', focusHandler);

  wrapper.addEventListener('click', clickHandler);
  wrapper.addEventListener('mousedown', mouseDownHandler);
  wrapper.addEventListener('mouseup', mouseUpHandler);

  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);

  wrapper.classList.add('wrapper');
  wrapper.append(h1);
  wrapper.append(textarea);
  wrapper.append(keyboard);
  wrapper.append(pFirst);
  wrapper.append(pLast);

  return wrapper;
};

export { Keyboard };
