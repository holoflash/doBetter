import "../styles/styles.css"

import { staticContentCreator } from "./staticContentCreator";
import { initializer } from "./initializer";
import { Page, createPage } from "./localStorage";
import { variableContentCreator } from "./variableContentCreator";

staticContentCreator();
initializer();
