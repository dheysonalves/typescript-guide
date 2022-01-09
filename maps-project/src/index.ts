/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { CustomClass} from './CustomMap';

const user = new User();
const company = new Company();

const customMap = new CustomClass('maps');

// TODO Add property to create multiple instances.
customMap.addMarker(user);
customMap.addMarker(company);

