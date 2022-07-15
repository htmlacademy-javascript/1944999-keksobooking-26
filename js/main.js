import generateArrayData from './data.js';
import generateTemplate from './generate-template.js';
import { disablingMap,enabledMap } from './toggle-status-map.js';

generateTemplate(generateArrayData(10));

enabledMap ();
disablingMap();

