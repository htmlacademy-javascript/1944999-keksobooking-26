const formNotice = document.querySelector('.ad-form');
const titleNotice = formNotice.querySelector('#title');


const validateTitle = (value) => {
  if (value.length >= 30 && value.length <= 100) {
    return true;
  }
  return false;
};

const getErrorMessageTitle = (value) => {
  if (!value) { return 'Обязательное поле';}

  if (value.length < 30) {
    return `Минимальная длина - 30 символов. Осталось ввести: ${30 - value.length }`;
  }

  if (value.length > 100) {
    return `Максимальная длина - 100 символов. Удалите ${value.length - 100} символа`;
  }
};

export {titleNotice,validateTitle,getErrorMessageTitle};
