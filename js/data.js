import {getRandomPozitiveFloat,getArrayNumberForImage,generateArrayPhoto} from './util.js';

const locations = {
  lat: {from: 35.65,before: 35.7,digits: 5},
  lng: {from: 139.7,before: 139.8,digits: 5}
};

const {lat,lng} = locations;

const offer = {
  title: 'Гостевой дом',
  price: {from: 0,before: 100000,digits: 0},
  type: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
  guest: {from: 1,before: 5,digits: 0},
  checkin: ['12:00','13:00','14:00'],
  checkout: ['12:00','13:00','14:00'],
  features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator','conditioner'],
  description: 'Современный гостевой дом расположен в центре города. Для гостей организуют трансфер от/до аэропорта. В числе удобств туристическое бюро и бизнес-центр.',
  photos:  ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg']
};

const {title,price,type,guest,checkin,checkout,features,description,photos} = offer;

function generateArrayObjects (lengthArrayAvatar,indexAvatar) {

  const objects = {

    author: {//объект — описывает автора.
      avatar: `img/avatars/user${getArrayNumberForImage(lengthArrayAvatar)[indexAvatar]}.png`,//это число от 1 до 10. Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются.
    },

    offer: {
      title:title, //строка — заголовок предложения. Придумайте самостоятельно.
      adress: {
        lat: getRandomPozitiveFloat(lat.from, lat.before, lat.digits),lng: getRandomPozitiveFloat(lng.from, lng.before, lng.digits)
      },
      price:getRandomPozitiveFloat(price.from,price.before,price.digits), //число — стоимость. Случайное целое положительное число.
      type: type[getRandomPozitiveFloat(0,type.length-1,0)],
      guest:getRandomPozitiveFloat(guest.from,guest.before,guest.digits),// число — количество гостей, которое можно разместить. Случайное целое положительное число.
      rooms: getRandomPozitiveFloat(1,3,0),
      checkin:checkin[getRandomPozitiveFloat(0,2,0)],// строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
      checkout:checkout[getRandomPozitiveFloat(0,2,0)],// строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
      features:features.filter((v,i) => i <  getRandomPozitiveFloat(0,features.length,0)),//массив строк — массив случайной длины из значений, Значения не должны повторяться.
      description:description,//строка — описание помещения. Придумайте самостоятельно.
      photos: generateArrayPhoto(photos)/*массив строк — массив случайной длины из значений:*/
    }

  };

  return objects;
}

const generateArrayData = (lengthArray) => Array.from({length:lengthArray}, (value,index) => generateArrayObjects(lengthArray,index));

export default generateArrayData;


