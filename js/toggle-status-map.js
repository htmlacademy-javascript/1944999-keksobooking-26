const adForm = document.querySelector('.ad-form');
const collectionFieldsetNotice = document.querySelectorAll('fieldset');
const formMap = document.querySelector('.map__filters');
const collectionOptionsMap = formMap.querySelectorAll('select');

const disablingMap = function () {
  adForm.classList.add('ad-form--disabled');
  formMap.classList.add('ad-form--disabled');
  collectionFieldsetNotice.forEach((value) => { value.disabled = true;});
  collectionOptionsMap.forEach((value) => { value.disabled = true;});
};

const enabledMap = function () {
  adForm.classList.remove('ad-form--disabled');
  formMap.classList.remove('ad-form--disabled');
  collectionFieldsetNotice.forEach((value) => { value.disabled = false;});
  collectionOptionsMap.forEach((value) => { value.disabled = false;});
};

export {disablingMap,enabledMap};
