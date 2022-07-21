//Зависимость количества комнат вместимость и наоборот.
const addictionRoomСapacity = {
  '1': ['1'],
  '2': ['1','2'],
  '3': ['1', '2', '3'],
  '100': ['0']
};

const formNotice = document.querySelector('.ad-form');
const numberRooms = formNotice.querySelector('#room_number');
const numberCapacity = formNotice.querySelector('#capacity');
const collectionCapacitys =  numberCapacity.children;

const validateRooms = () => {
  const defaultNumberCapacity = addictionRoomСapacity[numberRooms.value];
  return defaultNumberCapacity.some((element) => element === String(numberCapacity.value))
};


const getMessageCapacity = () => {
  let sentence = '';
  const valuesNumbersCapacitys = addictionRoomСapacity[numberRooms.value];

  const textsCapacitys = Array.from(collectionCapacitys)
    .map((option) => {
      if (valuesNumbersCapacitys.some((element) => String(element) === String(option.value)))
      { return option.textContent;}
    })
    .reverse()
    .filter((element) => element !== undefined);

  if (textsCapacitys.length === 1)
  {
    sentence += ` ${textsCapacitys[0]}`;
  }

  else {
    sentence = `для ${textsCapacitys.join(', ').replaceAll('для', '')}`;
  }

  return sentence;
};

const getErrorMessageNumberRooms= () => {
  return `${Array.from(numberRooms.options).filter((option) => option.selected)[0].textContent} ${getMessageCapacity()}.`;
};

export {numberRooms,validateRooms,getErrorMessageNumberRooms,numberCapacity};

