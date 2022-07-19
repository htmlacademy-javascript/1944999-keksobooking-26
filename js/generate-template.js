const type = {palace: 'Дворец',flat:'Квартира', bungalow:'Бунгало', house:'Дом', hotel:'Отель'};
const templateCard = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');
const fragment = document.createDocumentFragment();

const generateTemplate = function (generateArrayData){
  generateArrayData.forEach(({author,offer}) => {
    const cloneTemplate = templateCard.cloneNode(true);
    const features = cloneTemplate.querySelector('.popup__features').querySelectorAll('.popup__feature');

    if (author.avatar) {
      cloneTemplate.querySelector('.popup__avatar').src = author.avatar;
    } else {cloneTemplate.querySelector('.popup__avatar').remove();}

    if(offer.title) {
      cloneTemplate.querySelector('.popup__title').textContent = offer.title;
    } else {cloneTemplate.querySelector('.popup__title').remove();}

    if(offer.adress) {
      cloneTemplate.querySelector('.popup__text--address').textContent = offer.adress;
    } else {cloneTemplate.querySelector('.popup__text--address').remove();}

    if(offer.price) {
      cloneTemplate.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь `;
    } else {cloneTemplate.querySelector('.popup__text--price').remove();}

    if(type[offer.type]) {
      cloneTemplate.querySelector('.popup__type').textContent = type[offer.type];
    } else {cloneTemplate.querySelector('.popup__type').remove();}

    cloneTemplate.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guest} гостей`;
    cloneTemplate.querySelector('.popup__text--time').textContent= `Заезд после ${offer.checkin} выезд до ${offer.checkout}`;


    if (offer.features) {
      features.forEach((value) => {
        const isNecessary = offer.features.some((element) => value.classList.contains(`popup__feature--${element}`));

        if (!isNecessary) {
          value.remove();
        }
      });
    }
    else {cloneTemplate.querySelector('.popup__features').remove();
    }

    cloneTemplate.querySelector('.popup__description').textContent = offer.description;

    offer.photos.forEach((photo) => {
      const elementPhoto = cloneTemplate.querySelector('.popup__photo').cloneNode(true);
      elementPhoto.src = photo;
      cloneTemplate.querySelector('.popup__photos').append(elementPhoto);
    });
    cloneTemplate.querySelector('.popup__photo').remove(); //Если данный код удалить, то первым фото будет undefind

    fragment.append(cloneTemplate);
  });
  mapCanvas.append(fragment);
};

export default generateTemplate;
