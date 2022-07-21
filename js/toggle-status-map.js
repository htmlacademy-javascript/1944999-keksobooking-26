const adForm = document.querySelector('.ad-form');
const collectionFieldsetNotice = document.querySelectorAll('fieldset'); //Отключаю все фидлсеты тут
const formMap = document.querySelector('.map__filters');
const collectionOptionsMap = formMap.querySelectorAll('select');
const slider = adForm.querySelector('.ad-form__slider');

const disablingMap = () => {
  adForm.classList.add('ad-form--disabled');
  formMap.classList.add('ad-form--disabled');
  collectionFieldsetNotice.forEach((value) => { value.disabled = true;});
  collectionOptionsMap.forEach((value) => { value.disabled = true;});
  slider.setAttribute('disabled', true);
};

const enabledMap = () => {
  adForm.classList.remove('ad-form--disabled');
  formMap.classList.remove('ad-form--disabled');
  collectionFieldsetNotice.forEach((value) => { value.disabled = false;});
  collectionOptionsMap.forEach((value) => { value.disabled = false;});
  slider.removeAttribute('disabled');
};

export {disablingMap,enabledMap};
