import generateArrayData from './data.js';
import generateTemplate from './generate-template.js';
import synchronTime from './time-in-out.js';
import { disablingMap,enabledMap } from './toggle-status-map.js';
import submitForm from './validate-form.js';


generateTemplate(generateArrayData(10));
synchronTime();
submitForm();
disablingMap();
enabledMap ();
/*«Тип жилья» — выбор опции меняет атрибуты минимального значения и плейсхолдера поля «Цена за ночь». На основе атрибута с минимальным значением должна отрабатывать валидация поля «Цена за ночь».
«Время заезда», «Время выезда» — выбор опции одного поля автоматически изменят значение другого.*/
//Сделано по тз
