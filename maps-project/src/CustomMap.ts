export interface Mappable {
	location : {
		lat: number;
		log: number;
	}
	markerContent(): string;
	color: string;
}

export class CustomClass {
	private googleMaps: google.maps.Map;

	constructor(mapId: string) {
		this.googleMaps = new google.maps.Map(document.getElementById(mapId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}

	addMarker(
		model: Mappable,
		ops?: Omit<google.maps.MarkerOptions, "map" | "position">
	): void {
		const marker = new google.maps.Marker({
			map: this.googleMaps,
			position: {
				lat: model.location.lat,
				lng: model.location.log,
			},
			...ops,
		});

		marker.addListener("click", () => {
			const infoWindow = new google.maps.InfoWindow({ content: model.markerContent() });

			infoWindow.open(this.googleMaps, marker);
		});

	}
}
