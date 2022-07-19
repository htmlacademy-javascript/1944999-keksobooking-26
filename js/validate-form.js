import {titleNotice,validateTitle,getErrorMessageTitle} from './title-notice.js';
import {priceNight,validatePriceNight,getErrorMessagePriceNight} from './price.js';
import {numberRooms,validateRooms,getErrorMessageNumberRooms} from './rooms-capacity.js';

const formNotice = document.querySelector('.ad-form');
const pristine = new Pristine(formNotice, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'text-help'
});


const submitForm = function ()
{
  pristine.addValidator(titleNotice,validateTitle, getErrorMessageTitle);

  pristine.addValidator(priceNight, validatePriceNight, getErrorMessagePriceNight);

  pristine.addValidator(numberRooms,validateRooms,getErrorMessageNumberRooms);

  formNotice.addEventListener('submit', (evt) =>
  {
    evt.preventDefault();

    if(pristine.validate())
    {
      formNotice.submit();
    }
  });
};

export default submitForm;


