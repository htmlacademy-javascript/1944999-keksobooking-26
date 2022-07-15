const disablingMap = function () {
  const adForm = document.querySelector('.ad-form');
  const collectionFieldsetNotice = adForm.querySelectorAll('fieldset');
  const formMap = document.querySelector('.map__filters');
  const collectionOptionsMap = formMap.querySelectorAll('select');

  adForm.classList.add('ad-form--disabled');
  formMap.classList.add('ad-form--disabled')
  collectionFieldsetNotice.forEach((value) => value.disabled = true );
  collectionOptionsMap.forEach((value) => value.disabled = true)
};

const enabledMap = function () {
  const adForm = document.querySelector('.ad-form');
  const collectionFieldsetNotice = adForm.querySelectorAll('fieldset');
  const formMap = document.querySelector('.map__filters');
  const collectionOptionsMap = formMap.querySelectorAll('select');

  adForm.classList.remove('ad-form--disabled');
  formMap.classList.remove('ad-form--disabled')
  collectionFieldsetNotice.forEach((value) => value.disabled = false );
  collectionOptionsMap.forEach((value) => value.disabled = false)
};
