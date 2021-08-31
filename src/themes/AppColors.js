'use strict';

const app = {
  statusBarStyleLight: 'light-content',
  statusBarStyleDark: 'dark-content',

  // background: "#E9EBEE",
  background: '#FAFCFF',
  backgroundBlue: '#03A9F3',
  navBarIcons: '#787C87',
  navBarTitle: '#787C87',
  statusBarBg: '#03A9F3',

  inputUnderline: '#EFEDED',
  inputLabel: '#777777',
  line: '#455B6314',
  error: '#FF0000',
  placeholder: '#00000050',

  //container
  gray: '#F7F7FA',
  whiteBg: '#FFFFFF',

  //underlay Colors
  underPrimary: '#3497FD',
  underGray: '#f2f2f2',
  underYellow: '#F3B45D',
  underBlue: '#11B2FA',
  disabled: '#bcbcbc',

  //boxColors

  darkViolet: '#665EFF',
  violet: '#5773FF',
  violet2: '#0033FF',
  blue: '#3497FD',
  skyBlue: '#03A9F3',
  lightBlue: '#E4F5FD',
  lightBlue2: '#E5F6FE',
  darkBlue: '#0270A1',
  yellow: '#FFBF67',
};

const brand = {
  brand: {
    primary: '#03A9F3',
    secondary: '#03A9F3',
  },
};

const text = {
  textPrimary: '#181725',
  textSecondary: '#7C7C7C',
  textWhite: '#FFFFFF',
  textGreen: '#009971',
  textBlack: '#000000',
};

const bgColor = {
  bgPrimary: '#F9F9F9',
  bgGreen: '#009971',
  bgWhite: '#FFFFFF',
  bgRed: '#840808',
};
const button = {
  buttonGreen: '#009971',
  buttonRed: '#940000',
  buttonGrey: '#DBE2ED',
  buttonDarkGreen: '#475C2C',
  buttonWhite: '#FFFFFF',
};
const border = {
  borderGreen: '#009971',
};

export default {
  ...app,
  ...brand,
  ...text,
  ...button,
  ...bgColor,
  ...border,
};