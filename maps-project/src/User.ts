import faker from 'faker-br';

export class User {
	name: string;
	location: {
		lat: number;
		log: number;
	};

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			log: parseFloat(faker.address.longitude()),
		};
	}
}
