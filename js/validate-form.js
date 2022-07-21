import { titleNotice, validateTitle, getErrorMessageTitle } from './title-notice.js';
import  {priceNight ,validatePriceNight, getErrorMessagePriceNight, slider } from './price.js';
import { numberRooms, validateRooms, getErrorMessageNumberRooms } from './rooms-capacity.js';

const formNotice = document.querySelector('.ad-form');
const buttonReset = document.querySelector('.ad-form__reset');
const mapFilters = document.querySelector('.map__filters');
const capacityNotice = formNotice.querySelector('#capacity');
const roomNumber = formNotice.querySelector('#room_number');
const typeHome = formNotice.querySelector('#type');
const price = formNotice.querySelector('#price');


const pristine = new Pristine(formNotice, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help'
});


const submitForm = () => {
  pristine.addValidator(titleNotice,validateTitle, getErrorMessageTitle);

  pristine.addValidator(priceNight, validatePriceNight, getErrorMessagePriceNight);

  pristine.addValidator(numberRooms,validateRooms,getErrorMessageNumberRooms);

  formNotice.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if(pristine.validate()) {
      formNotice.submit();
    }
  });
};

buttonReset.addEventListener('click', () => {
  pristine.reset();
  slider.noUiSlider.reset();
  mapFilters.reset();
});


slider.noUiSlider.on('end', () => {
  pristine.validate();
});

formNotice.addEventListener('change', (evt) => {
  if (evt.target === capacityNotice) {
    pristine.validate(roomNumber);
  }

  if (evt.target === typeHome) {
    pristine.validate(price);
  }

  pristine.validate(evt.target);

});

export default submitForm;


