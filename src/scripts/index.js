import "../styles/styles.css"

import { staticContentCreator } from "./staticContentCreator";
import { initializer } from "./initializer";

staticContentCreator();
initializer();

navigator.serviceWorker.register('service-worker.js');