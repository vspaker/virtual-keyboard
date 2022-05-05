import './keyboard.scss';

const RU_UPPERCASE = [];
const RU_LOWERCASE = [
  'ё',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ',
  '\\',
  'Del',
  'Caps Lock',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э',
  'Enter',
  'Shift',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
  '.',
  '▲',
  'Shift',
  'Ctrl',
  'Win',
  'Alt',
  'Space',
  'Alt',
  '◄',
  '▼',
  '►',
  'Ctrl',
];
const ENG_UPPERCASE = [];
const ENG_LOWERCASE = [];

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

  h1.innerHTML = 'Виртуальная клавиатура';
  pFirst.innerHTML = 'Клавиатура создана в операционной системе Windows';
  pLast.innerHTML = 'Для переключения раскладки: левые Alt + Shift';
  keyboard.classList.add('keyboard');

  for (let i = 0; i < RU_LOWERCASE.length; i++) {
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
    button.innerHTML = `${RU_LOWERCASE[i]}`;
    row[row.length - 1].append(button);
    if (RU_LOWERCASE[i].length > 1) {
      button.classList.add(
        `keyboard__button_${RU_LOWERCASE[i].toLowerCase().replace(' ', '-')}`
      );
    }
  }

  wrapper.classList.add('wrapper');
  wrapper.append(h1);
  wrapper.append(textarea);
  wrapper.append(keyboard);
  wrapper.append(pFirst);
  wrapper.append(pLast);

  return wrapper;
};

export { Keyboard };
