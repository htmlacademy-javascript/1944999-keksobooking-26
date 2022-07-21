import generateArrayData from './data.js';
import generateTemplate from './generate-template.js';
import synchronTime from './time-in-out.js';
import { disablingMap,enabledMap } from './toggle-status-map.js';
import submitForm from './validate-form.js';


generateTemplate(generateArrayData(10));
synchronTime();
submitForm();
disablingMap();
enabledMap (); //Активное состояние. Загрузка и успешная инициализация карты в след разделах же))
//А поле адреса заполняется с координат метки которая двигается на карте, вроде так понял
