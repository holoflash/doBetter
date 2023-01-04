import '../styles/styles.css'

import { staticContentCreator } from "./staticContentCreator";
import { variableContentCreator } from "./variableContentCreator";

staticContentCreator();

variableContentCreator('Today', 'color1');
variableContentCreator('Tomorrow', 'color2');
variableContentCreator('Someday', 'color3');
