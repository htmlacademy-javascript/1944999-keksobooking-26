
import { disablingMap,enabledMap } from './toggle-status-map.js';
import generateArrayData from './data.js';
import generateTemplate from './generate-template.js';

const inputeAddress = document.querySelector('#address');
const formFilter = document.querySelector('.map__filters');
const inputeGuests = formFilter.querySelector('#housing-guests');
const inputeRooms = formFilter.querySelector('#housing-rooms');
const inputePrice = formFilter.querySelector('#housing-price');
const inputeType = formFilter.querySelector('#housing-type');
const inputeFeatures = formFilter.querySelector('#housing-features');
const defaultCoordinates =
{
  lat: 35.658553299865794,
  lng:  139.77657171642844,
  zoom: 12
};

disablingMap();

const map = L.map('map-canvas')
  .on('load', () => {
    enabledMap ();
  })
  .setView({
    lat: defaultCoordinates.lat,
    lng:  defaultCoordinates.lng
  },defaultCoordinates.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon ({
  iconUrl:'./img/main-pin.svg',
  iconSize:[52,52],
  iconAnchor:[26,52]
});

const marker = L.marker(
  {
    lat: defaultCoordinates.lat,
    lng:  defaultCoordinates.lng
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
).addTo(map);

const getAdress = () => {
  inputeAddress.value =`Широта ${marker.getLatLng().lat.toFixed(5)}, долгота ${marker.getLatLng().lng.toFixed(5)}` ;
};
getAdress();

marker.on('moveend', () => {
  getAdress();
});

const usuallyPinIcon= L.icon(
  {
    iconUrl:'./img/pin.svg',
    iconSize:[40,40],
    iconAnchor:[20,40]
  }
);

const infoNotifications = generateArrayData(10);
const popupsFragment = generateTemplate(infoNotifications);


const showMarkers =  (infoNotification,popup ) => {
  for (let i=0; i <infoNotification.length; i++){
    L.marker(
      {
        lat: infoNotification[i].offer.adress.lat,
        lng:  infoNotification[i].offer.adress.lng,
      },
      {
        icon:usuallyPinIcon
      })
      .bindPopup(popup.children[i])
      .addTo(markerGroup);
  }
};

showMarkers(infoNotifications,popupsFragment);

formFilter.addEventListener('change', () => {
  const collectionFeatures = inputeFeatures.querySelectorAll('input:checked');
  markerGroup.clearLayers();

  const filteredInfoNotifications = infoNotifications
    .filter((infoNotification) =>  String(infoNotification.offer.guest) <= inputeGuests.value || inputeGuests.value ==='any')
    .filter((infoNotification) => String(infoNotification.offer.rooms) === inputeRooms.value || inputeRooms.value ==='any')
    .filter((infoNotification) => {
      if (inputePrice.value === 'middle'){
        return 10000 <= infoNotification.offer.price && infoNotification.offer.price <= 50000;
      }
      if (inputePrice.value === 'low') {
        return  infoNotification.offer.price <= 10000;
      }
      if (inputePrice.value === 'hight'){
        return 50000 <= infoNotification.offer.price;
      }
      return true;
    })
    .filter((infoNotification) => infoNotification.offer.type === inputeType.value || inputeType.value ==='any'
    )
    .filter((infoNotification) => {
      if (collectionFeatures.length !== 0){
        for (let i=0; i<collectionFeatures.length;i++){
          if (infoNotification.offer.features.includes(collectionFeatures[i].value)=== false) {
            return false;
          }
        }
        return true;
      }

      else {return true;}
    });

  const filteredPopups = generateTemplate(filteredInfoNotifications);

  showMarkers(filteredInfoNotifications,filteredPopups);
});

export {map,marker,showMarkers,infoNotifications,popupsFragment,defaultCoordinates,getAdress};
