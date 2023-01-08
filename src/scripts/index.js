import "../styles/styles.css"

import { staticContentCreator } from "./staticContentCreator";
import { initializer } from "./initializer";
import { variableContentCreator } from "./variableContentCreator";

staticContentCreator();
initializer();

const storedObject = JSON.parse(localStorage.getItem('Readme'));

variableContentCreator(storedObject.name, storedObject.color);

