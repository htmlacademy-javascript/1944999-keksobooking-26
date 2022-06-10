/* eslint-disable no-unused-vars */
function getRandomNumber (min, max, afterPointNumber) {
  if(max <= min) {
    return 'Некорректный диапазон!';
  }
  return  (Math.random() * (max - min) + min).toFixed(afterPointNumber);
}
