/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();

new google.maps.Map(document.getElementById("maps"), {
	zoom: 1,
	center: {
		lat: user.location.lat,
		lng: user.location.log,
	},
});
