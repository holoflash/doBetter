import '../styles/styles.css'

import { staticContentCreator } from "./staticContentCreator";
import { variableContentCreator } from "./variableContentCreator";
import { retrieveFromLocalStorage } from './taskManager';

staticContentCreator();

variableContentCreator('Today', 'color1');
variableContentCreator('Tomorrow', 'color2');
variableContentCreator('Someday', 'color3');

retrieveFromLocalStorage();

