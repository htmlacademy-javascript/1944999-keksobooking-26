const formNotice = document.querySelector('.ad-form');
const timeIn = formNotice.querySelector('#timein');
const timeOut = formNotice.querySelector('#timeout');
const time = formNotice.querySelector('.ad-form__element--time');

const synchronTime = () => {
  time.addEventListener('change', (evt) => {
    if (evt.target === timeIn) {
      timeOut.value = evt.target.value;
    }

    else {
      timeIn.value = evt.target.value;
    }
  });
};

export default synchronTime;
