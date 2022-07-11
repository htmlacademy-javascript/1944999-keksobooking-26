import {generateArrayData} from './data.js';

export const  serverData = generateArrayData(10);

const templateCard = document.querySelector('#card').content;
const mapCanvas = document.querySelector('#map-canvas');
const type = {palace: 'Дворец',flat:'Квартира', bungalow:'Бунгало', house:'Дом', hotel:'Отель'}
const fragment = document.createDocumentFragment();
const containerDataFromServer = document.createElement('div');

serverData.forEach(({author,locations,offer}) => {
  let cloneTemplate = templateCard.cloneNode(true);
  cloneTemplate.querySelector('.popup__avatar').src = 'img/avatars/user' + author.avatars + '.png';
  cloneTemplate.querySelector('.popup__title').textContent = offer.title;
  cloneTemplate.querySelector('.popup__text--price').textContent = '';
  cloneTemplate.querySelector('.popup__text--price').insertAdjacentHTML('afterbegin', offer.price + ' <span>₽/ночь</span></p>');
  cloneTemplate.querySelector('.popup__type').textContent = type[offer.type];
  cloneTemplate.querySelector('.popup__text--capacity').textContent = '';
  cloneTemplate.querySelector('.popup__text--capacity').insertAdjacentHTML('afterbegin', offer.rooms + ' комнаты для ' + offer.guest + ' гостей');
  cloneTemplate.querySelector('.popup__text--time').textContent= '';
  cloneTemplate.querySelector('.popup__text--time').insertAdjacentHTML('afterbegin', 'Заезд после ' + offer.checkin + ' выезд до ' + offer.checkout );

  //Третий способ
  const features = cloneTemplate.querySelector('.popup__features').querySelectorAll('.popup__feature')
  features.forEach(value => {
    const isNecessary = offer.features.some((element) => value.classList.contains('popup__feature--' + element))
    if (!isNecessary) {
      value.remove()
    }
  })

  cloneTemplate.querySelector('.popup__description').textContent = offer.description;


  offer.photos.forEach((photo) => {
    const elementPhoto = cloneTemplate.querySelector('.popup__photo').cloneNode(true);
    elementPhoto.src = photo;
    cloneTemplate.querySelector('.popup__photos').append(elementPhoto);
  })
  cloneTemplate.querySelector('.popup__photo').remove()

  // Первй способ
  /* cloneTemplate.querySelector('.popup__features').textContent = '';
    offer.features.forEach(value=> {
      const elementFeature = document.createElement('li')
      elementFeature.classList.add('popup__feature--' + value, 'popup__feature')
      cloneTemplate.querySelector('.popup__features').append(elementFeature)
    })

    //Второй способ
    /*const fragment = document.createDocumentFragment();

    offer.features.forEach ((feature) => {
      const elementFeature = cloneTemplate.querySelector('.popup__feature--' + feature)

      if (elementFeature) {
        fragment.append(elementFeature)
      }
    })
    cloneTemplate.querySelector('.popup__features').textContent='';
    cloneTemplate.querySelector('.popup__features').append(fragment)
  */

  // console.log(elementPhoto)

  containerDataFromServer.append(cloneTemplate)
})
const arrayDataFromServer = containerDataFromServer.children
mapCanvas.append(arrayDataFromServer[1])





