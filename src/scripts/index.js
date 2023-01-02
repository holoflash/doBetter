import '../styles/styles.css'

import { staticContentCreator } from "./header";
import { pageCreator } from "./domManipulation";


//Create header and area to attach new pages to
staticContentCreator();

pageCreator('Today', 'color1');
pageCreator('Tomorrow', 'color2');
pageCreator('Someday', 'color3');

